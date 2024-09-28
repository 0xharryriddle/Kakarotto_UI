import { Address, erc721Abi } from "viem";
import { useReadContract } from "wagmi";

type Props = {
  tokenAddress?: Address;
  tokenId?: bigint;
  enabled?: boolean;
  chainId?: number;
};

export const useERC721Allowance = ({
  tokenAddress,
  tokenId,
  enabled,
  chainId,
}: Props) => {
  const isEnabled =
    !!tokenAddress &&
    (!!tokenId || tokenId == BigInt(0)) &&
    !!chainId &&
    !!enabled;

  const {
    data: approvedAddress,
    isLoading,
    isFetching,
    isError,
    isSuccess,
    refetch: refetchApproved,
  } = useReadContract({
    chainId,
    address: enabled ? tokenAddress : undefined,
    args: isEnabled ? [tokenId] : undefined,
    abi: erc721Abi,
    functionName: "getApproved",
    query: { enabled: isEnabled },
  });

  const refetch = enabled ? refetchApproved : undefined;

  return {
    isLoading,
    isFetching,
    isSuccess,
    isError,
    approvedAddress,
    refetch,
  };
};
