import { Address } from "viem";
import { useAccount } from "wagmi";
import { useERC20Allowance } from "./useERC20Allowance";
import { useFormattedTokenBalance } from "./useFormattedTokenBalance";
import { formatUnitsToNumber } from "@/utils/token-unit-utils/format-units-to-number";
import { useNativeTokenBalance } from "./useNativeTokenBalance";
import { ChainToken } from "@/lib/types/chain-token";

type Props = {
  balanceRequired: bigint;
  currencyAddress: Address;
  enabled?: boolean;
  chainId?: number;
  contractToApprove: Address;
  isNativeCurrency: boolean;
  tokenInfo?: ChainToken;
};

const getIsSufficientAllowance = (
  allowanceOwned: bigint | undefined,
  allowanceRequired: bigint
): boolean => {
  return (
    allowanceRequired === BigInt(0) ||
    (!!allowanceOwned && allowanceOwned >= allowanceRequired)
  );
};

export const getIsSufficientBalance = (
  balanceOwned: bigint | undefined,
  balanceRequired: bigint
) => {
  return (
    balanceRequired === BigInt(0) ||
    (!!balanceOwned && balanceOwned >= balanceRequired)
  );
};

export const useIsSufficientTokenBalance = ({
  balanceRequired,
  currencyAddress,
  enabled,
  contractToApprove,
  chainId,
  isNativeCurrency,
  tokenInfo,
}: Props) => {
  const { address } = useAccount();

  const {
    allowance,
    isLoading: isLoadingAllowance,
    isFetching: isFetchingAllowance,
    isError: isErrorAllowance,
    refetch: refetchAllowance,
  } = useERC20Allowance({
    enabled: enabled && !isNativeCurrency,
    chainId,
    tokenAddress: currencyAddress,
    allowedAddress: contractToApprove,
  });

  const {
    tokenBalanceRaw,
    refetch: refetchTokenBalance,
    isLoading: isLoadingTokenBalance,
    isFetching: isFetchingTokenBalance,
    isError: isErrorTokenBalance,
  } = useFormattedTokenBalance({
    tokenAddress: currencyAddress,
    account: address,
    enabled: enabled && !isNativeCurrency,
    chainId,
  });

  const { data: balance, refetch: refetchNativeBalance } =
    useNativeTokenBalance({ account: address }, { enabled: isNativeCurrency });

  if (enabled && !isNativeCurrency && !tokenInfo) {
    throw new Error("tokenInfo is required for erc20 currency");
  }

  const tokenBalance = isNativeCurrency
    ? balance?.value
    : tokenBalanceRaw?.value;

  const isSufficientAllowance = getIsSufficientAllowance(
    allowance,
    balanceRequired
  );
  const isSufficientBalance = getIsSufficientBalance(
    tokenBalance,
    balanceRequired
  );
  const parsedBalanceRequired =
    formatUnitsToNumber(balanceRequired, tokenInfo?.decimals) ?? 0;

  const isLoading = isLoadingAllowance || isLoadingTokenBalance;
  // unlike isLoading, isFetching toggles when doing refetch
  const isFetching = isFetchingAllowance || isFetchingTokenBalance;
  const isError = isErrorAllowance || isErrorTokenBalance;

  return {
    parsedBalanceRequired,
    isSufficientAllowance,
    isSufficientBalance,
    refetchAllowance,
    refetchTokenBalance,
    refetchNativeBalance,
    isLoading,
    isFetching,
    isError,
    tokenSymbol: tokenInfo?.symbol,
  };
};
