'use client';
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';

import { OrderStatus } from '@/generated/graphql';
import CancelListingButton from '@/components/Marketplace/DetailedContract/Button/CancelListingButton';
import { BanIcon } from 'lucide-react';
import { useAccount } from 'wagmi';
import { useToast } from '@chakra-ui/react';
import { isExpired } from '@/utils/date.util';
import { useCancelOrder } from '@/hooks/useCancelOrder';
import { Address, TransactionReceipt } from 'viem';
import getExplorer from '@/contracts/utils/getExplorer.util';

interface CancelListingDialogProps {
    searchOrderStatus?: OrderStatus | null;
    contractAddress: Address;
    tokenId: string;
    searchOrderExpiresAt?: number;
}

export default function CancelListingDialog({ searchOrderStatus, contractAddress, searchOrderExpiresAt, tokenId }: CancelListingDialogProps) {
    const { chainId } = useAccount();
    const [isSubmit, setIsSubmit] = useState<boolean>(false);

    const toast = useToast();

    const {
        error: cancelOrderError,
        isLoading: cancelOrderIsLoading,
        onCancelOrder,
    } = useCancelOrder({
        chainId,
        tokenAddress: contractAddress,
        tokenId: BigInt(parseInt(tokenId)),
        enabled: isSubmit,
        onSuccess: (data: TransactionReceipt) => {
            toast({
                title: "Listing Your Asset Successfully.",
                description: <div className="flex flex-col justify-center gap-1">
                    <span>You have canceled your listing for Marketplace</span>
                    <a target='_blank' href={`${getExplorer(chainId)}/tx/${data.transactionHash}`} className='text-primary underline hover:scale-95 transition delay-100 duration-200 ease-in-out font-bold text-xl'>Transaction link</a>
                </div>,
                status: 'success',
                isClosable: true,
                position: "bottom-right"
            })
        },
        onSettled: (data?: TransactionReceipt) => {
            setIsSubmit(false);
            if (toast.isActive('cancel-order-loading-toast')) {
                toast.close('cancel-order-loading-toast');
            }
        },
        onError: (error?: Error) => {
            setIsSubmit(false);
            console.log(error);
            toast({
                title: "Cancel Your Listing Error.",
                description: "Something went wrong",
                isClosable: true,
                status: 'error',
                position: "bottom-right"
            })
            if (toast.isActive('cancel-order-loading-toast')) {
                toast.close('cancel-order-loading-toast');
            }
        }
    });

    async function onSubmit() {
        setIsSubmit(true);
        if (!toast.isActive('cancel-order-loading-toast')) {
            toast({
                id: 'cancel-order-loading-toast',
                title: "Cancel Your Listing Pending",
                description: "Please wait a moment",
                status: 'loading',
                position: "bottom-right",
                duration: null,
                isClosable: false,
            })
        }
        await onCancelOrder();
    }

    return (
        <Dialog>
            <DialogTrigger
                asChild
            >
                <CancelListingButton
                    disabled={(searchOrderStatus != 'open') || (searchOrderStatus == 'open' && searchOrderExpiresAt != null && isExpired(searchOrderExpiresAt))}
                />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription className="flex flex-col justify-center gap-4">
                        <Button
                            onClick={onSubmit}
                            className={`transition delay-100 duration-200 ease-in-out hover:scale-90 hover:cursor-pointer space-x-2 p-4 w-full `}
                            variant={"destructive"}
                            disabled={cancelOrderIsLoading}
                            type='button'
                        >
                            {
                                cancelOrderIsLoading
                                    ? <span className='text-xl font-bold'>Loading...</span>
                                    : <>
                                        <BanIcon size={24} />
                                        <span className="text-xl font-bold uppercase">Cancel</span>
                                    </>
                            }
                        </Button>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
