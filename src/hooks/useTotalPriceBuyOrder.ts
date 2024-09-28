import { Address } from "viem";
import { useFeePercentageMarketplace } from "./useFeePercentageMarketplace";
import { getKakarottoMarketplaceAddress } from "@/contracts/utils/getAddress.util";

type Props = {
  address?: Address;
  chainId?: number;
  enabled?: boolean;
};

export const useTotalPriceBuyOrder = ({ address, chainId, enabled }: Props) => {
  const isEnabled = !!address && !!chainId && !!enabled;

  const {
    feePercentage,
    isLoading: feePercentageIsLoading,
    isFetching: feePercentageIsFetching,
    isSuccess: feePercentageIsSuccess,
    isError: feePercentageIsError,
    refetch: feePercentageRefetch,
  } = useFeePercentageMarketplace({
    address: getKakarottoMarketplaceAddress(chainId),
    chainId,
    enabled: isEnabled,
  });

  //   const {}
};
