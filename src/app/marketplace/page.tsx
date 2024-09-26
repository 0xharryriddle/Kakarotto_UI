import React from 'react'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import OverviewTab from '@/components/Marketplace/OverviewTab'
import { client } from '@/graphql/ssr.client'
import { querySubgraphs } from '@/services/graphql/subgraphs'

export default async function MarketplacePage() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['overview'],
    async queryFn() {
      return await querySubgraphs({ client })
    }
  })
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <OverviewTab changeTabLoading={false} />
    </HydrationBoundary>
  )
}
