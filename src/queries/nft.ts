import { gql, RequestDocument } from "graphql-request";
import { graphql } from "@/generated/gql";
import {
  InputMaybe,
  Nft_OrderBy,
  OrderDirection,
  Scalars,
} from "@/generated/graphql";
import { SUBGRAPH } from "@/utils/constant.util";

export const GET_ALL_NFTS = ({
  first,
  skip,
  orderBy,
  orderDirection,
}: {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: Nft_OrderBy;
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
    query GetAllNFTs {
      nfts(
        ${first ? `first: ${first}` : ""}
        ${skip ? `skip: ${skip}` : ""}
        ${orderBy ? `orderBy: ${orderBy}` : ""}
        ${orderDirection ? `orderDirection: ${orderDirection}` : ""}
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
};

export const GET_ALL_NFTS_FILTER = ({
  first,
  skip,
  filterType,
}: {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  filterType: "trending" | "newest" | "latest_listing";
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
    query GetAllNFTsFilter {
      nfts(
        ${first ? `first: ${first}` : ""}
        ${skip ? `skip: ${skip}` : ""}
        ${
          filterType == "trending"
            ? "orderBy: volume orderDirection: desc"
            : filterType == "newest"
            ? "orderBy: createdAt orderDirection: desc"
            : filterType == "latest_listing"
            ? "orderBy: nft__searchOrderCreatedAt orderDirection: desc"
            : ""
        }
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
};

export const GET_NFT_BY_OWNER: RequestDocument = graphql(`
  query getNFTByOwner(
    $first: BigInt
    $skip: BigInt
    $searchOwner: String!
    $orderBy: String
    $orderDirection: String
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
