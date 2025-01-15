import { gql, RequestDocument } from "graphql-request";
import { graphql } from "@/generated/gql";
import {
  InputMaybe,
  Order_OrderBy,
  OrderDirection,
  Scalars,
} from "@/generated/graphql";
import { SUBGRAPH } from "@/utils/constant.util";

export const GET_ALL_ORDERS = ({
  first,
  skip,
  orderBy,
  orderDirection,
}: {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: Order_OrderBy;
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
    query getAllOrders {
      orders (
        ${first ? `first: ${first}` : ""}
        ${skip ? `skip: ${skip}` : ""}
        ${orderBy ? `orderBy: ${orderBy}` : ""}
        ${orderDirection ? `orderDirection: ${orderDirection}` : ""}
      ) {
        id
        marketplaceAddress
        category
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
          }
          bids(orderBy: createdAt) {
            id
          }
          activeOrder {
            id
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
    }
  `) as RequestDocument;
};

export const GET_ORDERS_BY_STATUS: RequestDocument = graphql(`
  query getOrdersByStatus($status: OrderStatus!) {
    orders(where: { status: $status }) {
      id
      marketplaceAddress
      category
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
        }
        bids(orderBy: createdAt) {
          id
        }
        activeOrder {
          id
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
  }
`) as RequestDocument;

export const GET_ORDERS_BY_TOKEN_ID: RequestDocument = graphql(`
  query getOrdersByTokenId($tokenId: BigInt!) {
    orders(where: { nft_: { tokenId: $tokenId } }) {
      id
      marketplaceAddress
      category
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
        }
        bids(orderBy: createdAt) {
          id
        }
        activeOrder {
          id
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
  }
`) as RequestDocument;

export const GET_ORDERS_BY_TOKEN_ID_AND_STATUS: RequestDocument = graphql(`
  query getOrdersByTokenIdAndStatus($tokenId: BigInt!, $status: OrderStatus!) {
    orders(where: { tokenId: $tokenId, status: $status }) {
      id
      marketplaceAddress
      category
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
        }
        bids(orderBy: createdAt) {
          id
        }
        activeOrder {
          id
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
  }
`) as RequestDocument;
