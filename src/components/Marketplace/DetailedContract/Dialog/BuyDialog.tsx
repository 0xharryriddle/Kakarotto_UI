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
    searchOrderExpiresAt?: number;
}

export default function BuyDialog({ searchOrderStatus, contractAddress, tokenId, searchOrderExpiresAt }: BuyDialogProps) {
    const { isConnected } = useAccount();

    return (
        <Dialog>
            <DialogTrigger
                asChild
            >
                <BuyButton
                    disabled={searchOrderStatus != 'open' || !isConnected || (searchOrderExpiresAt != null && isExpired(searchOrderExpiresAt))}
                />
            </DialogTrigger>
        </Dialog>
    )
}
