import { gql, RequestDocument } from "graphql-request";
import { graphql } from "@/generated/gql";

export const GET_ALL_NFTS: RequestDocument = graphql(`
  query GetAllNFTs(
    $first: Int
    $skip: Int
    $orderBy: NFT_orderBy
    $orderDirection: OrderDirection
  ) {
    nfts(
      first: $first
      skip: $skip
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
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
  }
`) as RequestDocument;

// This graphql query is used to get all trending, newest, and latest NFTs
// export const GET_ALL_NFTS_TRENDING_NEWEST_LATEST: RequestDocument = graphql(
//   `
//     query GetAllNFTsTrendingNewestLatest(
//       $first: Int
//       $skip: Int
//     ) {
//       // Get the trending NFTs
//       nfts(
//         first: $first
//         skip: $skip
//         orderBy: volume
//         orderDirection: desc
//       ) {
//         id
//         tokenId
//         contractAddress
//         category
//         creator
//         owner {
//           id
//           address
//           nfts {
//             id
//           }
//           sales
//           purchases
//           spent
//           earned
//         }
//         amount
//         tokenURI
//         rarity
//         orders(orderBy: createdAt) {
//           id
//           marketplaceAddress
//           category
//           nftAddress
//           tokenId
//           amount
//           transactionHash
//           owner
//           buyer
//           price
//           status
//           blockNumber
//           expiresAt
//           createdAt
//           updatedAt
//         }
//         bids(orderBy: createdAt) {
//           id
//           bidAddress
//           category
//           nftAddress
//           tokenId
//           bidder
//           seller
//           price
//           status
//           blockchainId
//           blockNumber
//           expiresAt
//           createdAt
//           updatedAt
//         }
//         activeOrder {
//           id
//           marketplaceAddress
//           category
//           nftAddress
//           tokenId
//           amount
//           transactionHash
//           owner
//           buyer
//           price
//           status
//           blockNumber
//           expiresAt
//           createdAt
//           updatedAt
//         }
//         name
//         createdAt
//         updatedAt
//         soldAt
//         transferredAt
//         character {
//           id
//           characterAccount {
//             id
//             contractAddress
//           }
//           level
//           exp
//           attributes {
//             id
//             attribute
//             value
//           }
//         }
//         item {
//           id
//           attributes {
//             id
//             attribute
//             value
//             isIncrease
//             isPercentage
//           }
//         }
//         treasure {
//           id
//           tokenId
//           tokenURI
//           name
//           owner {
//             id
//             address
//           }
//         }
//         sales
//         volume
//         searchOwner
//         searchOrderStatus
//         searchOrderPrice
//         searchOrderExpiresAt
//         searchOrderCreatedAt

//         searchIsCharacter
//         searchCharacterAccount
//         searchCharacterLevel
//         searchCharacterExp
//         searchCharacterAttribute {
//           id
//           attribute
//           value
//         }
//         searchIsTreasure
//         searchIsItem
//         searchItemAttribute {
//           id
//           attribute
//           value
//           isIncrease
//           isPercentage
//         }
//       }
//       // Get the newest NFTs
//       nfts(
//         first: $first
//         skip: $skip
//         orderBy: volume
//         orderDirection: desc
//       ) {
//         id
//         tokenId
//         contractAddress
//         category
//         creator
//         owner {
//           id
//           address
//           nfts {
//             id
//           }
//           sales
//           purchases
//           spent
//           earned
//         }
//         amount
//         tokenURI
//         rarity
//         orders(orderBy: createdAt) {
//           id
//           marketplaceAddress
//           category
//           nftAddress
//           tokenId
//           amount
//           transactionHash
//           owner
//           buyer
//           price
//           status
//           blockNumber
//           expiresAt
//           createdAt
//           updatedAt
//         }
//         bids(orderBy: createdAt) {
//           id
//           bidAddress
//           category
//           nftAddress
//           tokenId
//           bidder
//           seller
//           price
//           status
//           blockchainId
//           blockNumber
//           expiresAt
//           createdAt
//           updatedAt
//         }
//         activeOrder {
//           id
//           marketplaceAddress
//           category
//           nftAddress
//           tokenId
//           amount
//           transactionHash
//           owner
//           buyer
//           price
//           status
//           blockNumber
//           expiresAt
//           createdAt
//           updatedAt
//         }
//         name
//         createdAt
//         updatedAt
//         soldAt
//         transferredAt
//         character {
//           id
//           characterAccount {
//             id
//             contractAddress
//           }
//           level
//           exp
//           attributes {
//             id
//             attribute
//             value
//           }
//         }
//         item {
//           id
//           attributes {
//             id
//             attribute
//             value
//             isIncrease
//             isPercentage
//           }
//         }
//         treasure {
//           id
//           tokenId
//           tokenURI
//           name
//           owner {
//             id
//             address
//           }
//         }
//         sales
//         volume
//         searchOwner
//         searchOrderStatus
//         searchOrderPrice
//         searchOrderExpiresAt
//         searchOrderCreatedAt

//         searchIsCharacter
//         searchCharacterAccount
//         searchCharacterLevel
//         searchCharacterExp
//         searchCharacterAttribute {
//           id
//           attribute
//           value
//         }
//         searchIsTreasure
//         searchIsItem
//         searchItemAttribute {
//           id
//           attribute
//           value
//           isIncrease
//           isPercentage
//         }
//       }
//     }
//   `
// ) as RequestDocument;

export const GET_NFT_BY_OWNER: RequestDocument = graphql(`
  query getNFTByOwner(
    $first: Int
    $skip: Int
    $searchOwner: String!
    $orderBy: NFT_orderBy
    $orderDirection: OrderDirection
  ) {
    nfts(
      first: $first
      skip: $skip
      where: { searchOwner: $searchOwner }
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
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
  }
`) as RequestDocument;

export const GET_NFT_BY_TOKEN_ID: RequestDocument = graphql(`
  query getNFTByTokenId($tokenId: BigInt!) {
    nfts(where: { tokenId: $tokenId }) {
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
  }
`) as RequestDocument;
