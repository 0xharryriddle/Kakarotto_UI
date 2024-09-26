'use client';
import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Character, TreasureAccount, Item } from '@/generated/graphql';
import { useAccount } from 'wagmi';
import ConnectButtonTab from '@/components/ConnectButtonTab';
import LoadingTemplate from '@/components/LoadingTemplate';
import MyNFTsHeading from '@/components/Marketplace/MyNFTs/MyNFTsHeading';
import MyNFTsBody from '@/components/Marketplace/MyNFTs/MyNFTsBody';
import { fetchCharacterData, fetchItemData, fetchTreasureData } from '@/contracts/utils/fetchCardData.utill';
import { isAddressEqual } from 'viem';
import { client } from '@/graphql/client';
import { querySubgraphs } from '@/services/graphql/subgraphs';

interface MyNFTsTabProps {
  changeTabLoading?: boolean;
}

interface GraphQLDataProps {
  characters: Character[];
  items: Item[];
  treasureAccounts: TreasureAccount[];
}

export default function MyNFTsTab({ changeTabLoading }: MyNFTsTabProps) {
  const { isConnected, address } = useAccount();
  const [loading, setLoading] = useState<boolean>(false);
  const [nftData, setNftData] = useState<{
    all: any[],
    characters: Character[],
    items: Item[],
    treasures: TreasureAccount[],
  }>({
    all: [],
    characters: [],
    items: [],
    treasures: []
  });

  const { data: graphqlData, status: graphqlStatus } = useQuery({
    queryKey: ['my_nfts'],
    async queryFn() {
      return await querySubgraphs({ client });
    }
  });

  useEffect(() => {
    async function fetchData() {
      if (graphqlData && address) {
        setLoading(true);
        setNftData({
          all: [],
          characters: [],
          items: [],
          treasures: []
        });
        const { characters, items, treasureAccounts } = graphqlData as GraphQLDataProps;
        await fetchNFTData({ characters, items, treasureAccounts });
        setLoading(false);
      }
    }
    fetchData();
  }, [graphqlData, address]);

  const fetchNFTData = async (
    {
      characters,
      items,
      treasureAccounts,
    }: {
      characters: Character[],
      items: Item[],
      treasureAccounts: TreasureAccount[],
    }) => {
    try {
      const characterResult = (await fetchCharacterData({ characters })).filter((character) => isAddressEqual(character.owner, address as `0x${string}`));
      const itemResult = (await fetchItemData({ items })).filter((item) => isAddressEqual(item.owner, address as `0x${string}`));
      const treasureResult = (await fetchTreasureData({ treasureAccounts })).filter((treasure) => isAddressEqual(treasure.owner, address as `0x${string}`));
      setNftData({
        all: [...characterResult, ...itemResult, ...treasureResult],
        characters: characterResult,
        items: itemResult,
        treasures: treasureResult
      });
    } catch (error) {
      console.error("Failed to fetch metadata:", error);
    }
  }

  return (
    !isConnected ? <ConnectButtonTab className='py-20' /> : changeTabLoading ? <LoadingTemplate /> : <div className="w-full h-full flex flex-col justify-center p-5 gap-5">
      <MyNFTsHeading />
      <MyNFTsBody nftData={nftData} loadingData={loading} />
    </div>
  )
}
