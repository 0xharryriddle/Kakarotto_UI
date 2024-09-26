import { Address, erc721Abi } from "viem"
import { useAccount, useReadContract } from "wagmi";

type Props = {
    tokenAddress?: Address;
    enabled?: boolean;
    chainId?: number;
    operator?: Address;
}

export const useERC721AllowanceAll = ({
    tokenAddress,
    enabled,
    chainId,
    operator
}: Props) => {
    const {address} = useAccount();
    const isEnabled = !!tokenAddress && !!chainId && !!enabled && !!address && !!operator;

    const {
        data: isApprovedAll,
        isLoading,
        isFetching,
        isError,
        isSuccess,
        refetch: refetchApprovedAll
    } = useReadContract({
        chainId,
        address: enabled ? tokenAddress : undefined,
        args: isEnabled ? [address, operator] : undefined,
        abi: erc721Abi,
        functionName: 'isApprovedForAll',
        query: {enabled: isEnabled}
    });

    const refetch = enabled ? refetchApprovedAll : undefined;

    return {
        isLoading,
        isFetching,
        isSuccess,
        isError,
        isApprovedAll,
        refetch
    }
}