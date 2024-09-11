import React from 'react'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { gql, request } from 'graphql-request'
import CharacterTab from '@/components/Marketplace/Character/CharacterTab';

const subgraph_url: string = process.env.NEXT_PUBLIC_SUBGRAPH_URL || ""
const query = gql`{
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
    }
    attributes {
      attribute
      value
    }
    level
    exp
  }
}`;

export default async function CharacterMarketplacePage() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['data'],
    async queryFn() {
      return await request(subgraph_url, query)
    }
  })
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CharacterTab changeTabLoading={false} />
    </HydrationBoundary>
  )
}
