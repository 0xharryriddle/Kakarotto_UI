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

export default async function MarketplacePage() {
  // const queryClient = new QueryClient()

  // await queryClient.prefetchQuery({
  //   queryKey: ['overview'],
  //   async queryFn() {
  //     return await querySubgraphs({
  //       client,
  //       query: GET_ALL_NFTS({
  //         first: 100,
  //         skip: 0
  //       })
  //     })
  //   },
  // });

  return (
    // <HydrationBoundary state={dehydrate(queryClient)}>
    <OverviewTab changeTabLoading={false} />
    // </HydrationBoundary>
  )
}
