'use client';
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image';
import { Badge, Heading, Text } from '@chakra-ui/react';
import { Categories, Rarities } from '@/utils/enum.util';

interface CarouselCardProps {
    image: string;
    name: string;
    category: Categories;
    description: string;
    price: number;
    rarity: Rarities;
}

export default function CarouselCard({ image, name, category, description, price, rarity }: CarouselCardProps) {
    return (
        <Card className="flex flex-col rounded-lg bg-gray-800">
            <CardContent className='p-0 rounded-lg'>
                <div className="w-full rounded-t-lg relative ">
                    <Image src={rarity == Rarities.Bronze ? "/bg-rarity/bronze.png" : rarity == Rarities.Silver ? "/bg-rarity/silver.png" : rarity == Rarities.Gold ? "/bg-rarity/gold.png" : rarity == Rarities.Platinum ? "/bg-rarity/platinum.png" : "/bg-rarity/diamond.png"} alt="carousel image" width={330} height={110} className="absolute bottom-0 w-full" />
                    <Image src={image} alt="carousel image" width={300} height={300} className="w-full h-full rounded-lg" />
                </div>
                <div className="w-full p-6 pt-0 flex flex-col justify-center gap-2 text-secondary font-bold">
                    <Heading as="h2" size="md" className="mt-4">{name}</Heading>
                    <Text className='text-sm'>{`Category: ${category == Categories.Character ? "Character" : category == Categories.Item ? "Item" : "Treasure"}`}</Text>
                    <Text className='text-sm'>{description}</Text>
                    <div className="flex flex-row gap-2 text-sm">
                        {/* Token Icon */}
                        <Text className='text-lg'>{price}</Text>
                    </div>
                    <Badge colorScheme={rarity == Rarities.Bronze ? 'brown' : rarity == Rarities.Silver ? 'gray' : rarity == Rarities.Gold ? 'gold' : rarity == Rarities.Platinum ? 'green' : 'purple'} className='rounded-lg p-2 w-fit'>{rarity == Rarities.Bronze ? 'Bronze' : rarity == Rarities.Silver ? 'Silver' : rarity == Rarities.Gold ? 'Gold' : rarity == Rarities.Platinum ? 'Platinum' : 'Diamond'}</Badge>
                </div>

            </CardContent>
        </Card >
    )
}
