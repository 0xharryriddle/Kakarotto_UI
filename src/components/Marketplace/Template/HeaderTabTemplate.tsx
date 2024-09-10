'use client';
import React from 'react'
import Image from 'next/image';

import { Separator } from "@/components/ui/separator"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

import { Categories } from '@/utils/enum.util';
import * as mappings from '@/utils/mapping.util'
import { truncateEthAddress } from '@/utils/address.util';
import { useAccount } from 'wagmi';

interface HeaderTabTemplateProps {
    image: string;
    name: string;
    contractAddress: `0x${string}`;
    standard: 'ERC721' | 'ERC1155';
    category: Categories;
}

export default function HeaderTabTemplate({
    image,
    name,
    contractAddress,
    standard,
    category,
}: HeaderTabTemplateProps) {
    const { chain, isConnected } = useAccount();

    return (
        <div className="flex flex-row items-center gap-4 w-fit px-10 pt-10 text-primary">
            <Image src={image} width={200} height={200} alt='NFT image' className='rounded-lg' />
            <div className="font-bold">
                <div className="space-y-2">
                    <h4 className="text-4xl leading-none">{name}</h4>
                    <HoverCard>
                        <HoverCardTrigger className='hover:scale-95 transition delay-100 duration-200 ease-in-out'>
                            <p className="text-secondary/70">
                                Contract: {truncateEthAddress(contractAddress)}
                            </p>
                        </HoverCardTrigger>
                        <HoverCardContent>
                            <p className="text-primary">
                                Copy Address ({isConnected ? chain?.name : "Sepolia"})
                            </p>
                        </HoverCardContent>
                    </HoverCard>
                </div>
                <Separator className="my-4" />
                <div className="flex h-5 items-center space-x-4">
                    <div>
                        <span>Standard: </span>
                        <span className="text-secondary/70">{standard}</span>
                    </div>
                    <Separator orientation="vertical" />
                    <div>
                        <span>Category: </span>
                        <span className="text-secondary/70">{mappings.categories[category]}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
