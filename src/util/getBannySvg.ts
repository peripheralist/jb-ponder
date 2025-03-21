import { Context } from "ponder:registry";
import { Banny721TokenUriResolverAbi } from "../../abis/Banny721TokenUriResolverAbi";
import { BANNY_RETAIL_HOOK } from "../constants";

export function getBannySvg({
  context,
  tierId,
}: {
  context: Context;
  tierId: bigint;
}) {
  return context.client.readContract({
    abi: Banny721TokenUriResolverAbi,
    address: "0xff80c37a57016eff3d19fb286e9c740ec4537dd3",
    functionName: "svgOf",
    args: [BANNY_RETAIL_HOOK, tierId * BigInt(1000000000), false, false],
  });
}
