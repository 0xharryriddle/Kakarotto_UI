"use client";
import React from 'react'
import Image from 'next/image'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { CircularProgress } from '@chakra-ui/react';
import { capitalizeFirstLetter } from '@/contracts/utils/string.util';
import getExplorer from '@/contracts/utils/getExplorer.util';
import { useAccount } from 'wagmi';
import { imageURL } from '@/utils/image.util';

interface GenerationProps {
    hash?: string;
    image?: any;
    account?: string;
    tokenURI?: string;
    traits?: {
        rarity?: string;
        attributes?: {
            power: string;
            defend: string;
            agility: string;
            intelligence: string;
            luck: string;
        };
    };
    imageLoading: boolean;
    isMinting: boolean;
}

const attributesTemplate = ["rarity", "power", "defend", "agility", "intelligence", "luck"];

export default function Generation(
    {
        hash,
        image,
        account,
        tokenURI,
        traits,
        imageLoading,
        isMinting
    }: GenerationProps
) {
    const { isConnected, chainId } = useAccount();

    return (
        <div className='flex flex-col gap-2 pl-10 pt-10 w-1/2 items-center'>
            <HoverCard openDelay={100}>
                <HoverCardTrigger>
                    <div className={`${image && "relative"} border-4 w-[360px] h-[360px] rounded-lg bg-secondary/70 ${image && 'bg-white'} flex flex-row items-center justify-center`} >
                        {imageLoading && <div><CircularProgress isIndeterminate /></div>}
                        {image && <Image src={imageURL({ url: process.env.NEXT_PUBLIC_IPFS_URL || "", hash: image })} alt='image' layout='fill' className='rounded-lg' loading="lazy" />}
                    </div>
                </HoverCardTrigger>
                <HoverCardContent side='right'>
                    <div className='flex flex-col gap-2'>
                        <span className='text-center font-bold text-xl'>Attributes</span>
                        <div className='flex flex-col gap-2'>
                            {attributesTemplate.map((data: any, index) => {
                                return <div key={index} className='flex flex-row gap-2'>
                                    <span className='font-bold'>{capitalizeFirstLetter(data)}:</span>
                                    <span>{
                                        // (data == 'rarity') ? traits?.rarity : traits?.attributes ? traits.attributes[data] : "0"
                                    }</span>
                                </div>
                            })}
                        </div>
                    </div>
                </HoverCardContent >
            </HoverCard >
            {(!hash && !account) || isMinting ? <div className='flex items-center justify-center w-full'><CircularProgress isIndeterminate /></div> : <div className="flex flex-col items-center border-4 min-w-96 rounded-lg bg-secondary/70 gap-5">
                <div className="flex flex-row items-center font-bold w-full ">
                    <span className='text-primary'>
                        {`Account: `}
                    </span>
                    <div className='flex items-center justify-center w-full'><CircularProgress isIndeterminate /></div>
                    <a href={`${getExplorer(chainId)}/address/${account}`} className='text-primary underline hover:opacity-70 hover:scale-90 transition delay-100 duration-200 ease-in-out break-all text-center'>{account}</a>
                </div>
                <div className="flex flex-row items-center font-bold w-full break-all">
                    <span className='text-primary'>Transaction hash: </span>
                    <a href={`${getExplorer(chainId)}/tx/${hash}`} className='text-primary underline hover:opacity-70 hover:scale-90 transition delay-100 duration-200 ease-in-out break-all text-center'>{hash}</a>
                </div>
            </div>}
        </div >
    )
}
