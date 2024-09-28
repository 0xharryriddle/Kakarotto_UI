import getABI from "@/contracts/utils/getAbi.util";
import { Address } from "viem";
import { useReadContract } from "wagmi";

type Props = {
  address?: Address;
  chainId?: number;
  enabled?: boolean;
};

export const useFeePercentageMarketplace = ({
  address,
  chainId,
  enabled,
}: Props) => {
  const isEnabled = !!address && !!chainId && !!enabled;

  const {
    data: feePercentage,
    isLoading,
    isFetching,
    isError,
    isSuccess,
    refetch: feePercentageRefetch,
  } = useReadContract({
    chainId,
    address: enabled ? address : undefined,
    args: isEnabled ? [] : undefined,
    abi: getABI("KakarottoMarketplace"),
    functionName: "feePercentage",
    query: { enabled: isEnabled },
  });

  const refetch = enabled ? feePercentageRefetch : undefined;

  return {
    feePercentage,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    refetch,
  };
};
