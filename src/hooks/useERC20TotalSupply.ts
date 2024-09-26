import { Address, erc20Abi } from "viem";
import { useReadContract } from "wagmi";

type Props = {
  chainId?: number;
  address?: Address;
  enabled?: boolean;
};

export const useERC20TotalSupply = ({ chainId, address, enabled }: Props) => {
  const isEnabled = !!chainId && !!enabled;

  const {
    data: totalSupply,
    isLoading,
    isFetching,
    isError,
    isSuccess,
    refetch: refetchTotalSupply,
  } = useReadContract({
    address,
    abi: erc20Abi,
    functionName: "totalSupply",
  });

  const refetch = enabled ? refetchTotalSupply : undefined;

  return {
    isLoading,
    isFetching,
    isSuccess,
    isError,
    totalSupply,
    refetch,
  };
};
