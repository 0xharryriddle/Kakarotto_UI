import React from 'react'
import { gql, request } from 'graphql-request'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import DetailedDashboard from '@/components/Marketplace/DetailedContract/DetailedDashboard';
import { client } from '@/graphql/ssr.client'
import { querySubgraphs } from '@/services/graphql/subgraphs'

interface ContractDetailPageProps {
  params: {
    contractAddress: string,
    tokenId: string,
  }
}

export default async function ContractDetailPage({ params }: ContractDetailPageProps) {
  const { contractAddress: contractAddressParams, tokenId: tokenIdParams } = params;
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['data'],
    async queryFn() {
      return await querySubgraphs({ client })
    }
  })
  return <HydrationBoundary state={dehydrate(queryClient)}>
    <DetailedDashboard contractAddress={contractAddressParams} tokenId={tokenIdParams} />
  </HydrationBoundary>
}
