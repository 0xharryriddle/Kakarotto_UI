'use client';
import React from 'react'

interface OffersCardProps {
    fromAddress: string | `0x${string}`;
    createdTime: number;
    price: number;
    expiredAt: number;
}

export default function OffersCard({ fromAddress, createdTime, price, expiredAt }: OffersCardProps) {
    return (
        <div className='p-5 grid grid-cols-5 gap-2'>
            <div className="flex flex-col justify-center gap-2">
                <span className='uppercase text-xl text-black/40'>From</span>
                <span>{fromAddress}</span>
            </div>
            <div className="flex flex-col justify-center gap-2">
                <span className='uppercase text-xl text-black/40'>Created</span>
                <span>{createdTime}</span>
            </div>
            <div className="flex flex-col justify-center gap-2">
                <span className='uppercase text-xl text-black/40'>Price</span>
                <span>{price}</span>
            </div>
            <div className="flex flex-col justify-center gap-2">
                <span className='uppercase text-xl text-black/40'>Expired at</span>
                <span>{expiredAt}</span>
            </div>
        </div>
    )
}
