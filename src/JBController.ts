import { ponder } from "ponder:registry";
import {
  mintTokensEvent,
  project,
  sendReservedTokensToSplitEvent,
  sendReservedTokensToSplitsEvent,
} from "ponder:schema";
import { getEventParams } from "./util/getEventParams";
import { parseProjectMetadata } from "./util/projectMetadata";
import { insertActivityEvent } from "./util/activityEvent";

ponder.on("JBController:MintTokens", async ({ event, context }) => {
  try {
    await context.db
      .insert(mintTokensEvent)
      .values({
        ...getEventParams({ event, context }),
        projectId: Number(event.args.projectId),
        beneficiary: event.args.beneficiary,
        beneficiaryTokenCount: event.args.beneficiaryTokenCount,
        memo: event.args.memo,
        reservedPercent: event.args.reservedPercent,
        tokenCount: event.args.tokenCount,
      })
      .then(({ id }) =>
        insertActivityEvent("mintTokensEvent", {
          id,
          event,
          context,
          projectId: event.args.projectId,
        })
      );
  } catch (e) {
    console.error("JBController:MintTokens", e);
  }
});

ponder.on("JBController:LaunchProject", async ({ event, context }) => {
  // Emitted after JBProjects:Create. This is only needed to set deployer + metadataUri
  // If the controller emits a launchProject event, the project launch tx was called via the JBController, and we want to prefer its `caller` param over any existing value
  const { projectId: _projectId, caller, projectUri } = event.args;
  const projectId = Number(_projectId);
  const chainId = context.network.chainId;
  try {
    const metadata = await parseProjectMetadata(projectUri);

    await context.db.update(project, { chainId, projectId }).set({
      deployer: caller,
      metadataUri: projectUri,
      metadata,
    });
  } catch (e) {
    console.error("JBController:LaunchProject", e, event.transaction.hash);
  }
});

ponder.on("JBController:SetUri", async ({ event, context }) => {
  try {
    const { projectId: _projectId, uri } = event.args;
    const projectId = Number(_projectId);
    const chainId = context.network.chainId;

    const metadata = await parseProjectMetadata(uri);

    await context.db
      .update(project, { chainId, projectId })
      .set({ metadataUri: uri, metadata });
  } catch (e) {
    console.error("JBController:SetUri", e, event.transaction.hash);
  }
});

ponder.on(
  "JBController:SendReservedTokensToSplits",
  async ({ event, context }) => {
    try {
      const {
        projectId,
        tokenCount,
        leftoverAmount,
        owner,
        rulesetId,
        rulesetCycleNumber,
      } = event.args;

      await context.db
        .insert(sendReservedTokensToSplitsEvent)
        .values({
          ...getEventParams({ event, context }),
          projectId: Number(projectId),
          from: event.transaction.from,
          tokenCount: tokenCount,
          leftoverAmount: leftoverAmount,
          owner: owner,
          rulesetId: Number(rulesetId),
          rulesetCycleNumber: Number(rulesetCycleNumber),
        })
        .then(({ id }) =>
          insertActivityEvent("sendReservedTokensToSplitsEvent", {
            id,
            event,
            context,
            projectId,
          })
        );
    } catch (e) {
      console.error("JBController:SendReservedTokensToSplits", e);
    }
  }
);

ponder.on(
  "JBController:SendReservedTokensToSplit",
  async ({ event, context }) => {
    try {
      const { split, rulesetId, projectId, tokenCount, groupId } = event.args;

      await context.db
        .insert(sendReservedTokensToSplitEvent)
        .values({
          ...getEventParams({ event, context }),
          projectId: Number(projectId),
          rulesetId: Number(rulesetId),
          tokenCount,
          groupId,
          beneficiary: split.beneficiary,
          hook: split.hook,
          lockedUntil: split.lockedUntil,
          percent: split.percent,
          preferAddToBalance: split.preferAddToBalance,
          splitProjectId: Number(split.projectId),
        })
        .then(({ id }) =>
          insertActivityEvent("sendReservedTokensToSplitEvent", {
            id,
            event,
            context,
            projectId,
          })
        );
    } catch (e) {
      console.error("JBController:SendReservedTokensToSplit", e);
    }
  }
);
