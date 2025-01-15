import { gql, RequestDocument } from "graphql-request";
import { graphql } from "@/generated/gql";

export const GET_CHARACTER_ATTRIBUTE_BY_TOKEN_ID: RequestDocument = graphql(`
  query getCharacterAttributeByTokenId($tokenId: BigInt!) {
    characterAttributes(
      where: { character_: { nft_: { tokenId: $tokenId } } }
    ) {
      id
      attribute
      character {
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
      value
    }
  }
`) as RequestDocument;
