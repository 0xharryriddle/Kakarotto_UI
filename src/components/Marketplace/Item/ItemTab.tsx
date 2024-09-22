'use client';
import React, { useEffect, useState } from 'react'
import HeaderTabTemplate from '@/components/Marketplace/Template/HeaderTabTemplate'
import { Categories } from '@/utils/enum.util';
import CategoryTabTemplate from '@/components/Marketplace/Template/CategoryTabTemplate';
import LoadingTemplate from '@/components/LoadingTemplate';
import { useAccount } from 'wagmi';
import { Item } from '@/generated/graphql';
import { useQuery } from '@tanstack/react-query'
import { fetchItemData } from '@/contracts/utils/fetchCardData.utill';
import { getKakarottoItemAddress } from '@/contracts/utils/getAddress.util';
import { querySubgraphs } from '@/services/graphql/subgraphs';
import { client } from '@/graphql/client';

interface ItemTabProps {
  changeTabLoading: boolean;
}

interface GraphQLDataProps {
  items: Item[],
}

export default function ItemTab({ changeTabLoading }: ItemTabProps) {
  const { chainId } = useAccount();
  const [loading, setLoading] = useState<boolean>(false);
  const [itemData, setItemData] = useState<Item[]>([]);

  const { data: graphqlData } = useQuery({
    queryKey: ['data'],
    async queryFn() {
      return await querySubgraphs({ client })
    }
  });

  useEffect(() => {
    async function fetchData() {
      if (graphqlData) {
        setLoading(true);
        setItemData([]);
        const { items } = graphqlData as GraphQLDataProps;
        await fetchNFTData({ items });
        setLoading(false);
      }
    }
    fetchData();
  }, [graphqlData]);

  const fetchNFTData = async (
    {
      items,
    }: {
      items: Item[],
    }) => {
    try {
      const itemResult = await fetchItemData({ items });
      setItemData(itemResult);
    } catch (error) {
      console.error("Failed to fetch metadata:", error);
    }
  }

  return (
    changeTabLoading
      ? <LoadingTemplate />
      : <div className='flex flex-col gap-5 justify-center px-5 py-2'>
        <HeaderTabTemplate image={"/secret_treasure.gif"}
          name="Kakarotto Item"
          contractAddress={getKakarottoItemAddress(chainId) ? getKakarottoItemAddress(chainId) : getKakarottoItemAddress(11155111)}
          standard="ERC721"
          category={Categories.Item} />
        <CategoryTabTemplate
          data={itemData}
          loading={loading}
          category={Categories.Item}
          contractAddress={getKakarottoItemAddress(chainId) ? getKakarottoItemAddress(chainId) : getKakarottoItemAddress(11155111)} />
      </div>
  )
}
