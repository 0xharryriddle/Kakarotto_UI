'use client';
import React, { useEffect, useState } from 'react'
import { useAccount } from 'wagmi';
import { useQuery } from '@tanstack/react-query'
import HeaderTabTemplate from '@/components/Marketplace/Template/HeaderTabTemplate'
import { Categories } from '@/utils/enum.util';
import CategoryTabTemplate from '@/components/Marketplace/Template/CategoryTabTemplate';
import LoadingTemplate from '@/components/LoadingTemplate';
import { getKakarottoCharacterAddress } from '@/contracts/utils/getAddress.util';
import { fetchCharacterData } from '@/contracts/utils/fetchCardData.utill';
import { client } from '@/graphql/client';
import { querySubgraphs } from '@/services/graphql/subgraphs';
import { Character, Item, TreasureAccount } from '@/generated/graphql';

interface CharacterTabProps {
  changeTabLoading: boolean;
}

interface GraphQLDataProps {
  characters: Character[],
  items: Item[],
  treasureAccounts: TreasureAccount[]
}

export default function CharacterTab({ changeTabLoading }: CharacterTabProps) {
  const { chainId } = useAccount();
  const [loading, setLoading] = useState<boolean>(false);
  const [characterData, setCharacterData] = useState<Character[]>([]);

  const { data: graphqlData, status: graphqlStatus } = useQuery({
    queryKey: ['data'],
    async queryFn() {
      return await querySubgraphs({ client });
    },
  });

  useEffect(() => {
    async function fetchData() {
      if (graphqlData) {
        setLoading(true);
        setCharacterData([]);
        const { characters } = graphqlData as GraphQLDataProps;
        await fetchNFTData({ characters });
        setLoading(false);
      }
    }
    fetchData();
  }, [graphqlData, changeTabLoading]);

  const fetchNFTData = async (
    {
      characters,
    }: {
      characters: Character[],
    }) => {
    try {
      const characterResult = await fetchCharacterData({ characters });
      setCharacterData(characterResult);
    } catch (error) {
      console.error("Failed to fetch metadata:", error);
    }
  }

  return (
    changeTabLoading
      ? <LoadingTemplate />
      : <div className='flex flex-col gap-5 justify-center px-5 py-2'>
        <HeaderTabTemplate image={"/secret_treasure.gif"}
          name="Kakarotto Character"
          contractAddress={getKakarottoCharacterAddress(chainId) ? getKakarottoCharacterAddress(chainId) : getKakarottoCharacterAddress(11155111)}
          standard="ERC721"
          category={Categories.Character} />
        <CategoryTabTemplate
          data={characterData}
          category={Categories.Character}
          loading={loading}
          contractAddress={getKakarottoCharacterAddress(chainId) ? getKakarottoCharacterAddress(chainId) : getKakarottoCharacterAddress(11155111)} />
      </div>
  )
}
