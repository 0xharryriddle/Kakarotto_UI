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
  return (
    <main className='w-full h-full'>
      <MyNFTsTab />
    </main>
  )
}
