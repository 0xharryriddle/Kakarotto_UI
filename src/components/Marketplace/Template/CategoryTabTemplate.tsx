'use client';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
    Checkbox, CheckboxGroup, Stack
} from '@chakra-ui/react'
import { Separator } from "@/components/ui/separator"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Categories } from '@/utils/enum.util';
import { rarities } from '@/utils/mapping.util';
import * as Enums from '@/utils/enum.util';
import * as Mapping from '@/utils/mapping.util';
import CarouselCard from '@/components/Marketplace/CarouselCard';
import LoadingTemplate from '@/components/LoadingTemplate';
import { fetchCharacterDataReturnType } from '@/contracts/utils/fetchCardData.utill';
import { accessToPinataImage } from '@/utils/image.util';
import { Button } from '@/components/ui/button';
import { UseQueryResult } from '@tanstack/react-query';

interface CategoryTabTemplateProps {
    contractAddress: `0x${string}`;
    category: Categories;
    data: any[];
    loading?: boolean;
    // refetch: (options: { throwOnError: boolean, cancelRefetch: boolean }) => Promise<UseQueryResult>
}

type RarityFilter = {
    index: Enums.Rarities;
    isChecked: boolean;
};

type AttributeFilter = {
    name: string;
    value: number;
}

export default function CategoryTabTemplate({
    contractAddress,
    category,
    data,
    loading,
    // refetch
}: CategoryTabTemplateProps) {
    const router = useRouter()
    const [filter, setFilter] = useState<{
        rarities: RarityFilter[];
        attributes: AttributeFilter[];
    }>({
        rarities: [],
        attributes: []
    });

    return (
        <div className='w-full h-full min-h-screen flex flex-col gap-5 text-primary'>
            <Separator className="my-4" />
            <div className="flex flex-row gap-5 px-10">
                <div className="flex flex-col gap-5 w-1/5 h-full font-bold">
                    {/* Rarity Filter */}
                    <Accordion type="multiple" className='h-full w-full px-5 border-2 rounded-lg text-lg bg-secondary' >
                        <AccordionItem value="rarity">
                            <AccordionTrigger className='font-bold text-lg'>Rarity</AccordionTrigger>
                            <AccordionContent >
                                <div className='flex flex-col justify-center gap-5 w-full text-black'>
                                    <CheckboxGroup colorScheme='blue' >
                                        <Stack spacing={[1, 5]} direction={['column']}>
                                            {
                                                rarities.map((rarity, index) => (
                                                    <Checkbox
                                                        key={index}
                                                        isChecked={filter.rarities.filter(r => r.index === index)[0]?.isChecked}
                                                        onChange={(e) => setFilter((prev) => {
                                                            const newRarities = prev.rarities;
                                                            newRarities[index] = {
                                                                index: index,
                                                                isChecked: e.target.checked
                                                            }
                                                            return {
                                                                ...prev,
                                                                rarities: newRarities
                                                            }
                                                        })}
                                                    >
                                                        {rarity.toLocaleUpperCase('en-US')}
                                                    </Checkbox>
                                                ))
                                            }
                                        </Stack>
                                    </CheckboxGroup>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    {/* Status Filter */}
                    <Accordion type="multiple" className='h-full w-full px-5 border-2 rounded-lg text-lg bg-secondary' >
                        <AccordionItem value="status">
                            <AccordionTrigger className='font-bold text-lg'>Status</AccordionTrigger>
                            <AccordionContent >
                                <div className='flex flex-col justify-center gap-5 w-full text-black'>
                                    <CheckboxGroup colorScheme='blue' >
                                        <Stack spacing={[1, 5]} direction={['column']}>
                                            {/* Only Listings */}
                                            <Checkbox
                                            >
                                                Only Listings
                                            </Checkbox>
                                            {/* Not For Sales */}
                                            <Checkbox
                                            >
                                                Not For Sales
                                            </Checkbox>
                                            {/* All */}
                                            <Checkbox
                                            >
                                                All
                                            </Checkbox>
                                        </Stack>
                                    </CheckboxGroup>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Button>Reset</Button>
                </div>
                {
                    loading ? <LoadingTemplate className='h-full w-full' /> :
                        data.length ? <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-4/5 h-full">
                            {
                                data.map((element, index) => {
                                    const castingElement = element as fetchCharacterDataReturnType;
                                    return <CarouselCard key={index} image={castingElement.metadata?.image ? accessToPinataImage(castingElement.metadata?.image) : "/secret_treasure.gif"} name={castingElement.metadata?.name ? castingElement.metadata?.name : "Unknown"} category={category} description={castingElement.metadata?.description && ""} price={1.90} rarity={Mapping.rarities.findIndex((item) => item == castingElement.rarity) as Enums.Rarities} type="" className='basis-1/5 hover:-translate-y-4 cursor-pointer transition duration-150 delay-200' onClick={() => router.push(`/marketplace/contracts/${contractAddress}/item/${element.tokenId}`)} />
                                })}
                        </div>
                            :
                            <div className="w-4/5 h-full flex flex-col items-center justify-center gap-5">
                                <p className="text-2xl font-bold text-primary/75">No any {Mapping.categories[category]}...</p>
                            </div>
                }
            </div>
        </div>
    )
}
