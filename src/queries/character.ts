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

export const GET_ALL_CHARACTERS: RequestDocument = graphql(`
  query GetAllCharacters(
    $first: Int
    $skip: Int
    $orderBy: Character_orderBy
    $orderDirection: OrderDirection
  ) {
    characters(
      first: $first
      skip: $skip
      orderBy: $orderBy
      orderDirection: $orderDirection
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

export const GET_ALL_CHARACTERS_FILTER: RequestDocument = graphql(`
  query GetAllCharactersFilter(
    $first: Int
    $skip: Int
    $orderBy: Character_orderBy
    $orderDirection: OrderDirection
    $rarity: [Rarity!]
    $searchOrderStatus: OrderStatus
  ) {
    characters(
      first: $first
      skip: $skip
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: {
        nft_: { rarity_in: $rarity, searchOrderStatus: $searchOrderStatus }
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

export const GET_ALL_CHARACTERS_BY_OWNER: RequestDocument = graphql(`
  query GetCharactersByOwner(
    $first: Int
    $skip: Int
    $orderBy: Character_orderBy
    $orderDirection: OrderDirection
    $owner: String
  ) {
    characters(
      first: $first
      skip: $skip
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: { nft_: { owner: $owner } }
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
