import { gql, RequestDocument } from "graphql-request";
import { graphql } from "@/generated/gql";

export const GET_SALES: RequestDocument = graphql(`
  query getSales {
    sales {
      id
      type
      buyer
      seller
      price
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
      amount
      timestamp
      transactionHash
      searchTokenId
      searchContractAddress
      searchCategory
    }
  }
`) as RequestDocument;

export const GET_SALES_BY_BUYER: RequestDocument = graphql(`
  query getSalesByBuyer($buyer: Bytes!) {
    sales(where: { buyer: $buyer }) {
      id
      type
      buyer
      seller
      price
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
      amount
      timestamp
      transactionHash
      searchTokenId
      searchContractAddress
      searchCategory
    }
  }
`) as RequestDocument;

export const GET_SALES_BY_SELLER: RequestDocument = graphql(`
  query getSalesBySeller($seller: Bytes!) {
    sales(where: { seller: $seller }) {
      id
      type
      buyer
      seller
      price
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
      amount
      timestamp
      transactionHash
      searchTokenId
      searchContractAddress
      searchCategory
    }
  }
`) as RequestDocument;

export const GET_SALES_BY_TOKEN_ID: RequestDocument = graphql(`
  query getSalesByTokenId($tokenId: BigInt!) {
    sales(where: { searchTokenId: $tokenId }) {
      id
      type
      buyer
      seller
      price
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
      amount
      timestamp
      transactionHash
      searchTokenId
      searchContractAddress
      searchCategory
    }
  }
`) as RequestDocument;
