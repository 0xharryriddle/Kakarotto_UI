import React from 'react'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import OverviewTab from '@/components/Marketplace/OverviewTab'

import { client } from '@/graphql/ssr.client'
import { querySubgraphs } from '@/services/graphql/subgraphs'
import { GET_ALL_NFTS } from '@/queries/nft'
import { GET_COUNT } from '@/queries/count'

export default async function MarketplacePage() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['trendingNFTs'],
    async queryFn() {
      return await querySubgraphs({
        client,
        query: GET_ALL_NFTS,
        variables: { first: 10, skip: 0, orderBy: 'volume', orderDirection: 'desc' },
      })
    },
  });

  await queryClient.prefetchQuery({
    queryKey: ['newestNFTs'],
    async queryFn() {
      return await querySubgraphs({
        client,
        query: GET_ALL_NFTS,
        variables: { first: 10, skip: 0, orderBy: 'createdAt', orderDirection: 'desc' },
      })
    },
  });

  await queryClient.prefetchQuery({
    queryKey: ['latestListings'],
    async queryFn() {
      return await querySubgraphs({
        client,
        query: GET_ALL_NFTS,
        variables: { first: 10, skip: 0, orderBy: 'activeOrder__createdAt', orderDirection: 'desc' },
      })
    },
  });

  await queryClient.prefetchQuery({
    queryKey: ['countSalesAndVolumes'],
    async queryFn() {
      return await querySubgraphs({
        client,
        query: GET_COUNT
      })
    }
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <OverviewTab changeTabLoading={false} />
    </HydrationBoundary>
  )
}
