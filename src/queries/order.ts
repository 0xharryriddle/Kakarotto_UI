import { gql, RequestDocument } from "graphql-request";
import { graphql } from "@/generated/gql";
import {
  InputMaybe,
  Order_OrderBy,
  OrderDirection,
  Scalars,
} from "@/generated/graphql";
import { SUBGRAPH } from "@/utils/constant.util";

export const GET_ALL_ORDERS: RequestDocument = graphql(`
  query getAllOrders(
    $first: Int
    $skip: Int
    $orderBy: Order_orderBy
    $orderDirection: OrderDirection
  ) {
    orders(
      first: $first
      skip: $skip
      orderBy: $orderBy
      orderDirection: $orderDirection
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

export const GET_ORDERS_BY_STATUS: RequestDocument = graphql(`
  query getOrdersByStatus(
    $first: Int
    $skip: Int
    $orderBy: Order_orderBy
    $orderDirection: OrderDirection
    $status: OrderStatus!
  ) {
    orders(
      first: $first
      skip: $skip
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: { status: $status }
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

export const GET_ORDERS_BY_TOKEN_ID: RequestDocument = graphql(`
  query getOrdersByTokenId(
    $first: Int
    $skip: Int
    $orderBy: Order_orderBy
    $orderDirection: OrderDirection
    $tokenId: BigInt!
  ) {
    orders(
      first: $first
      skip: $skip
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: { nft_: { tokenId: $tokenId } }
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

export const GET_ORDERS_BY_TOKEN_ID_AND_STATUS: RequestDocument = graphql(`
  query getOrdersByTokenIdAndStatus(
    $first: Int
    $skip: Int
    $orderBy: Order_orderBy
    $orderDirection: OrderDirection
    $tokenId: BigInt!
    $status: OrderStatus!
  ) {
    orders(
      first: $first
      skip: $skip
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: { tokenId: $tokenId, status: $status }
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
