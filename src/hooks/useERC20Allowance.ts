import { Address, erc20Abi } from "viem"
import { useAccount, useReadContract } from "wagmi";

type Props = {
    tokenAddress?: Address;
    allowedAddress?: Address;
    enabled?: boolean;
    chainId?: number; 
}

export const useERC20Allowance = ({
    tokenAddress,
    allowedAddress,
    enabled,
    chainId,
}: Props) => {
    const {address} = useAccount();
    const isEnabled = !!address && !!allowedAddress && !!enabled && !!chainId;

    const {
        data: allowance,
        isLoading,
        isFetching,
        isError,
        isSuccess,
        refetch: refetchAllowance,
    } = useReadContract({
        chainId,
        address: enabled ? tokenAddress : undefined,
        args: isEnabled ? [address, allowedAddress] : undefined,
        abi: erc20Abi,
        functionName: 'allowance',
        query: {enabled: isEnabled},
    });

    const refetch = enabled ? refetchAllowance : undefined;

    return {
        isLoading,
        isFetching,
        isSuccess,
        isError,
        allowance,
        refetch
    };
}