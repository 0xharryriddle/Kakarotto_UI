import getABI from "@/contracts/utils/getAbi.util";
import { getKakarottoMarketplaceAddress } from "@/contracts/utils/getAddress.util";
import { formatUnitsToNumber } from "@/utils/token-unit-utils/format-units-to-number";
import { Abi, Address } from "viem";
import { useReadContract } from "wagmi";

type Props = {
  address?: Address;
  chainId?: number;
  enabled?: boolean;
};

export const usePublicationFee = ({ address, chainId, enabled }: Props) => {
  const isEnabled = !!address && !!chainId && !!enabled;

  const {
    data: publicationFeeInWei,
    isLoading,
    isFetching,
    isError,
    isSuccess,
    refetch: publicationFeeRefetch,
  } = useReadContract({
    chainId,
    address: enabled ? address : undefined,
    args: isEnabled ? [] : undefined,
    abi: getABI("KakarottoMarketplace"),
    functionName: "publicationFeeInWei",
    query: { enabled: isEnabled },
  });

  const refetch = enabled ? publicationFeeRefetch : undefined;

  const parsedPublicationFee = formatUnitsToNumber(
    publicationFeeInWei ? (publicationFeeInWei as bigint) : BigInt(0),
    18
  );

  return {
    publicationFeeInWei,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    parsedPublicationFee,
    refetch,
  };
};
