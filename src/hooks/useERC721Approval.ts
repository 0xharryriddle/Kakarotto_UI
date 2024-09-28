import { Address, erc721Abi, TransactionReceipt } from "viem";
import {
  useSimulateContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { useWriteContractCallbacks } from "./useWriteContractCallbacks";

type Props = {
  chainId?: number;
  address?: Address;
  spender: Address;
  tokenId: bigint;
  enabled?: boolean;
  onSuccess?: (data: TransactionReceipt) => void;
  onSettled?: (data?: TransactionReceipt) => void;
  onError?: (error?: Error) => void;
};

export const useERC721Approval = ({
  chainId,
  address,
  spender,
  tokenId,
  enabled,
  onSuccess,
  onSettled,
  onError,
}: Props) => {
  const {
    data: config,
    refetch,
    isLoading: isLoadingPrepare,
    isError: isErrorPrepare,
    error: errorPrepare,
  } = useSimulateContract({
    chainId,
    address,
    abi: erc721Abi,
    args: [spender, tokenId],
    functionName: "approve",
    query: { enabled: enabled && !!chainId && !!address, retry: false },
  });

  const {
    writeContractAsync,
    data: transactionHash,
    isPending: isLoadingWrite,
    isError: isErrorWrite,
    error: errorWrite,
  } = useWriteContract();

  const {
    isFetching: isFetchingReceipt,
    isLoading: isLoadingReceipt,
    data: receipt,
    isFetched,
    isSuccess,
    isError: isErrorReceipt,
    error: errorTransaction,
  } = useWaitForTransactionReceipt({
    hash: transactionHash,
    query: {
      enabled,
    },
  });

  useWriteContractCallbacks({
    receipt,
    isFetched,
    onSuccess,
    onSettled,
    onError,
    error: errorWrite,
  });

  const onERC721Approval = async () => {
    if (config && enabled) {
      try {
        return await writeContractAsync(config.request);
      } catch (error) {
        onError?.(
          errorWrite instanceof Error
            ? errorWrite
            : new Error("Something went wrong")
        );
      }
    }
    return;
  };

  const isLoading =
    isLoadingReceipt || isLoadingPrepare || isLoadingWrite || isFetchingReceipt;
  const isError = isErrorPrepare || isErrorReceipt || isErrorWrite;
  const error = errorWrite || errorTransaction || errorPrepare;

  return {
    error,
    isLoading,
    isSuccess,
    isError,
    onERC721Approval,
    refetch,
  };
};
