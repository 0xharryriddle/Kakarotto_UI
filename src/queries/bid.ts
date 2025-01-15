import { gql, RequestDocument } from "graphql-request";
import { graphql } from "@/generated/gql";

export const GET_ALL_BIDS_BY_TOKEN_ID: RequestDocument = graphql(`
  query getAllBidsByTokenId(
    $first: Int
    $skip: Int
    $orderBy: Bid_orderBy
    $orderDirection: OrderDirection
    $tokenId: BigInt
  ) {
    bids(
      first: $first
      skip: $skip
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: { tokenId: $tokenId }
    ) {
      id
      bidAddress
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
  }
`) as RequestDocument;

export const GET_ALL_BIDS_BY_TOKEN_ID_AND_STATUS: RequestDocument = graphql(`
  query getAllBidsByTokenIdAndStatus($tokenId: BigInt!, $status: OrderStatus!) {
    bids(where: { tokenId: $tokenId, status: $status }) {
      id
      bidAddress
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
  }
`) as RequestDocument;

export const GET_ALL_BIDS_BY_BIDDER_AND_STATUS: RequestDocument = graphql(`
  query getAllBidsByBidderAndStatus($bidder: Bytes!, $status: OrderStatus!) {
    bids(where: { bidder: $bidder, status: $status }) {
      id
      bidAddress
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
  }
`) as RequestDocument;
