import React from 'react'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import ItemTab from '@/components/Marketplace/Item/ItemTab';
import { client } from '@/graphql/ssr.client'
import { querySubgraphs } from '@/services/graphql/subgraphs'

export default async function ItemMarketplacePage() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['data'],
    async queryFn() {
      return await querySubgraphs({ client })
    }
  })
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ItemTab changeTabLoading={false} />
    </HydrationBoundary>
  )
}
