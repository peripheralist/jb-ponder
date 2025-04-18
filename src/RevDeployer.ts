import { ponder } from "ponder:registry";
import { autoIssueEvent, storeAutoIssuanceAmountEvent } from "ponder:schema";
import { getEventParams } from "./util/getEventParams";
import { insertActivityEvent } from "./util/activityEvent";

ponder.on("RevDeployer:AutoIssue", async ({ event, context }) => {
  try {
    const { revnetId, beneficiary, count, stageId } = event.args;

    await context.db
      .insert(autoIssueEvent)
      .values({
        ...getEventParams({ event, context }),
        projectId: Number(revnetId),
        beneficiary,
        count,
        stageId,
      })
      .then(({ id }) =>
        insertActivityEvent("autoIssueEvent", {
          id,
          event,
          context,
          projectId: revnetId,
        })
      );
  } catch (e) {
    console.error("RevDeployer:AutoIssue", e);
  }
});

ponder.on("RevDeployer:StoreAutoIssuanceAmount", async ({ event, context }) => {
  try {
    const { revnetId, beneficiary, count, stageId } = event.args;

    await context.db
      .insert(storeAutoIssuanceAmountEvent)
      .values({
        ...getEventParams({ event, context }),
        projectId: Number(revnetId),
        beneficiary,
        count,
        stageId,
      })
      .then(({ id }) =>
        insertActivityEvent("storeAutoIssuanceAmountEvent", {
          id,
          event,
          context,
          projectId: revnetId,
        })
      );
  } catch (e) {
    console.error("RevDeployer:StoreAutoIssuanceAmount", e);
  }
});
