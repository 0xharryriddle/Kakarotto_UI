import { gql, RequestDocument } from "graphql-request";
import { graphql } from "@/generated/gql";

export const GET_ALL_CHARACTER_ACCOUNTS: RequestDocument = graphql(`
  query GetAllCharacterAccounts {
    characterAccounts {
      id
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
      contractAddress
    }
  }
`) as RequestDocument;

export const GET_CHARACTER_ACCOUNT_BY_CHARACTER_TOKEN_ID: RequestDocument =
  graphql(`
    query GetCharacterAccountByCharacterTokenId($tokenId: BigInt!) {
      characterAccounts(
        where: { character_: { nft_: { tokenId: $tokenId } } }
      ) {
        id
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
        contractAddress
      }
    }
  `) as RequestDocument;
