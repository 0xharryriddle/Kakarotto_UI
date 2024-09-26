import { Address, TransactionReceipt } from "viem";
import {
  useSimulateContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { useWriteContractCallbacks } from "./useWriteContractCallbacks";

type Props = {
  chainId?: number;
  address: Address;
  abi: any;
  tokenAddress: Address;
  tokenId: bigint;
  price: bigint;
  duration: bigint;
  enabled?: boolean;
  onSuccess?: (data: TransactionReceipt) => void;
  onSettled?: (data?: TransactionReceipt) => void;
  onError?: (error?: Error) => void;
};

export const useBidOrder = ({
  chainId,
  address,
  abi,
  tokenAddress,
  tokenId,
  price,
  duration,
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
    abi,
    args: [tokenAddress, tokenId, price, duration],
    functionName: "placeBid",
    query: { enabled: enabled && !!chainId },
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

  const onBidOrder = async () => {
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
    onBidOrder,
    refetch,
  };
};
