import { Address } from "viem";

export type ChainToken = {
  address: Address;
  decimals: number;
  name?: string;
  symbol?: string | undefined;
  totalSupply?: {
    formatted: string;
    value: bigint;
  };
};
