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
  tokenId?: bigint;
  priceInWei: bigint;
  enabled?: boolean;
  onSuccess?: (data: TransactionReceipt) => void;
  onSettled?: (data?: TransactionReceipt) => void;
  onError?: (error?: Error) => void;
};

export const useBuyOrder = ({
  chainId,
  tokenAddress,
  tokenId,
  priceInWei,
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
    args: [tokenAddress, tokenId, priceInWei],
    functionName: "executeOrder",
    query: {
      enabled: enabled && !!chainId && (!!tokenId || tokenId == BigInt(0)),
      retry: false,
    },
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
    onSuccess,
    onSettled,
    onError,
    error: errorWrite,
  });

  const onBuyOrder = async () => {
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
    onBuyOrder,
    refetch,
  };
};
