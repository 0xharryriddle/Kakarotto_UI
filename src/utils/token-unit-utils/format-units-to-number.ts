import { formatUnits } from "viem";

export const formatUnitsToNumber = (balance?: bigint, decimal?: number) => {
  return formatUnits(balance || BigInt(0), decimal || 18);
};
