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
import MakeOfferButton from '../Button/MakeOfferButton';
import { useAccount } from 'wagmi';
import { isExpired } from '@/utils/date.util';

interface OfferDialogProps {
    searchOrderStatus?: OrderStatus | null;
    contractAddress: string | `0x${string}`;
    tokenId: string;
    searchOrderExpiresAt: string | null;
}

export default function OfferDialog({ searchOrderStatus, contractAddress, tokenId, searchOrderExpiresAt }: OfferDialogProps) {
    const { isConnected } = useAccount();
    return (
        <Dialog>
            <DialogTrigger className='w-full'>
                <MakeOfferButton disabled={searchOrderStatus != 'open' || !isConnected || (searchOrderExpiresAt != null && isExpired(parseInt(searchOrderExpiresAt)))} />
            </DialogTrigger>
        </Dialog>
    )
}
