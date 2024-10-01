import { Address, TransactionReceipt } from "viem";
import {
  useSimulateContract,
  useTransactionConfirmations,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { useWriteContractCallbacks } from "./useWriteContractCallbacks";
import { getKakarottoMarketplaceAddress } from "@/contracts/utils/getAddress.util";
import getABI from "@/contracts/utils/getAbi.util";

type Props = {
  chainId?: number;
  tokenAddress: Address;
  tokenId: bigint;
  priceInWei: bigint;
  expiresAt: bigint;
  enabled?: boolean;
  onSuccess?: (data: TransactionReceipt) => void;
  onSettled?: (data?: TransactionReceipt) => void;
  onError?: (error?: Error) => void;
};

export const useCreateOrder = ({
  chainId,
  tokenAddress,
  tokenId,
  priceInWei,
  expiresAt,
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
    args: [tokenAddress, tokenId, priceInWei, expiresAt],
    functionName: "createOrder",
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
    isLoading: isLoadingConfirmation,
    // isPending: isPendingConfirmation,
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

  const onCreateOrder = async () => {
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
    onCreateOrder,
    refetch,
  };
};
