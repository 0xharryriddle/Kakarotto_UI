import { TransactionReceipt } from "viem";
import { useSimulateContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { useWriteContractCallbacks } from "./useWriteContractCallbacks";

type Props = {
    chainId: number;
    address: `0x${string}`;
    abi: any;
    args: any[],
    functionName: string;
    enabled?: boolean;
    onSuccess?: (data: TransactionReceipt) => void;
    onSettled?: (data?: TransactionReceipt) => void;
    onError?: (error?: Error) => void;
}

export const useBuyOrder = ({chainId, address, abi, args, functionName, enabled, onSuccess, onSettled, onError}: Props) => {
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
        args,
        functionName,
        query: {enabled: enabled && !!chainId}
    });

    const {
        writeContractAsync,
        data: transactionHash,
        isPending: isLoadingWrite,
        isError: isErrorWrite,
        error: errorWrite
    } = useWriteContract();

    const {
        isFetching: isFetchingReceipt,
        isLoading: isLoadingReceipt,
        data: receipt,
        isFetched,
        isSuccess,
        isError: isErrorReceipt,
        error: errorTransaction
    } = useWaitForTransactionReceipt({
        hash: transactionHash,
        query: {
            enabled,
        }
    });

    useWriteContractCallbacks({
        receipt,
        isFetched,
        onSuccess,
        onSettled,
        onError,
        error: errorWrite,
    });

    const onBuyOrder = async () => {
        if (config && enabled){
            try {
                return await writeContractAsync(config.request);
            } catch (error) {
                onError?.(errorWrite instanceof Error ? errorWrite : new Error('Something went wrong'));
            }
        }
        return;
    }

    const isLoading = isLoadingReceipt || isLoadingPrepare || isLoadingWrite || isFetchingReceipt;
    const isError = isErrorPrepare || isErrorReceipt || isErrorWrite;
    const error = errorWrite || errorTransaction || errorPrepare;

    return {
        error,
        isLoading,
        isSuccess,
        isError,
        onBuyOrder,
        refetch
    }
}