"use client";
import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll"
import Image from 'next/image';

interface TreasureCarouselProps {
    listRarityTreasures: any;
};

// const listTreasures = [{
//     rarity: 0,
//     color: "border-amber-950"
// }, {
//     rarity: 2,
//     color: "border-yellow-300"
// }, {
//     rarity: 1,
//     color: "border-lime-50"
// }, {
//     rarity: 3,
//     color: "border-green-400"
// }, {
//     rarity: 4,
//     color: "border-indigo-500"
// }, {
//     rarity: 2,
//     color: "border-yellow-300"
// }, {
//     rarity: 0,
//     color: "border-amber-950"
// }, {
//     rarity: 3,
//     color: "border-green-400"
// }, {
//     rarity: 4,
//     color: "border-indigo-500"
// }, {
//     rarity: 1,
//     color: "border-lime-50"
// }];

export default function TreasureCarousel({ listRarityTreasures }: TreasureCarouselProps) {
    const listTreasures = Array.from({ length: 10 }).map((_, index) => {
        return listRarityTreasures[index % listRarityTreasures.length];
    });

    return (
        <div className="w-full">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                    watchDrag: false,
                    breakpoints: {
                        'hover': { loop: false },
                    }
                }}
                plugins={[AutoScroll(
                    {
                        speed: 2,
                    }
                )]}
                className="w-full max-h-lg"
            >
                <CarouselContent>
                    {listTreasures.map((data, index) => (
                        <CarouselItem key={index} className="md:basis-1/4 lg:basis-56">
                            <div className="p-1">
                                <Card className={`${data.color} border-8`}>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <Image src={"/TreasureChest.gif"} alt={`Treasure #${index}`} width={500} height={500} />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}
