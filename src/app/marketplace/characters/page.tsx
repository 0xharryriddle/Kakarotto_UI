import React from 'react'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import CharacterTab from '@/components/Marketplace/Character/CharacterTab';
import { client } from '@/graphql/ssr.client'
import { querySubgraphs } from '@/services/graphql/subgraphs'
import { GET_ALL_CHARACTERS } from '@/queries/character';

export default async function CharacterMarketplacePage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['characters'],
    async queryFn() {
      return await querySubgraphs({
        client,
        query: GET_ALL_CHARACTERS
      })
    },
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CharacterTab changeTabLoading={false} />
    </HydrationBoundary>
  )
}
