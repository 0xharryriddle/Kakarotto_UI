import { Address } from "viem";
import { useBalance } from "wagmi";

type Props = {
    tokenAddress?: Address;
    account?: Address;
    enabled?: boolean;
    chainId?: number;
}

export const useFormattedTokenBalance = ({tokenAddress, account, enabled, chainId}: Props) => {
    const isEnabled = !!tokenAddress && !!account && !!enabled && !!chainId;

    const {
        data: tokenBalanceRaw,
        refetch, 
        isLoading,
        isFetching,
        isError,
    } = useBalance({
        chainId,
        address: account ?  account : undefined,
        token: tokenAddress ? tokenAddress : undefined,
        query: { enabled: isEnabled}
    })
    
    return {
        tokenBalanceRaw,
        refetch,
        isLoading,
        isFetching,
        isError
    }
}