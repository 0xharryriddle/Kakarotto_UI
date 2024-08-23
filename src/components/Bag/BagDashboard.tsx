import React from 'react'
import Bag from './Bag';



export default function BagDashboard() {
    const items: any[] = [];
    const characters: any[] = [];
    return (
        <div className="flex flex-row gap-4 items-center justify-center w-full h-full">
            <Bag title="Characters" data={characters} />
            <Bag title="Items" data={items} />
        </div>
    )
}
