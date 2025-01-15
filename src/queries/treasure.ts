import { gql, RequestDocument } from "graphql-request";
import { graphql } from "@/generated/gql";
import {
  InputMaybe,
  OrderDirection,
  Scalars,
  Treasure_OrderBy,
} from "@/generated/graphql";
import { SUBGRAPH } from "@/utils/constant.util";

export const GET_ALL_TREASURES = ({
  first,
  skip,
  orderBy,
  orderDirection,
}: {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: Treasure_OrderBy;
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
    query GetAllTreasures {
      treasures (
        ${first ? `first: ${first}` : ""}
        ${skip ? `skip: ${skip}` : ""}
        ${orderBy ? `orderBy: ${orderBy}` : ""}
        ${orderDirection ? `orderDirection: ${orderDirection}` : ""}
      ) {
        id
        tokenId
        tokenURI
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
        name
        owner {
          id
          address
        }
      }
    }
  `) as RequestDocument;
};
