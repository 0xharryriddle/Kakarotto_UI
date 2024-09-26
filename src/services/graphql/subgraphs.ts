import { GraphQLClient, type RequestDocument } from 'graphql-request';

import { graphql } from '@/generated/gql';

const Subgraphs: RequestDocument = graphql(`
  query Characters {
  characters {
      characterAccount {
        id
        contractAddress
      }
      nft {
        id
        creator
        owner {
            address
        }
        tokenId
        tokenURI
        contractAddress
        category
        amount
        rarity
        orders {
            id
            category
            tokenId
            transactionHash
            owner
            buyer
            price
            status
            createdAt
            expiresAt
            updatedAt
        }
        bids {
            id
            category
            tokenId
            bidder
            seller
            price
            status
            expiresAt
            createdAt
            updatedAt
        }
        activeOrder {
            id
            category
            tokenId
            transactionHash
            owner
            buyer
            price
            status
            createdAt
            expiresAt
            updatedAt
        }
        searchOwner
        searchOrderStatus
        searchOrderExpiresAt
      }
      attributes {
        attribute
        value
      }
      level
      exp
  }
  treasureAccounts {
      treasure {
        tokenId
        tokenURI
        nft {
            id
            tokenId
            tokenURI
            contractAddress
            category
            amount
            rarity
            orders {
            id
            category
            tokenId
            transactionHash
            owner
            buyer
            price
            status
            createdAt
            expiresAt
            updatedAt
            }
            bids {
            id
            category
            tokenId
            bidder
            seller
            price
            status
            expiresAt
            createdAt
            updatedAt
            }
            activeOrder {
            id
            category
            tokenId
            transactionHash
            owner
            buyer
            price
            status
            createdAt
            expiresAt
            updatedAt
            }
        }
      }
      balance
  }
  items {
    nft {
      id
      creator
      owner {
        address
      }
      tokenId
      tokenURI
      contractAddress
      category
      amount
      rarity
      orders {
        id
        category
        tokenId
        transactionHash
        owner
        buyer
        price
        status
        createdAt
        expiresAt
        updatedAt
      }
      bids {
        id
        category
        tokenId
        bidder
        seller
        price
        status
        expiresAt
        createdAt
        updatedAt
      }
      activeOrder {
        id
        category
        tokenId
        transactionHash
        owner
        buyer
        price
        status
        createdAt
        expiresAt
        updatedAt
      }
    }
    attributes {
      attribute
      value
      isIncrease
      isPercentage
    } 
  }
}
`) as RequestDocument;

export type QuerySubgraphsArgs = {
  client: GraphQLClient;
};
export async function querySubgraphs({
  client
}: QuerySubgraphsArgs) {
  try {
    const data = await client.request(Subgraphs);
    return data;
  } catch (error) {
    console.error("Error fetching subgraphs:", error);
    throw error; // Rethrow the error to handle it in the component
  }
}