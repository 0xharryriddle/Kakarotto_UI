/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  BigDecimal: { input: any; output: any };
  BigInt: { input: any; output: any };
  Bytes: { input: any; output: any };
  /**
   * 8 bytes signed integer
   *
   */
  Int8: { input: any; output: any };
  /**
   * A string representation of microseconds UNIX timestamp (16 digits)
   *
   */
  Timestamp: { input: any; output: any };
};

export type Account = {
  __typename?: "Account";
  address: Scalars["Bytes"]["output"];
  earned: Scalars["BigInt"]["output"];
  id: Scalars["ID"]["output"];
  nfts?: Maybe<Array<Nft>>;
  purchases: Scalars["BigInt"]["output"];
  sales: Scalars["BigInt"]["output"];
  spent: Scalars["BigInt"]["output"];
  treasureAccounts?: Maybe<Array<TreasureAccount>>;
};

export type AccountNftsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Nft_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Nft_Filter>;
};

export type AccountTreasureAccountsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TreasureAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<TreasureAccount_Filter>;
};

export type Account_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  address_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
  earned?: InputMaybe<Scalars["BigInt"]["input"]>;
  earned_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  earned_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  earned_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  earned_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  earned_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  earned_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  earned_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  nfts_?: InputMaybe<Nft_Filter>;
  or?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
  purchases?: InputMaybe<Scalars["BigInt"]["input"]>;
  purchases_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  purchases_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  purchases_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  purchases_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  purchases_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  purchases_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  purchases_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  sales?: InputMaybe<Scalars["BigInt"]["input"]>;
  sales_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  sales_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  sales_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  sales_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  sales_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  sales_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  sales_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  spent?: InputMaybe<Scalars["BigInt"]["input"]>;
  spent_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  spent_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  spent_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  spent_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  spent_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  spent_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  spent_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  treasureAccounts_?: InputMaybe<TreasureAccount_Filter>;
};

export type Account_OrderBy =
  | "address"
  | "earned"
  | "id"
  | "nfts"
  | "purchases"
  | "sales"
  | "spent"
  | "treasureAccounts";

export type Aggregation_Interval = "day" | "hour";

export type AnalyticsDayData = {
  __typename?: "AnalyticsDayData";
  creatorsEarning: Scalars["BigInt"]["output"];
  daoEarning: Scalars["BigInt"]["output"];
  date: Scalars["BigInt"]["output"];
  id: Scalars["ID"]["output"];
  sales: Scalars["BigInt"]["output"];
  volume: Scalars["BigInt"]["output"];
};

export type AnalyticsDayData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AnalyticsDayData_Filter>>>;
  creatorsEarning?: InputMaybe<Scalars["BigInt"]["input"]>;
  creatorsEarning_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  creatorsEarning_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  creatorsEarning_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  creatorsEarning_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  creatorsEarning_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  creatorsEarning_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  creatorsEarning_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  daoEarning?: InputMaybe<Scalars["BigInt"]["input"]>;
  daoEarning_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  daoEarning_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  daoEarning_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  daoEarning_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  daoEarning_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  daoEarning_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  daoEarning_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  date?: InputMaybe<Scalars["BigInt"]["input"]>;
  date_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  date_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  date_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  date_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  date_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  date_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  date_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<AnalyticsDayData_Filter>>>;
  sales?: InputMaybe<Scalars["BigInt"]["input"]>;
  sales_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  sales_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  sales_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  sales_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  sales_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  sales_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  sales_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  volume?: InputMaybe<Scalars["BigInt"]["input"]>;
  volume_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  volume_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  volume_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  volume_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  volume_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  volume_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  volume_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
};

export type AnalyticsDayData_OrderBy =
  | "creatorsEarning"
  | "daoEarning"
  | "date"
  | "id"
  | "sales"
  | "volume";

export type Attribute =
  | "agility"
  | "defend"
  | "intelligence"
  | "luck"
  | "power";

export type Bid = {
  __typename?: "Bid";
  bidAddress: Scalars["Bytes"]["output"];
  bidder: Scalars["Bytes"]["output"];
  blockNumber: Scalars["BigInt"]["output"];
  blockchainId: Scalars["String"]["output"];
  category: Category;
  createdAt: Scalars["BigInt"]["output"];
  expiresAt: Scalars["BigInt"]["output"];
  id: Scalars["ID"]["output"];
  nft?: Maybe<Nft>;
  nftAddress: Scalars["Bytes"]["output"];
  price: Scalars["BigInt"]["output"];
  seller: Scalars["Bytes"]["output"];
  status: OrderStatus;
  tokenId: Scalars["BigInt"]["output"];
  updatedAt: Scalars["BigInt"]["output"];
};

export type Bid_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Bid_Filter>>>;
  bidAddress?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidAddress_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidAddress_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidAddress_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidAddress_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  bidAddress_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidAddress_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidAddress_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidAddress_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  bidder?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  bidder_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockchainId?: InputMaybe<Scalars["String"]["input"]>;
  blockchainId_contains?: InputMaybe<Scalars["String"]["input"]>;
  blockchainId_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  blockchainId_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  blockchainId_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  blockchainId_gt?: InputMaybe<Scalars["String"]["input"]>;
  blockchainId_gte?: InputMaybe<Scalars["String"]["input"]>;
  blockchainId_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  blockchainId_lt?: InputMaybe<Scalars["String"]["input"]>;
  blockchainId_lte?: InputMaybe<Scalars["String"]["input"]>;
  blockchainId_not?: InputMaybe<Scalars["String"]["input"]>;
  blockchainId_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  blockchainId_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  blockchainId_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  blockchainId_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  blockchainId_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  blockchainId_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  blockchainId_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  blockchainId_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  blockchainId_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  category?: InputMaybe<Category>;
  category_in?: InputMaybe<Array<Category>>;
  category_not?: InputMaybe<Category>;
  category_not_in?: InputMaybe<Array<Category>>;
  createdAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  expiresAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  expiresAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  expiresAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  expiresAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  expiresAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  expiresAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  expiresAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  expiresAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  nft?: InputMaybe<Scalars["String"]["input"]>;
  nftAddress?: InputMaybe<Scalars["Bytes"]["input"]>;
  nftAddress_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  nftAddress_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  nftAddress_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  nftAddress_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  nftAddress_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  nftAddress_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  nftAddress_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  nftAddress_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  nftAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  nft_?: InputMaybe<Nft_Filter>;
  nft_contains?: InputMaybe<Scalars["String"]["input"]>;
  nft_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  nft_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  nft_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  nft_gt?: InputMaybe<Scalars["String"]["input"]>;
  nft_gte?: InputMaybe<Scalars["String"]["input"]>;
  nft_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  nft_lt?: InputMaybe<Scalars["String"]["input"]>;
  nft_lte?: InputMaybe<Scalars["String"]["input"]>;
  nft_not?: InputMaybe<Scalars["String"]["input"]>;
  nft_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  nft_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  nft_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  nft_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  nft_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  nft_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  nft_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  nft_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  nft_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Bid_Filter>>>;
  price?: InputMaybe<Scalars["BigInt"]["input"]>;
  price_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  price_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  price_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  price_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  price_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  price_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  price_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  seller?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  seller_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  status?: InputMaybe<OrderStatus>;
  status_in?: InputMaybe<Array<OrderStatus>>;
  status_not?: InputMaybe<OrderStatus>;
  status_not_in?: InputMaybe<Array<OrderStatus>>;
  tokenId?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  updatedAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  updatedAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  updatedAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  updatedAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  updatedAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  updatedAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  updatedAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  updatedAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
};

export type Bid_OrderBy =
  | "bidAddress"
  | "bidder"
  | "blockNumber"
  | "blockchainId"
  | "category"
  | "createdAt"
  | "expiresAt"
  | "id"
  | "nft"
  | "nftAddress"
  | "nft__amount"
  | "nft__category"
  | "nft__contractAddress"
  | "nft__createdAt"
  | "nft__creator"
  | "nft__id"
  | "nft__name"
  | "nft__rarity"
  | "nft__sales"
  | "nft__searchCharacterAccount"
  | "nft__searchCharacterExp"
  | "nft__searchCharacterLevel"
  | "nft__searchIsCharacter"
  | "nft__searchIsItem"
  | "nft__searchIsTreasure"
  | "nft__searchOrderCreatedAt"
  | "nft__searchOrderExpiresAt"
  | "nft__searchOrderPrice"
  | "nft__searchOrderStatus"
  | "nft__searchOwner"
  | "nft__soldAt"
  | "nft__tokenId"
  | "nft__tokenURI"
  | "nft__transferredAt"
  | "nft__updatedAt"
  | "nft__volume"
  | "price"
  | "seller"
  | "status"
  | "tokenId"
  | "updatedAt";

export type BlockChangedFilter = {
  number_gte: Scalars["Int"]["input"];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars["Bytes"]["input"]>;
  number?: InputMaybe<Scalars["Int"]["input"]>;
  number_gte?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Category = "character" | "item" | "treasure";

export type Character = {
  __typename?: "Character";
  attributes?: Maybe<Array<CharacterAttribute>>;
  characterAccount?: Maybe<CharacterAccount>;
  exp: Scalars["BigInt"]["output"];
  id: Scalars["ID"]["output"];
  level: Scalars["BigInt"]["output"];
  nft: Nft;
};

export type CharacterAttributesArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<CharacterAttribute_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CharacterAttribute_Filter>;
};

export type CharacterAccount = {
  __typename?: "CharacterAccount";
  character: Character;
  contractAddress: Scalars["Bytes"]["output"];
  id: Scalars["ID"]["output"];
};

export type CharacterAccount_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CharacterAccount_Filter>>>;
  character?: InputMaybe<Scalars["String"]["input"]>;
  character_?: InputMaybe<Character_Filter>;
  character_contains?: InputMaybe<Scalars["String"]["input"]>;
  character_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  character_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  character_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  character_gt?: InputMaybe<Scalars["String"]["input"]>;
  character_gte?: InputMaybe<Scalars["String"]["input"]>;
  character_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  character_lt?: InputMaybe<Scalars["String"]["input"]>;
  character_lte?: InputMaybe<Scalars["String"]["input"]>;
  character_not?: InputMaybe<Scalars["String"]["input"]>;
  character_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  character_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  character_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  character_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  character_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  character_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  character_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  character_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  character_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractAddress?: InputMaybe<Scalars["Bytes"]["input"]>;
  contractAddress_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  contractAddress_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  contractAddress_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  contractAddress_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  contractAddress_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  contractAddress_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  contractAddress_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  contractAddress_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  contractAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<CharacterAccount_Filter>>>;
};

export type CharacterAccount_OrderBy =
  | "character"
  | "character__exp"
  | "character__id"
  | "character__level"
  | "contractAddress"
  | "id";

export type CharacterAttribute = {
  __typename?: "CharacterAttribute";
  attribute: Attribute;
  character: Character;
  id: Scalars["ID"]["output"];
  value: Scalars["BigInt"]["output"];
};

export type CharacterAttribute_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CharacterAttribute_Filter>>>;
  attribute?: InputMaybe<Attribute>;
  attribute_in?: InputMaybe<Array<Attribute>>;
  attribute_not?: InputMaybe<Attribute>;
  attribute_not_in?: InputMaybe<Array<Attribute>>;
  character?: InputMaybe<Scalars["String"]["input"]>;
  character_?: InputMaybe<Character_Filter>;
  character_contains?: InputMaybe<Scalars["String"]["input"]>;
  character_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  character_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  character_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  character_gt?: InputMaybe<Scalars["String"]["input"]>;
  character_gte?: InputMaybe<Scalars["String"]["input"]>;
  character_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  character_lt?: InputMaybe<Scalars["String"]["input"]>;
  character_lte?: InputMaybe<Scalars["String"]["input"]>;
  character_not?: InputMaybe<Scalars["String"]["input"]>;
  character_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  character_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  character_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  character_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  character_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  character_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  character_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  character_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  character_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<CharacterAttribute_Filter>>>;
  value?: InputMaybe<Scalars["BigInt"]["input"]>;
  value_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  value_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  value_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  value_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  value_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  value_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  value_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
};

export type CharacterAttribute_OrderBy =
  | "attribute"
  | "character"
  | "character__exp"
  | "character__id"
  | "character__level"
  | "id"
  | "value";

export type Character_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Character_Filter>>>;
  attributes_?: InputMaybe<CharacterAttribute_Filter>;
  characterAccount_?: InputMaybe<CharacterAccount_Filter>;
  exp?: InputMaybe<Scalars["BigInt"]["input"]>;
  exp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  exp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  exp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  exp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  exp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  exp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  exp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  level?: InputMaybe<Scalars["BigInt"]["input"]>;
  level_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  level_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  level_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  level_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  level_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  level_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  level_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  nft_?: InputMaybe<Nft_Filter>;
  or?: InputMaybe<Array<InputMaybe<Character_Filter>>>;
};

export type Character_OrderBy =
  | "attributes"
  | "characterAccount"
  | "characterAccount__contractAddress"
  | "characterAccount__id"
  | "exp"
  | "id"
  | "level"
  | "nft"
  | "nft__amount"
  | "nft__category"
  | "nft__contractAddress"
  | "nft__createdAt"
  | "nft__creator"
  | "nft__id"
  | "nft__name"
  | "nft__rarity"
  | "nft__sales"
  | "nft__searchCharacterAccount"
  | "nft__searchCharacterExp"
  | "nft__searchCharacterLevel"
  | "nft__searchIsCharacter"
  | "nft__searchIsItem"
  | "nft__searchIsTreasure"
  | "nft__searchOrderCreatedAt"
  | "nft__searchOrderExpiresAt"
  | "nft__searchOrderPrice"
  | "nft__searchOrderStatus"
  | "nft__searchOwner"
  | "nft__soldAt"
  | "nft__tokenId"
  | "nft__tokenURI"
  | "nft__transferredAt"
  | "nft__updatedAt"
  | "nft__volume";

export type Count = {
  __typename?: "Count";
  characterStarted: Scalars["BigInt"]["output"];
  characterTotal: Scalars["BigInt"]["output"];
  creatorEarningTotal: Scalars["BigInt"]["output"];
  daoEarningTotal: Scalars["BigInt"]["output"];
  id: Scalars["ID"]["output"];
  itemStarted: Scalars["BigInt"]["output"];
  itemTotal: Scalars["BigInt"]["output"];
  orderCharacterTotal: Scalars["BigInt"]["output"];
  orderItemTotal: Scalars["BigInt"]["output"];
  orderTotal: Scalars["BigInt"]["output"];
  orderTreasureTotal: Scalars["BigInt"]["output"];
  salesTotal: Scalars["BigInt"]["output"];
  treasureTotal: Scalars["BigInt"]["output"];
};

export type Count_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Count_Filter>>>;
  characterStarted?: InputMaybe<Scalars["BigInt"]["input"]>;
  characterStarted_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  characterStarted_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  characterStarted_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  characterStarted_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  characterStarted_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  characterStarted_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  characterStarted_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  characterTotal?: InputMaybe<Scalars["BigInt"]["input"]>;
  characterTotal_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  characterTotal_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  characterTotal_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  characterTotal_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  characterTotal_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  characterTotal_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  characterTotal_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  creatorEarningTotal?: InputMaybe<Scalars["BigInt"]["input"]>;
  creatorEarningTotal_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  creatorEarningTotal_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  creatorEarningTotal_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  creatorEarningTotal_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  creatorEarningTotal_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  creatorEarningTotal_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  creatorEarningTotal_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  daoEarningTotal?: InputMaybe<Scalars["BigInt"]["input"]>;
  daoEarningTotal_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  daoEarningTotal_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  daoEarningTotal_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  daoEarningTotal_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  daoEarningTotal_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  daoEarningTotal_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  daoEarningTotal_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  itemStarted?: InputMaybe<Scalars["BigInt"]["input"]>;
  itemStarted_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  itemStarted_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  itemStarted_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  itemStarted_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  itemStarted_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  itemStarted_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  itemStarted_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  itemTotal?: InputMaybe<Scalars["BigInt"]["input"]>;
  itemTotal_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  itemTotal_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  itemTotal_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  itemTotal_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  itemTotal_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  itemTotal_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  itemTotal_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Count_Filter>>>;
  orderCharacterTotal?: InputMaybe<Scalars["BigInt"]["input"]>;
  orderCharacterTotal_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  orderCharacterTotal_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  orderCharacterTotal_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  orderCharacterTotal_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  orderCharacterTotal_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  orderCharacterTotal_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  orderCharacterTotal_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  orderItemTotal?: InputMaybe<Scalars["BigInt"]["input"]>;
  orderItemTotal_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  orderItemTotal_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  orderItemTotal_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  orderItemTotal_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  orderItemTotal_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  orderItemTotal_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  orderItemTotal_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  orderTotal?: InputMaybe<Scalars["BigInt"]["input"]>;
  orderTotal_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  orderTotal_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  orderTotal_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  orderTotal_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  orderTotal_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  orderTotal_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  orderTotal_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  orderTreasureTotal?: InputMaybe<Scalars["BigInt"]["input"]>;
  orderTreasureTotal_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  orderTreasureTotal_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  orderTreasureTotal_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  orderTreasureTotal_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  orderTreasureTotal_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  orderTreasureTotal_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  orderTreasureTotal_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  salesTotal?: InputMaybe<Scalars["BigInt"]["input"]>;
  salesTotal_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  salesTotal_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  salesTotal_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  salesTotal_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  salesTotal_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  salesTotal_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  salesTotal_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  treasureTotal?: InputMaybe<Scalars["BigInt"]["input"]>;
  treasureTotal_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  treasureTotal_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  treasureTotal_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  treasureTotal_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  treasureTotal_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  treasureTotal_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  treasureTotal_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
};

export type Count_OrderBy =
  | "characterStarted"
  | "characterTotal"
  | "creatorEarningTotal"
  | "daoEarningTotal"
  | "id"
  | "itemStarted"
  | "itemTotal"
  | "orderCharacterTotal"
  | "orderItemTotal"
  | "orderTotal"
  | "orderTreasureTotal"
  | "salesTotal"
  | "treasureTotal";

export type Item = {
  __typename?: "Item";
  attributes: Array<ItemAttribute>;
  id: Scalars["ID"]["output"];
  nft: Nft;
};

export type ItemAttributesArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<ItemAttribute_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ItemAttribute_Filter>;
};

export type ItemAttribute = {
  __typename?: "ItemAttribute";
  attribute: Attribute;
  id: Scalars["ID"]["output"];
  isIncrease: Scalars["Boolean"]["output"];
  isPercentage: Scalars["Boolean"]["output"];
  item: Item;
  value: Scalars["BigInt"]["output"];
};

export type ItemAttribute_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ItemAttribute_Filter>>>;
  attribute?: InputMaybe<Attribute>;
  attribute_in?: InputMaybe<Array<Attribute>>;
  attribute_not?: InputMaybe<Attribute>;
  attribute_not_in?: InputMaybe<Array<Attribute>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  isIncrease?: InputMaybe<Scalars["Boolean"]["input"]>;
  isIncrease_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  isIncrease_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  isIncrease_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  isPercentage?: InputMaybe<Scalars["Boolean"]["input"]>;
  isPercentage_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  isPercentage_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  isPercentage_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  item_?: InputMaybe<Item_Filter>;
  or?: InputMaybe<Array<InputMaybe<ItemAttribute_Filter>>>;
  value?: InputMaybe<Scalars["BigInt"]["input"]>;
  value_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  value_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  value_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  value_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  value_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  value_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  value_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
};

export type ItemAttribute_OrderBy =
  | "attribute"
  | "id"
  | "isIncrease"
  | "isPercentage"
  | "item"
  | "item__id"
  | "value";

export type Item_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Item_Filter>>>;
  attributes_?: InputMaybe<ItemAttribute_Filter>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  nft_?: InputMaybe<Nft_Filter>;
  or?: InputMaybe<Array<InputMaybe<Item_Filter>>>;
};

export type Item_OrderBy =
  | "attributes"
  | "id"
  | "nft"
  | "nft__amount"
  | "nft__category"
  | "nft__contractAddress"
  | "nft__createdAt"
  | "nft__creator"
  | "nft__id"
  | "nft__name"
  | "nft__rarity"
  | "nft__sales"
  | "nft__searchCharacterAccount"
  | "nft__searchCharacterExp"
  | "nft__searchCharacterLevel"
  | "nft__searchIsCharacter"
  | "nft__searchIsItem"
  | "nft__searchIsTreasure"
  | "nft__searchOrderCreatedAt"
  | "nft__searchOrderExpiresAt"
  | "nft__searchOrderPrice"
  | "nft__searchOrderStatus"
  | "nft__searchOwner"
  | "nft__soldAt"
  | "nft__tokenId"
  | "nft__tokenURI"
  | "nft__transferredAt"
  | "nft__updatedAt"
  | "nft__volume";

export type Nft = {
  __typename?: "NFT";
  activeOrder?: Maybe<Order>;
  amount: Scalars["BigInt"]["output"];
  bids: Array<Bid>;
  category: Category;
  character?: Maybe<Character>;
  contractAddress: Scalars["Bytes"]["output"];
  createdAt: Scalars["BigInt"]["output"];
  creator: Scalars["Bytes"]["output"];
  id: Scalars["ID"]["output"];
  item?: Maybe<Item>;
  name?: Maybe<Scalars["String"]["output"]>;
  orders: Array<Order>;
  owner: Account;
  rarity?: Maybe<Rarity>;
  sales: Scalars["BigInt"]["output"];
  searchCharacterAccount?: Maybe<Scalars["Bytes"]["output"]>;
  searchCharacterAttribute?: Maybe<Array<CharacterAttribute>>;
  searchCharacterExp?: Maybe<Scalars["BigInt"]["output"]>;
  searchCharacterLevel?: Maybe<Scalars["BigInt"]["output"]>;
  searchIsCharacter?: Maybe<Scalars["Boolean"]["output"]>;
  searchIsItem?: Maybe<Scalars["Boolean"]["output"]>;
  searchIsTreasure?: Maybe<Scalars["Boolean"]["output"]>;
  searchItemAttribute?: Maybe<Array<ItemAttribute>>;
  searchOrderCreatedAt?: Maybe<Scalars["BigInt"]["output"]>;
  searchOrderExpiresAt?: Maybe<Scalars["BigInt"]["output"]>;
  searchOrderPrice?: Maybe<Scalars["BigInt"]["output"]>;
  searchOrderStatus?: Maybe<OrderStatus>;
  searchOwner?: Maybe<Scalars["String"]["output"]>;
  soldAt?: Maybe<Scalars["BigInt"]["output"]>;
  tokenId: Scalars["BigInt"]["output"];
  tokenURI?: Maybe<Scalars["String"]["output"]>;
  transferredAt: Scalars["BigInt"]["output"];
  treasure?: Maybe<Treasure>;
  updatedAt: Scalars["BigInt"]["output"];
  volume: Scalars["BigInt"]["output"];
};

export type NftBidsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Bid_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Bid_Filter>;
};

export type NftOrdersArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Order_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Order_Filter>;
};

export type NftSearchCharacterAttributeArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<CharacterAttribute_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CharacterAttribute_Filter>;
};

export type NftSearchItemAttributeArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<ItemAttribute_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ItemAttribute_Filter>;
};

export type Nft_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  activeOrder?: InputMaybe<Scalars["String"]["input"]>;
  activeOrder_?: InputMaybe<Order_Filter>;
  activeOrder_contains?: InputMaybe<Scalars["String"]["input"]>;
  activeOrder_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  activeOrder_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  activeOrder_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  activeOrder_gt?: InputMaybe<Scalars["String"]["input"]>;
  activeOrder_gte?: InputMaybe<Scalars["String"]["input"]>;
  activeOrder_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  activeOrder_lt?: InputMaybe<Scalars["String"]["input"]>;
  activeOrder_lte?: InputMaybe<Scalars["String"]["input"]>;
  activeOrder_not?: InputMaybe<Scalars["String"]["input"]>;
  activeOrder_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  activeOrder_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  activeOrder_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  activeOrder_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  activeOrder_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  activeOrder_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  activeOrder_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  activeOrder_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  activeOrder_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  amount?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<Nft_Filter>>>;
  bids_?: InputMaybe<Bid_Filter>;
  category?: InputMaybe<Category>;
  category_in?: InputMaybe<Array<Category>>;
  category_not?: InputMaybe<Category>;
  category_not_in?: InputMaybe<Array<Category>>;
  character?: InputMaybe<Scalars["String"]["input"]>;
  character_?: InputMaybe<Character_Filter>;
  character_contains?: InputMaybe<Scalars["String"]["input"]>;
  character_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  character_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  character_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  character_gt?: InputMaybe<Scalars["String"]["input"]>;
  character_gte?: InputMaybe<Scalars["String"]["input"]>;
  character_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  character_lt?: InputMaybe<Scalars["String"]["input"]>;
  character_lte?: InputMaybe<Scalars["String"]["input"]>;
  character_not?: InputMaybe<Scalars["String"]["input"]>;
  character_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  character_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  character_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  character_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  character_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  character_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  character_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  character_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  character_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  contractAddress?: InputMaybe<Scalars["Bytes"]["input"]>;
  contractAddress_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  contractAddress_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  contractAddress_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  contractAddress_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  contractAddress_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  contractAddress_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  contractAddress_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  contractAddress_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  contractAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  createdAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  creator?: InputMaybe<Scalars["Bytes"]["input"]>;
  creator_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  creator_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  creator_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  creator_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  creator_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  creator_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  creator_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  creator_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  creator_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  item?: InputMaybe<Scalars["String"]["input"]>;
  item_?: InputMaybe<Item_Filter>;
  item_contains?: InputMaybe<Scalars["String"]["input"]>;
  item_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  item_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  item_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  item_gt?: InputMaybe<Scalars["String"]["input"]>;
  item_gte?: InputMaybe<Scalars["String"]["input"]>;
  item_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  item_lt?: InputMaybe<Scalars["String"]["input"]>;
  item_lte?: InputMaybe<Scalars["String"]["input"]>;
  item_not?: InputMaybe<Scalars["String"]["input"]>;
  item_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  item_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  item_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  item_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  item_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  item_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  item_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  item_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  item_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_gt?: InputMaybe<Scalars["String"]["input"]>;
  name_gte?: InputMaybe<Scalars["String"]["input"]>;
  name_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_lt?: InputMaybe<Scalars["String"]["input"]>;
  name_lte?: InputMaybe<Scalars["String"]["input"]>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Nft_Filter>>>;
  orders_?: InputMaybe<Order_Filter>;
  owner?: InputMaybe<Scalars["String"]["input"]>;
  owner_?: InputMaybe<Account_Filter>;
  owner_contains?: InputMaybe<Scalars["String"]["input"]>;
  owner_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  owner_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_gt?: InputMaybe<Scalars["String"]["input"]>;
  owner_gte?: InputMaybe<Scalars["String"]["input"]>;
  owner_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  owner_lt?: InputMaybe<Scalars["String"]["input"]>;
  owner_lte?: InputMaybe<Scalars["String"]["input"]>;
  owner_not?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  owner_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  owner_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rarity?: InputMaybe<Rarity>;
  rarity_in?: InputMaybe<Array<Rarity>>;
  rarity_not?: InputMaybe<Rarity>;
  rarity_not_in?: InputMaybe<Array<Rarity>>;
  sales?: InputMaybe<Scalars["BigInt"]["input"]>;
  sales_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  sales_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  sales_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  sales_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  sales_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  sales_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  sales_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  searchCharacterAccount?: InputMaybe<Scalars["Bytes"]["input"]>;
  searchCharacterAccount_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  searchCharacterAccount_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  searchCharacterAccount_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  searchCharacterAccount_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  searchCharacterAccount_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  searchCharacterAccount_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  searchCharacterAccount_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  searchCharacterAccount_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  searchCharacterAccount_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  searchCharacterAttribute?: InputMaybe<Array<Scalars["String"]["input"]>>;
  searchCharacterAttribute_?: InputMaybe<CharacterAttribute_Filter>;
  searchCharacterAttribute_contains?: InputMaybe<
    Array<Scalars["String"]["input"]>
  >;
  searchCharacterAttribute_contains_nocase?: InputMaybe<
    Array<Scalars["String"]["input"]>
  >;
  searchCharacterAttribute_not?: InputMaybe<Array<Scalars["String"]["input"]>>;
  searchCharacterAttribute_not_contains?: InputMaybe<
    Array<Scalars["String"]["input"]>
  >;
  searchCharacterAttribute_not_contains_nocase?: InputMaybe<
    Array<Scalars["String"]["input"]>
  >;
  searchCharacterExp?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchCharacterExp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchCharacterExp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchCharacterExp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  searchCharacterExp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchCharacterExp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchCharacterExp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchCharacterExp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  searchCharacterLevel?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchCharacterLevel_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchCharacterLevel_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchCharacterLevel_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  searchCharacterLevel_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchCharacterLevel_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchCharacterLevel_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchCharacterLevel_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  searchIsCharacter?: InputMaybe<Scalars["Boolean"]["input"]>;
  searchIsCharacter_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  searchIsCharacter_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  searchIsCharacter_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  searchIsItem?: InputMaybe<Scalars["Boolean"]["input"]>;
  searchIsItem_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  searchIsItem_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  searchIsItem_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  searchIsTreasure?: InputMaybe<Scalars["Boolean"]["input"]>;
  searchIsTreasure_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  searchIsTreasure_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  searchIsTreasure_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  searchItemAttribute?: InputMaybe<Array<Scalars["String"]["input"]>>;
  searchItemAttribute_?: InputMaybe<ItemAttribute_Filter>;
  searchItemAttribute_contains?: InputMaybe<Array<Scalars["String"]["input"]>>;
  searchItemAttribute_contains_nocase?: InputMaybe<
    Array<Scalars["String"]["input"]>
  >;
  searchItemAttribute_not?: InputMaybe<Array<Scalars["String"]["input"]>>;
  searchItemAttribute_not_contains?: InputMaybe<
    Array<Scalars["String"]["input"]>
  >;
  searchItemAttribute_not_contains_nocase?: InputMaybe<
    Array<Scalars["String"]["input"]>
  >;
  searchOrderCreatedAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchOrderCreatedAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchOrderCreatedAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchOrderCreatedAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  searchOrderCreatedAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchOrderCreatedAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchOrderCreatedAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchOrderCreatedAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  searchOrderExpiresAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchOrderExpiresAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchOrderExpiresAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchOrderExpiresAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  searchOrderExpiresAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchOrderExpiresAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchOrderExpiresAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchOrderExpiresAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  searchOrderPrice?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchOrderPrice_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchOrderPrice_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchOrderPrice_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  searchOrderPrice_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchOrderPrice_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchOrderPrice_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchOrderPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  searchOrderStatus?: InputMaybe<OrderStatus>;
  searchOrderStatus_in?: InputMaybe<Array<OrderStatus>>;
  searchOrderStatus_not?: InputMaybe<OrderStatus>;
  searchOrderStatus_not_in?: InputMaybe<Array<OrderStatus>>;
  searchOwner?: InputMaybe<Scalars["String"]["input"]>;
  searchOwner_contains?: InputMaybe<Scalars["String"]["input"]>;
  searchOwner_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  searchOwner_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  searchOwner_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  searchOwner_gt?: InputMaybe<Scalars["String"]["input"]>;
  searchOwner_gte?: InputMaybe<Scalars["String"]["input"]>;
  searchOwner_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  searchOwner_lt?: InputMaybe<Scalars["String"]["input"]>;
  searchOwner_lte?: InputMaybe<Scalars["String"]["input"]>;
  searchOwner_not?: InputMaybe<Scalars["String"]["input"]>;
  searchOwner_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  searchOwner_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  searchOwner_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  searchOwner_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  searchOwner_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  searchOwner_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  searchOwner_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  searchOwner_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  searchOwner_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  soldAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  soldAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  soldAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  soldAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  soldAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  soldAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  soldAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  soldAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenId?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenURI?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_contains?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_gt?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_gte?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenURI_lt?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_lte?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenURI_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  transferredAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  transferredAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  transferredAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  transferredAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  transferredAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  transferredAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  transferredAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  transferredAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  treasure?: InputMaybe<Scalars["String"]["input"]>;
  treasure_?: InputMaybe<Treasure_Filter>;
  treasure_contains?: InputMaybe<Scalars["String"]["input"]>;
  treasure_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  treasure_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  treasure_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  treasure_gt?: InputMaybe<Scalars["String"]["input"]>;
  treasure_gte?: InputMaybe<Scalars["String"]["input"]>;
  treasure_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  treasure_lt?: InputMaybe<Scalars["String"]["input"]>;
  treasure_lte?: InputMaybe<Scalars["String"]["input"]>;
  treasure_not?: InputMaybe<Scalars["String"]["input"]>;
  treasure_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  treasure_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  treasure_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  treasure_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  treasure_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  treasure_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  treasure_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  treasure_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  treasure_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  updatedAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  updatedAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  updatedAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  updatedAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  updatedAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  updatedAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  updatedAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  volume?: InputMaybe<Scalars["BigInt"]["input"]>;
  volume_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  volume_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  volume_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  volume_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  volume_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  volume_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  volume_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
};

export type Nft_OrderBy =
  | "activeOrder"
  | "activeOrder__amount"
  | "activeOrder__blockNumber"
  | "activeOrder__buyer"
  | "activeOrder__category"
  | "activeOrder__createdAt"
  | "activeOrder__expiresAt"
  | "activeOrder__id"
  | "activeOrder__marketplaceAddress"
  | "activeOrder__nftAddress"
  | "activeOrder__owner"
  | "activeOrder__price"
  | "activeOrder__status"
  | "activeOrder__tokenId"
  | "activeOrder__transactionHash"
  | "activeOrder__updatedAt"
  | "amount"
  | "bids"
  | "category"
  | "character"
  | "character__exp"
  | "character__id"
  | "character__level"
  | "contractAddress"
  | "createdAt"
  | "creator"
  | "id"
  | "item"
  | "item__id"
  | "name"
  | "orders"
  | "owner"
  | "owner__address"
  | "owner__earned"
  | "owner__id"
  | "owner__purchases"
  | "owner__sales"
  | "owner__spent"
  | "rarity"
  | "sales"
  | "searchCharacterAccount"
  | "searchCharacterAttribute"
  | "searchCharacterExp"
  | "searchCharacterLevel"
  | "searchIsCharacter"
  | "searchIsItem"
  | "searchIsTreasure"
  | "searchItemAttribute"
  | "searchOrderCreatedAt"
  | "searchOrderExpiresAt"
  | "searchOrderPrice"
  | "searchOrderStatus"
  | "searchOwner"
  | "soldAt"
  | "tokenId"
  | "tokenURI"
  | "transferredAt"
  | "treasure"
  | "treasure__id"
  | "treasure__name"
  | "treasure__tokenId"
  | "treasure__tokenURI"
  | "updatedAt"
  | "volume";

export type Order = {
  __typename?: "Order";
  amount: Scalars["BigInt"]["output"];
  blockNumber: Scalars["BigInt"]["output"];
  buyer?: Maybe<Scalars["Bytes"]["output"]>;
  category: Category;
  createdAt: Scalars["BigInt"]["output"];
  expiresAt: Scalars["BigInt"]["output"];
  id: Scalars["ID"]["output"];
  marketplaceAddress: Scalars["Bytes"]["output"];
  nft?: Maybe<Nft>;
  nftAddress: Scalars["Bytes"]["output"];
  owner: Scalars["Bytes"]["output"];
  price: Scalars["BigInt"]["output"];
  status: OrderStatus;
  tokenId: Scalars["BigInt"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
  updatedAt: Scalars["BigInt"]["output"];
};

/** Defines the order direction, either ascending or descending */
export type OrderDirection = "asc" | "desc";

export type OrderStatus = "cancelled" | "open" | "sold";

export type Order_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<Order_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  buyer?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  buyer_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  category?: InputMaybe<Category>;
  category_in?: InputMaybe<Array<Category>>;
  category_not?: InputMaybe<Category>;
  category_not_in?: InputMaybe<Array<Category>>;
  createdAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  expiresAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  expiresAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  expiresAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  expiresAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  expiresAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  expiresAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  expiresAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  expiresAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  marketplaceAddress?: InputMaybe<Scalars["Bytes"]["input"]>;
  marketplaceAddress_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  marketplaceAddress_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  marketplaceAddress_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  marketplaceAddress_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  marketplaceAddress_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  marketplaceAddress_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  marketplaceAddress_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  marketplaceAddress_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  marketplaceAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  nft?: InputMaybe<Scalars["String"]["input"]>;
  nftAddress?: InputMaybe<Scalars["Bytes"]["input"]>;
  nftAddress_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  nftAddress_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  nftAddress_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  nftAddress_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  nftAddress_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  nftAddress_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  nftAddress_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  nftAddress_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  nftAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  nft_?: InputMaybe<Nft_Filter>;
  nft_contains?: InputMaybe<Scalars["String"]["input"]>;
  nft_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  nft_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  nft_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  nft_gt?: InputMaybe<Scalars["String"]["input"]>;
  nft_gte?: InputMaybe<Scalars["String"]["input"]>;
  nft_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  nft_lt?: InputMaybe<Scalars["String"]["input"]>;
  nft_lte?: InputMaybe<Scalars["String"]["input"]>;
  nft_not?: InputMaybe<Scalars["String"]["input"]>;
  nft_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  nft_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  nft_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  nft_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  nft_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  nft_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  nft_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  nft_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  nft_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Order_Filter>>>;
  owner?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  owner_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  price?: InputMaybe<Scalars["BigInt"]["input"]>;
  price_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  price_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  price_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  price_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  price_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  price_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  price_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  status?: InputMaybe<OrderStatus>;
  status_in?: InputMaybe<Array<OrderStatus>>;
  status_not?: InputMaybe<OrderStatus>;
  status_not_in?: InputMaybe<Array<OrderStatus>>;
  tokenId?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  updatedAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  updatedAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  updatedAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  updatedAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  updatedAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  updatedAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  updatedAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  updatedAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
};

export type Order_OrderBy =
  | "amount"
  | "blockNumber"
  | "buyer"
  | "category"
  | "createdAt"
  | "expiresAt"
  | "id"
  | "marketplaceAddress"
  | "nft"
  | "nftAddress"
  | "nft__amount"
  | "nft__category"
  | "nft__contractAddress"
  | "nft__createdAt"
  | "nft__creator"
  | "nft__id"
  | "nft__name"
  | "nft__rarity"
  | "nft__sales"
  | "nft__searchCharacterAccount"
  | "nft__searchCharacterExp"
  | "nft__searchCharacterLevel"
  | "nft__searchIsCharacter"
  | "nft__searchIsItem"
  | "nft__searchIsTreasure"
  | "nft__searchOrderCreatedAt"
  | "nft__searchOrderExpiresAt"
  | "nft__searchOrderPrice"
  | "nft__searchOrderStatus"
  | "nft__searchOwner"
  | "nft__soldAt"
  | "nft__tokenId"
  | "nft__tokenURI"
  | "nft__transferredAt"
  | "nft__updatedAt"
  | "nft__volume"
  | "owner"
  | "price"
  | "status"
  | "tokenId"
  | "transactionHash"
  | "updatedAt";

export type Query = {
  __typename?: "Query";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  analyticsDayData?: Maybe<AnalyticsDayData>;
  analyticsDayDatas: Array<AnalyticsDayData>;
  bid?: Maybe<Bid>;
  bids: Array<Bid>;
  character?: Maybe<Character>;
  characterAccount?: Maybe<CharacterAccount>;
  characterAccounts: Array<CharacterAccount>;
  characterAttribute?: Maybe<CharacterAttribute>;
  characterAttributes: Array<CharacterAttribute>;
  characters: Array<Character>;
  count?: Maybe<Count>;
  counts: Array<Count>;
  item?: Maybe<Item>;
  itemAttribute?: Maybe<ItemAttribute>;
  itemAttributes: Array<ItemAttribute>;
  items: Array<Item>;
  nft?: Maybe<Nft>;
  nfts: Array<Nft>;
  order?: Maybe<Order>;
  orders: Array<Order>;
  sale?: Maybe<Sale>;
  sales: Array<Sale>;
  treasure?: Maybe<Treasure>;
  treasureAccount?: Maybe<TreasureAccount>;
  treasureAccounts: Array<TreasureAccount>;
  treasures: Array<Treasure>;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};

export type QueryAnalyticsDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAnalyticsDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AnalyticsDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AnalyticsDayData_Filter>;
};

export type QueryBidArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBidsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Bid_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Bid_Filter>;
};

export type QueryCharacterArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryCharacterAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryCharacterAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<CharacterAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CharacterAccount_Filter>;
};

export type QueryCharacterAttributeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryCharacterAttributesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<CharacterAttribute_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CharacterAttribute_Filter>;
};

export type QueryCharactersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Character_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Character_Filter>;
};

export type QueryCountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryCountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Count_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Count_Filter>;
};

export type QueryItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryItemAttributeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryItemAttributesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<ItemAttribute_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ItemAttribute_Filter>;
};

export type QueryItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Item_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Item_Filter>;
};

export type QueryNftArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryNftsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Nft_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Nft_Filter>;
};

export type QueryOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Order_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Order_Filter>;
};

export type QuerySaleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySalesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Sale_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Sale_Filter>;
};

export type QueryTreasureArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTreasureAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTreasureAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TreasureAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TreasureAccount_Filter>;
};

export type QueryTreasuresArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Treasure_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Treasure_Filter>;
};

export type Rarity = "bronze" | "diamond" | "gold" | "platinum" | "silver";

export type Sale = {
  __typename?: "Sale";
  amount: Scalars["BigInt"]["output"];
  buyer: Scalars["Bytes"]["output"];
  id: Scalars["ID"]["output"];
  nft: Nft;
  price: Scalars["BigInt"]["output"];
  searchCategory: Category;
  searchContractAddress: Scalars["Bytes"]["output"];
  searchTokenId: Scalars["BigInt"]["output"];
  seller: Scalars["Bytes"]["output"];
  timestamp: Scalars["BigInt"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
  type: SaleType;
};

export type SaleType = "bid" | "order";

export type Sale_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<Sale_Filter>>>;
  buyer?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  buyer_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  nft?: InputMaybe<Scalars["String"]["input"]>;
  nft_?: InputMaybe<Nft_Filter>;
  nft_contains?: InputMaybe<Scalars["String"]["input"]>;
  nft_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  nft_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  nft_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  nft_gt?: InputMaybe<Scalars["String"]["input"]>;
  nft_gte?: InputMaybe<Scalars["String"]["input"]>;
  nft_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  nft_lt?: InputMaybe<Scalars["String"]["input"]>;
  nft_lte?: InputMaybe<Scalars["String"]["input"]>;
  nft_not?: InputMaybe<Scalars["String"]["input"]>;
  nft_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  nft_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  nft_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  nft_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  nft_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  nft_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  nft_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  nft_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  nft_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Sale_Filter>>>;
  price?: InputMaybe<Scalars["BigInt"]["input"]>;
  price_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  price_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  price_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  price_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  price_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  price_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  price_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  searchCategory?: InputMaybe<Category>;
  searchCategory_in?: InputMaybe<Array<Category>>;
  searchCategory_not?: InputMaybe<Category>;
  searchCategory_not_in?: InputMaybe<Array<Category>>;
  searchContractAddress?: InputMaybe<Scalars["Bytes"]["input"]>;
  searchContractAddress_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  searchContractAddress_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  searchContractAddress_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  searchContractAddress_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  searchContractAddress_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  searchContractAddress_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  searchContractAddress_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  searchContractAddress_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  searchContractAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  searchTokenId?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchTokenId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchTokenId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchTokenId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  searchTokenId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchTokenId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchTokenId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  searchTokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  seller?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  seller_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  type?: InputMaybe<SaleType>;
  type_in?: InputMaybe<Array<SaleType>>;
  type_not?: InputMaybe<SaleType>;
  type_not_in?: InputMaybe<Array<SaleType>>;
};

export type Sale_OrderBy =
  | "amount"
  | "buyer"
  | "id"
  | "nft"
  | "nft__amount"
  | "nft__category"
  | "nft__contractAddress"
  | "nft__createdAt"
  | "nft__creator"
  | "nft__id"
  | "nft__name"
  | "nft__rarity"
  | "nft__sales"
  | "nft__searchCharacterAccount"
  | "nft__searchCharacterExp"
  | "nft__searchCharacterLevel"
  | "nft__searchIsCharacter"
  | "nft__searchIsItem"
  | "nft__searchIsTreasure"
  | "nft__searchOrderCreatedAt"
  | "nft__searchOrderExpiresAt"
  | "nft__searchOrderPrice"
  | "nft__searchOrderStatus"
  | "nft__searchOwner"
  | "nft__soldAt"
  | "nft__tokenId"
  | "nft__tokenURI"
  | "nft__transferredAt"
  | "nft__updatedAt"
  | "nft__volume"
  | "price"
  | "searchCategory"
  | "searchContractAddress"
  | "searchTokenId"
  | "seller"
  | "timestamp"
  | "transactionHash"
  | "type";

export type Subscription = {
  __typename?: "Subscription";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  analyticsDayData?: Maybe<AnalyticsDayData>;
  analyticsDayDatas: Array<AnalyticsDayData>;
  bid?: Maybe<Bid>;
  bids: Array<Bid>;
  character?: Maybe<Character>;
  characterAccount?: Maybe<CharacterAccount>;
  characterAccounts: Array<CharacterAccount>;
  characterAttribute?: Maybe<CharacterAttribute>;
  characterAttributes: Array<CharacterAttribute>;
  characters: Array<Character>;
  count?: Maybe<Count>;
  counts: Array<Count>;
  item?: Maybe<Item>;
  itemAttribute?: Maybe<ItemAttribute>;
  itemAttributes: Array<ItemAttribute>;
  items: Array<Item>;
  nft?: Maybe<Nft>;
  nfts: Array<Nft>;
  order?: Maybe<Order>;
  orders: Array<Order>;
  sale?: Maybe<Sale>;
  sales: Array<Sale>;
  treasure?: Maybe<Treasure>;
  treasureAccount?: Maybe<TreasureAccount>;
  treasureAccounts: Array<TreasureAccount>;
  treasures: Array<Treasure>;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type SubscriptionAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};

export type SubscriptionAnalyticsDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAnalyticsDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AnalyticsDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AnalyticsDayData_Filter>;
};

export type SubscriptionBidArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBidsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Bid_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Bid_Filter>;
};

export type SubscriptionCharacterArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionCharacterAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionCharacterAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<CharacterAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CharacterAccount_Filter>;
};

export type SubscriptionCharacterAttributeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionCharacterAttributesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<CharacterAttribute_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CharacterAttribute_Filter>;
};

export type SubscriptionCharactersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Character_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Character_Filter>;
};

export type SubscriptionCountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionCountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Count_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Count_Filter>;
};

export type SubscriptionItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionItemAttributeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionItemAttributesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<ItemAttribute_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ItemAttribute_Filter>;
};

export type SubscriptionItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Item_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Item_Filter>;
};

export type SubscriptionNftArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionNftsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Nft_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Nft_Filter>;
};

export type SubscriptionOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Order_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Order_Filter>;
};

export type SubscriptionSaleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSalesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Sale_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Sale_Filter>;
};

export type SubscriptionTreasureArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTreasureAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTreasureAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TreasureAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TreasureAccount_Filter>;
};

export type SubscriptionTreasuresArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Treasure_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Treasure_Filter>;
};

export type Treasure = {
  __typename?: "Treasure";
  id: Scalars["ID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  nft: Nft;
  owner?: Maybe<Array<Account>>;
  tokenId: Scalars["BigInt"]["output"];
  tokenURI?: Maybe<Scalars["String"]["output"]>;
};

export type TreasureOwnerArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Account_Filter>;
};

export type TreasureAccount = {
  __typename?: "TreasureAccount";
  account: Account;
  balance: Scalars["BigInt"]["output"];
  id: Scalars["ID"]["output"];
  treasure: Treasure;
};

export type TreasureAccount_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars["String"]["input"]>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars["String"]["input"]>;
  account_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  account_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_gt?: InputMaybe<Scalars["String"]["input"]>;
  account_gte?: InputMaybe<Scalars["String"]["input"]>;
  account_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  account_lt?: InputMaybe<Scalars["String"]["input"]>;
  account_lte?: InputMaybe<Scalars["String"]["input"]>;
  account_not?: InputMaybe<Scalars["String"]["input"]>;
  account_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  account_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  account_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  account_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  account_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  account_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  account_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  and?: InputMaybe<Array<InputMaybe<TreasureAccount_Filter>>>;
  balance?: InputMaybe<Scalars["BigInt"]["input"]>;
  balance_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  balance_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  balance_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  balance_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  balance_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  balance_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  balance_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<TreasureAccount_Filter>>>;
  treasure?: InputMaybe<Scalars["String"]["input"]>;
  treasure_?: InputMaybe<Treasure_Filter>;
  treasure_contains?: InputMaybe<Scalars["String"]["input"]>;
  treasure_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  treasure_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  treasure_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  treasure_gt?: InputMaybe<Scalars["String"]["input"]>;
  treasure_gte?: InputMaybe<Scalars["String"]["input"]>;
  treasure_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  treasure_lt?: InputMaybe<Scalars["String"]["input"]>;
  treasure_lte?: InputMaybe<Scalars["String"]["input"]>;
  treasure_not?: InputMaybe<Scalars["String"]["input"]>;
  treasure_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  treasure_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  treasure_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  treasure_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  treasure_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  treasure_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  treasure_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  treasure_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  treasure_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export type TreasureAccount_OrderBy =
  | "account"
  | "account__address"
  | "account__earned"
  | "account__id"
  | "account__purchases"
  | "account__sales"
  | "account__spent"
  | "balance"
  | "id"
  | "treasure"
  | "treasure__id"
  | "treasure__name"
  | "treasure__tokenId"
  | "treasure__tokenURI";

export type Treasure_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Treasure_Filter>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_gt?: InputMaybe<Scalars["String"]["input"]>;
  name_gte?: InputMaybe<Scalars["String"]["input"]>;
  name_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_lt?: InputMaybe<Scalars["String"]["input"]>;
  name_lte?: InputMaybe<Scalars["String"]["input"]>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  nft_?: InputMaybe<Nft_Filter>;
  or?: InputMaybe<Array<InputMaybe<Treasure_Filter>>>;
  owner?: InputMaybe<Array<Scalars["String"]["input"]>>;
  owner_?: InputMaybe<Account_Filter>;
  owner_contains?: InputMaybe<Array<Scalars["String"]["input"]>>;
  owner_contains_nocase?: InputMaybe<Array<Scalars["String"]["input"]>>;
  owner_not?: InputMaybe<Array<Scalars["String"]["input"]>>;
  owner_not_contains?: InputMaybe<Array<Scalars["String"]["input"]>>;
  owner_not_contains_nocase?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenId?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenURI?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_contains?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_gt?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_gte?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenURI_lt?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_lte?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenURI_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenURI_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export type Treasure_OrderBy =
  | "id"
  | "name"
  | "nft"
  | "nft__amount"
  | "nft__category"
  | "nft__contractAddress"
  | "nft__createdAt"
  | "nft__creator"
  | "nft__id"
  | "nft__name"
  | "nft__rarity"
  | "nft__sales"
  | "nft__searchCharacterAccount"
  | "nft__searchCharacterExp"
  | "nft__searchCharacterLevel"
  | "nft__searchIsCharacter"
  | "nft__searchIsItem"
  | "nft__searchIsTreasure"
  | "nft__searchOrderCreatedAt"
  | "nft__searchOrderExpiresAt"
  | "nft__searchOrderPrice"
  | "nft__searchOrderStatus"
  | "nft__searchOwner"
  | "nft__soldAt"
  | "nft__tokenId"
  | "nft__tokenURI"
  | "nft__transferredAt"
  | "nft__updatedAt"
  | "nft__volume"
  | "owner"
  | "tokenId"
  | "tokenURI";

export type _Block_ = {
  __typename?: "_Block_";
  /** The hash of the block */
  hash?: Maybe<Scalars["Bytes"]["output"]>;
  /** The block number */
  number: Scalars["Int"]["output"];
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars["Bytes"]["output"]>;
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars["Int"]["output"]>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: "_Meta_";
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars["String"]["output"];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars["Boolean"]["output"];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | "allow"
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | "deny";

export type GetAccountByAddressQueryVariables = Exact<{
  owner: Scalars["Bytes"]["input"];
}>;

export type GetAccountByAddressQuery = {
  __typename?: "Query";
  accounts: Array<{
    __typename?: "Account";
    id: string;
    address: any;
    sales: any;
    purchases: any;
    spent: any;
    earned: any;
    nfts?: Array<{
      __typename?: "NFT";
      id: string;
      tokenId: any;
      contractAddress: any;
      category: Category;
      creator: any;
      amount: any;
      tokenURI?: string | null;
      rarity?: Rarity | null;
      owner: { __typename?: "Account"; id: string; address: any };
      orders: Array<{
        __typename?: "Order";
        id: string;
        marketplaceAddress: any;
        category: Category;
        nftAddress: any;
        tokenId: any;
        amount: any;
        transactionHash: any;
        owner: any;
        buyer?: any | null;
        price: any;
        status: OrderStatus;
        blockNumber: any;
        expiresAt: any;
        createdAt: any;
        updatedAt: any;
      }>;
      bids: Array<{
        __typename?: "Bid";
        id: string;
        bidAddress: any;
        category: Category;
        nftAddress: any;
        tokenId: any;
        bidder: any;
        seller: any;
        price: any;
        status: OrderStatus;
        blockchainId: string;
        blockNumber: any;
        expiresAt: any;
        createdAt: any;
        updatedAt: any;
      }>;
    }> | null;
    treasureAccounts?: Array<{
      __typename?: "TreasureAccount";
      id: string;
      balance: any;
      treasure: {
        __typename?: "Treasure";
        id: string;
        tokenId: any;
        tokenURI?: string | null;
        name?: string | null;
        nft: {
          __typename?: "NFT";
          id: string;
          tokenId: any;
          contractAddress: any;
          category: Category;
          creator: any;
          amount: any;
          tokenURI?: string | null;
          rarity?: Rarity | null;
          owner: { __typename?: "Account"; id: string; address: any };
          orders: Array<{
            __typename?: "Order";
            id: string;
            marketplaceAddress: any;
            category: Category;
            nftAddress: any;
            tokenId: any;
            amount: any;
            transactionHash: any;
            owner: any;
            buyer?: any | null;
            price: any;
            status: OrderStatus;
            blockNumber: any;
            expiresAt: any;
            createdAt: any;
            updatedAt: any;
          }>;
          bids: Array<{
            __typename?: "Bid";
            id: string;
            bidAddress: any;
            category: Category;
            nftAddress: any;
            tokenId: any;
            bidder: any;
            seller: any;
            price: any;
            status: OrderStatus;
            blockchainId: string;
            blockNumber: any;
            expiresAt: any;
            createdAt: any;
            updatedAt: any;
          }>;
        };
        owner?: Array<{
          __typename?: "Account";
          id: string;
          address: any;
        }> | null;
      };
    }> | null;
  }>;
};

export type GetAllAnalyticsDayDataQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetAllAnalyticsDayDataQuery = {
  __typename?: "Query";
  analyticsDayDatas: Array<{
    __typename?: "AnalyticsDayData";
    id: string;
    date: any;
    sales: any;
    volume: any;
    creatorsEarning: any;
    daoEarning: any;
  }>;
};

export type GetAnalyticsDayDataQueryVariables = Exact<{
  date: Scalars["BigInt"]["input"];
}>;

export type GetAnalyticsDayDataQuery = {
  __typename?: "Query";
  analyticsDayDatas: Array<{
    __typename?: "AnalyticsDayData";
    id: string;
    date: any;
    sales: any;
    volume: any;
    creatorsEarning: any;
    daoEarning: any;
  }>;
};

export type GetAllBidsByTokenIdQueryVariables = Exact<{
  first?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Bid_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  tokenId?: InputMaybe<Scalars["BigInt"]["input"]>;
}>;

export type GetAllBidsByTokenIdQuery = {
  __typename?: "Query";
  bids: Array<{
    __typename?: "Bid";
    id: string;
    bidAddress: any;
    category: Category;
    nftAddress: any;
    tokenId: any;
    bidder: any;
    seller: any;
    price: any;
    status: OrderStatus;
    blockchainId: string;
    blockNumber: any;
    expiresAt: any;
    createdAt: any;
    updatedAt: any;
    nft?: {
      __typename?: "NFT";
      id: string;
      tokenId: any;
      contractAddress: any;
      category: Category;
      creator: any;
      amount: any;
      tokenURI?: string | null;
      rarity?: Rarity | null;
      name?: string | null;
      createdAt: any;
      updatedAt: any;
      soldAt?: any | null;
      transferredAt: any;
      sales: any;
      volume: any;
      searchOwner?: string | null;
      searchOrderStatus?: OrderStatus | null;
      searchOrderPrice?: any | null;
      searchOrderExpiresAt?: any | null;
      searchOrderCreatedAt?: any | null;
      searchIsCharacter?: boolean | null;
      searchCharacterAccount?: any | null;
      searchCharacterLevel?: any | null;
      searchCharacterExp?: any | null;
      searchIsTreasure?: boolean | null;
      searchIsItem?: boolean | null;
      owner: {
        __typename?: "Account";
        id: string;
        address: any;
        sales: any;
        purchases: any;
        spent: any;
        earned: any;
        nfts?: Array<{ __typename?: "NFT"; id: string }> | null;
      };
      orders: Array<{ __typename?: "Order"; id: string }>;
      bids: Array<{ __typename?: "Bid"; id: string }>;
      activeOrder?: { __typename?: "Order"; id: string } | null;
      character?: {
        __typename?: "Character";
        id: string;
        level: any;
        exp: any;
        characterAccount?: {
          __typename?: "CharacterAccount";
          id: string;
          contractAddress: any;
        } | null;
        attributes?: Array<{
          __typename?: "CharacterAttribute";
          id: string;
          attribute: Attribute;
          value: any;
        }> | null;
      } | null;
      item?: {
        __typename?: "Item";
        id: string;
        attributes: Array<{
          __typename?: "ItemAttribute";
          id: string;
          attribute: Attribute;
          value: any;
          isIncrease: boolean;
          isPercentage: boolean;
        }>;
      } | null;
      treasure?: {
        __typename?: "Treasure";
        id: string;
        tokenId: any;
        tokenURI?: string | null;
        name?: string | null;
        owner?: Array<{
          __typename?: "Account";
          id: string;
          address: any;
        }> | null;
      } | null;
      searchCharacterAttribute?: Array<{
        __typename?: "CharacterAttribute";
        id: string;
        attribute: Attribute;
        value: any;
      }> | null;
      searchItemAttribute?: Array<{
        __typename?: "ItemAttribute";
        id: string;
        attribute: Attribute;
        value: any;
        isIncrease: boolean;
        isPercentage: boolean;
      }> | null;
    } | null;
  }>;
};

export type GetAllBidsByTokenIdAndStatusQueryVariables = Exact<{
  tokenId: Scalars["BigInt"]["input"];
  status: OrderStatus;
}>;

export type GetAllBidsByTokenIdAndStatusQuery = {
  __typename?: "Query";
  bids: Array<{
    __typename?: "Bid";
    id: string;
    bidAddress: any;
    category: Category;
    nftAddress: any;
    tokenId: any;
    bidder: any;
    seller: any;
    price: any;
    status: OrderStatus;
    blockchainId: string;
    blockNumber: any;
    expiresAt: any;
    createdAt: any;
    updatedAt: any;
    nft?: {
      __typename?: "NFT";
      id: string;
      tokenId: any;
      contractAddress: any;
      category: Category;
      creator: any;
      amount: any;
      tokenURI?: string | null;
      rarity?: Rarity | null;
      name?: string | null;
      createdAt: any;
      updatedAt: any;
      soldAt?: any | null;
      transferredAt: any;
      sales: any;
      volume: any;
      searchOwner?: string | null;
      searchOrderStatus?: OrderStatus | null;
      searchOrderPrice?: any | null;
      searchOrderExpiresAt?: any | null;
      searchOrderCreatedAt?: any | null;
      searchIsCharacter?: boolean | null;
      searchCharacterAccount?: any | null;
      searchCharacterLevel?: any | null;
      searchCharacterExp?: any | null;
      searchIsTreasure?: boolean | null;
      searchIsItem?: boolean | null;
      owner: {
        __typename?: "Account";
        id: string;
        address: any;
        sales: any;
        purchases: any;
        spent: any;
        earned: any;
        nfts?: Array<{ __typename?: "NFT"; id: string }> | null;
      };
      orders: Array<{ __typename?: "Order"; id: string }>;
      bids: Array<{ __typename?: "Bid"; id: string }>;
      activeOrder?: { __typename?: "Order"; id: string } | null;
      character?: {
        __typename?: "Character";
        id: string;
        level: any;
        exp: any;
        characterAccount?: {
          __typename?: "CharacterAccount";
          id: string;
          contractAddress: any;
        } | null;
        attributes?: Array<{
          __typename?: "CharacterAttribute";
          id: string;
          attribute: Attribute;
          value: any;
        }> | null;
      } | null;
      item?: {
        __typename?: "Item";
        id: string;
        attributes: Array<{
          __typename?: "ItemAttribute";
          id: string;
          attribute: Attribute;
          value: any;
          isIncrease: boolean;
          isPercentage: boolean;
        }>;
      } | null;
      treasure?: {
        __typename?: "Treasure";
        id: string;
        tokenId: any;
        tokenURI?: string | null;
        name?: string | null;
        owner?: Array<{
          __typename?: "Account";
          id: string;
          address: any;
        }> | null;
      } | null;
      searchCharacterAttribute?: Array<{
        __typename?: "CharacterAttribute";
        id: string;
        attribute: Attribute;
        value: any;
      }> | null;
      searchItemAttribute?: Array<{
        __typename?: "ItemAttribute";
        id: string;
        attribute: Attribute;
        value: any;
        isIncrease: boolean;
        isPercentage: boolean;
      }> | null;
    } | null;
  }>;
};

export type GetAllBidsByBidderAndStatusQueryVariables = Exact<{
  bidder: Scalars["Bytes"]["input"];
  status: OrderStatus;
}>;

export type GetAllBidsByBidderAndStatusQuery = {
  __typename?: "Query";
  bids: Array<{
    __typename?: "Bid";
    id: string;
    bidAddress: any;
    category: Category;
    nftAddress: any;
    tokenId: any;
    bidder: any;
    seller: any;
    price: any;
    status: OrderStatus;
    blockchainId: string;
    blockNumber: any;
    expiresAt: any;
    createdAt: any;
    updatedAt: any;
    nft?: {
      __typename?: "NFT";
      id: string;
      tokenId: any;
      contractAddress: any;
      category: Category;
      creator: any;
      amount: any;
      tokenURI?: string | null;
      rarity?: Rarity | null;
      name?: string | null;
      createdAt: any;
      updatedAt: any;
      soldAt?: any | null;
      transferredAt: any;
      sales: any;
      volume: any;
      searchOwner?: string | null;
      searchOrderStatus?: OrderStatus | null;
      searchOrderPrice?: any | null;
      searchOrderExpiresAt?: any | null;
      searchOrderCreatedAt?: any | null;
      searchIsCharacter?: boolean | null;
      searchCharacterAccount?: any | null;
      searchCharacterLevel?: any | null;
      searchCharacterExp?: any | null;
      searchIsTreasure?: boolean | null;
      searchIsItem?: boolean | null;
      owner: {
        __typename?: "Account";
        id: string;
        address: any;
        sales: any;
        purchases: any;
        spent: any;
        earned: any;
        nfts?: Array<{ __typename?: "NFT"; id: string }> | null;
      };
      orders: Array<{ __typename?: "Order"; id: string }>;
      bids: Array<{ __typename?: "Bid"; id: string }>;
      activeOrder?: { __typename?: "Order"; id: string } | null;
      character?: {
        __typename?: "Character";
        id: string;
        level: any;
        exp: any;
        characterAccount?: {
          __typename?: "CharacterAccount";
          id: string;
          contractAddress: any;
        } | null;
        attributes?: Array<{
          __typename?: "CharacterAttribute";
          id: string;
          attribute: Attribute;
          value: any;
        }> | null;
      } | null;
      item?: {
        __typename?: "Item";
        id: string;
        attributes: Array<{
          __typename?: "ItemAttribute";
          id: string;
          attribute: Attribute;
          value: any;
          isIncrease: boolean;
          isPercentage: boolean;
        }>;
      } | null;
      treasure?: {
        __typename?: "Treasure";
        id: string;
        tokenId: any;
        tokenURI?: string | null;
        name?: string | null;
        owner?: Array<{
          __typename?: "Account";
          id: string;
          address: any;
        }> | null;
      } | null;
      searchCharacterAttribute?: Array<{
        __typename?: "CharacterAttribute";
        id: string;
        attribute: Attribute;
        value: any;
      }> | null;
      searchItemAttribute?: Array<{
        __typename?: "ItemAttribute";
        id: string;
        attribute: Attribute;
        value: any;
        isIncrease: boolean;
        isPercentage: boolean;
      }> | null;
    } | null;
  }>;
};

export type GetAllCharacterAccountsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetAllCharacterAccountsQuery = {
  __typename?: "Query";
  characterAccounts: Array<{
    __typename?: "CharacterAccount";
    id: string;
    contractAddress: any;
    character: {
      __typename?: "Character";
      id: string;
      level: any;
      exp: any;
      characterAccount?: {
        __typename?: "CharacterAccount";
        id: string;
        contractAddress: any;
      } | null;
      nft: {
        __typename?: "NFT";
        id: string;
        tokenId: any;
        contractAddress: any;
        category: Category;
        creator: any;
        amount: any;
        tokenURI?: string | null;
        rarity?: Rarity | null;
        name?: string | null;
        createdAt: any;
        updatedAt: any;
        soldAt?: any | null;
        transferredAt: any;
        sales: any;
        volume: any;
        searchOwner?: string | null;
        searchOrderStatus?: OrderStatus | null;
        searchOrderPrice?: any | null;
        searchOrderExpiresAt?: any | null;
        searchOrderCreatedAt?: any | null;
        searchIsCharacter?: boolean | null;
        searchCharacterAccount?: any | null;
        searchCharacterLevel?: any | null;
        searchCharacterExp?: any | null;
        searchIsTreasure?: boolean | null;
        searchIsItem?: boolean | null;
        owner: {
          __typename?: "Account";
          id: string;
          address: any;
          sales: any;
          purchases: any;
          spent: any;
          earned: any;
          nfts?: Array<{ __typename?: "NFT"; id: string }> | null;
        };
        orders: Array<{
          __typename?: "Order";
          id: string;
          marketplaceAddress: any;
          category: Category;
          nftAddress: any;
          tokenId: any;
          amount: any;
          transactionHash: any;
          owner: any;
          buyer?: any | null;
          price: any;
          status: OrderStatus;
          blockNumber: any;
          expiresAt: any;
          createdAt: any;
          updatedAt: any;
        }>;
        bids: Array<{
          __typename?: "Bid";
          id: string;
          bidAddress: any;
          category: Category;
          nftAddress: any;
          tokenId: any;
          bidder: any;
          seller: any;
          price: any;
          status: OrderStatus;
          blockchainId: string;
          blockNumber: any;
          expiresAt: any;
          createdAt: any;
          updatedAt: any;
        }>;
        activeOrder?: {
          __typename?: "Order";
          id: string;
          marketplaceAddress: any;
          category: Category;
          nftAddress: any;
          tokenId: any;
          amount: any;
          transactionHash: any;
          owner: any;
          buyer?: any | null;
          price: any;
          status: OrderStatus;
          blockNumber: any;
          expiresAt: any;
          createdAt: any;
          updatedAt: any;
        } | null;
        character?: {
          __typename?: "Character";
          id: string;
          level: any;
          exp: any;
          characterAccount?: {
            __typename?: "CharacterAccount";
            id: string;
            contractAddress: any;
          } | null;
          attributes?: Array<{
            __typename?: "CharacterAttribute";
            id: string;
            attribute: Attribute;
            value: any;
          }> | null;
        } | null;
        item?: {
          __typename?: "Item";
          id: string;
          attributes: Array<{
            __typename?: "ItemAttribute";
            id: string;
            attribute: Attribute;
            value: any;
            isIncrease: boolean;
            isPercentage: boolean;
          }>;
        } | null;
        treasure?: {
          __typename?: "Treasure";
          id: string;
          tokenId: any;
          tokenURI?: string | null;
          name?: string | null;
          owner?: Array<{
            __typename?: "Account";
            id: string;
            address: any;
          }> | null;
        } | null;
        searchCharacterAttribute?: Array<{
          __typename?: "CharacterAttribute";
          id: string;
          attribute: Attribute;
          value: any;
        }> | null;
        searchItemAttribute?: Array<{
          __typename?: "ItemAttribute";
          id: string;
          attribute: Attribute;
          value: any;
          isIncrease: boolean;
          isPercentage: boolean;
        }> | null;
      };
      attributes?: Array<{
        __typename?: "CharacterAttribute";
        id: string;
        attribute: Attribute;
        value: any;
      }> | null;
    };
  }>;
};

export type GetCharacterAccountByCharacterTokenIdQueryVariables = Exact<{
  tokenId: Scalars["BigInt"]["input"];
}>;

export type GetCharacterAccountByCharacterTokenIdQuery = {
  __typename?: "Query";
  characterAccounts: Array<{
    __typename?: "CharacterAccount";
    id: string;
    contractAddress: any;
    character: {
      __typename?: "Character";
      id: string;
      level: any;
      exp: any;
      characterAccount?: {
        __typename?: "CharacterAccount";
        id: string;
        contractAddress: any;
      } | null;
      nft: {
        __typename?: "NFT";
        id: string;
        tokenId: any;
        contractAddress: any;
        category: Category;
        creator: any;
        amount: any;
        tokenURI?: string | null;
        rarity?: Rarity | null;
        name?: string | null;
        createdAt: any;
        updatedAt: any;
        soldAt?: any | null;
        transferredAt: any;
        sales: any;
        volume: any;
        searchOwner?: string | null;
        searchOrderStatus?: OrderStatus | null;
        searchOrderPrice?: any | null;
        searchOrderExpiresAt?: any | null;
        searchOrderCreatedAt?: any | null;
        searchIsCharacter?: boolean | null;
        searchCharacterAccount?: any | null;
        searchCharacterLevel?: any | null;
        searchCharacterExp?: any | null;
        searchIsTreasure?: boolean | null;
        searchIsItem?: boolean | null;
        owner: {
          __typename?: "Account";
          id: string;
          address: any;
          sales: any;
          purchases: any;
          spent: any;
          earned: any;
          nfts?: Array<{ __typename?: "NFT"; id: string }> | null;
        };
        orders: Array<{
          __typename?: "Order";
          id: string;
          marketplaceAddress: any;
          category: Category;
          nftAddress: any;
          tokenId: any;
          amount: any;
          transactionHash: any;
          owner: any;
          buyer?: any | null;
          price: any;
          status: OrderStatus;
          blockNumber: any;
          expiresAt: any;
          createdAt: any;
          updatedAt: any;
        }>;
        bids: Array<{
          __typename?: "Bid";
          id: string;
          bidAddress: any;
          category: Category;
          nftAddress: any;
          tokenId: any;
          bidder: any;
          seller: any;
          price: any;
          status: OrderStatus;
          blockchainId: string;
          blockNumber: any;
          expiresAt: any;
          createdAt: any;
          updatedAt: any;
        }>;
        activeOrder?: {
          __typename?: "Order";
          id: string;
          marketplaceAddress: any;
          category: Category;
          nftAddress: any;
          tokenId: any;
          amount: any;
          transactionHash: any;
          owner: any;
          buyer?: any | null;
          price: any;
          status: OrderStatus;
          blockNumber: any;
          expiresAt: any;
          createdAt: any;
          updatedAt: any;
        } | null;
        character?: {
          __typename?: "Character";
          id: string;
          level: any;
          exp: any;
          characterAccount?: {
            __typename?: "CharacterAccount";
            id: string;
            contractAddress: any;
          } | null;
          attributes?: Array<{
            __typename?: "CharacterAttribute";
            id: string;
            attribute: Attribute;
            value: any;
          }> | null;
        } | null;
        item?: {
          __typename?: "Item";
          id: string;
          attributes: Array<{
            __typename?: "ItemAttribute";
            id: string;
            attribute: Attribute;
            value: any;
            isIncrease: boolean;
            isPercentage: boolean;
          }>;
        } | null;
        treasure?: {
          __typename?: "Treasure";
          id: string;
          tokenId: any;
          tokenURI?: string | null;
          name?: string | null;
          owner?: Array<{
            __typename?: "Account";
            id: string;
            address: any;
          }> | null;
        } | null;
        searchCharacterAttribute?: Array<{
          __typename?: "CharacterAttribute";
          id: string;
          attribute: Attribute;
          value: any;
        }> | null;
        searchItemAttribute?: Array<{
          __typename?: "ItemAttribute";
          id: string;
          attribute: Attribute;
          value: any;
          isIncrease: boolean;
          isPercentage: boolean;
        }> | null;
      };
      attributes?: Array<{
        __typename?: "CharacterAttribute";
        id: string;
        attribute: Attribute;
        value: any;
      }> | null;
    };
  }>;
};

export type GetCharacterAttributeByTokenIdQueryVariables = Exact<{
  tokenId: Scalars["BigInt"]["input"];
}>;

export type GetCharacterAttributeByTokenIdQuery = {
  __typename?: "Query";
  characterAttributes: Array<{
    __typename?: "CharacterAttribute";
    id: string;
    attribute: Attribute;
    value: any;
    character: {
      __typename?: "Character";
      id: string;
      level: any;
      exp: any;
      characterAccount?: {
        __typename?: "CharacterAccount";
        id: string;
        contractAddress: any;
      } | null;
      nft: {
        __typename?: "NFT";
        id: string;
        tokenId: any;
        contractAddress: any;
        category: Category;
        creator: any;
        amount: any;
        tokenURI?: string | null;
        rarity?: Rarity | null;
        name?: string | null;
        createdAt: any;
        updatedAt: any;
        soldAt?: any | null;
        transferredAt: any;
        sales: any;
        volume: any;
        searchOwner?: string | null;
        searchOrderStatus?: OrderStatus | null;
        searchOrderPrice?: any | null;
        searchOrderExpiresAt?: any | null;
        searchOrderCreatedAt?: any | null;
        searchIsCharacter?: boolean | null;
        searchCharacterAccount?: any | null;
        searchCharacterLevel?: any | null;
        searchCharacterExp?: any | null;
        searchIsTreasure?: boolean | null;
        searchIsItem?: boolean | null;
        owner: {
          __typename?: "Account";
          id: string;
          address: any;
          sales: any;
          purchases: any;
          spent: any;
          earned: any;
          nfts?: Array<{ __typename?: "NFT"; id: string }> | null;
        };
        orders: Array<{
          __typename?: "Order";
          id: string;
          marketplaceAddress: any;
          category: Category;
          nftAddress: any;
          tokenId: any;
          amount: any;
          transactionHash: any;
          owner: any;
          buyer?: any | null;
          price: any;
          status: OrderStatus;
          blockNumber: any;
          expiresAt: any;
          createdAt: any;
          updatedAt: any;
        }>;
        bids: Array<{
          __typename?: "Bid";
          id: string;
          bidAddress: any;
          category: Category;
          nftAddress: any;
          tokenId: any;
          bidder: any;
          seller: any;
          price: any;
          status: OrderStatus;
          blockchainId: string;
          blockNumber: any;
          expiresAt: any;
          createdAt: any;
          updatedAt: any;
        }>;
        activeOrder?: {
          __typename?: "Order";
          id: string;
          marketplaceAddress: any;
          category: Category;
          nftAddress: any;
          tokenId: any;
          amount: any;
          transactionHash: any;
          owner: any;
        } | null;
        character?: {
          __typename?: "Character";
          id: string;
          level: any;
          exp: any;
          characterAccount?: {
            __typename?: "CharacterAccount";
            id: string;
            contractAddress: any;
          } | null;
          attributes?: Array<{
            __typename?: "CharacterAttribute";
            id: string;
            attribute: Attribute;
            value: any;
          }> | null;
        } | null;
        item?: {
          __typename?: "Item";
          id: string;
          attributes: Array<{
            __typename?: "ItemAttribute";
            id: string;
            attribute: Attribute;
            value: any;
            isIncrease: boolean;
            isPercentage: boolean;
          }>;
        } | null;
        treasure?: {
          __typename?: "Treasure";
          id: string;
          tokenId: any;
          tokenURI?: string | null;
          name?: string | null;
          owner?: Array<{
            __typename?: "Account";
            id: string;
            address: any;
          }> | null;
        } | null;
        searchCharacterAttribute?: Array<{
          __typename?: "CharacterAttribute";
          id: string;
          attribute: Attribute;
          value: any;
        }> | null;
        searchItemAttribute?: Array<{
          __typename?: "ItemAttribute";
          id: string;
          attribute: Attribute;
          value: any;
          isIncrease: boolean;
          isPercentage: boolean;
        }> | null;
      };
      attributes?: Array<{
        __typename?: "CharacterAttribute";
        id: string;
        attribute: Attribute;
        value: any;
      }> | null;
    };
  }>;
};

export type GetAllCharactersQueryVariables = Exact<{
  first?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Character_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
}>;

export type GetAllCharactersQuery = {
  __typename?: "Query";
  characters: Array<{
    __typename?: "Character";
    id: string;
    level: any;
    exp: any;
    characterAccount?: {
      __typename?: "CharacterAccount";
      id: string;
      contractAddress: any;
    } | null;
    nft: {
      __typename?: "NFT";
      id: string;
      tokenId: any;
      contractAddress: any;
      category: Category;
      creator: any;
      amount: any;
      tokenURI?: string | null;
      rarity?: Rarity | null;
      name?: string | null;
      createdAt: any;
      updatedAt: any;
      soldAt?: any | null;
      transferredAt: any;
      sales: any;
      volume: any;
      searchOwner?: string | null;
      searchOrderStatus?: OrderStatus | null;
      searchOrderPrice?: any | null;
      searchOrderExpiresAt?: any | null;
      searchOrderCreatedAt?: any | null;
      searchIsCharacter?: boolean | null;
      searchCharacterAccount?: any | null;
      searchCharacterLevel?: any | null;
      searchCharacterExp?: any | null;
      searchIsTreasure?: boolean | null;
      searchIsItem?: boolean | null;
      owner: {
        __typename?: "Account";
        id: string;
        address: any;
        sales: any;
        purchases: any;
        spent: any;
        earned: any;
        nfts?: Array<{ __typename?: "NFT"; id: string }> | null;
      };
      orders: Array<{
        __typename?: "Order";
        id: string;
        marketplaceAddress: any;
        category: Category;
        nftAddress: any;
        tokenId: any;
        amount: any;
        transactionHash: any;
        owner: any;
        buyer?: any | null;
        price: any;
        status: OrderStatus;
        blockNumber: any;
        expiresAt: any;
        createdAt: any;
        updatedAt: any;
      }>;
      bids: Array<{
        __typename?: "Bid";
        id: string;
        bidAddress: any;
        category: Category;
        nftAddress: any;
        tokenId: any;
        bidder: any;
        seller: any;
        price: any;
        status: OrderStatus;
        blockchainId: string;
        blockNumber: any;
        expiresAt: any;
        createdAt: any;
        updatedAt: any;
      }>;
      activeOrder?: {
        __typename?: "Order";
        id: string;
        marketplaceAddress: any;
        category: Category;
        nftAddress: any;
        tokenId: any;
        amount: any;
        transactionHash: any;
        owner: any;
        buyer?: any | null;
        price: any;
        status: OrderStatus;
        blockNumber: any;
        expiresAt: any;
        createdAt: any;
        updatedAt: any;
      } | null;
      character?: {
        __typename?: "Character";
        id: string;
        level: any;
        exp: any;
        characterAccount?: {
          __typename?: "CharacterAccount";
          id: string;
          contractAddress: any;
        } | null;
        attributes?: Array<{
          __typename?: "CharacterAttribute";
          id: string;
          attribute: Attribute;
          value: any;
        }> | null;
      } | null;
      item?: {
        __typename?: "Item";
        id: string;
        attributes: Array<{
          __typename?: "ItemAttribute";
          id: string;
          attribute: Attribute;
          value: any;
          isIncrease: boolean;
          isPercentage: boolean;
        }>;
      } | null;
      treasure?: {
        __typename?: "Treasure";
        id: string;
        tokenId: any;
        tokenURI?: string | null;
        name?: string | null;
        owner?: Array<{
          __typename?: "Account";
          id: string;
          address: any;
        }> | null;
      } | null;
      searchCharacterAttribute?: Array<{
        __typename?: "CharacterAttribute";
        id: string;
        attribute: Attribute;
        value: any;
      }> | null;
      searchItemAttribute?: Array<{
        __typename?: "ItemAttribute";
        id: string;
        attribute: Attribute;
        value: any;
        isIncrease: boolean;
        isPercentage: boolean;
      }> | null;
    };
    attributes?: Array<{
      __typename?: "CharacterAttribute";
      id: string;
      attribute: Attribute;
      value: any;
    }> | null;
  }>;
};

export type GetAllCharactersFilterQueryVariables = Exact<{
  first?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Character_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  rarity?: InputMaybe<Array<Rarity>>;
  searchOrderStatus?: InputMaybe<OrderStatus>;
}>;

export type GetAllCharactersFilterQuery = {
  __typename?: "Query";
  characters: Array<{
    __typename?: "Character";
    id: string;
    level: any;
    exp: any;
    characterAccount?: {
      __typename?: "CharacterAccount";
      id: string;
      contractAddress: any;
    } | null;
    nft: {
      __typename?: "NFT";
      id: string;
      tokenId: any;
      contractAddress: any;
      category: Category;
      creator: any;
      amount: any;
      tokenURI?: string | null;
      rarity?: Rarity | null;
      name?: string | null;
      createdAt: any;
      updatedAt: any;
      soldAt?: any | null;
      transferredAt: any;
      sales: any;
      volume: any;
      searchOwner?: string | null;
      searchOrderStatus?: OrderStatus | null;
      searchOrderPrice?: any | null;
      searchOrderExpiresAt?: any | null;
      searchOrderCreatedAt?: any | null;
      searchIsCharacter?: boolean | null;
      searchCharacterAccount?: any | null;
      searchCharacterLevel?: any | null;
      searchCharacterExp?: any | null;
      searchIsTreasure?: boolean | null;
      searchIsItem?: boolean | null;
      owner: {
        __typename?: "Account";
        id: string;
        address: any;
        sales: any;
        purchases: any;
        spent: any;
        earned: any;
        nfts?: Array<{ __typename?: "NFT"; id: string }> | null;
      };
      orders: Array<{
        __typename?: "Order";
        id: string;
        marketplaceAddress: any;
        category: Category;
        nftAddress: any;
        tokenId: any;
        amount: any;
        transactionHash: any;
        owner: any;
        buyer?: any | null;
        price: any;
        status: OrderStatus;
        blockNumber: any;
        expiresAt: any;
        createdAt: any;
        updatedAt: any;
      }>;
      bids: Array<{
        __typename?: "Bid";
        id: string;
        bidAddress: any;
        category: Category;
        nftAddress: any;
        tokenId: any;
        bidder: any;
        seller: any;
        price: any;
        status: OrderStatus;
        blockchainId: string;
        blockNumber: any;
        expiresAt: any;
        createdAt: any;
        updatedAt: any;
      }>;
      activeOrder?: {
        __typename?: "Order";
        id: string;
        marketplaceAddress: any;
        category: Category;
        nftAddress: any;
        tokenId: any;
        amount: any;
        transactionHash: any;
        owner: any;
        buyer?: any | null;
        price: any;
        status: OrderStatus;
        blockNumber: any;
        expiresAt: any;
        createdAt: any;
        updatedAt: any;
      } | null;
      character?: {
        __typename?: "Character";
        id: string;
        level: any;
        exp: any;
        characterAccount?: {
          __typename?: "CharacterAccount";
          id: string;
          contractAddress: any;
        } | null;
        attributes?: Array<{
          __typename?: "CharacterAttribute";
          id: string;
          attribute: Attribute;
          value: any;
        }> | null;
      } | null;
      item?: {
        __typename?: "Item";
        id: string;
        attributes: Array<{
          __typename?: "ItemAttribute";
          id: string;
          attribute: Attribute;
          value: any;
          isIncrease: boolean;
          isPercentage: boolean;
        }>;
      } | null;
      treasure?: {
        __typename?: "Treasure";
        id: string;
        tokenId: any;
        tokenURI?: string | null;
        name?: string | null;
        owner?: Array<{
          __typename?: "Account";
          id: string;
          address: any;
        }> | null;
      } | null;
      searchCharacterAttribute?: Array<{
        __typename?: "CharacterAttribute";
        id: string;
        attribute: Attribute;
        value: any;
      }> | null;
      searchItemAttribute?: Array<{
        __typename?: "ItemAttribute";
        id: string;
        attribute: Attribute;
        value: any;
        isIncrease: boolean;
        isPercentage: boolean;
      }> | null;
    };
    attributes?: Array<{
      __typename?: "CharacterAttribute";
      id: string;
      attribute: Attribute;
      value: any;
    }> | null;
  }>;
};

export type GetCharactersByOwnerQueryVariables = Exact<{
  first?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Character_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  owner?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetCharactersByOwnerQuery = {
  __typename?: "Query";
  characters: Array<{
    __typename?: "Character";
    id: string;
    level: any;
    exp: any;
    characterAccount?: {
      __typename?: "CharacterAccount";
      id: string;
      contractAddress: any;
    } | null;
    nft: {
      __typename?: "NFT";
      id: string;
      tokenId: any;
      contractAddress: any;
      category: Category;
      creator: any;
      amount: any;
      tokenURI?: string | null;
      rarity?: Rarity | null;
      name?: string | null;
      createdAt: any;
      updatedAt: any;
      soldAt?: any | null;
      transferredAt: any;
      sales: any;
      volume: any;
      searchOwner?: string | null;
      searchOrderStatus?: OrderStatus | null;
      searchOrderPrice?: any | null;
      searchOrderExpiresAt?: any | null;
      searchOrderCreatedAt?: any | null;
      searchIsCharacter?: boolean | null;
      searchCharacterAccount?: any | null;
      searchCharacterLevel?: any | null;
      searchCharacterExp?: any | null;
      searchIsTreasure?: boolean | null;
      searchIsItem?: boolean | null;
      owner: {
        __typename?: "Account";
        id: string;
        address: any;
        sales: any;
        purchases: any;
        spent: any;
        earned: any;
        nfts?: Array<{ __typename?: "NFT"; id: string }> | null;
      };
      orders: Array<{
        __typename?: "Order";
        id: string;
        marketplaceAddress: any;
        category: Category;
        nftAddress: any;
        tokenId: any;
        amount: any;
        transactionHash: any;
        owner: any;
        buyer?: any | null;
        price: any;
        status: OrderStatus;
        blockNumber: any;
        expiresAt: any;
        createdAt: any;
        updatedAt: any;
      }>;
      bids: Array<{
        __typename?: "Bid";
        id: string;
        bidAddress: any;
        category: Category;
        nftAddress: any;
        tokenId: any;
        bidder: any;
        seller: any;
        price: any;
        status: OrderStatus;
        blockchainId: string;
        blockNumber: any;
        expiresAt: any;
        createdAt: any;
        updatedAt: any;
      }>;
      activeOrder?: {
        __typename?: "Order";
        id: string;
        marketplaceAddress: any;
        category: Category;
        nftAddress: any;
        tokenId: any;
        amount: any;
        transactionHash: any;
        owner: any;
        buyer?: any | null;
        price: any;
        status: OrderStatus;
        blockNumber: any;
        expiresAt: any;
        createdAt: any;
        updatedAt: any;
      } | null;
      character?: {
        __typename?: "Character";
        id: string;
        level: any;
        exp: any;
        characterAccount?: {
          __typename?: "CharacterAccount";
          id: string;
          contractAddress: any;
        } | null;
        attributes?: Array<{
          __typename?: "CharacterAttribute";
          id: string;
          attribute: Attribute;
          value: any;
        }> | null;
      } | null;
      item?: {
        __typename?: "Item";
        id: string;
        attributes: Array<{
          __typename?: "ItemAttribute";
          id: string;
          attribute: Attribute;
          value: any;
          isIncrease: boolean;
          isPercentage: boolean;
        }>;
      } | null;
      treasure?: {
        __typename?: "Treasure";
        id: string;
        tokenId: any;
        tokenURI?: string | null;
        name?: string | null;
        owner?: Array<{
          __typename?: "Account";
          id: string;
          address: any;
        }> | null;
      } | null;
      searchCharacterAttribute?: Array<{
        __typename?: "CharacterAttribute";
        id: string;
        attribute: Attribute;
        value: any;
      }> | null;
      searchItemAttribute?: Array<{
        __typename?: "ItemAttribute";
        id: string;
        attribute: Attribute;
        value: any;
        isIncrease: boolean;
        isPercentage: boolean;
      }> | null;
    };
    attributes?: Array<{
      __typename?: "CharacterAttribute";
      id: string;
      attribute: Attribute;
      value: any;
    }> | null;
  }>;
};

export type GetCountQueryVariables = Exact<{ [key: string]: never }>;

export type GetCountQuery = {
  __typename?: "Query";
  counts: Array<{
    __typename?: "Count";
    id: string;
    orderTotal: any;
    orderCharacterTotal: any;
    orderTreasureTotal: any;
    orderItemTotal: any;
    characterTotal: any;
    treasureTotal: any;
    itemTotal: any;
    characterStarted: any;
    itemStarted: any;
    salesTotal: any;
    creatorEarningTotal: any;
    daoEarningTotal: any;
  }>;
};

export type GetItemAttributesByTokenIdQueryVariables = Exact<{
  tokenId: Scalars["BigInt"]["input"];
}>;

export type GetItemAttributesByTokenIdQuery = {
  __typename?: "Query";
  itemAttributes: Array<{
    __typename?: "ItemAttribute";
    id: string;
    attribute: Attribute;
    value: any;
    isIncrease: boolean;
    isPercentage: boolean;
    item: {
      __typename?: "Item";
      id: string;
      nft: {
        __typename?: "NFT";
        id: string;
        tokenId: any;
        contractAddress: any;
        category: Category;
        creator: any;
        amount: any;
        tokenURI?: string | null;
        rarity?: Rarity | null;
        name?: string | null;
        createdAt: any;
        updatedAt: any;
        soldAt?: any | null;
        transferredAt: any;
        sales: any;
        volume: any;
        searchOwner?: string | null;
        searchOrderStatus?: OrderStatus | null;
        searchOrderPrice?: any | null;
        searchOrderExpiresAt?: any | null;
        searchOrderCreatedAt?: any | null;
        searchIsCharacter?: boolean | null;
        searchCharacterAccount?: any | null;
        searchCharacterLevel?: any | null;
        searchCharacterExp?: any | null;
        searchIsTreasure?: boolean | null;
        searchIsItem?: boolean | null;
        owner: {
          __typename?: "Account";
          id: string;
          address: any;
          sales: any;
          purchases: any;
          spent: any;
          earned: any;
          nfts?: Array<{ __typename?: "NFT"; id: string }> | null;
        };
        orders: Array<{
          __typename?: "Order";
          id: string;
          marketplaceAddress: any;
          category: Category;
          nftAddress: any;
          tokenId: any;
          amount: any;
          transactionHash: any;
          owner: any;
          buyer?: any | null;
          price: any;
          status: OrderStatus;
          blockNumber: any;
          expiresAt: any;
          createdAt: any;
          updatedAt: any;
        }>;
        bids: Array<{
          __typename?: "Bid";
          id: string;
          bidAddress: any;
          category: Category;
          nftAddress: any;
          tokenId: any;
          bidder: any;
          seller: any;
          price: any;
          status: OrderStatus;
          blockchainId: string;
          blockNumber: any;
          expiresAt: any;
          createdAt: any;
          updatedAt: any;
        }>;
        activeOrder?: {
          __typename?: "Order";
          id: string;
          marketplaceAddress: any;
          category: Category;
          nftAddress: any;
          tokenId: any;
          amount: any;
          transactionHash: any;
          owner: any;
          buyer?: any | null;
          price: any;
          status: OrderStatus;
          blockNumber: any;
          expiresAt: any;
          createdAt: any;
          updatedAt: any;
        } | null;
        character?: {
          __typename?: "Character";
          id: string;
          level: any;
          exp: any;
          characterAccount?: {
            __typename?: "CharacterAccount";
            id: string;
            contractAddress: any;
          } | null;
          attributes?: Array<{
            __typename?: "CharacterAttribute";
            id: string;
            attribute: Attribute;
            value: any;
          }> | null;
        } | null;
        item?: {
          __typename?: "Item";
          id: string;
          attributes: Array<{
            __typename?: "ItemAttribute";
            id: string;
            attribute: Attribute;
            value: any;
            isIncrease: boolean;
            isPercentage: boolean;
          }>;
        } | null;
        treasure?: {
          __typename?: "Treasure";
          id: string;
          tokenId: any;
          tokenURI?: string | null;
          name?: string | null;
          owner?: Array<{
            __typename?: "Account";
            id: string;
            address: any;
          }> | null;
        } | null;
        searchCharacterAttribute?: Array<{
          __typename?: "CharacterAttribute";
          id: string;
          attribute: Attribute;
          value: any;
        }> | null;
        searchItemAttribute?: Array<{
          __typename?: "ItemAttribute";
          id: string;
          attribute: Attribute;
          value: any;
          isIncrease: boolean;
          isPercentage: boolean;
        }> | null;
      };
      attributes: Array<{
        __typename?: "ItemAttribute";
        id: string;
        attribute: Attribute;
        value: any;
        isIncrease: boolean;
        isPercentage: boolean;
      }>;
    };
  }>;
};

export type GetAllItemsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllItemsQuery = {
  __typename?: "Query";
  items: Array<{
    __typename?: "Item";
    id: string;
    nft: {
      __typename?: "NFT";
      id: string;
      tokenId: any;
      contractAddress: any;
      category: Category;
      creator: any;
      amount: any;
      tokenURI?: string | null;
      rarity?: Rarity | null;
      name?: string | null;
      createdAt: any;
      updatedAt: any;
      soldAt?: any | null;
      transferredAt: any;
      sales: any;
      volume: any;
      searchOwner?: string | null;
      searchOrderStatus?: OrderStatus | null;
      searchOrderPrice?: any | null;
      searchOrderExpiresAt?: any | null;
      searchOrderCreatedAt?: any | null;
      searchIsCharacter?: boolean | null;
      searchCharacterAccount?: any | null;
      searchCharacterLevel?: any | null;
      searchCharacterExp?: any | null;
      searchIsTreasure?: boolean | null;
      searchIsItem?: boolean | null;
      owner: {
        __typename?: "Account";
        id: string;
        address: any;
        sales: any;
        purchases: any;
        spent: any;
        earned: any;
        nfts?: Array<{ __typename?: "NFT"; id: string }> | null;
      };
      orders: Array<{
        __typename?: "Order";
        id: string;
        marketplaceAddress: any;
        category: Category;
        nftAddress: any;
        tokenId: any;
        amount: any;
        transactionHash: any;
        owner: any;
        buyer?: any | null;
        price: any;
        status: OrderStatus;
        blockNumber: any;
        expiresAt: any;
        createdAt: any;
        updatedAt: any;
      }>;
      bids: Array<{
        __typename?: "Bid";
        id: string;
        bidAddress: any;
        category: Category;
        nftAddress: any;
        tokenId: any;
        bidder: any;
        seller: any;
        price: any;
        status: OrderStatus;
        blockchainId: string;
        blockNumber: any;
        expiresAt: any;
        createdAt: any;
        updatedAt: any;
      }>;
      activeOrder?: {
        __typename?: "Order";
        id: string;
        marketplaceAddress: any;
        category: Category;
        nftAddress: any;
        tokenId: any;
        amount: any;
        transactionHash: any;
        owner: any;
        buyer?: any | null;
        price: any;
        status: OrderStatus;
        blockNumber: any;
        expiresAt: any;
        createdAt: any;
        updatedAt: any;
      } | null;
      character?: {
        __typename?: "Character";
        id: string;
        level: any;
        exp: any;
        characterAccount?: {
          __typename?: "CharacterAccount";
          id: string;
          contractAddress: any;
        } | null;
        attributes?: Array<{
          __typename?: "CharacterAttribute";
          id: string;
          attribute: Attribute;
          value: any;
        }> | null;
      } | null;
      item?: {
        __typename?: "Item";
        id: string;
        attributes: Array<{
          __typename?: "ItemAttribute";
          id: string;
          attribute: Attribute;
          value: any;
          isIncrease: boolean;
          isPercentage: boolean;
        }>;
      } | null;
      treasure?: {
        __typename?: "Treasure";
        id: string;
        tokenId: any;
        tokenURI?: string | null;
        name?: string | null;
        owner?: Array<{
          __typename?: "Account";
          id: string;
          address: any;
        }> | null;
      } | null;
      searchCharacterAttribute?: Array<{
        __typename?: "CharacterAttribute";
        id: string;
        attribute: Attribute;
        value: any;
      }> | null;
      searchItemAttribute?: Array<{
        __typename?: "ItemAttribute";
        id: string;
        attribute: Attribute;
        value: any;
        isIncrease: boolean;
        isPercentage: boolean;
      }> | null;
    };
    attributes: Array<{
      __typename?: "ItemAttribute";
      id: string;
      attribute: Attribute;
      value: any;
      isIncrease: boolean;
      isPercentage: boolean;
    }>;
  }>;
};

export type GetItemByNftTokenIdQueryVariables = Exact<{
  tokenId: Scalars["BigInt"]["input"];
}>;

export type GetItemByNftTokenIdQuery = {
  __typename?: "Query";
  items: Array<{
    __typename?: "Item";
    id: string;
    nft: {
      __typename?: "NFT";
      id: string;
      tokenId: any;
      contractAddress: any;
      category: Category;
      creator: any;
      amount: any;
      tokenURI?: string | null;
      rarity?: Rarity | null;
      name?: string | null;
      createdAt: any;
      updatedAt: any;
      soldAt?: any | null;
      transferredAt: any;
      sales: any;
      volume: any;
      searchOwner?: string | null;
      searchOrderStatus?: OrderStatus | null;
      searchOrderPrice?: any | null;
      searchOrderExpiresAt?: any | null;
      searchOrderCreatedAt?: any | null;
      searchIsCharacter?: boolean | null;
      searchCharacterAccount?: any | null;
      searchCharacterLevel?: any | null;
      searchCharacterExp?: any | null;
      searchIsTreasure?: boolean | null;
      searchIsItem?: boolean | null;
      owner: {
        __typename?: "Account";
        id: string;
        address: any;
        sales: any;
        purchases: any;
        spent: any;
        earned: any;
        nfts?: Array<{ __typename?: "NFT"; id: string }> | null;
      };
      orders: Array<{
        __typename?: "Order";
        id: string;
        marketplaceAddress: any;
        category: Category;
        nftAddress: any;
        tokenId: any;
        amount: any;
        transactionHash: any;
        owner: any;
        buyer?: any | null;
        price: any;
        status: OrderStatus;
        blockNumber: any;
        expiresAt: any;
        createdAt: any;
        updatedAt: any;
      }>;
      bids: Array<{
        __typename?: "Bid";
        id: string;
        bidAddress: any;
        category: Category;
        nftAddress: any;
        tokenId: any;
        bidder: any;
        seller: any;
        price: any;
        status: OrderStatus;
        blockchainId: string;
        blockNumber: any;
        expiresAt: any;
        createdAt: any;
        updatedAt: any;
      }>;
      activeOrder?: {
        __typename?: "Order";
        id: string;
        marketplaceAddress: any;
        category: Category;
        nftAddress: any;
        tokenId: any;
        amount: any;
        transactionHash: any;
        owner: any;
        buyer?: any | null;
        price: any;
        status: OrderStatus;
        blockNumber: any;
        expiresAt: any;
        createdAt: any;
        updatedAt: any;
      } | null;
      character?: {
        __typename?: "Character";
        id: string;
        level: any;
        exp: any;
        characterAccount?: {
          __typename?: "CharacterAccount";
          id: string;
          contractAddress: any;
        } | null;
        attributes?: Array<{
          __typename?: "CharacterAttribute";
          id: string;
          attribute: Attribute;
          value: any;
        }> | null;
      } | null;
      item?: {
        __typename?: "Item";
        id: string;
        attributes: Array<{
          __typename?: "ItemAttribute";
          id: string;
          attribute: Attribute;
          value: any;
          isIncrease: boolean;
          isPercentage: boolean;
        }>;
      } | null;
      treasure?: {
        __typename?: "Treasure";
        id: string;
        tokenId: any;
        tokenURI?: string | null;
        name?: string | null;
        owner?: Array<{
          __typename?: "Account";
          id: string;
          address: any;
        }> | null;
      } | null;
      searchCharacterAttribute?: Array<{
        __typename?: "CharacterAttribute";
        id: string;
        attribute: Attribute;
        value: any;
      }> | null;
      searchItemAttribute?: Array<{
        __typename?: "ItemAttribute";
        id: string;
        attribute: Attribute;
        value: any;
        isIncrease: boolean;
        isPercentage: boolean;
      }> | null;
    };
    attributes: Array<{
      __typename?: "ItemAttribute";
      id: string;
      attribute: Attribute;
      value: any;
      isIncrease: boolean;
      isPercentage: boolean;
    }>;
  }>;
};

export type GetAllNfTsQueryVariables = Exact<{
  first?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Nft_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
}>;

export type GetAllNfTsQuery = {
  __typename?: "Query";
  nfts: Array<{
    __typename?: "NFT";
    id: string;
    tokenId: any;
    contractAddress: any;
    category: Category;
    creator: any;
    amount: any;
    tokenURI?: string | null;
    rarity?: Rarity | null;
    name?: string | null;
    createdAt: any;
    updatedAt: any;
    soldAt?: any | null;
    transferredAt: any;
    sales: any;
    volume: any;
    searchOwner?: string | null;
    searchOrderStatus?: OrderStatus | null;
    searchOrderPrice?: any | null;
    searchOrderExpiresAt?: any | null;
    searchOrderCreatedAt?: any | null;
    searchIsCharacter?: boolean | null;
    searchCharacterAccount?: any | null;
    searchCharacterLevel?: any | null;
    searchCharacterExp?: any | null;
    searchIsTreasure?: boolean | null;
    searchIsItem?: boolean | null;
    owner: {
      __typename?: "Account";
      id: string;
      address: any;
      sales: any;
      purchases: any;
      spent: any;
      earned: any;
      nfts?: Array<{ __typename?: "NFT"; id: string }> | null;
    };
    orders: Array<{
      __typename?: "Order";
      id: string;
      marketplaceAddress: any;
      category: Category;
      nftAddress: any;
      tokenId: any;
      amount: any;
      transactionHash: any;
      owner: any;
      buyer?: any | null;
      price: any;
      status: OrderStatus;
      blockNumber: any;
      expiresAt: any;
      createdAt: any;
      updatedAt: any;
    }>;
    bids: Array<{
      __typename?: "Bid";
      id: string;
      bidAddress: any;
      category: Category;
      nftAddress: any;
      tokenId: any;
      bidder: any;
      seller: any;
      price: any;
      status: OrderStatus;
      blockchainId: string;
      blockNumber: any;
      expiresAt: any;
      createdAt: any;
      updatedAt: any;
    }>;
    activeOrder?: {
      __typename?: "Order";
      id: string;
      marketplaceAddress: any;
      category: Category;
      nftAddress: any;
      tokenId: any;
      amount: any;
      transactionHash: any;
      owner: any;
      buyer?: any | null;
      price: any;
      status: OrderStatus;
      blockNumber: any;
      expiresAt: any;
      createdAt: any;
      updatedAt: any;
    } | null;
    character?: {
      __typename?: "Character";
      id: string;
      level: any;
      exp: any;
      characterAccount?: {
        __typename?: "CharacterAccount";
        id: string;
        contractAddress: any;
      } | null;
      attributes?: Array<{
        __typename?: "CharacterAttribute";
        id: string;
        attribute: Attribute;
        value: any;
      }> | null;
    } | null;
    item?: {
      __typename?: "Item";
      id: string;
      attributes: Array<{
        __typename?: "ItemAttribute";
        id: string;
        attribute: Attribute;
        value: any;
        isIncrease: boolean;
        isPercentage: boolean;
      }>;
    } | null;
    treasure?: {
      __typename?: "Treasure";
      id: string;
      tokenId: any;
      tokenURI?: string | null;
      name?: string | null;
      owner?: Array<{
        __typename?: "Account";
        id: string;
        address: any;
      }> | null;
    } | null;
    searchCharacterAttribute?: Array<{
      __typename?: "CharacterAttribute";
      id: string;
      attribute: Attribute;
      value: any;
    }> | null;
    searchItemAttribute?: Array<{
      __typename?: "ItemAttribute";
      id: string;
      attribute: Attribute;
      value: any;
      isIncrease: boolean;
      isPercentage: boolean;
    }> | null;
  }>;
};

export type GetNftByOwnerQueryVariables = Exact<{
  first?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  searchOwner: Scalars["String"]["input"];
  orderBy?: InputMaybe<Nft_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
}>;

export type GetNftByOwnerQuery = {
  __typename?: "Query";
  nfts: Array<{
    __typename?: "NFT";
    id: string;
    tokenId: any;
    contractAddress: any;
    category: Category;
    creator: any;
    amount: any;
    tokenURI?: string | null;
    rarity?: Rarity | null;
    name?: string | null;
    createdAt: any;
    updatedAt: any;
    soldAt?: any | null;
    transferredAt: any;
    sales: any;
    volume: any;
    searchOwner?: string | null;
    searchOrderStatus?: OrderStatus | null;
    searchOrderPrice?: any | null;
    searchOrderExpiresAt?: any | null;
    searchOrderCreatedAt?: any | null;
    searchIsCharacter?: boolean | null;
    searchCharacterAccount?: any | null;
    searchCharacterLevel?: any | null;
    searchCharacterExp?: any | null;
    searchIsTreasure?: boolean | null;
    searchIsItem?: boolean | null;
    owner: {
      __typename?: "Account";
      id: string;
      address: any;
      sales: any;
      purchases: any;
      spent: any;
      earned: any;
      nfts?: Array<{ __typename?: "NFT"; id: string }> | null;
    };
    orders: Array<{
      __typename?: "Order";
      id: string;
      marketplaceAddress: any;
      category: Category;
      nftAddress: any;
      tokenId: any;
      amount: any;
      transactionHash: any;
      owner: any;
      buyer?: any | null;
      price: any;
      status: OrderStatus;
      blockNumber: any;
      expiresAt: any;
      createdAt: any;
      updatedAt: any;
    }>;
    bids: Array<{
      __typename?: "Bid";
      id: string;
      bidAddress: any;
      category: Category;
      nftAddress: any;
      tokenId: any;
      bidder: any;
      seller: any;
      price: any;
      status: OrderStatus;
      blockchainId: string;
      blockNumber: any;
      expiresAt: any;
      createdAt: any;
      updatedAt: any;
    }>;
    activeOrder?: {
      __typename?: "Order";
      id: string;
      marketplaceAddress: any;
      category: Category;
      nftAddress: any;
      tokenId: any;
      amount: any;
      transactionHash: any;
      owner: any;
      buyer?: any | null;
      price: any;
      status: OrderStatus;
      blockNumber: any;
      expiresAt: any;
      createdAt: any;
      updatedAt: any;
    } | null;
    character?: {
      __typename?: "Character";
      id: string;
      level: any;
      exp: any;
      characterAccount?: {
        __typename?: "CharacterAccount";
        id: string;
        contractAddress: any;
      } | null;
      attributes?: Array<{
        __typename?: "CharacterAttribute";
        id: string;
        attribute: Attribute;
        value: any;
      }> | null;
    } | null;
    item?: {
      __typename?: "Item";
      id: string;
      attributes: Array<{
        __typename?: "ItemAttribute";
        id: string;
        attribute: Attribute;
        value: any;
        isIncrease: boolean;
        isPercentage: boolean;
      }>;
    } | null;
    treasure?: {
      __typename?: "Treasure";
      id: string;
      tokenId: any;
      tokenURI?: string | null;
      name?: string | null;
      owner?: Array<{
        __typename?: "Account";
        id: string;
        address: any;
      }> | null;
    } | null;
    searchCharacterAttribute?: Array<{
      __typename?: "CharacterAttribute";
      id: string;
      attribute: Attribute;
      value: any;
    }> | null;
    searchItemAttribute?: Array<{
      __typename?: "ItemAttribute";
      id: string;
      attribute: Attribute;
      value: any;
      isIncrease: boolean;
      isPercentage: boolean;
    }> | null;
  }>;
};

export type GetNftByTokenIdQueryVariables = Exact<{
  tokenId: Scalars["BigInt"]["input"];
}>;

export type GetNftByTokenIdQuery = {
  __typename?: "Query";
  nfts: Array<{
    __typename?: "NFT";
    id: string;
    tokenId: any;
    contractAddress: any;
    category: Category;
    creator: any;
    amount: any;
    tokenURI?: string | null;
    rarity?: Rarity | null;
    name?: string | null;
    createdAt: any;
    updatedAt: any;
    soldAt?: any | null;
    transferredAt: any;
    sales: any;
    volume: any;
    searchOwner?: string | null;
    searchOrderStatus?: OrderStatus | null;
    searchOrderPrice?: any | null;
    searchOrderExpiresAt?: any | null;
    searchOrderCreatedAt?: any | null;
    searchIsCharacter?: boolean | null;
    searchCharacterAccount?: any | null;
    searchCharacterLevel?: any | null;
    searchCharacterExp?: any | null;
    searchIsTreasure?: boolean | null;
    searchIsItem?: boolean | null;
    owner: {
      __typename?: "Account";
      id: string;
      address: any;
      sales: any;
      purchases: any;
      spent: any;
      earned: any;
      nfts?: Array<{ __typename?: "NFT"; id: string }> | null;
    };
    orders: Array<{
      __typename?: "Order";
      id: string;
      marketplaceAddress: any;
      category: Category;
      nftAddress: any;
      tokenId: any;
      amount: any;
      transactionHash: any;
      owner: any;
      buyer?: any | null;
      price: any;
      status: OrderStatus;
      blockNumber: any;
      expiresAt: any;
      createdAt: any;
      updatedAt: any;
    }>;
    bids: Array<{
      __typename?: "Bid";
      id: string;
      bidAddress: any;
      category: Category;
      nftAddress: any;
      tokenId: any;
      bidder: any;
      seller: any;
      price: any;
      status: OrderStatus;
      blockchainId: string;
      blockNumber: any;
      expiresAt: any;
      createdAt: any;
      updatedAt: any;
    }>;
    activeOrder?: {
      __typename?: "Order";
      id: string;
      marketplaceAddress: any;
      category: Category;
      nftAddress: any;
      tokenId: any;
      amount: any;
      transactionHash: any;
      owner: any;
      buyer?: any | null;
      price: any;
      status: OrderStatus;
      blockNumber: any;
      expiresAt: any;
      createdAt: any;
      updatedAt: any;
    } | null;
    character?: {
      __typename?: "Character";
      id: string;
      level: any;
      exp: any;
      characterAccount?: {
        __typename?: "CharacterAccount";
        id: string;
        contractAddress: any;
      } | null;
      attributes?: Array<{
        __typename?: "CharacterAttribute";
        id: string;
        attribute: Attribute;
        value: any;
      }> | null;
    } | null;
    item?: {
      __typename?: "Item";
      id: string;
      attributes: Array<{
        __typename?: "ItemAttribute";
        id: string;
        attribute: Attribute;
        value: any;
        isIncrease: boolean;
        isPercentage: boolean;
      }>;
    } | null;
    treasure?: {
      __typename?: "Treasure";
      id: string;
      tokenId: any;
      tokenURI?: string | null;
      name?: string | null;
      owner?: Array<{
        __typename?: "Account";
        id: string;
        address: any;
      }> | null;
    } | null;
    searchCharacterAttribute?: Array<{
      __typename?: "CharacterAttribute";
      id: string;
      attribute: Attribute;
      value: any;
    }> | null;
    searchItemAttribute?: Array<{
      __typename?: "ItemAttribute";
      id: string;
      attribute: Attribute;
      value: any;
      isIncrease: boolean;
      isPercentage: boolean;
    }> | null;
  }>;
};

export type GetAllOrdersQueryVariables = Exact<{
  first?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Order_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
}>;

export type GetAllOrdersQuery = {
  __typename?: "Query";
  orders: Array<{
    __typename?: "Order";
    id: string;
    marketplaceAddress: any;
    category: Category;
    nftAddress: any;
    tokenId: any;
    amount: any;
    transactionHash: any;
    owner: any;
    buyer?: any | null;
    price: any;
    status: OrderStatus;
    blockNumber: any;
    expiresAt: any;
    createdAt: any;
    updatedAt: any;
    nft?: {
      __typename?: "NFT";
      id: string;
      tokenId: any;
      contractAddress: any;
      category: Category;
      creator: any;
      amount: any;
      tokenURI?: string | null;
      rarity?: Rarity | null;
      name?: string | null;
      createdAt: any;
      updatedAt: any;
      soldAt?: any | null;
      transferredAt: any;
      sales: any;
      volume: any;
      searchOwner?: string | null;
      searchOrderStatus?: OrderStatus | null;
      searchOrderPrice?: any | null;
      searchOrderExpiresAt?: any | null;
      searchOrderCreatedAt?: any | null;
      searchIsCharacter?: boolean | null;
      searchCharacterAccount?: any | null;
      searchCharacterLevel?: any | null;
      searchCharacterExp?: any | null;
      searchIsTreasure?: boolean | null;
      searchIsItem?: boolean | null;
      owner: {
        __typename?: "Account";
        id: string;
        address: any;
        sales: any;
        purchases: any;
        spent: any;
        earned: any;
        nfts?: Array<{ __typename?: "NFT"; id: string }> | null;
      };
      orders: Array<{ __typename?: "Order"; id: string }>;
      bids: Array<{ __typename?: "Bid"; id: string }>;
      activeOrder?: { __typename?: "Order"; id: string } | null;
      character?: {
        __typename?: "Character";
        id: string;
        level: any;
        exp: any;
        characterAccount?: {
          __typename?: "CharacterAccount";
          id: string;
          contractAddress: any;
        } | null;
        attributes?: Array<{
          __typename?: "CharacterAttribute";
          id: string;
          attribute: Attribute;
          value: any;
        }> | null;
      } | null;
      item?: {
        __typename?: "Item";
        id: string;
        attributes: Array<{
          __typename?: "ItemAttribute";
          id: string;
          attribute: Attribute;
          value: any;
          isIncrease: boolean;
          isPercentage: boolean;
        }>;
      } | null;
      treasure?: {
        __typename?: "Treasure";
        id: string;
        tokenId: any;
        tokenURI?: string | null;
        name?: string | null;
        owner?: Array<{
          __typename?: "Account";
          id: string;
          address: any;
        }> | null;
      } | null;
      searchCharacterAttribute?: Array<{
        __typename?: "CharacterAttribute";
        id: string;
        attribute: Attribute;
        value: any;
      }> | null;
      searchItemAttribute?: Array<{
        __typename?: "ItemAttribute";
        id: string;
        attribute: Attribute;
        value: any;
        isIncrease: boolean;
        isPercentage: boolean;
      }> | null;
    } | null;
  }>;
};

export type GetOrdersByStatusQueryVariables = Exact<{
  first?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Order_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  status: OrderStatus;
}>;

export type GetOrdersByStatusQuery = {
  __typename?: "Query";
  orders: Array<{
    __typename?: "Order";
    id: string;
    marketplaceAddress: any;
    category: Category;
    nftAddress: any;
    tokenId: any;
    amount: any;
    transactionHash: any;
    owner: any;
    buyer?: any | null;
    price: any;
    status: OrderStatus;
    blockNumber: any;
    expiresAt: any;
    createdAt: any;
    updatedAt: any;
    nft?: {
      __typename?: "NFT";
      id: string;
      tokenId: any;
      contractAddress: any;
      category: Category;
      creator: any;
      amount: any;
      tokenURI?: string | null;
      rarity?: Rarity | null;
      name?: string | null;
      createdAt: any;
      updatedAt: any;
      soldAt?: any | null;
      transferredAt: any;
      sales: any;
      volume: any;
      searchOwner?: string | null;
      searchOrderStatus?: OrderStatus | null;
      searchOrderPrice?: any | null;
      searchOrderExpiresAt?: any | null;
      searchOrderCreatedAt?: any | null;
      searchIsCharacter?: boolean | null;
      searchCharacterAccount?: any | null;
      searchCharacterLevel?: any | null;
      searchCharacterExp?: any | null;
      searchIsTreasure?: boolean | null;
      searchIsItem?: boolean | null;
      owner: {
        __typename?: "Account";
        id: string;
        address: any;
        sales: any;
        purchases: any;
        spent: any;
        earned: any;
        nfts?: Array<{ __typename?: "NFT"; id: string }> | null;
      };
      orders: Array<{ __typename?: "Order"; id: string }>;
      bids: Array<{ __typename?: "Bid"; id: string }>;
      activeOrder?: { __typename?: "Order"; id: string } | null;
      character?: {
        __typename?: "Character";
        id: string;
        level: any;
        exp: any;
        characterAccount?: {
          __typename?: "CharacterAccount";
          id: string;
          contractAddress: any;
        } | null;
        attributes?: Array<{
          __typename?: "CharacterAttribute";
          id: string;
          attribute: Attribute;
          value: any;
        }> | null;
      } | null;
      item?: {
        __typename?: "Item";
        id: string;
        attributes: Array<{
          __typename?: "ItemAttribute";
          id: string;
          attribute: Attribute;
          value: any;
          isIncrease: boolean;
          isPercentage: boolean;
        }>;
      } | null;
      treasure?: {
        __typename?: "Treasure";
        id: string;
        tokenId: any;
        tokenURI?: string | null;
        name?: string | null;
        owner?: Array<{
          __typename?: "Account";
          id: string;
          address: any;
        }> | null;
      } | null;
      searchCharacterAttribute?: Array<{
        __typename?: "CharacterAttribute";
        id: string;
        attribute: Attribute;
        value: any;
      }> | null;
      searchItemAttribute?: Array<{
        __typename?: "ItemAttribute";
        id: string;
        attribute: Attribute;
        value: any;
        isIncrease: boolean;
        isPercentage: boolean;
      }> | null;
    } | null;
  }>;
};

export type GetOrdersByTokenIdQueryVariables = Exact<{
  first?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Order_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  tokenId: Scalars["BigInt"]["input"];
}>;

export type GetOrdersByTokenIdQuery = {
  __typename?: "Query";
  orders: Array<{
    __typename?: "Order";
    id: string;
    marketplaceAddress: any;
    category: Category;
    nftAddress: any;
    tokenId: any;
    amount: any;
    transactionHash: any;
    owner: any;
    buyer?: any | null;
    price: any;
    status: OrderStatus;
    blockNumber: any;
    expiresAt: any;
    createdAt: any;
    updatedAt: any;
    nft?: {
      __typename?: "NFT";
      id: string;
      tokenId: any;
      contractAddress: any;
      category: Category;
      creator: any;
      amount: any;
      tokenURI?: string | null;
      rarity?: Rarity | null;
      name?: string | null;
      createdAt: any;
      updatedAt: any;
      soldAt?: any | null;
      transferredAt: any;
      sales: any;
      volume: any;
      searchOwner?: string | null;
      searchOrderStatus?: OrderStatus | null;
      searchOrderPrice?: any | null;
      searchOrderExpiresAt?: any | null;
      searchOrderCreatedAt?: any | null;
      searchIsCharacter?: boolean | null;
      searchCharacterAccount?: any | null;
      searchCharacterLevel?: any | null;
      searchCharacterExp?: any | null;
      searchIsTreasure?: boolean | null;
      searchIsItem?: boolean | null;
      owner: {
        __typename?: "Account";
        id: string;
        address: any;
        sales: any;
        purchases: any;
        spent: any;
        earned: any;
        nfts?: Array<{ __typename?: "NFT"; id: string }> | null;
      };
      orders: Array<{ __typename?: "Order"; id: string }>;
      bids: Array<{ __typename?: "Bid"; id: string }>;
      activeOrder?: { __typename?: "Order"; id: string } | null;
      character?: {
        __typename?: "Character";
        id: string;
        level: any;
        exp: any;
        characterAccount?: {
          __typename?: "CharacterAccount";
          id: string;
          contractAddress: any;
        } | null;
        attributes?: Array<{
          __typename?: "CharacterAttribute";
          id: string;
          attribute: Attribute;
          value: any;
        }> | null;
      } | null;
      item?: {
        __typename?: "Item";
        id: string;
        attributes: Array<{
          __typename?: "ItemAttribute";
          id: string;
          attribute: Attribute;
          value: any;
          isIncrease: boolean;
          isPercentage: boolean;
        }>;
      } | null;
      treasure?: {
        __typename?: "Treasure";
        id: string;
        tokenId: any;
        tokenURI?: string | null;
        name?: string | null;
        owner?: Array<{
          __typename?: "Account";
          id: string;
          address: any;
        }> | null;
      } | null;
      searchCharacterAttribute?: Array<{
        __typename?: "CharacterAttribute";
        id: string;
        attribute: Attribute;
        value: any;
      }> | null;
      searchItemAttribute?: Array<{
        __typename?: "ItemAttribute";
        id: string;
        attribute: Attribute;
        value: any;
        isIncrease: boolean;
        isPercentage: boolean;
      }> | null;
    } | null;
  }>;
};

export type GetOrdersByTokenIdAndStatusQueryVariables = Exact<{
  first?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Order_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  tokenId: Scalars["BigInt"]["input"];
  status: OrderStatus;
}>;

export type GetOrdersByTokenIdAndStatusQuery = {
  __typename?: "Query";
  orders: Array<{
    __typename?: "Order";
    id: string;
    marketplaceAddress: any;
    category: Category;
    nftAddress: any;
    tokenId: any;
    amount: any;
    transactionHash: any;
    owner: any;
    buyer?: any | null;
    price: any;
    status: OrderStatus;
    blockNumber: any;
    expiresAt: any;
    createdAt: any;
    updatedAt: any;
    nft?: {
      __typename?: "NFT";
      id: string;
      tokenId: any;
      contractAddress: any;
      category: Category;
      creator: any;
      amount: any;
      tokenURI?: string | null;
      rarity?: Rarity | null;
      name?: string | null;
      createdAt: any;
      updatedAt: any;
      soldAt?: any | null;
      transferredAt: any;
      sales: any;
      volume: any;
      searchOwner?: string | null;
      searchOrderStatus?: OrderStatus | null;
      searchOrderPrice?: any | null;
      searchOrderExpiresAt?: any | null;
      searchOrderCreatedAt?: any | null;
      searchIsCharacter?: boolean | null;
      searchCharacterAccount?: any | null;
      searchCharacterLevel?: any | null;
      searchCharacterExp?: any | null;
      searchIsTreasure?: boolean | null;
      searchIsItem?: boolean | null;
      owner: {
        __typename?: "Account";
        id: string;
        address: any;
        sales: any;
        purchases: any;
        spent: any;
        earned: any;
        nfts?: Array<{ __typename?: "NFT"; id: string }> | null;
      };
      orders: Array<{ __typename?: "Order"; id: string }>;
      bids: Array<{ __typename?: "Bid"; id: string }>;
      activeOrder?: { __typename?: "Order"; id: string } | null;
      character?: {
        __typename?: "Character";
        id: string;
        level: any;
        exp: any;
        characterAccount?: {
          __typename?: "CharacterAccount";
          id: string;
          contractAddress: any;
        } | null;
        attributes?: Array<{
          __typename?: "CharacterAttribute";
          id: string;
          attribute: Attribute;
          value: any;
        }> | null;
      } | null;
      item?: {
        __typename?: "Item";
        id: string;
        attributes: Array<{
          __typename?: "ItemAttribute";
          id: string;
          attribute: Attribute;
          value: any;
          isIncrease: boolean;
          isPercentage: boolean;
        }>;
      } | null;
      treasure?: {
        __typename?: "Treasure";
        id: string;
        tokenId: any;
        tokenURI?: string | null;
        name?: string | null;
        owner?: Array<{
          __typename?: "Account";
          id: string;
          address: any;
        }> | null;
      } | null;
      searchCharacterAttribute?: Array<{
        __typename?: "CharacterAttribute";
        id: string;
        attribute: Attribute;
        value: any;
      }> | null;
      searchItemAttribute?: Array<{
        __typename?: "ItemAttribute";
        id: string;
        attribute: Attribute;
        value: any;
        isIncrease: boolean;
        isPercentage: boolean;
      }> | null;
    } | null;
  }>;
};

export type GetSalesQueryVariables = Exact<{ [key: string]: never }>;

export type GetSalesQuery = {
  __typename?: "Query";
  sales: Array<{
    __typename?: "Sale";
    id: string;
    type: SaleType;
    buyer: any;
    seller: any;
    price: any;
    amount: any;
    timestamp: any;
    transactionHash: any;
    searchTokenId: any;
    searchContractAddress: any;
    searchCategory: Category;
    nft: {
      __typename?: "NFT";
      id: string;
      tokenId: any;
      contractAddress: any;
      category: Category;
      creator: any;
      amount: any;
      tokenURI?: string | null;
      rarity?: Rarity | null;
      name?: string | null;
      createdAt: any;
      updatedAt: any;
      soldAt?: any | null;
      transferredAt: any;
      sales: any;
      volume: any;
      searchOwner?: string | null;
      searchOrderStatus?: OrderStatus | null;
      searchOrderPrice?: any | null;
      searchOrderExpiresAt?: any | null;
      searchOrderCreatedAt?: any | null;
      searchIsCharacter?: boolean | null;
      searchCharacterAccount?: any | null;
      searchCharacterLevel?: any | null;
      searchCharacterExp?: any | null;
      searchIsTreasure?: boolean | null;
      searchIsItem?: boolean | null;
      owner: {
        __typename?: "Account";
        id: string;
        address: any;
        sales: any;
        purchases: any;
        spent: any;
        earned: any;
        nfts?: Array<{ __typename?: "NFT"; id: string }> | null;
      };
      orders: Array<{
        __typename?: "Order";
        id: string;
        marketplaceAddress: any;
        category: Category;
        nftAddress: any;
        tokenId: any;
        amount: any;
        transactionHash: any;
        owner: any;
        buyer?: any | null;
        price: any;
        status: OrderStatus;
        blockNumber: any;
        expiresAt: any;
        createdAt: any;
        updatedAt: any;
      }>;
      bids: Array<{
        __typename?: "Bid";
        id: string;
        bidAddress: any;
        category: Category;
        nftAddress: any;
        tokenId: any;
        bidder: any;
        seller: any;
        price: any;
        status: OrderStatus;
        blockchainId: string;
        blockNumber: any;
        expiresAt: any;
        createdAt: any;
        updatedAt: any;
      }>;
      activeOrder?: {
        __typename?: "Order";
        id: string;
        marketplaceAddress: any;
        category: Category;
        nftAddress: any;
        tokenId: any;
        amount: any;
        transactionHash: any;
        owner: any;
        buyer?: any | null;
        price: any;
        status: OrderStatus;
        blockNumber: any;
        expiresAt: any;
        createdAt: any;
        updatedAt: any;
      } | null;
      character?: {
        __typename?: "Character";
        id: string;
        level: any;
        exp: any;
        characterAccount?: {
          __typename?: "CharacterAccount";
          id: string;
          contractAddress: any;
        } | null;
        attributes?: Array<{
          __typename?: "CharacterAttribute";
          id: string;
          attribute: Attribute;
          value: any;
        }> | null;
      } | null;
      item?: {
        __typename?: "Item";
        id: string;
        attributes: Array<{
          __typename?: "ItemAttribute";
          id: string;
          attribute: Attribute;
          value: any;
          isIncrease: boolean;
          isPercentage: boolean;
        }>;
      } | null;
      treasure?: {
        __typename?: "Treasure";
        id: string;
        tokenId: any;
        tokenURI?: string | null;
        name?: string | null;
        owner?: Array<{
          __typename?: "Account";
          id: string;
          address: any;
        }> | null;
      } | null;
      searchCharacterAttribute?: Array<{
        __typename?: "CharacterAttribute";
        id: string;
        attribute: Attribute;
        value: any;
      }> | null;
      searchItemAttribute?: Array<{
        __typename?: "ItemAttribute";
        id: string;
        attribute: Attribute;
        value: any;
        isIncrease: boolean;
        isPercentage: boolean;
      }> | null;
    };
  }>;
};

export type GetSalesByBuyerQueryVariables = Exact<{
  buyer: Scalars["Bytes"]["input"];
}>;

export type GetSalesByBuyerQuery = {
  __typename?: "Query";
  sales: Array<{
    __typename?: "Sale";
    id: string;
    type: SaleType;
    buyer: any;
    seller: any;
    price: any;
    amount: any;
    timestamp: any;
    transactionHash: any;
    searchTokenId: any;
    searchContractAddress: any;
    searchCategory: Category;
    nft: {
      __typename?: "NFT";
      id: string;
      tokenId: any;
      contractAddress: any;
      category: Category;
      creator: any;
      amount: any;
      tokenURI?: string | null;
      rarity?: Rarity | null;
      name?: string | null;
      createdAt: any;
      updatedAt: any;
      soldAt?: any | null;
      transferredAt: any;
      sales: any;
      volume: any;
      searchOwner?: string | null;
      searchOrderStatus?: OrderStatus | null;
      searchOrderPrice?: any | null;
      searchOrderExpiresAt?: any | null;
      searchOrderCreatedAt?: any | null;
      searchIsCharacter?: boolean | null;
      searchCharacterAccount?: any | null;
      searchCharacterLevel?: any | null;
      searchCharacterExp?: any | null;
      searchIsTreasure?: boolean | null;
      searchIsItem?: boolean | null;
      owner: {
        __typename?: "Account";
        id: string;
        address: any;
        sales: any;
        purchases: any;
        spent: any;
        earned: any;
        nfts?: Array<{ __typename?: "NFT"; id: string }> | null;
      };
      orders: Array<{
        __typename?: "Order";
        id: string;
        marketplaceAddress: any;
        category: Category;
        nftAddress: any;
        tokenId: any;
        amount: any;
        transactionHash: any;
        owner: any;
        buyer?: any | null;
        price: any;
        status: OrderStatus;
        blockNumber: any;
        expiresAt: any;
        createdAt: any;
        updatedAt: any;
      }>;
      bids: Array<{
        __typename?: "Bid";
        id: string;
        bidAddress: any;
        category: Category;
        nftAddress: any;
        tokenId: any;
        bidder: any;
        seller: any;
        price: any;
        status: OrderStatus;
        blockchainId: string;
        blockNumber: any;
        expiresAt: any;
        createdAt: any;
        updatedAt: any;
      }>;
      activeOrder?: {
        __typename?: "Order";
        id: string;
        marketplaceAddress: any;
        category: Category;
        nftAddress: any;
        tokenId: any;
        amount: any;
        transactionHash: any;
        owner: any;
        buyer?: any | null;
        price: any;
        status: OrderStatus;
        blockNumber: any;
        expiresAt: any;
        createdAt: any;
        updatedAt: any;
      } | null;
      character?: {
        __typename?: "Character";
        id: string;
        level: any;
        exp: any;
        characterAccount?: {
          __typename?: "CharacterAccount";
          id: string;
          contractAddress: any;
        } | null;
        attributes?: Array<{
          __typename?: "CharacterAttribute";
          id: string;
          attribute: Attribute;
          value: any;
        }> | null;
      } | null;
      item?: {
        __typename?: "Item";
        id: string;
        attributes: Array<{
          __typename?: "ItemAttribute";
          id: string;
          attribute: Attribute;
          value: any;
          isIncrease: boolean;
          isPercentage: boolean;
        }>;
      } | null;
      treasure?: {
        __typename?: "Treasure";
        id: string;
        tokenId: any;
        tokenURI?: string | null;
        name?: string | null;
        owner?: Array<{
          __typename?: "Account";
          id: string;
          address: any;
        }> | null;
      } | null;
      searchCharacterAttribute?: Array<{
        __typename?: "CharacterAttribute";
        id: string;
        attribute: Attribute;
        value: any;
      }> | null;
      searchItemAttribute?: Array<{
        __typename?: "ItemAttribute";
        id: string;
        attribute: Attribute;
        value: any;
        isIncrease: boolean;
        isPercentage: boolean;
      }> | null;
    };
  }>;
};

export type GetSalesBySellerQueryVariables = Exact<{
  seller: Scalars["Bytes"]["input"];
}>;

export type GetSalesBySellerQuery = {
  __typename?: "Query";
  sales: Array<{
    __typename?: "Sale";
    id: string;
    type: SaleType;
    buyer: any;
    seller: any;
    price: any;
    amount: any;
    timestamp: any;
    transactionHash: any;
    searchTokenId: any;
    searchContractAddress: any;
    searchCategory: Category;
    nft: {
      __typename?: "NFT";
      id: string;
      tokenId: any;
      contractAddress: any;
      category: Category;
      creator: any;
      amount: any;
      tokenURI?: string | null;
      rarity?: Rarity | null;
      name?: string | null;
      createdAt: any;
      updatedAt: any;
      soldAt?: any | null;
      transferredAt: any;
      sales: any;
      volume: any;
      searchOwner?: string | null;
      searchOrderStatus?: OrderStatus | null;
      searchOrderPrice?: any | null;
      searchOrderExpiresAt?: any | null;
      searchOrderCreatedAt?: any | null;
      searchIsCharacter?: boolean | null;
      searchCharacterAccount?: any | null;
      searchCharacterLevel?: any | null;
      searchCharacterExp?: any | null;
      searchIsTreasure?: boolean | null;
      searchIsItem?: boolean | null;
      owner: {
        __typename?: "Account";
        id: string;
        address: any;
        sales: any;
        purchases: any;
        spent: any;
        earned: any;
        nfts?: Array<{ __typename?: "NFT"; id: string }> | null;
      };
      orders: Array<{
        __typename?: "Order";
        id: string;
        marketplaceAddress: any;
        category: Category;
        nftAddress: any;
        tokenId: any;
        amount: any;
        transactionHash: any;
        owner: any;
        buyer?: any | null;
        price: any;
        status: OrderStatus;
        blockNumber: any;
        expiresAt: any;
        createdAt: any;
        updatedAt: any;
      }>;
      bids: Array<{
        __typename?: "Bid";
        id: string;
        bidAddress: any;
        category: Category;
        nftAddress: any;
        tokenId: any;
        bidder: any;
        seller: any;
        price: any;
        status: OrderStatus;
        blockchainId: string;
        blockNumber: any;
        expiresAt: any;
        createdAt: any;
        updatedAt: any;
      }>;
      activeOrder?: {
        __typename?: "Order";
        id: string;
        marketplaceAddress: any;
        category: Category;
        nftAddress: any;
        tokenId: any;
        amount: any;
        transactionHash: any;
        owner: any;
        buyer?: any | null;
        price: any;
        status: OrderStatus;
        blockNumber: any;
        expiresAt: any;
        createdAt: any;
        updatedAt: any;
      } | null;
      character?: {
        __typename?: "Character";
        id: string;
        level: any;
        exp: any;
        characterAccount?: {
          __typename?: "CharacterAccount";
          id: string;
          contractAddress: any;
        } | null;
        attributes?: Array<{
          __typename?: "CharacterAttribute";
          id: string;
          attribute: Attribute;
          value: any;
        }> | null;
      } | null;
      item?: {
        __typename?: "Item";
        id: string;
        attributes: Array<{
          __typename?: "ItemAttribute";
          id: string;
          attribute: Attribute;
          value: any;
          isIncrease: boolean;
          isPercentage: boolean;
        }>;
      } | null;
      treasure?: {
        __typename?: "Treasure";
        id: string;
        tokenId: any;
        tokenURI?: string | null;
        name?: string | null;
        owner?: Array<{
          __typename?: "Account";
          id: string;
          address: any;
        }> | null;
      } | null;
      searchCharacterAttribute?: Array<{
        __typename?: "CharacterAttribute";
        id: string;
        attribute: Attribute;
        value: any;
      }> | null;
      searchItemAttribute?: Array<{
        __typename?: "ItemAttribute";
        id: string;
        attribute: Attribute;
        value: any;
        isIncrease: boolean;
        isPercentage: boolean;
      }> | null;
    };
  }>;
};

export type GetSalesByTokenIdQueryVariables = Exact<{
  tokenId: Scalars["BigInt"]["input"];
}>;

export type GetSalesByTokenIdQuery = {
  __typename?: "Query";
  sales: Array<{
    __typename?: "Sale";
    id: string;
    type: SaleType;
    buyer: any;
    seller: any;
    price: any;
    amount: any;
    timestamp: any;
    transactionHash: any;
    searchTokenId: any;
    searchContractAddress: any;
    searchCategory: Category;
    nft: {
      __typename?: "NFT";
      id: string;
      tokenId: any;
      contractAddress: any;
      category: Category;
      creator: any;
      amount: any;
      tokenURI?: string | null;
      rarity?: Rarity | null;
      name?: string | null;
      createdAt: any;
      updatedAt: any;
      soldAt?: any | null;
      transferredAt: any;
      sales: any;
      volume: any;
      searchOwner?: string | null;
      searchOrderStatus?: OrderStatus | null;
      searchOrderPrice?: any | null;
      searchOrderExpiresAt?: any | null;
      searchOrderCreatedAt?: any | null;
      searchIsCharacter?: boolean | null;
      searchCharacterAccount?: any | null;
      searchCharacterLevel?: any | null;
      searchCharacterExp?: any | null;
      searchIsTreasure?: boolean | null;
      searchIsItem?: boolean | null;
      owner: {
        __typename?: "Account";
        id: string;
        address: any;
        sales: any;
        purchases: any;
        spent: any;
        earned: any;
        nfts?: Array<{ __typename?: "NFT"; id: string }> | null;
      };
      orders: Array<{
        __typename?: "Order";
        id: string;
        marketplaceAddress: any;
        category: Category;
        nftAddress: any;
        tokenId: any;
        amount: any;
        transactionHash: any;
        owner: any;
        buyer?: any | null;
        price: any;
        status: OrderStatus;
        blockNumber: any;
        expiresAt: any;
        createdAt: any;
        updatedAt: any;
      }>;
      bids: Array<{
        __typename?: "Bid";
        id: string;
        bidAddress: any;
        category: Category;
        nftAddress: any;
        tokenId: any;
        bidder: any;
        seller: any;
        price: any;
        status: OrderStatus;
        blockchainId: string;
        blockNumber: any;
        expiresAt: any;
        createdAt: any;
        updatedAt: any;
      }>;
      activeOrder?: {
        __typename?: "Order";
        id: string;
        marketplaceAddress: any;
        category: Category;
        nftAddress: any;
        tokenId: any;
        amount: any;
        transactionHash: any;
        owner: any;
        buyer?: any | null;
        price: any;
        status: OrderStatus;
        blockNumber: any;
        expiresAt: any;
        createdAt: any;
        updatedAt: any;
      } | null;
      character?: {
        __typename?: "Character";
        id: string;
        level: any;
        exp: any;
        characterAccount?: {
          __typename?: "CharacterAccount";
          id: string;
          contractAddress: any;
        } | null;
        attributes?: Array<{
          __typename?: "CharacterAttribute";
          id: string;
          attribute: Attribute;
          value: any;
        }> | null;
      } | null;
      item?: {
        __typename?: "Item";
        id: string;
        attributes: Array<{
          __typename?: "ItemAttribute";
          id: string;
          attribute: Attribute;
          value: any;
          isIncrease: boolean;
          isPercentage: boolean;
        }>;
      } | null;
      treasure?: {
        __typename?: "Treasure";
        id: string;
        tokenId: any;
        tokenURI?: string | null;
        name?: string | null;
        owner?: Array<{
          __typename?: "Account";
          id: string;
          address: any;
        }> | null;
      } | null;
      searchCharacterAttribute?: Array<{
        __typename?: "CharacterAttribute";
        id: string;
        attribute: Attribute;
        value: any;
      }> | null;
      searchItemAttribute?: Array<{
        __typename?: "ItemAttribute";
        id: string;
        attribute: Attribute;
        value: any;
        isIncrease: boolean;
        isPercentage: boolean;
      }> | null;
    };
  }>;
};

export type GetAllTreasuresQueryVariables = Exact<{
  first?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Treasure_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
}>;

export type GetAllTreasuresQuery = {
  __typename?: "Query";
  treasures: Array<{
    __typename?: "Treasure";
    id: string;
    tokenId: any;
    tokenURI?: string | null;
    name?: string | null;
    nft: {
      __typename?: "NFT";
      id: string;
      tokenId: any;
      contractAddress: any;
      category: Category;
      creator: any;
      amount: any;
      tokenURI?: string | null;
      rarity?: Rarity | null;
      name?: string | null;
      createdAt: any;
      updatedAt: any;
      soldAt?: any | null;
      transferredAt: any;
      sales: any;
      volume: any;
      searchOwner?: string | null;
      searchOrderStatus?: OrderStatus | null;
      searchOrderPrice?: any | null;
      searchOrderExpiresAt?: any | null;
      searchOrderCreatedAt?: any | null;
      searchIsCharacter?: boolean | null;
      searchCharacterAccount?: any | null;
      searchCharacterLevel?: any | null;
      searchCharacterExp?: any | null;
      searchIsTreasure?: boolean | null;
      searchIsItem?: boolean | null;
      owner: {
        __typename?: "Account";
        id: string;
        address: any;
        sales: any;
        purchases: any;
        spent: any;
        earned: any;
        nfts?: Array<{ __typename?: "NFT"; id: string }> | null;
      };
      orders: Array<{
        __typename?: "Order";
        id: string;
        marketplaceAddress: any;
        category: Category;
        nftAddress: any;
        tokenId: any;
        amount: any;
        transactionHash: any;
        owner: any;
        buyer?: any | null;
        price: any;
        status: OrderStatus;
        blockNumber: any;
        expiresAt: any;
        createdAt: any;
        updatedAt: any;
      }>;
      bids: Array<{
        __typename?: "Bid";
        id: string;
        bidAddress: any;
        category: Category;
        nftAddress: any;
        tokenId: any;
        bidder: any;
        seller: any;
        price: any;
        status: OrderStatus;
        blockchainId: string;
        blockNumber: any;
        expiresAt: any;
        createdAt: any;
        updatedAt: any;
      }>;
      activeOrder?: {
        __typename?: "Order";
        id: string;
        marketplaceAddress: any;
        category: Category;
        nftAddress: any;
        tokenId: any;
        amount: any;
        transactionHash: any;
        owner: any;
        buyer?: any | null;
        price: any;
        status: OrderStatus;
        blockNumber: any;
        expiresAt: any;
        createdAt: any;
        updatedAt: any;
      } | null;
      character?: {
        __typename?: "Character";
        id: string;
        level: any;
        exp: any;
        characterAccount?: {
          __typename?: "CharacterAccount";
          id: string;
          contractAddress: any;
        } | null;
        attributes?: Array<{
          __typename?: "CharacterAttribute";
          id: string;
          attribute: Attribute;
          value: any;
        }> | null;
      } | null;
      item?: {
        __typename?: "Item";
        id: string;
        attributes: Array<{
          __typename?: "ItemAttribute";
          id: string;
          attribute: Attribute;
          value: any;
          isIncrease: boolean;
          isPercentage: boolean;
        }>;
      } | null;
      treasure?: {
        __typename?: "Treasure";
        id: string;
        tokenId: any;
        tokenURI?: string | null;
        name?: string | null;
        owner?: Array<{
          __typename?: "Account";
          id: string;
          address: any;
        }> | null;
      } | null;
      searchCharacterAttribute?: Array<{
        __typename?: "CharacterAttribute";
        id: string;
        attribute: Attribute;
        value: any;
      }> | null;
      searchItemAttribute?: Array<{
        __typename?: "ItemAttribute";
        id: string;
        attribute: Attribute;
        value: any;
        isIncrease: boolean;
        isPercentage: boolean;
      }> | null;
    };
    owner?: Array<{ __typename?: "Account"; id: string; address: any }> | null;
  }>;
};

export const GetAccountByAddressDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetAccountByAddress" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "owner" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Bytes" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "accounts" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "address" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "owner" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "address" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "nfts" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "EnumValue", value: "tokenId" },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "contractAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "creator" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "owner" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenURI" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "rarity" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "orders" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "marketplaceAddress",
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "amount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "transactionHash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "buyer" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockNumber" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "expiresAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "bids" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "bidAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "bidder" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "seller" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockchainId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockNumber" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "expiresAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "treasureAccounts" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "treasure" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenURI" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nft" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "tokenId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "contractAddress",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "category" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "creator" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "owner" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "address",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "amount" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "tokenURI" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "rarity" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "orders" },
                                    arguments: [
                                      {
                                        kind: "Argument",
                                        name: {
                                          kind: "Name",
                                          value: "orderBy",
                                        },
                                        value: {
                                          kind: "EnumValue",
                                          value: "createdAt",
                                        },
                                      },
                                    ],
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "marketplaceAddress",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "category",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "nftAddress",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "tokenId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "amount",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "transactionHash",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "owner",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "buyer",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "price",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "status",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "blockNumber",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "expiresAt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "createdAt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "updatedAt",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "bids" },
                                    arguments: [
                                      {
                                        kind: "Argument",
                                        name: {
                                          kind: "Name",
                                          value: "orderBy",
                                        },
                                        value: {
                                          kind: "EnumValue",
                                          value: "createdAt",
                                        },
                                      },
                                    ],
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "bidAddress",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "category",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "nftAddress",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "tokenId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "bidder",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "seller",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "price",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "status",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "blockchainId",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "blockNumber",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "expiresAt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "createdAt",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "updatedAt",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "address" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "balance" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "sales" } },
                { kind: "Field", name: { kind: "Name", value: "purchases" } },
                { kind: "Field", name: { kind: "Name", value: "spent" } },
                { kind: "Field", name: { kind: "Name", value: "earned" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAccountByAddressQuery,
  GetAccountByAddressQueryVariables
>;
export const GetAllAnalyticsDayDataDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetAllAnalyticsDayData" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "analyticsDayDatas" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "date" } },
                { kind: "Field", name: { kind: "Name", value: "sales" } },
                { kind: "Field", name: { kind: "Name", value: "volume" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "creatorsEarning" },
                },
                { kind: "Field", name: { kind: "Name", value: "daoEarning" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAllAnalyticsDayDataQuery,
  GetAllAnalyticsDayDataQueryVariables
>;
export const GetAnalyticsDayDataDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetAnalyticsDayData" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "date" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "BigInt" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "analyticsDayDatas" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "date" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "date" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "date" } },
                { kind: "Field", name: { kind: "Name", value: "sales" } },
                { kind: "Field", name: { kind: "Name", value: "volume" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "creatorsEarning" },
                },
                { kind: "Field", name: { kind: "Name", value: "daoEarning" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAnalyticsDayDataQuery,
  GetAnalyticsDayDataQueryVariables
>;
export const GetAllBidsByTokenIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getAllBidsByTokenId" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "first" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "skip" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "orderBy" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Bid_orderBy" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "orderDirection" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "OrderDirection" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "tokenId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "BigInt" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "bids" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "first" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "skip" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "skip" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "orderBy" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderDirection" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "orderDirection" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "tokenId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "tokenId" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "bidAddress" } },
                { kind: "Field", name: { kind: "Name", value: "category" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "nft" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "contractAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "creator" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "owner" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nfts" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sales" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "purchases" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "spent" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "earned" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenURI" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "rarity" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "orders" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "bids" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "activeOrder" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "soldAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "transferredAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "character" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "characterAccount" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "contractAddress",
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "level" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "exp" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "item" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "isIncrease" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "isPercentage",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "treasure" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenURI" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "address" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "sales" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "volume" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOwner" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderStatus" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderPrice" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderExpiresAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderCreatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsCharacter" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterAccount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterLevel" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterExp" },
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "searchCharacterAttribute",
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsTreasure" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsItem" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchItemAttribute" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isIncrease" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isPercentage" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "nftAddress" } },
                { kind: "Field", name: { kind: "Name", value: "tokenId" } },
                { kind: "Field", name: { kind: "Name", value: "bidder" } },
                { kind: "Field", name: { kind: "Name", value: "seller" } },
                { kind: "Field", name: { kind: "Name", value: "price" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "blockchainId" },
                },
                { kind: "Field", name: { kind: "Name", value: "blockNumber" } },
                { kind: "Field", name: { kind: "Name", value: "expiresAt" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAllBidsByTokenIdQuery,
  GetAllBidsByTokenIdQueryVariables
>;
export const GetAllBidsByTokenIdAndStatusDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getAllBidsByTokenIdAndStatus" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "tokenId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "BigInt" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "status" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "OrderStatus" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "bids" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "tokenId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "tokenId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "status" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "status" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "bidAddress" } },
                { kind: "Field", name: { kind: "Name", value: "category" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "nft" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "contractAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "creator" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "owner" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nfts" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sales" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "purchases" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "spent" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "earned" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenURI" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "rarity" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "orders" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "bids" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "activeOrder" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "soldAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "transferredAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "character" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "characterAccount" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "contractAddress",
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "level" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "exp" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "item" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "isIncrease" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "isPercentage",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "treasure" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenURI" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "address" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "sales" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "volume" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOwner" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderStatus" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderPrice" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderExpiresAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderCreatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsCharacter" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterAccount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterLevel" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterExp" },
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "searchCharacterAttribute",
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsTreasure" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsItem" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchItemAttribute" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isIncrease" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isPercentage" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "nftAddress" } },
                { kind: "Field", name: { kind: "Name", value: "tokenId" } },
                { kind: "Field", name: { kind: "Name", value: "bidder" } },
                { kind: "Field", name: { kind: "Name", value: "seller" } },
                { kind: "Field", name: { kind: "Name", value: "price" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "blockchainId" },
                },
                { kind: "Field", name: { kind: "Name", value: "blockNumber" } },
                { kind: "Field", name: { kind: "Name", value: "expiresAt" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAllBidsByTokenIdAndStatusQuery,
  GetAllBidsByTokenIdAndStatusQueryVariables
>;
export const GetAllBidsByBidderAndStatusDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getAllBidsByBidderAndStatus" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "bidder" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Bytes" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "status" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "OrderStatus" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "bids" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "bidder" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "bidder" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "status" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "status" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "bidAddress" } },
                { kind: "Field", name: { kind: "Name", value: "category" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "nft" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "contractAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "creator" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "owner" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nfts" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sales" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "purchases" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "spent" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "earned" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenURI" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "rarity" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "orders" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "bids" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "activeOrder" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "soldAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "transferredAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "character" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "characterAccount" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "contractAddress",
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "level" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "exp" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "item" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "isIncrease" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "isPercentage",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "treasure" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenURI" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "address" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "sales" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "volume" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOwner" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderStatus" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderPrice" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderExpiresAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderCreatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsCharacter" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterAccount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterLevel" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterExp" },
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "searchCharacterAttribute",
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsTreasure" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsItem" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchItemAttribute" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isIncrease" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isPercentage" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "nftAddress" } },
                { kind: "Field", name: { kind: "Name", value: "tokenId" } },
                { kind: "Field", name: { kind: "Name", value: "bidder" } },
                { kind: "Field", name: { kind: "Name", value: "seller" } },
                { kind: "Field", name: { kind: "Name", value: "price" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "blockchainId" },
                },
                { kind: "Field", name: { kind: "Name", value: "blockNumber" } },
                { kind: "Field", name: { kind: "Name", value: "expiresAt" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAllBidsByBidderAndStatusQuery,
  GetAllBidsByBidderAndStatusQueryVariables
>;
export const GetAllCharacterAccountsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetAllCharacterAccounts" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "characterAccounts" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "character" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "characterAccount" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "contractAddress" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "level" } },
                      { kind: "Field", name: { kind: "Name", value: "exp" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nft" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "contractAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "creator" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "address" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "nfts" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sales" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "purchases" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "spent" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "earned" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "amount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenURI" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "rarity" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "orders" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "orderBy" },
                                  value: {
                                    kind: "EnumValue",
                                    value: "createdAt",
                                  },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "marketplaceAddress",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "category" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "nftAddress" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "tokenId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "amount" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "transactionHash",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "owner" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "buyer" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "price" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "status" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "blockNumber",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "expiresAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "bids" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "orderBy" },
                                  value: {
                                    kind: "EnumValue",
                                    value: "createdAt",
                                  },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "bidAddress" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "category" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "nftAddress" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "tokenId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "bidder" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "seller" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "price" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "status" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "blockchainId",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "blockNumber",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "expiresAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "activeOrder" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "marketplaceAddress",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "category" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "nftAddress" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "tokenId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "amount" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "transactionHash",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "owner" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "buyer" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "price" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "status" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "blockNumber",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "expiresAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "soldAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "transferredAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "character" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "characterAccount",
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "contractAddress",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "level" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "exp" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attributes" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "attribute",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "value",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "item" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attributes" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "attribute",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "value",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "isIncrease",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "isPercentage",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "treasure" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "tokenId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "tokenURI" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "owner" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "address",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sales" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "volume" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "searchOwner" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchOrderStatus",
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "searchOrderPrice" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchOrderExpiresAt",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchOrderCreatedAt",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchIsCharacter",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchCharacterAccount",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchCharacterLevel",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchCharacterExp",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchCharacterAttribute",
                              },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "searchIsTreasure" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "searchIsItem" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchItemAttribute",
                              },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "isIncrease" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "isPercentage",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "contractAddress" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAllCharacterAccountsQuery,
  GetAllCharacterAccountsQueryVariables
>;
export const GetCharacterAccountByCharacterTokenIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetCharacterAccountByCharacterTokenId" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "tokenId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "BigInt" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "characterAccounts" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "character_" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "nft_" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "tokenId" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "tokenId" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "character" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "characterAccount" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "contractAddress" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "level" } },
                      { kind: "Field", name: { kind: "Name", value: "exp" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nft" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "contractAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "creator" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "address" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "nfts" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sales" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "purchases" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "spent" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "earned" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "amount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenURI" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "rarity" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "orders" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "orderBy" },
                                  value: {
                                    kind: "EnumValue",
                                    value: "createdAt",
                                  },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "marketplaceAddress",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "category" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "nftAddress" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "tokenId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "amount" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "transactionHash",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "owner" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "buyer" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "price" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "status" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "blockNumber",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "expiresAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "bids" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "orderBy" },
                                  value: {
                                    kind: "EnumValue",
                                    value: "createdAt",
                                  },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "bidAddress" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "category" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "nftAddress" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "tokenId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "bidder" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "seller" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "price" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "status" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "blockchainId",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "blockNumber",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "expiresAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "activeOrder" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "marketplaceAddress",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "category" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "nftAddress" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "tokenId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "amount" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "transactionHash",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "owner" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "buyer" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "price" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "status" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "blockNumber",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "expiresAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "soldAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "transferredAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "character" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "characterAccount",
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "contractAddress",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "level" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "exp" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attributes" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "attribute",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "value",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "item" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attributes" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "attribute",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "value",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "isIncrease",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "isPercentage",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "treasure" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "tokenId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "tokenURI" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "owner" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "address",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sales" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "volume" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "searchOwner" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchOrderStatus",
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "searchOrderPrice" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchOrderExpiresAt",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchOrderCreatedAt",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchIsCharacter",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchCharacterAccount",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchCharacterLevel",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchCharacterExp",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchCharacterAttribute",
                              },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "searchIsTreasure" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "searchIsItem" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchItemAttribute",
                              },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "isIncrease" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "isPercentage",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "contractAddress" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCharacterAccountByCharacterTokenIdQuery,
  GetCharacterAccountByCharacterTokenIdQueryVariables
>;
export const GetCharacterAttributeByTokenIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getCharacterAttributeByTokenId" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "tokenId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "BigInt" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "characterAttributes" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "character_" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "nft_" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "tokenId" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "tokenId" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "attribute" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "character" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "characterAccount" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "contractAddress" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "level" } },
                      { kind: "Field", name: { kind: "Name", value: "exp" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nft" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "contractAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "creator" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "address" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "nfts" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sales" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "purchases" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "spent" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "earned" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "amount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenURI" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "rarity" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "orders" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "orderBy" },
                                  value: {
                                    kind: "EnumValue",
                                    value: "createdAt",
                                  },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "marketplaceAddress",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "category" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "nftAddress" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "tokenId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "amount" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "transactionHash",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "owner" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "buyer" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "price" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "status" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "blockNumber",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "expiresAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "bids" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "orderBy" },
                                  value: {
                                    kind: "EnumValue",
                                    value: "createdAt",
                                  },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "bidAddress" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "category" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "nftAddress" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "tokenId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "bidder" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "seller" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "price" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "status" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "blockchainId",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "blockNumber",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "expiresAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "activeOrder" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "marketplaceAddress",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "category" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "nftAddress" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "tokenId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "amount" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "transactionHash",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "owner" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "soldAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "transferredAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "character" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "characterAccount",
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "contractAddress",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "level" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "exp" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attributes" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "attribute",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "value",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "item" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attributes" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "attribute",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "value",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "isIncrease",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "isPercentage",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "treasure" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "tokenId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "tokenURI" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "owner" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "address",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sales" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "volume" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "searchOwner" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchOrderStatus",
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "searchOrderPrice" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchOrderExpiresAt",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchOrderCreatedAt",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchIsCharacter",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchCharacterAccount",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchCharacterLevel",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchCharacterExp",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchCharacterAttribute",
                              },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "searchIsTreasure" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "searchIsItem" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchItemAttribute",
                              },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "isIncrease" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "isPercentage",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCharacterAttributeByTokenIdQuery,
  GetCharacterAttributeByTokenIdQueryVariables
>;
export const GetAllCharactersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetAllCharacters" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "first" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "skip" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "orderBy" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Character_orderBy" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "orderDirection" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "OrderDirection" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "characters" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "first" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "skip" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "skip" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "orderBy" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderDirection" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "orderDirection" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "characterAccount" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "contractAddress" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "level" } },
                { kind: "Field", name: { kind: "Name", value: "exp" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "nft" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "contractAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "creator" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "owner" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nfts" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sales" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "purchases" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "spent" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "earned" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenURI" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "rarity" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "orders" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "marketplaceAddress",
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "amount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "transactionHash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "buyer" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockNumber" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "expiresAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "bids" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "bidAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "bidder" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "seller" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockchainId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockNumber" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "expiresAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "activeOrder" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "marketplaceAddress",
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "amount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "transactionHash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "buyer" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockNumber" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "expiresAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "soldAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "transferredAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "character" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "characterAccount" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "contractAddress",
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "level" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "exp" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "item" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "isIncrease" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "isPercentage",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "treasure" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenURI" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "address" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "sales" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "volume" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOwner" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderStatus" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderPrice" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderExpiresAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderCreatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsCharacter" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterAccount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterLevel" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterExp" },
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "searchCharacterAttribute",
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsTreasure" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsItem" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchItemAttribute" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isIncrease" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isPercentage" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "attributes" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attribute" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "value" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAllCharactersQuery,
  GetAllCharactersQueryVariables
>;
export const GetAllCharactersFilterDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetAllCharactersFilter" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "first" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "skip" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "orderBy" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Character_orderBy" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "orderDirection" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "OrderDirection" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "rarity" },
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Rarity" },
              },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "searchOrderStatus" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "OrderStatus" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "characters" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "first" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "skip" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "skip" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "orderBy" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderDirection" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "orderDirection" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "nft_" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "rarity_in" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "rarity" },
                            },
                          },
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "searchOrderStatus" },
                            value: {
                              kind: "Variable",
                              name: {
                                kind: "Name",
                                value: "searchOrderStatus",
                              },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "characterAccount" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "contractAddress" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "level" } },
                { kind: "Field", name: { kind: "Name", value: "exp" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "nft" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "contractAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "creator" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "owner" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nfts" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sales" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "purchases" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "spent" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "earned" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenURI" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "rarity" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "orders" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "marketplaceAddress",
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "amount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "transactionHash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "buyer" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockNumber" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "expiresAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "bids" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "bidAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "bidder" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "seller" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockchainId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockNumber" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "expiresAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "activeOrder" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "marketplaceAddress",
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "amount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "transactionHash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "buyer" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockNumber" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "expiresAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "soldAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "transferredAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "character" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "characterAccount" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "contractAddress",
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "level" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "exp" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "item" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "isIncrease" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "isPercentage",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "treasure" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenURI" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "address" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "sales" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "volume" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOwner" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderStatus" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderPrice" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderExpiresAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderCreatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsCharacter" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterAccount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterLevel" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterExp" },
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "searchCharacterAttribute",
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsTreasure" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsItem" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchItemAttribute" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isIncrease" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isPercentage" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "attributes" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attribute" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "value" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAllCharactersFilterQuery,
  GetAllCharactersFilterQueryVariables
>;
export const GetCharactersByOwnerDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetCharactersByOwner" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "first" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "skip" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "orderBy" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Character_orderBy" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "orderDirection" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "OrderDirection" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "owner" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "characters" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "first" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "skip" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "skip" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "orderBy" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderDirection" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "orderDirection" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "nft_" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "owner" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "owner" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "characterAccount" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "contractAddress" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "level" } },
                { kind: "Field", name: { kind: "Name", value: "exp" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "nft" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "contractAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "creator" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "owner" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nfts" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sales" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "purchases" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "spent" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "earned" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenURI" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "rarity" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "orders" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "marketplaceAddress",
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "amount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "transactionHash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "buyer" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockNumber" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "expiresAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "bids" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "bidAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "bidder" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "seller" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockchainId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockNumber" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "expiresAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "activeOrder" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "marketplaceAddress",
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "amount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "transactionHash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "buyer" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockNumber" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "expiresAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "soldAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "transferredAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "character" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "characterAccount" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "contractAddress",
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "level" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "exp" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "item" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "isIncrease" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "isPercentage",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "treasure" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenURI" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "address" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "sales" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "volume" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOwner" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderStatus" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderPrice" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderExpiresAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderCreatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsCharacter" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterAccount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterLevel" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterExp" },
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "searchCharacterAttribute",
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsTreasure" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsItem" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchItemAttribute" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isIncrease" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isPercentage" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "attributes" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attribute" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "value" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCharactersByOwnerQuery,
  GetCharactersByOwnerQueryVariables
>;
export const GetCountDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetCount" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "counts" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "orderTotal" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "orderCharacterTotal" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "orderTreasureTotal" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "orderItemTotal" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "characterTotal" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "treasureTotal" },
                },
                { kind: "Field", name: { kind: "Name", value: "itemTotal" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "characterStarted" },
                },
                { kind: "Field", name: { kind: "Name", value: "itemStarted" } },
                { kind: "Field", name: { kind: "Name", value: "salesTotal" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "creatorEarningTotal" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "daoEarningTotal" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCountQuery, GetCountQueryVariables>;
export const GetItemAttributesByTokenIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getItemAttributesByTokenId" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "tokenId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "BigInt" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "itemAttributes" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "item_" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "nft_" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "tokenId" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "tokenId" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "item" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nft" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "contractAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "creator" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "address" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "nfts" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "sales" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "purchases" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "spent" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "earned" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "amount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenURI" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "rarity" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "orders" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "orderBy" },
                                  value: {
                                    kind: "EnumValue",
                                    value: "createdAt",
                                  },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "marketplaceAddress",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "category" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "nftAddress" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "tokenId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "amount" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "transactionHash",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "owner" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "buyer" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "price" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "status" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "blockNumber",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "expiresAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "bids" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "orderBy" },
                                  value: {
                                    kind: "EnumValue",
                                    value: "createdAt",
                                  },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "bidAddress" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "category" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "nftAddress" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "tokenId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "bidder" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "seller" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "price" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "status" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "blockchainId",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "blockNumber",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "expiresAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "activeOrder" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "marketplaceAddress",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "category" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "nftAddress" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "tokenId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "amount" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "transactionHash",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "owner" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "buyer" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "price" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "status" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "blockNumber",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "expiresAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "createdAt" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "updatedAt" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "soldAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "transferredAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "character" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "characterAccount",
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "contractAddress",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "level" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "exp" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attributes" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "attribute",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "value",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "item" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attributes" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "attribute",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "value",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "isIncrease",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "isPercentage",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "treasure" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "tokenId" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "tokenURI" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "owner" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "address",
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sales" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "volume" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "searchOwner" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchOrderStatus",
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "searchOrderPrice" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchOrderExpiresAt",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchOrderCreatedAt",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchIsCharacter",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchCharacterAccount",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchCharacterLevel",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchCharacterExp",
                              },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchCharacterAttribute",
                              },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "searchIsTreasure" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "searchIsItem" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "searchItemAttribute",
                              },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "isIncrease" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "isPercentage",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isIncrease" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isPercentage" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "attribute" } },
                { kind: "Field", name: { kind: "Name", value: "value" } },
                { kind: "Field", name: { kind: "Name", value: "isIncrease" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "isPercentage" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetItemAttributesByTokenIdQuery,
  GetItemAttributesByTokenIdQueryVariables
>;
export const GetAllItemsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getAllItems" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "items" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "nft" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "contractAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "creator" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "owner" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nfts" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sales" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "purchases" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "spent" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "earned" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenURI" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "rarity" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "orders" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "marketplaceAddress",
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "amount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "transactionHash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "buyer" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockNumber" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "expiresAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "bids" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "bidAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "bidder" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "seller" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockchainId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockNumber" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "expiresAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "activeOrder" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "marketplaceAddress",
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "amount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "transactionHash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "buyer" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockNumber" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "expiresAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "soldAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "transferredAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "character" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "characterAccount" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "contractAddress",
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "level" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "exp" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "item" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "isIncrease" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "isPercentage",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "treasure" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenURI" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "address" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "sales" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "volume" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOwner" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderStatus" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderPrice" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderExpiresAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderCreatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsCharacter" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterAccount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterLevel" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterExp" },
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "searchCharacterAttribute",
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsTreasure" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsItem" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchItemAttribute" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isIncrease" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isPercentage" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "attributes" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attribute" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "value" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isIncrease" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isPercentage" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAllItemsQuery, GetAllItemsQueryVariables>;
export const GetItemByNftTokenIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getItemByNFTTokenId" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "tokenId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "BigInt" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "items" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "nft_" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "tokenId" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "tokenId" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "nft" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "contractAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "creator" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "owner" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nfts" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sales" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "purchases" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "spent" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "earned" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenURI" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "rarity" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "orders" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "marketplaceAddress",
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "amount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "transactionHash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "buyer" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockNumber" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "expiresAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "bids" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "bidAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "bidder" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "seller" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockchainId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockNumber" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "expiresAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "activeOrder" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "marketplaceAddress",
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "amount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "transactionHash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "buyer" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockNumber" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "expiresAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "soldAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "transferredAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "character" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "characterAccount" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "contractAddress",
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "level" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "exp" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "item" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "isIncrease" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "isPercentage",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "treasure" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenURI" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "address" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "sales" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "volume" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOwner" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderStatus" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderPrice" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderExpiresAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderCreatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsCharacter" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterAccount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterLevel" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterExp" },
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "searchCharacterAttribute",
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsTreasure" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsItem" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchItemAttribute" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isIncrease" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isPercentage" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "attributes" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attribute" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "value" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isIncrease" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isPercentage" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetItemByNftTokenIdQuery,
  GetItemByNftTokenIdQueryVariables
>;
export const GetAllNfTsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetAllNFTs" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "first" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "skip" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "orderBy" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "NFT_orderBy" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "orderDirection" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "OrderDirection" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nfts" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "first" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "skip" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "skip" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "orderBy" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderDirection" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "orderDirection" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "tokenId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "contractAddress" },
                },
                { kind: "Field", name: { kind: "Name", value: "category" } },
                { kind: "Field", name: { kind: "Name", value: "creator" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "owner" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nfts" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "sales" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "purchases" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "spent" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "earned" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "amount" } },
                { kind: "Field", name: { kind: "Name", value: "tokenURI" } },
                { kind: "Field", name: { kind: "Name", value: "rarity" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "orders" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "EnumValue", value: "createdAt" },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "marketplaceAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nftAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "transactionHash" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "owner" } },
                      { kind: "Field", name: { kind: "Name", value: "buyer" } },
                      { kind: "Field", name: { kind: "Name", value: "price" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "blockNumber" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "expiresAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "bids" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "EnumValue", value: "createdAt" },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "bidAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nftAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "bidder" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "seller" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "price" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "blockchainId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "blockNumber" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "expiresAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "activeOrder" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "marketplaceAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nftAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "transactionHash" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "owner" } },
                      { kind: "Field", name: { kind: "Name", value: "buyer" } },
                      { kind: "Field", name: { kind: "Name", value: "price" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "blockNumber" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "expiresAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "soldAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "transferredAt" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "character" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "characterAccount" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "contractAddress" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "level" } },
                      { kind: "Field", name: { kind: "Name", value: "exp" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "item" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isIncrease" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isPercentage" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "treasure" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenURI" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "owner" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "sales" } },
                { kind: "Field", name: { kind: "Name", value: "volume" } },
                { kind: "Field", name: { kind: "Name", value: "searchOwner" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchOrderStatus" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchOrderPrice" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchOrderExpiresAt" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchOrderCreatedAt" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchIsCharacter" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchCharacterAccount" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchCharacterLevel" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchCharacterExp" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchCharacterAttribute" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attribute" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "value" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchIsTreasure" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchIsItem" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchItemAttribute" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attribute" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "value" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isIncrease" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isPercentage" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAllNfTsQuery, GetAllNfTsQueryVariables>;
export const GetNftByOwnerDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getNFTByOwner" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "first" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "skip" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "searchOwner" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "orderBy" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "NFT_orderBy" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "orderDirection" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "OrderDirection" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nfts" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "first" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "skip" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "skip" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "searchOwner" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "searchOwner" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "orderBy" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderDirection" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "orderDirection" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "tokenId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "contractAddress" },
                },
                { kind: "Field", name: { kind: "Name", value: "category" } },
                { kind: "Field", name: { kind: "Name", value: "creator" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "owner" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nfts" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "sales" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "purchases" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "spent" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "earned" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "amount" } },
                { kind: "Field", name: { kind: "Name", value: "tokenURI" } },
                { kind: "Field", name: { kind: "Name", value: "rarity" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "orders" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "EnumValue", value: "createdAt" },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "marketplaceAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nftAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "transactionHash" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "owner" } },
                      { kind: "Field", name: { kind: "Name", value: "buyer" } },
                      { kind: "Field", name: { kind: "Name", value: "price" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "blockNumber" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "expiresAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "bids" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "EnumValue", value: "createdAt" },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "bidAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nftAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "bidder" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "seller" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "price" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "blockchainId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "blockNumber" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "expiresAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "activeOrder" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "marketplaceAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nftAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "transactionHash" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "owner" } },
                      { kind: "Field", name: { kind: "Name", value: "buyer" } },
                      { kind: "Field", name: { kind: "Name", value: "price" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "blockNumber" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "expiresAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "soldAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "transferredAt" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "character" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "characterAccount" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "contractAddress" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "level" } },
                      { kind: "Field", name: { kind: "Name", value: "exp" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "item" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isIncrease" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isPercentage" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "treasure" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenURI" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "owner" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "sales" } },
                { kind: "Field", name: { kind: "Name", value: "volume" } },
                { kind: "Field", name: { kind: "Name", value: "searchOwner" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchOrderStatus" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchOrderPrice" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchOrderExpiresAt" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchOrderCreatedAt" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchIsCharacter" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchCharacterAccount" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchCharacterLevel" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchCharacterExp" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchCharacterAttribute" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attribute" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "value" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchIsTreasure" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchIsItem" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchItemAttribute" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attribute" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "value" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isIncrease" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isPercentage" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetNftByOwnerQuery, GetNftByOwnerQueryVariables>;
export const GetNftByTokenIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getNFTByTokenId" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "tokenId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "BigInt" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nfts" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "tokenId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "tokenId" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "tokenId" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "contractAddress" },
                },
                { kind: "Field", name: { kind: "Name", value: "category" } },
                { kind: "Field", name: { kind: "Name", value: "creator" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "owner" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nfts" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "sales" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "purchases" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "spent" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "earned" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "amount" } },
                { kind: "Field", name: { kind: "Name", value: "tokenURI" } },
                { kind: "Field", name: { kind: "Name", value: "rarity" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "orders" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "EnumValue", value: "createdAt" },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "marketplaceAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nftAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "transactionHash" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "owner" } },
                      { kind: "Field", name: { kind: "Name", value: "buyer" } },
                      { kind: "Field", name: { kind: "Name", value: "price" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "blockNumber" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "expiresAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "bids" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: { kind: "EnumValue", value: "createdAt" },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "bidAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nftAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "bidder" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "seller" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "price" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "blockchainId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "blockNumber" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "expiresAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "activeOrder" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "marketplaceAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nftAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "transactionHash" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "owner" } },
                      { kind: "Field", name: { kind: "Name", value: "buyer" } },
                      { kind: "Field", name: { kind: "Name", value: "price" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "blockNumber" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "expiresAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "soldAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "transferredAt" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "character" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "characterAccount" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "contractAddress" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "level" } },
                      { kind: "Field", name: { kind: "Name", value: "exp" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "item" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attributes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isIncrease" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isPercentage" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "treasure" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenURI" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "owner" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "sales" } },
                { kind: "Field", name: { kind: "Name", value: "volume" } },
                { kind: "Field", name: { kind: "Name", value: "searchOwner" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchOrderStatus" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchOrderPrice" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchOrderExpiresAt" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchOrderCreatedAt" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchIsCharacter" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchCharacterAccount" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchCharacterLevel" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchCharacterExp" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchCharacterAttribute" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attribute" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "value" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchIsTreasure" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchIsItem" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchItemAttribute" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "attribute" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "value" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isIncrease" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isPercentage" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetNftByTokenIdQuery,
  GetNftByTokenIdQueryVariables
>;
export const GetAllOrdersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getAllOrders" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "first" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "skip" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "orderBy" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Order_orderBy" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "orderDirection" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "OrderDirection" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "orders" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "first" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "skip" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "skip" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "orderBy" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderDirection" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "orderDirection" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "marketplaceAddress" },
                },
                { kind: "Field", name: { kind: "Name", value: "category" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "nft" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "contractAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "creator" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "owner" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nfts" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sales" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "purchases" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "spent" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "earned" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenURI" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "rarity" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "orders" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "bids" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "activeOrder" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "soldAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "transferredAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "character" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "characterAccount" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "contractAddress",
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "level" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "exp" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "item" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "isIncrease" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "isPercentage",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "treasure" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenURI" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "address" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "sales" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "volume" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOwner" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderStatus" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderPrice" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderExpiresAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderCreatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsCharacter" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterAccount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterLevel" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterExp" },
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "searchCharacterAttribute",
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsTreasure" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsItem" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchItemAttribute" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isIncrease" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isPercentage" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "nftAddress" } },
                { kind: "Field", name: { kind: "Name", value: "tokenId" } },
                { kind: "Field", name: { kind: "Name", value: "amount" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "transactionHash" },
                },
                { kind: "Field", name: { kind: "Name", value: "owner" } },
                { kind: "Field", name: { kind: "Name", value: "buyer" } },
                { kind: "Field", name: { kind: "Name", value: "price" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "blockNumber" } },
                { kind: "Field", name: { kind: "Name", value: "expiresAt" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAllOrdersQuery, GetAllOrdersQueryVariables>;
export const GetOrdersByStatusDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getOrdersByStatus" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "first" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "skip" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "orderBy" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Order_orderBy" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "orderDirection" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "OrderDirection" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "status" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "OrderStatus" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "orders" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "first" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "skip" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "skip" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "orderBy" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderDirection" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "orderDirection" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "status" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "status" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "marketplaceAddress" },
                },
                { kind: "Field", name: { kind: "Name", value: "category" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "nft" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "contractAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "creator" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "owner" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nfts" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sales" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "purchases" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "spent" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "earned" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenURI" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "rarity" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "orders" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "bids" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "activeOrder" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "soldAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "transferredAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "character" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "characterAccount" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "contractAddress",
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "level" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "exp" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "item" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "isIncrease" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "isPercentage",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "treasure" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenURI" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "address" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "sales" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "volume" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOwner" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderStatus" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderPrice" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderExpiresAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderCreatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsCharacter" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterAccount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterLevel" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterExp" },
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "searchCharacterAttribute",
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsTreasure" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsItem" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchItemAttribute" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isIncrease" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isPercentage" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "nftAddress" } },
                { kind: "Field", name: { kind: "Name", value: "tokenId" } },
                { kind: "Field", name: { kind: "Name", value: "amount" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "transactionHash" },
                },
                { kind: "Field", name: { kind: "Name", value: "owner" } },
                { kind: "Field", name: { kind: "Name", value: "buyer" } },
                { kind: "Field", name: { kind: "Name", value: "price" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "blockNumber" } },
                { kind: "Field", name: { kind: "Name", value: "expiresAt" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetOrdersByStatusQuery,
  GetOrdersByStatusQueryVariables
>;
export const GetOrdersByTokenIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getOrdersByTokenId" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "first" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "skip" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "orderBy" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Order_orderBy" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "orderDirection" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "OrderDirection" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "tokenId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "BigInt" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "orders" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "first" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "skip" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "skip" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "orderBy" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderDirection" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "orderDirection" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "nft_" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "tokenId" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "tokenId" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "marketplaceAddress" },
                },
                { kind: "Field", name: { kind: "Name", value: "category" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "nft" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "contractAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "creator" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "owner" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nfts" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sales" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "purchases" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "spent" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "earned" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenURI" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "rarity" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "orders" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "bids" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "activeOrder" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "soldAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "transferredAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "character" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "characterAccount" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "contractAddress",
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "level" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "exp" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "item" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "isIncrease" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "isPercentage",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "treasure" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenURI" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "address" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "sales" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "volume" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOwner" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderStatus" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderPrice" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderExpiresAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderCreatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsCharacter" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterAccount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterLevel" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterExp" },
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "searchCharacterAttribute",
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsTreasure" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsItem" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchItemAttribute" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isIncrease" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isPercentage" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "nftAddress" } },
                { kind: "Field", name: { kind: "Name", value: "tokenId" } },
                { kind: "Field", name: { kind: "Name", value: "amount" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "transactionHash" },
                },
                { kind: "Field", name: { kind: "Name", value: "owner" } },
                { kind: "Field", name: { kind: "Name", value: "buyer" } },
                { kind: "Field", name: { kind: "Name", value: "price" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "blockNumber" } },
                { kind: "Field", name: { kind: "Name", value: "expiresAt" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetOrdersByTokenIdQuery,
  GetOrdersByTokenIdQueryVariables
>;
export const GetOrdersByTokenIdAndStatusDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getOrdersByTokenIdAndStatus" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "first" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "skip" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "orderBy" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Order_orderBy" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "orderDirection" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "OrderDirection" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "tokenId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "BigInt" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "status" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "OrderStatus" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "orders" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "first" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "skip" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "skip" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "orderBy" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderDirection" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "orderDirection" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "tokenId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "tokenId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "status" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "status" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "marketplaceAddress" },
                },
                { kind: "Field", name: { kind: "Name", value: "category" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "nft" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "contractAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "creator" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "owner" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nfts" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sales" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "purchases" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "spent" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "earned" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenURI" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "rarity" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "orders" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "bids" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "activeOrder" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "soldAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "transferredAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "character" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "characterAccount" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "contractAddress",
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "level" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "exp" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "item" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "isIncrease" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "isPercentage",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "treasure" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenURI" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "address" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "sales" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "volume" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOwner" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderStatus" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderPrice" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderExpiresAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderCreatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsCharacter" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterAccount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterLevel" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterExp" },
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "searchCharacterAttribute",
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsTreasure" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsItem" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchItemAttribute" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isIncrease" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isPercentage" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "nftAddress" } },
                { kind: "Field", name: { kind: "Name", value: "tokenId" } },
                { kind: "Field", name: { kind: "Name", value: "amount" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "transactionHash" },
                },
                { kind: "Field", name: { kind: "Name", value: "owner" } },
                { kind: "Field", name: { kind: "Name", value: "buyer" } },
                { kind: "Field", name: { kind: "Name", value: "price" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "blockNumber" } },
                { kind: "Field", name: { kind: "Name", value: "expiresAt" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetOrdersByTokenIdAndStatusQuery,
  GetOrdersByTokenIdAndStatusQueryVariables
>;
export const GetSalesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getSales" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "sales" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                { kind: "Field", name: { kind: "Name", value: "buyer" } },
                { kind: "Field", name: { kind: "Name", value: "seller" } },
                { kind: "Field", name: { kind: "Name", value: "price" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "nft" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "contractAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "creator" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "owner" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nfts" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sales" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "purchases" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "spent" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "earned" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenURI" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "rarity" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "orders" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "marketplaceAddress",
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "amount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "transactionHash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "buyer" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockNumber" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "expiresAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "bids" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "bidAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "bidder" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "seller" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockchainId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockNumber" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "expiresAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "activeOrder" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "marketplaceAddress",
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "amount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "transactionHash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "buyer" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockNumber" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "expiresAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "soldAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "transferredAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "character" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "characterAccount" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "contractAddress",
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "level" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "exp" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "item" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "isIncrease" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "isPercentage",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "treasure" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenURI" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "address" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "sales" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "volume" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOwner" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderStatus" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderPrice" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderExpiresAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderCreatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsCharacter" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterAccount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterLevel" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterExp" },
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "searchCharacterAttribute",
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsTreasure" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsItem" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchItemAttribute" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isIncrease" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isPercentage" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "amount" } },
                { kind: "Field", name: { kind: "Name", value: "timestamp" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "transactionHash" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchTokenId" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchContractAddress" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchCategory" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSalesQuery, GetSalesQueryVariables>;
export const GetSalesByBuyerDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getSalesByBuyer" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "buyer" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Bytes" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "sales" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "buyer" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "buyer" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                { kind: "Field", name: { kind: "Name", value: "buyer" } },
                { kind: "Field", name: { kind: "Name", value: "seller" } },
                { kind: "Field", name: { kind: "Name", value: "price" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "nft" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "contractAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "creator" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "owner" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nfts" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sales" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "purchases" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "spent" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "earned" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenURI" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "rarity" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "orders" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "marketplaceAddress",
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "amount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "transactionHash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "buyer" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockNumber" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "expiresAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "bids" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "bidAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "bidder" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "seller" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockchainId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockNumber" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "expiresAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "activeOrder" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "marketplaceAddress",
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "amount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "transactionHash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "buyer" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockNumber" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "expiresAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "soldAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "transferredAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "character" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "characterAccount" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "contractAddress",
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "level" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "exp" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "item" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "isIncrease" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "isPercentage",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "treasure" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenURI" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "address" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "sales" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "volume" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOwner" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderStatus" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderPrice" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderExpiresAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderCreatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsCharacter" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterAccount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterLevel" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterExp" },
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "searchCharacterAttribute",
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsTreasure" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsItem" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchItemAttribute" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isIncrease" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isPercentage" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "amount" } },
                { kind: "Field", name: { kind: "Name", value: "timestamp" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "transactionHash" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchTokenId" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchContractAddress" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchCategory" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetSalesByBuyerQuery,
  GetSalesByBuyerQueryVariables
>;
export const GetSalesBySellerDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getSalesBySeller" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "seller" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Bytes" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "sales" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "seller" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "seller" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                { kind: "Field", name: { kind: "Name", value: "buyer" } },
                { kind: "Field", name: { kind: "Name", value: "seller" } },
                { kind: "Field", name: { kind: "Name", value: "price" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "nft" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "contractAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "creator" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "owner" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nfts" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sales" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "purchases" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "spent" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "earned" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenURI" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "rarity" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "orders" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "marketplaceAddress",
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "amount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "transactionHash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "buyer" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockNumber" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "expiresAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "bids" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "bidAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "bidder" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "seller" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockchainId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockNumber" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "expiresAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "activeOrder" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "marketplaceAddress",
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "amount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "transactionHash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "buyer" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockNumber" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "expiresAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "soldAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "transferredAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "character" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "characterAccount" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "contractAddress",
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "level" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "exp" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "item" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "isIncrease" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "isPercentage",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "treasure" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenURI" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "address" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "sales" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "volume" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOwner" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderStatus" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderPrice" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderExpiresAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderCreatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsCharacter" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterAccount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterLevel" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterExp" },
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "searchCharacterAttribute",
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsTreasure" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsItem" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchItemAttribute" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isIncrease" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isPercentage" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "amount" } },
                { kind: "Field", name: { kind: "Name", value: "timestamp" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "transactionHash" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchTokenId" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchContractAddress" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchCategory" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetSalesBySellerQuery,
  GetSalesBySellerQueryVariables
>;
export const GetSalesByTokenIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getSalesByTokenId" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "tokenId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "BigInt" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "sales" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "searchTokenId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "tokenId" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                { kind: "Field", name: { kind: "Name", value: "buyer" } },
                { kind: "Field", name: { kind: "Name", value: "seller" } },
                { kind: "Field", name: { kind: "Name", value: "price" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "nft" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "contractAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "creator" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "owner" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nfts" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sales" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "purchases" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "spent" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "earned" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenURI" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "rarity" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "orders" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "marketplaceAddress",
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "amount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "transactionHash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "buyer" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockNumber" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "expiresAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "bids" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "bidAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "bidder" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "seller" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockchainId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockNumber" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "expiresAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "activeOrder" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "marketplaceAddress",
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "amount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "transactionHash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "buyer" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockNumber" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "expiresAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "soldAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "transferredAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "character" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "characterAccount" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "contractAddress",
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "level" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "exp" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "item" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "isIncrease" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "isPercentage",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "treasure" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenURI" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "address" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "sales" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "volume" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOwner" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderStatus" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderPrice" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderExpiresAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderCreatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsCharacter" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterAccount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterLevel" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterExp" },
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "searchCharacterAttribute",
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsTreasure" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsItem" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchItemAttribute" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isIncrease" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isPercentage" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "amount" } },
                { kind: "Field", name: { kind: "Name", value: "timestamp" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "transactionHash" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchTokenId" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchContractAddress" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "searchCategory" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetSalesByTokenIdQuery,
  GetSalesByTokenIdQueryVariables
>;
export const GetAllTreasuresDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetAllTreasures" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "first" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "skip" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "orderBy" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Treasure_orderBy" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "orderDirection" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "OrderDirection" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "treasures" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "first" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "skip" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "skip" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "orderBy" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderDirection" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "orderDirection" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "tokenId" } },
                { kind: "Field", name: { kind: "Name", value: "tokenURI" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "nft" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "contractAddress" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "category" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "creator" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "owner" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "address" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nfts" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sales" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "purchases" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "spent" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "earned" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "amount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tokenURI" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "rarity" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "orders" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "marketplaceAddress",
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "amount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "transactionHash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "buyer" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockNumber" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "expiresAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "bids" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "orderBy" },
                            value: { kind: "EnumValue", value: "createdAt" },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "bidAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "bidder" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "seller" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockchainId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockNumber" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "expiresAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "activeOrder" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "marketplaceAddress",
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "category" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nftAddress" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "amount" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "transactionHash" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "buyer" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "price" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "status" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "blockNumber" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "expiresAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "soldAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "transferredAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "character" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "characterAccount" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "contractAddress",
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "level" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "exp" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "item" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attributes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "attribute" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "value" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "isIncrease" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "isPercentage",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "treasure" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenId" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tokenURI" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "owner" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "address" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "sales" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "volume" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOwner" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderStatus" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderPrice" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderExpiresAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchOrderCreatedAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsCharacter" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterAccount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterLevel" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchCharacterExp" },
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "searchCharacterAttribute",
                        },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsTreasure" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchIsItem" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "searchItemAttribute" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "attribute" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "value" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isIncrease" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isPercentage" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "owner" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "address" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAllTreasuresQuery,
  GetAllTreasuresQueryVariables
>;
