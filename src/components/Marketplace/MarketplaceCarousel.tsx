'use client';
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import CarouselCard from './CarouselCard'

interface MarketplaceCarouselProps {
    data: any[];
}

export default function MarketplaceCarousel({ data }: MarketplaceCarouselProps) {
    return (
        <Carousel>
            <CarouselContent>
                {data.map((item, index) => {
                    return <CarouselItem key={index}>
                        <CarouselCard image={item.data} name={item.name} type={item.type} description={item.description} price={item.price} rarity={item.rarity} />
                    </CarouselItem>
                })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
