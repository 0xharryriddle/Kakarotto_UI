import { Address, TransactionReceipt } from "viem";
import {
  useSimulateContract,
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
    isLoadingReceipt || isLoadingPrepare || isLoadingWrite || isFetchingReceipt;
  const isError = isErrorPrepare || isErrorReceipt || isErrorWrite;
  const error = errorWrite || errorTransaction || errorPrepare;

  return {
    error,
    isLoading,
    isSuccess,
    isError,
    onCancelOrder,
    refetch,
  };
};
