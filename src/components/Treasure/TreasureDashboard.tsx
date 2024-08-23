'use client';
import React from 'react';
import TreasureCarousel from './TreasureCarousel';
import MarketplaceTreasure from './MarketplaceTreasure';

const listRarityTreasures = [{
    rarity: 0,
    color: "border-amber-950"
}, {
    rarity: 1,
    color: "border-lime-50"
},
{
    rarity: 2,
    color: "border-yellow-300"
},
{
    rarity: 3,
    color: "border-green-400"
},
{
    rarity: 4,
    color: "border-indigo-500"
}];

export default function TreasureDashboard() {
    return (
        <div className='flex flex-col gap-2 items-center justify-center w-full'>
            <TreasureCarousel listRarityTreasures={listRarityTreasures} />
            {/* <div className="flex "></div> */}
            <MarketplaceTreasure listRarityTreasures={listRarityTreasures} />
        </div >
    )
}
