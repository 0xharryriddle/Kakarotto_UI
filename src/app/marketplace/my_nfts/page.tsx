import React from 'react'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import MyNFTsTab from '@/components/Marketplace/MyNFTs/MyNFTsTab';
import { client } from '@/graphql/ssr.client'
import { querySubgraphs } from '@/services/graphql/subgraphs'

export default async function MyNFTsMarketplacePage() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['data'],
    async queryFn() {
      return await querySubgraphs({ client })
    }
  })
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MyNFTsTab changeTabLoading={false} />
    </HydrationBoundary>
  )
}
