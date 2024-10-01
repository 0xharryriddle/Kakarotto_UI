import { Address, TransactionReceipt } from "viem";
import {
  useSimulateContract,
  useTransactionConfirmations,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { useWriteContractCallbacks } from "./useWriteContractCallbacks";
import getABI from "@/contracts/utils/getAbi.util";
import { getKakarottoMarketplaceAddress } from "@/contracts/utils/getAddress.util";

type Props = {
  chainId?: number;
  tokenAddress: Address;
  tokenId: bigint;
  enabled?: boolean;
  onSuccess?: (data: TransactionReceipt) => void;
  onSettled?: (data?: TransactionReceipt) => void;
  onError?: (error?: Error) => void;
};

export const useCancelOrder = ({
  chainId,
  tokenAddress,
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
    address: getKakarottoMarketplaceAddress(chainId),
    abi: getABI("KakarottoMarketplace"),
    args: [tokenAddress, tokenId],
    functionName: "cancelOrder",
    query: { enabled: enabled && !!chainId, retry: false },
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

  const {
    isFetching: isFetchingConfirmation,
    // isPending: isPendingConfirmation,
    isLoading: isLoadingConfirmation,
    isFetched: isFetchedConfirmation,
    isSuccess: isSuccessConfirmation,
    isError: isErrorConfirmation,
    error: errorConfirmation,
  } = useTransactionConfirmations({
    hash: transactionHash,
    query: {
      enabled,
    },
  });

  useWriteContractCallbacks({
    receipt,
    isFetched,
    isFetchedConfirmation,
    isSuccessConfirmation,
    onSuccess: (data: TransactionReceipt, isConfirmed: boolean) => {
      if (isConfirmed) {
        console.log("Order creation confirmed");
        onSuccess?.(data);
      } else {
        console.log(
          "Order creation transaction received, waiting for confirmation"
        );
      }
    },
    onSettled: (data?: TransactionReceipt, isConfirmed?: boolean) => {
      if (isConfirmed) {
        console.log("Order creation process completed");
        onSettled?.(data);
      }
    },
    onError,
    error: errorWrite,
  });

  const onCancelOrder = async () => {
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
    isLoadingReceipt ||
    isLoadingConfirmation ||
    isLoadingPrepare ||
    isLoadingWrite ||
    isFetchingReceipt ||
    isFetchingConfirmation;
  const isError =
    isErrorPrepare || isErrorReceipt || isErrorWrite || isErrorConfirmation;
  const error =
    errorWrite || errorTransaction || errorPrepare || errorConfirmation;

  return {
    error,
    isLoading,
    isSuccess,
    isSuccessConfirmation,
    isError,
    onCancelOrder,
    refetch,
  };
};
