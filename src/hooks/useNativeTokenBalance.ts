import { Address } from "viem";
import { useBalance } from "wagmi";

export const useNativeTokenBalance = (
  { account }: { account?: Address },
  { enabled }: { enabled?: boolean }
) => {
  const isEnabled = !!account && !!enabled;

  const { data, refetch, isLoading, isFetching, isError, isSuccess } =
    useBalance({
      address: account ? account : undefined,
      query: { enabled: isEnabled },
    });

  return {
    data,
    refetch,
    isLoading,
    isFetching,
    isError,
    isSuccess,
  };
};
