import { Address, erc20Abi, TransactionReceipt } from "viem";
import { useSimulateContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { useWriteContractCallbacks } from "./useWriteContractCallbacks";

type Props = {
    chainId?: number;
    address?: Address;
    spender: Address;
    amount: bigint;
    enabled?: boolean;
    onSuccess?: (data: TransactionReceipt) => void;
    onSettled?: (data?: TransactionReceipt) => void;
    onError?: (error?: Error) => void;
}

export const useERC20Approval = ({
    chainId, 
    address, 
    spender, 
    amount, 
    enabled, 
    onSuccess, 
    onSettled, 
    onError
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
        abi: erc20Abi,
        args: [spender, amount],
        functionName: 'approve',
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

    const onERC20Approval = async () => {
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
        onERC20Approval,
        refetch
    }
}