'use client';
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';

import { OrderStatus } from '@/generated/graphql';
import CancelListingButton from '@/components/Marketplace/DetailedContract/Button/CancelListingButton';
import { BanIcon } from 'lucide-react';
import Link from 'next/link';
import { EXPLORER_URL } from '@/contracts/utils/commons.util';
import { useAccount, useWriteContract } from 'wagmi';
import { kakarottoMarketplaceConfig } from '@/contracts/config/writeContract.config';
import { useToast } from '@chakra-ui/react';

interface CancelDialogProps {
    searchOrderStatus?: OrderStatus | null;
    contractAddress: string | `0x${string}`;
    tokenId: string;
}

export default function CancelDialog({ searchOrderStatus, contractAddress, tokenId }: CancelDialogProps) {
    const { chainId } = useAccount();
    const toast = useToast();

    const { writeContractAsync } = useWriteContract();


    async function onSubmit() {
        const cancelPromise = writeContractAsync({
            ...(kakarottoMarketplaceConfig(chainId)),
            functionName: "cancelOrder",
            args: [
                contractAddress,
                tokenId
            ]
        });
        toast.promise(cancelPromise, {
            success: {
                title: "Cancel Your Listing Asset Successfully",
                description: <div>
                    <span>You have cancel your listing asset <Link href={`${EXPLORER_URL}/tx/${cancelPromise.then(value => value)}`}></Link></span>
                </div>,
                isClosable: true,
                position: "bottom-right"
            },
            loading: {
                title: "Cancel Your Listing Asset Pending",
                description: "Please wait a moment",
                position: "bottom-right"
            },
            error: {
                title: "Cancel Your Listing Asset Error",
                description: "Something went wrong",
                isClosable: true,
                position: "bottom-right"
            }
        });
    }
    return (
        <Dialog>
            <DialogTrigger className='w-full'>
                <CancelListingButton disabled={!(searchOrderStatus == 'open')} />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription className="flex flex-col justify-center gap-4">
                        <span>Please input this word to ensure want to cancel listing </span>
                        <b className='text-xl self-center'>Hello</b>
                        <Input />
                        <Button className={`transition delay-100 duration-200 ease-in-out hover:scale-90 hover:cursor-pointer space-x-2 p-4 w-full `} variant={"destructive"} onClick={onSubmit}>
                            <BanIcon size={24} />
                            <span className="text-xl font-bold uppercase">Cancel</span>
                        </Button>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
