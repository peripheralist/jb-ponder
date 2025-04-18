import { ponder } from "ponder:registry";
import {
  addToBalanceEvent,
  cashOutTokensEvent,
  participant,
  payEvent,
  project,
  sendPayoutsEvent,
  sendPayoutToSplitEvent,
  useAllowanceEvent,
  wallet,
} from "ponder:schema";
import { getEventParams } from "./util/getEventParams";
import { getLatestPayEvent } from "./util/getLatestPayEvent";
import { usdPriceForEth } from "./util/usdPrice";
import { handleTrendingPayment } from "./util/trending";
import { insertActivityEvent } from "./util/activityEvent";

ponder.on("JBMultiTerminal:AddToBalance", async ({ event, context }) => {
  try {
    const { projectId, amount, memo, metadata, returnedFees } = event.args;

    await Promise.all([
      context.db
        .update(project, {
          chainId: context.network.chainId,
          projectId: Number(projectId),
        })
        .set((p) => ({
          balance: p.balance + amount,
        })),

      context.db
        .insert(addToBalanceEvent)
        .values({
          ...getEventParams({ event, context }),
          projectId: Number(projectId),
          amount,
          memo,
          metadata,
          returnedFees,
        })
        .then(({ id }) =>
          insertActivityEvent("addToBalanceEvent", {
            id,
            event,
            context,
            projectId,
          })
        ),
    ]);
  } catch (e) {
    console.error("JBMultiTerminal:AddToBalance", e);
  }
});

ponder.on("JBMultiTerminal:SendPayouts", async ({ event, context }) => {
  try {
    const {
      projectId: _projectId,
      amount,
      amountPaidOut,
      netLeftoverPayoutAmount,
      fee,
      rulesetCycleNumber,
      rulesetId,
    } = event.args;

    const projectId = Number(_projectId);

    await Promise.all([
      // update project
      context.db
        .update(project, {
          chainId: context.network.chainId,
          projectId: projectId,
        })
        .set((p) => ({
          balance: p.balance - amountPaidOut,
        })),

      // create sendPayoutsEvent
      context.db
        .insert(sendPayoutsEvent)
        .values({
          ...getEventParams({ event, context }),
          projectId: Number(projectId),
          amount,
          amountUsd: await usdPriceForEth({
            context,
            projectId: _projectId,
            ethAmount: amount,
          }),
          amountPaidOut,
          amountPaidOutUsd: await usdPriceForEth({
            context,
            projectId: _projectId,
            ethAmount: amountPaidOut,
          }),
          netLeftoverPayoutAmount,
          fee,
          feeUsd: await usdPriceForEth({
            context,
            projectId: _projectId,
            ethAmount: fee,
          }),
          rulesetId: Number(rulesetId),
          rulesetCycleNumber: Number(rulesetCycleNumber),
        })
        .then(({ id }) =>
          insertActivityEvent("sendPayoutsEvent", {
            id,
            event,
            context,
            projectId,
          })
        ),
    ]);
  } catch (e) {
    console.error("JBMultiTerminal:SendPayouts", e);
  }
});

ponder.on("JBMultiTerminal:SendPayoutToSplit", async ({ event, context }) => {
  try {
    const {
      projectId: _projectId,
      amount,
      netAmount,
      rulesetId,
      split,
      group,
    } = event.args;
    const projectId = Number(_projectId);

    await context.db
      .insert(sendPayoutToSplitEvent)
      .values({
        ...getEventParams({ event, context }),
        projectId: projectId,
        amount,
        amountUsd: await usdPriceForEth({
          context,
          projectId: _projectId,
          ethAmount: amount,
        }),
        netAmount,
        rulesetId: Number(rulesetId),
        group,
        beneficiary: split.beneficiary,
        lockedUntil: split.lockedUntil,
        hook: split.hook,
        percent: split.percent,
        preferAddToBalance: split.preferAddToBalance,
        splitProjectId: Number(split.projectId),
      })
      .then(({ id }) =>
        insertActivityEvent("sendPayoutToSplitEvent", {
          id,
          event,
          context,
          projectId,
        })
      );

    // DistributeToPayoutSplitEvent always occurs right after the Pay event, in the case of split payments to projects
    if (split.projectId > 0) {
      const latestPayEvent = await getLatestPayEvent({ context });

      if (latestPayEvent?.projectId !== Number(split.projectId)) {
        throw new Error("Mismatched latest pay event");
      }

      await context.db.update(payEvent, latestPayEvent).set({
        distributionFromProjectId: projectId,
      });
    }
  } catch (e) {
    console.error("JBMultiTerminal:SendPayoutToSplit", e);
  }
});

ponder.on("JBMultiTerminal:CashOutTokens", async ({ event, context }) => {
  try {
    const {
      projectId: _projectId,
      cashOutCount,
      beneficiary,
      cashOutTaxRate,
      holder,
      reclaimAmount,
      metadata,
      rulesetCycleNumber,
      rulesetId,
    } = event.args;
    const { chainId } = context.network;

    const projectId = Number(_projectId);

    const reclaimAmountUsd = await usdPriceForEth({
      context,
      projectId: _projectId,
      ethAmount: reclaimAmount,
    });

    await Promise.all([
      // update project
      context.db
        .update(project, {
          projectId,
          chainId,
        })
        .set((p) => ({
          redeemCount: p.redeemCount + 1,
          redeemVolume: p.redeemVolume + reclaimAmount,
          redeemVolumeUsd: p.redeemVolumeUsd + reclaimAmountUsd,
          balance: p.balance - reclaimAmount,
        })),

      // create cashOutTokensEvent
      context.db
        .insert(cashOutTokensEvent)
        .values({
          ...getEventParams({ event, context }),
          projectId,
          cashOutCount,
          beneficiary,
          holder,
          reclaimAmount,
          reclaimAmountUsd,
          metadata,
          cashOutTaxRate,
          rulesetCycleNumber,
          rulesetId,
        })
        .then(({ id }) =>
          insertActivityEvent("cashOutTokensEvent", {
            id,
            event,
            context,
            projectId,
          })
        ),
    ]);
  } catch (e) {
    console.error("JBMultiTerminal:CashOutTokens", e);
  }
});

ponder.on("JBMultiTerminal:UseAllowance", async ({ event, context }) => {
  try {
    const {
      projectId,
      amount,
      amountPaidOut,
      netAmountPaidOut,
      beneficiary,
      feeBeneficiary,
      memo,
      rulesetCycleNumber,
      rulesetId,
    } = event.args;

    await Promise.all([
      // update project
      context.db
        .update(project, {
          chainId: context.network.chainId,
          projectId: Number(projectId),
        })
        .set((p) => ({
          balance: p.balance - event.args.amountPaidOut,
        })),

      // create useAllowanceEvent
      context.db
        .insert(useAllowanceEvent)
        .values({
          ...getEventParams({ event, context }),
          projectId: Number(projectId),
          amount,
          amountPaidOut,
          netAmountPaidOut,
          beneficiary,
          feeBeneficiary,
          memo,
          rulesetCycleNumber: Number(rulesetCycleNumber),
          rulesetId: Number(rulesetId),
        })
        .then(({ id }) =>
          insertActivityEvent("useAllowanceEvent", {
            id,
            event,
            context,
            projectId,
          })
        ),
    ]);
  } catch (e) {
    console.error("JBMultiTerminal:UseAllowance", e);
  }
});

ponder.on("JBMultiTerminal:Pay", async ({ event, context }) => {
  try {
    const {
      projectId: _projectId,
      amount,
      beneficiary,
      memo,
      newlyIssuedTokenCount,
      payer,
    } = event.args;
    const { chainId } = context.network;

    const projectId = Number(_projectId);

    const payerParticipant = await context.db.find(participant, {
      address: payer,
      chainId,
      projectId,
    });

    const amountUsd = await usdPriceForEth({
      context,
      projectId: _projectId,
      ethAmount: amount,
    });

    await Promise.all([
      // update project
      context.db
        .update(project, {
          projectId,
          chainId,
        })
        .set((p) => ({
          balance: p.balance + amount,
          volume: p.volume + amount,
          volumeUsd: p.volumeUsd + amountUsd,
          contributorsCount: p.contributorsCount + (payerParticipant ? 0 : 1),
          paymentsCount: p.paymentsCount + 1,
        })),

      // create pay event
      context.db
        .insert(payEvent)
        .values({
          ...getEventParams({ event, context }),
          projectId,
          amount,
          amountUsd,
          beneficiary,
          memo,
          newlyIssuedTokenCount,
        })
        .then(({ id }) =>
          insertActivityEvent("payEvent", { id, event, context, projectId })
        ),

      // insert/update payer participant
      context.db
        .insert(participant)
        .values({
          address: payer,
          chainId,
          projectId,
          volume: amount,
          volumeUsd: amountUsd,
          lastPaidTimestamp: Number(event.block.timestamp),
        })
        .onConflictDoUpdate((p) => ({
          volume: p.volume + amount,
          volumeUsd: p.volumeUsd + amountUsd,
          lastPaidTimestamp: Number(event.block.timestamp),
          paymentsCount: p.paymentsCount + 1,
        })),

      // insert/update payer wallet
      context.db
        .insert(wallet)
        .values({
          address: payer,
          volume: amount,
          volumeUsd: amountUsd,
        })
        .onConflictDoUpdate((w) => ({
          volume: w.volume + amount,
          volumeUsd: w.volumeUsd + amountUsd,
        })),
    ]);

    // beneficiary participant/wallet will be handled on token mint

    await handleTrendingPayment(event.block.timestamp, context);
  } catch (error) {
    console.error("JBMultiTerminal:Pay", {
      chain: context.network.chainId,
      tx: event.transaction.hash,
      error,
    });
  }
});

ponder.on("JBMultiTerminal:ProcessFee", async ({ event, context }) => {
  try {
    const latestPayEvent = await getLatestPayEvent({
      context,
    });

    if (latestPayEvent?.projectId !== 1) {
      throw new Error(
        "Latest PayEvent projectId != 1" +
          ` (${latestPayEvent?.projectId}), tx: ${context.network.chainId} ${event.transaction.hash}`
      );
    }

    await context.db
      .update(payEvent, latestPayEvent)
      .set({ feeFromProject: Number(event.args.projectId) });
  } catch (e) {
    console.error("JBMultiTerminal:ProcessFee", e);
  }
});
