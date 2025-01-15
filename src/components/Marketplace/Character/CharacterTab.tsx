'use client';
import React, { useEffect, useState } from 'react'
import { useAccount } from 'wagmi';
import HeaderTabTemplate from '@/components/Marketplace/Template/HeaderTabTemplate'
import { Categories } from '@/utils/type.util';
import CategoryTabTemplate from '@/components/Marketplace/Template/CategoryTabTemplate';
import LoadingTemplate from '@/components/LoadingTemplate';
import { getKakarottoCharacterAddress } from '@/contracts/utils/getAddress.util';


interface CharacterTabProps {
  changeTabLoading: boolean;
}

export default function CharacterTab({ changeTabLoading }: CharacterTabProps) {
  const { chainId } = useAccount();

  return (
    changeTabLoading
      ? <LoadingTemplate />
      : <div className='flex flex-col gap-5 justify-center px-5 py-2'>
        <HeaderTabTemplate image={"/secret_treasure.gif"}
          name="Kakarotto Character"
          contractAddress={
            getKakarottoCharacterAddress(chainId)
              ? getKakarottoCharacterAddress(chainId)
              : getKakarottoCharacterAddress(11155111)}
          standard="ERC721"
          category={Categories.Character} />
        <CategoryTabTemplate
          category={Categories.Character}
          contractAddress={
            getKakarottoCharacterAddress(chainId)
              ? getKakarottoCharacterAddress(chainId)
              : getKakarottoCharacterAddress(11155111)}
        />
      </div>
  )
}
