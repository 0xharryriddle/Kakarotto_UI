import { gql, RequestDocument } from "graphql-request";
import { graphql } from "@/generated/gql";
import { SUBGRAPH } from "@/utils/constant.util";
import {
  Character_OrderBy,
  InputMaybe,
  OrderDirection,
  Rarity,
  Scalars,
} from "@/generated/graphql";

export const GET_ALL_CHARACTERS = ({
  first,
  skip,
  orderBy,
  orderDirection,
}: {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: Character_OrderBy;
  orderDirection?: OrderDirection;
}): RequestDocument => {
  if (first) {
    first =
      Number(first) < SUBGRAPH.FIRST.MIN || Number(first) > SUBGRAPH.FIRST.MAX
        ? SUBGRAPH.FIRST.MAX
        : first;
  }
  if (skip) {
    skip =
      Number(skip) < SUBGRAPH.SKIP.MIN || Number(skip) > SUBGRAPH.SKIP.MAX
        ? 0
        : skip;
  }

  return graphql(`
    query GetAllCharacters {
      characters(
        ${first ? `first: ${first}` : ""}
        ${skip ? `skip: ${skip}` : ""}
        ${orderBy ? `orderBy: ${orderBy}` : ""}
        ${orderDirection ? `orderDirection: ${orderDirection}` : ""}
      ) {
        id
        characterAccount {
          id
          contractAddress
        }
        level
        exp
        nft {
          id
          tokenId
          contractAddress
          category
          creator
          owner {
            id
            address
            nfts {
              id
            }
            sales
            purchases
            spent
            earned
          }
          amount
          tokenURI
          rarity
          orders(orderBy: createdAt) {
            id
            marketplaceAddress
            category
            nftAddress
            tokenId
            amount
            transactionHash
            owner
            buyer
            price
            status
            blockNumber
            expiresAt
            createdAt
            updatedAt
          }
          bids(orderBy: createdAt) {
            id
            bidAddress
            category
            nftAddress
            tokenId
            bidder
            seller
            price
            status
            blockchainId
            blockNumber
            expiresAt
            createdAt
            updatedAt
          }
          activeOrder {
            id
            marketplaceAddress
            category
            nftAddress
            tokenId
            amount
            transactionHash
            owner
            buyer
            price
            status
            blockNumber
            expiresAt
            createdAt
            updatedAt
          }
          name
          createdAt
          updatedAt
          soldAt
          transferredAt
          character {
            id
            characterAccount {
              id
              contractAddress
            }
            level
            exp
            attributes {
              id
              attribute
              value
            }
          }
          item {
            id
            attributes {
              id
              attribute
              value
              isIncrease
              isPercentage
            }
          }
          treasure {
            id
            tokenId
            tokenURI
            name
            owner {
              id
              address
            }
          }
          sales
          volume
          searchOwner
          searchOrderStatus
          searchOrderPrice
          searchOrderExpiresAt
          searchOrderCreatedAt

          searchIsCharacter
          searchCharacterAccount
          searchCharacterLevel
          searchCharacterExp
          searchCharacterAttribute {
            id
            attribute
            value
          }
          searchIsTreasure
          searchIsItem
          searchItemAttribute {
            id
            attribute
            value
            isIncrease
            isPercentage
          }
        }
        attributes {
          id
          attribute
          value
        }
      }
    }
  `) as RequestDocument;
};

export const GET_ALL_CHARACTERS_FILTER = ({
  first,
  skip,
  orderBy,
  orderDirection,
  rarity,
  status,
}: {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: Character_OrderBy;
  orderDirection?: OrderDirection;
  rarity?: Rarity[];
  status?: "all" | "only_listings" | "not_for_sales";
}): RequestDocument => {
  if (first) {
    first =
      Number(first) < SUBGRAPH.FIRST.MIN || Number(first) > SUBGRAPH.FIRST.MAX
        ? SUBGRAPH.FIRST.MAX
        : first;
  }
  if (skip) {
    skip =
      Number(skip) < SUBGRAPH.SKIP.MIN || Number(skip) > SUBGRAPH.SKIP.MAX
        ? 0
        : skip;
  }

  return graphql(`
    query GetAllCharacters {
      characters(
        ${first ? `first: ${first}` : ""}
        ${skip ? `skip: ${skip}` : ""}
        ${orderBy ? `orderBy: ${orderBy}` : ""}
        ${orderDirection ? `orderDirection: ${orderDirection}` : ""}
        where: {
          nft_: {
            ${
              rarity && rarity.length > 0
                ? `rarity_in: ${JSON.stringify(rarity)}`
                : ""
            }
            ${
              status === "only_listings"
                ? `searchOrderStatus: open` // 'open' status
                : status === "not_for_sales"
                ? `searchOrderStatus: null` // 'null' is not for sales
                : "" // 'all' status
            }
          }
        }
      ) {
        id
        characterAccount {
          id
          contractAddress
        }
        level
        exp
        nft {
          id
          tokenId
          contractAddress
          category
          creator
          owner {
            id
            address
            nfts {
              id
            }
            sales
            purchases
            spent
            earned
          }
          amount
          tokenURI
          rarity
          orders(orderBy: createdAt) {
            id
            marketplaceAddress
            category
            nftAddress
            tokenId
            amount
            transactionHash
            owner
            buyer
            price
            status
            blockNumber
            expiresAt
            createdAt
            updatedAt
          }
          bids(orderBy: createdAt) {
            id
            bidAddress
            category
            nftAddress
            tokenId
            bidder
            seller
            price
            status
            blockchainId
            blockNumber
            expiresAt
            createdAt
            updatedAt
          }
          activeOrder {
            id
            marketplaceAddress
            category
            nftAddress
            tokenId
            amount
            transactionHash
            owner
            buyer
            price
            status
            blockNumber
            expiresAt
            createdAt
            updatedAt
          }
          name
          createdAt
          updatedAt
          soldAt
          transferredAt
          character {
            id
            characterAccount {
              id
              contractAddress
            }
            level
            exp
            attributes {
              id
              attribute
              value
            }
          }
          item {
            id
            attributes {
              id
              attribute
              value
              isIncrease
              isPercentage
            }
          }
          treasure {
            id
            tokenId
            tokenURI
            name
            owner {
              id
              address
            }
          }
          sales
          volume
          searchOwner
          searchOrderStatus
          searchOrderPrice
          searchOrderExpiresAt
          searchOrderCreatedAt

          searchIsCharacter
          searchCharacterAccount
          searchCharacterLevel
          searchCharacterExp
          searchCharacterAttribute {
            id
            attribute
            value
          }
          searchIsTreasure
          searchIsItem
          searchItemAttribute {
            id
            attribute
            value
            isIncrease
            isPercentage
          }
        }
        attributes {
          id
          attribute
          value
        }
      }
    }
  `) as RequestDocument;
};

export const GET_CHARACTERS_BY_OWNER = ({
  first,
  skip,
  orderBy,
  orderDirection,
  searchOwner,
}: {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: Character_OrderBy;
  orderDirection?: OrderDirection;
  searchOwner: Scalars["String"]["input"];
}): RequestDocument => {
  if (first) {
    first =
      Number(first) < SUBGRAPH.FIRST.MIN || Number(first) > SUBGRAPH.FIRST.MAX
        ? SUBGRAPH.FIRST.MAX
        : first;
  }
  if (skip) {
    skip =
      Number(skip) < SUBGRAPH.SKIP.MIN || Number(skip) > SUBGRAPH.SKIP.MAX
        ? 0
        : skip;
  }

  return graphql(`
    query GetCharactersByOwner {
      characters(
        ${first ? `first: ${first}` : ""}
        ${skip ? `skip: ${skip}` : ""}
        ${orderBy ? `orderBy: ${orderBy}` : ""}
        ${orderDirection ? `orderDirection: ${orderDirection}` : ""}
        where: { nft_: { searchOwner: ${searchOwner} } }
      ) {
        id
        characterAccount {
          id
          contractAddress
        }
        level
        exp
        nft {
          id
          tokenId
          contractAddress
          category
          creator
          owner {
            id
            address
            nfts {
              id
            }
            sales
            purchases
            spent
            earned
          }
          amount
          tokenURI
          rarity
          orders(orderBy: createdAt) {
            id
            marketplaceAddress
            category
            nftAddress
            tokenId
            amount
            transactionHash
            owner
            buyer
            price
            status
            blockNumber
            expiresAt
            createdAt
            updatedAt
          }
          bids(orderBy: createdAt) {
            id
            bidAddress
            category
            nftAddress
            tokenId
            bidder
            seller
            price
            status
            blockchainId
            blockNumber
            expiresAt
            createdAt
            updatedAt
          }
          activeOrder {
            id
            marketplaceAddress
            category
            nftAddress
            tokenId
            amount
            transactionHash
            owner
            buyer
            price
            status
            blockNumber
            expiresAt
            createdAt
            updatedAt
          }
          name
          createdAt
          updatedAt
          soldAt
          transferredAt
          character {
            id
            characterAccount {
              id
              contractAddress
            }
            level
            exp
            attributes {
              id
              attribute
              value
            }
          }
          item {
            id
            attributes {
              id
              attribute
              value
              isIncrease
              isPercentage
            }
          }
          treasure {
            id
            tokenId
            tokenURI
            name
            owner {
              id
              address
            }
          }
          sales
          volume
          searchOwner
          searchOrderStatus
          searchOrderPrice
          searchOrderExpiresAt
          searchOrderCreatedAt

          searchIsCharacter
          searchCharacterAccount
          searchCharacterLevel
          searchCharacterExp
          searchCharacterAttribute {
            id
            attribute
            value
          }
          searchIsTreasure
          searchIsItem
          searchItemAttribute {
            id
            attribute
            value
            isIncrease
            isPercentage
          }
        }
        attributes {
          id
          attribute
          value
        }
      }
    }
  `) as RequestDocument;
};
