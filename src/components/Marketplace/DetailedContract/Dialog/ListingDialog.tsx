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
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns"
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import ListingButton from '@/components/Marketplace/DetailedContract/Button/ListingButton'
import { OrderStatus } from '@/generated/graphql';
import { CalendarIcon, ScaleIcon, SignatureIcon } from 'lucide-react';
import { RocketIcon } from 'lucide-react';
import { useAccount, useReadContract, useWatchContractEvent, useWriteContract } from 'wagmi';
import { kakarottoMarketplaceConfig, kakarottoCharacterConfig, kakarottoTokenConfig } from '@/contracts/config/writeContract.config';
import { useToast } from '@chakra-ui/react';
import Link from 'next/link';
import { EXPLORER_URL } from '@/contracts/utils/commons.util';
import { decodeEventLog, formatEther, getAddress, isAddress, isAddressEqual, parseEther } from 'viem';
import { getKakarottoCharacterAddress, getKakarottoMarketplaceAddress } from '@/contracts/utils/getAddress.util';
import getExplorer from '@/contracts/utils/getExplorer.util';
import { z } from "zod"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TimePicker } from '@/components/time-picker/time-picker';
import getABI from '@/contracts/utils/getAbi.util';
import { isExpired } from '@/utils/date.util';

interface ListingDialogProps {
    searchOrderStatus?: OrderStatus | null;
    contractAddress: string | `0x${string}`;
    tokenId: string;
    searchOrderExpiresAt: string | null;
}

type ApprovalArgs = {
    owner: any,
    approved: any,
    tokenId: any;
}

const formSchema = z.object({
    price: z.string().refine(value => !Number.isNaN(parseInt(value, 10)), {
        message: "Expected number, received a string"
    }).refine(value => parseInt(value, 10) > 0, {
        message: "Price must be larger than 0"
    }),
    expiredAt: z.date().refine((date) => {
        return date > new Date(Date.now() + LISTING_THRESHOLD);
    }, {
        message: "The expired date must be after today 10 minutes"
    })
});

const LISTING_THRESHOLD = 10 * 60 * 1000;

export default function ListingDialog({ searchOrderStatus, contractAddress, tokenId, searchOrderExpiresAt }: ListingDialogProps) {
    const { chainId, address } = useAccount();
    const toast = useToast();

    const [stateSubmit, setStateSubmit] = useState<{ price: number | undefined, duration: number | undefined }>({
        price: undefined,
        duration: undefined,
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            price: "0",
            expiredAt: new Date(new Date(Date.now() + LISTING_THRESHOLD).setMilliseconds(0)),
        }
    })

    const { data: publicationFeeInWei } = useReadContract({
        ...(kakarottoMarketplaceConfig(chainId)),
        functionName: "publicationFeeInWei",
        args: [],
    })

    const { data: balanceERC20 } = useReadContract({
        ...(kakarottoTokenConfig(chainId)),
        functionName: "balanceOf",
        args: [address]
    })
    const { data: approvedERC721Data, error: approvedERC721Error, isPending: approvedERC721IsPending } = useReadContract({
        ...(kakarottoCharacterConfig(chainId)),
        functionName: "getApproved",
        args: [tokenId]
    });
    const { data: approvedERC20Data, error: approvedERC20Error, isPending: approvedERC20IsPending } = useReadContract({
        ...(kakarottoTokenConfig(chainId)),
        functionName: "allowance",
        args: [address, getKakarottoMarketplaceAddress(chainId)]
    });
    const { writeContractAsync: createOrderWriteContractAsync, isPending: createOrderIsPending, isSuccess: createOrderIsSuccess } = useWriteContract();
    const { writeContractAsync: approvalERC721WriteContractAsync, isPending: approvalERC721IsPending, isSuccess: approvalERC721IsSuccess } = useWriteContract();
    const { writeContractAsync: approvalERC20WriteContractAsync, isPending: approvalERC20IsPending, isSuccess: approvalERC20IsSuccess } = useWriteContract();

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const formattedPrice = parseEther(values.price);
        const formattedExpiredAt = values.expiredAt.getTime();
        if (!formattedPrice && !formattedExpiredAt) {
            toast({
                title: "Listing Your Asset Error",
                description: "Something went wrong",
                isClosable: true,
                position: "bottom-right",
                status: 'error'
            })
            return;
        }
        const listingPromise = createOrderWriteContractAsync({
            ...(kakarottoMarketplaceConfig(chainId)),
            functionName: "createOrder",
            args: [
                contractAddress,
                tokenId,
                formattedPrice,
                BigInt(formattedExpiredAt / 1000)
            ]
        });
        toast.promise(listingPromise, {
            success: {
                title: "Listing Your Asset Success",
                description: listingPromise.then((txHash) => (
                    <div className="flex flex-col justify-center gap-1">
                        <span>You have listed your asset </span>
                        <a target='_blank' href={`${getExplorer(chainId)}/tx/${txHash}`} className='text-primary underline hover:scale-95 transition delay-100 duration-200 ease-in-out font-bold text-xl'>Transaction link</a>
                    </div>
                )),
                isClosable: true,
                position: "bottom-right"
            },
            loading: {
                title: "Listing Your Asset Pending",
                description: "Please wait a moment",
                position: "bottom-right"
            },
            error: {
                title: "Listing Your Asset Error",
                description: "Something went wrong",
                isClosable: true,
                position: "bottom-right"
            }
        });
    }

    async function onApprovalSubmit() {
        const approvalPromise = approvalERC721WriteContractAsync({
            ...(kakarottoCharacterConfig(chainId)),
            functionName: "approve",
            args: [
                getKakarottoMarketplaceAddress(chainId),
                tokenId,
            ]
        });
        toast.promise(approvalPromise, {
            success: {
                title: "Approving Your Asset Successfully",
                description: approvalPromise.then((txHash) => (
                    <div className="flex flex-col justify-center gap-1">
                        <span>You have approved your asset for Marketplace</span>
                        <a target='_blank' href={`${getExplorer(chainId)}/tx/${txHash}`} className='text-primary underline hover:scale-95 transition delay-100 duration-200 ease-in-out font-bold text-xl'>Transaction link</a>
                    </div>
                )),
                isClosable: true,
                position: "bottom-right"
            },
            loading: {
                title: "Approving Your Asset Pending",
                description: "Please wait a moment",
                position: "bottom-right"
            },
            error: {
                title: "Approving Your Asset Error",
                description: "Something went wrong",
                isClosable: true,
                position: "bottom-right"
            }
        })
    }

    async function onApprovalERC20Submit() {
        const approvalERC20Promise = approvalERC20WriteContractAsync({
            ...(kakarottoTokenConfig(chainId)),
            functionName: "approve",
            args: [getKakarottoMarketplaceAddress(chainId), publicationFeeInWei]
        });
        toast.promise(approvalERC20Promise, {
            success: {
                title: "Approving Token Successfully",
                description: approvalERC20Promise.then((txHash) => (
                    <div className="flex flex-col justify-center gap-1">
                        <span>You have approved tokens for Marketplace</span>
                        <a target='_blank' href={`${getExplorer(chainId)}/tx/${txHash}`} className='text-primary underline hover:scale-95 transition delay-100 duration-200 ease-in-out font-bold text-xl'>Transaction link</a>
                    </div>
                )),
                isClosable: true,
                position: "bottom-right"
            },
            loading: {
                title: "Approving Token Pending",
                description: "Please wait a moment",
                position: "bottom-right"
            },
            error: {
                title: "Approving Token Error",
                description: "Something went wrong",
                isClosable: true,
                position: "bottom-right"
            }
        })
    }

    console.log(searchOrderStatus == 'open');
    console.log(searchOrderExpiresAt != null)
    console.log(isExpired(parseInt(searchOrderExpiresAt ? searchOrderExpiresAt : 0)));

    return (
        <Dialog>
            <DialogTrigger className='w-full'>
                <ListingButton disabled={searchOrderStatus == 'open' && searchOrderExpiresAt != null && !isExpired(parseInt(searchOrderExpiresAt))} relisting={searchOrderStatus == 'open' && searchOrderExpiresAt != null && isExpired(parseInt(searchOrderExpiresAt))} />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className='flex flex-row items-center gap-2 text-primary text-2xl font-bold'>
                        <ScaleIcon size={32} />
                        <span>Listings Your Assets</span>
                    </DialogTitle>
                    <DialogDescription className="flex flex-col justify-center gap-4">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <FormField
                                    control={form.control}
                                    name="price"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Price (Publication Fee: {formatEther(publicationFeeInWei as bigint)})</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Price of Asset" type='number' {...field} />
                                            </FormControl>
                                            <FormDescription className="flex flex-col gap-2">
                                                How much do you want to list your asset ?
                                                <span className='font-bold text-lg'>Your balance: {formatEther(balanceERC20 as bigint)}</span>
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="expiredAt"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Expired at:</FormLabel>
                                            <FormControl>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-full justify-start text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                                            {
                                                                field.value ? format(field.value, 'PPP HH:mm:ss') : (
                                                                    <span>Pick a date</span>
                                                                )
                                                            }
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto">
                                                        <Calendar
                                                            mode="single"
                                                            selected={field.value}
                                                            onSelect={field.onChange}
                                                            disabled={(date) => date < new Date() || date < new Date('1900-01-01')}
                                                            initialFocus
                                                        />
                                                        <div className="p-3 border-t border-border">
                                                            <TimePicker setDate={field.onChange} date={field.value} />
                                                        </div>
                                                    </PopoverContent>
                                                </Popover>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                {
                                    (!approvalERC721IsSuccess && approvedERC721Data != undefined && !isAddressEqual(approvedERC721Data as `0x${string}`, getKakarottoMarketplaceAddress(chainId))) ? <Button className={`transition delay-100 duration-200 ease-in-out hover:scale-90 hover:cursor-pointer space-x-2 p-4 w-full `} onClick={onApprovalSubmit} type='button' disabled={approvalERC721IsPending}>
                                        <SignatureIcon size={24} />
                                        <span className="text-xl font-bold uppercase">Approve NFT</span>
                                    </Button> : (!approvalERC20IsSuccess && ((publicationFeeInWei as bigint) > (approvedERC20Data as bigint))) ?
                                        <Button className={`transition delay-100 duration-200 ease-in-out hover:scale-90 hover:cursor-pointer space-x-2 p-4 w-full `} onClick={onApprovalERC20Submit} type='button' disabled={approvalERC20IsPending}>
                                            <SignatureIcon size={24} />
                                            <span className="text-xl font-bold uppercase">Approve Token</span>
                                        </Button> : <Button className={`transition delay-100 duration-200 ease-in-out hover:scale-90 hover:cursor-pointer space-x-2 p-4 w-full `} type="submit" disabled={createOrderIsPending}>
                                            <RocketIcon size={24} />
                                            <span className="text-xl font-bold uppercase">Listing</span>
                                        </Button>
                                }
                            </form>
                        </Form>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog >
    )
}
