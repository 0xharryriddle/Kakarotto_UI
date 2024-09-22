'use client';
import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { OrderStatus } from '@/generated/graphql';
import BuyButton from '../Button/BuyButton';
import { useAccount } from 'wagmi';
import { isExpired } from '@/utils/date.util';

interface BuyDialogProps {
    searchOrderStatus?: OrderStatus | null;
    contractAddress: string | `0x${string}`;
    tokenId: string;
    searchOrderExpiresAt: string | null;
}

export default function BuyDialog({ searchOrderStatus, contractAddress, tokenId, searchOrderExpiresAt }: BuyDialogProps) {
    const { isConnected } = useAccount();

    return (
        <Dialog>
            <DialogTrigger className='w-full'>
                <BuyButton disabled={searchOrderStatus != 'open' || !isConnected || (searchOrderExpiresAt != null && isExpired(parseInt(searchOrderExpiresAt)))} />
            </DialogTrigger>
        </Dialog>
    )
}
