import { Address, TransactionReceipt } from "viem";
import {
  useSimulateContract,
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
    isLoadingReceipt || isLoadingPrepare || isLoadingWrite || isFetchingReceipt;
  const isError = isErrorPrepare || isErrorReceipt || isErrorWrite;
  const error = errorWrite || errorTransaction || errorPrepare;

  return {
    error,
    isLoading,
    isSuccess,
    isError,
    onCreateOrder,
    refetch,
  };
};
