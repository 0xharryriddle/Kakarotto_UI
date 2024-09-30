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
import { CharacterAttribute, OrderStatus } from '@/generated/graphql';
import MakeOfferButton from '../Button/MakeOfferButton';
import { useAccount } from 'wagmi';
import { isExpired } from '@/utils/date.util';
import { useToast } from '@chakra-ui/react';
import Image from 'next/image';
import { useBidOrder } from '@/hooks/useBidOrder';
import { getERC721BidAddress, getKakarottoTokenAddress } from '@/contracts/utils/getAddress.util';
import getABI from '@/contracts/utils/getAbi.util';
import { Address, isAddressEqual, parseEther, TransactionReceipt } from 'viem';
import { useIsSufficientTokenBalance } from '@/hooks/useIsSufficientTokenBalance';
import { BID_CONSTANTS } from '@/lib/constants/marketplace';
import { truncateEthAddress } from '@/utils/address.util';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { useFormattedTokenBalance } from '@/hooks/useFormattedTokenBalance';
import { formatUnitsToNumber } from '@/utils/token-unit-utils/format-units-to-number';
import { Button } from '@/components/ui/button';
import { CalendarIcon, ScaleIcon, SignatureIcon } from 'lucide-react';
import { TimePicker } from '@/components/time-picker/time-picker';
import { useERC20Allowance } from '@/hooks/useERC20Allowance';
import { capitalizeFirstLetter } from '@/utils/string.util';
import BuyButton from '../Button/BuyButton';
import { useERC20Approval } from '@/hooks/useERC20Approval';
import getExplorer from '@/contracts/utils/getExplorer.util';

interface OfferDialogProps {
    searchOrderStatus?: OrderStatus | null;
    contractAddress: Address;
    tokenId: bigint;
    searchOrderExpiresAt?: number;
    image: string;
    attributes: CharacterAttribute[],
    owner?: Address;
    priceInWei: bigint;
}

const formSchema = z.object({
    bidPrice: z.string().refine(value => !Number.isNaN(parseInt(value, 10)), {
        message: "Expected number, received a string"
    }).refine(value => parseInt(value, 10) > 0, {
        message: "Price must be larger than 0"
    }),
    expiredAt: z.date().refine((date) => {
        const timeStamp = date.getTime();
        return (timeStamp > Date.now()) && (timeStamp - Date.now() > BID_CONSTANTS.MIN_BID_DURATION * 1000) && (timeStamp - Date.now() <= BID_CONSTANTS.MAX_BID_DURATION * 1000)
    }, {
        message: "The period time at least 5 minutes and maximum 30 days"
    })
});

export default function OfferDialog({
    searchOrderStatus,
    contractAddress,
    tokenId,
    searchOrderExpiresAt,
    image,
    attributes,
    owner,
    priceInWei
}: OfferDialogProps) {
    const { isConnected, chainId, address } = useAccount();

    const toast = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            bidPrice: "0",
            expiredAt: new Date(Date.now() + BID_CONSTANTS.MIN_BID_DURATION * 1000)
        }
    });

    const {
        parsedBalanceRequired,
        isSufficientAllowance,
        isSufficientBalance,
        refetchAllowance,
        refetchTokenBalance,
        refetchNativeBalance,
        isLoading: isSufficientIsLoading,
        isFetching: isSufficientIsFetching,
        isError: isSufficientIsError,
        tokenSymbol
    } = useIsSufficientTokenBalance({
        balanceRequired: parseEther(form.watch('bidPrice')),
        currencyAddress: getKakarottoTokenAddress(chainId),
        contractToApprove: getERC721BidAddress(chainId),
        chainId,
        isNativeCurrency: false,
        tokenInfo: {
            address: getKakarottoTokenAddress(chainId),
            decimals: 18,
            name: 'Kakarotto',
            symbol: 'KKR'
        },
        enabled: true
    });

    const {
        tokenBalanceRaw,
        refetch: tokenBalanceRefetch,
        isLoading: tokenBalanceIsLoading,
        isFetching: tokenBalanceIsFetching,
        isError: tokenBalanceIsError
    } = useFormattedTokenBalance({
        tokenAddress: getKakarottoTokenAddress(chainId),
        account: address,
        chainId,
        enabled: true,
    });

    const {
        error: bidOrderError,
        isLoading: bidOrderIsLoading,
        isSuccess: bidOrderIsSuccess,
        isError: bidOrderIsError,
        onBidOrder,
        refetch: bidOrderRefetch,
    } = useBidOrder({
        chainId,
        address: getERC721BidAddress(chainId),
        abi: getABI('ERC721Bid'),
        tokenAddress: contractAddress,
        tokenId,
        price: parseEther(form.watch('bidPrice')),
        duration: form.watch('expiredAt').getTime() > Date.now() ? BigInt(Math.floor((form.watch('expiredAt').getTime() - Date.now()) / 1000)) : BigInt(0),
        enabled: true,
        onSuccess: (data: TransactionReceipt) => {
            if (toast.isActive('offer-order-loading-toast')) {
                toast.close('offer-order-loading-toast');
            }
            if (!toast.isActive('offer-order-success-toast')) {
                toast({
                    id: 'offer-order-success-toast',
                    title: "Placed a Bid this NFT Successfully.",
                    description: <div className="flex flex-col justify-center gap-1">
                        <span>You have placed a bid this NFT for Bid Market</span>
                        <a target='_blank' href={`${getExplorer(chainId)}/tx/${data.transactionHash}`} className='text-primary underline hover:scale-95 transition delay-100 duration-200 ease-in-out font-bold text-xl'>Transaction link</a>
                    </div>,
                    status: 'success',
                    isClosable: true,
                    position: "bottom-right"
                })
            }
        },
        onSettled: (data?: TransactionReceipt) => {
        },
        onError: (error?: Error) => {
            console.log(error);
            if (toast.isActive('offer-order-loading-toast')) {
                toast.close('offer-order-loading-toast');
            }
            toast({
                title: "Place A Bid Error",
                description: "Something went wrong",
                isClosable: true,
                status: 'error',
                position: "bottom-right"
            })
        }
    });

    const {
        isLoading: erc20ApprovalIsLoading,
        onERC20Approval,
    } = useERC20Approval({
        chainId,
        address: getKakarottoTokenAddress(chainId),
        spender: getERC721BidAddress(chainId),
        amount: parseEther(form.watch('bidPrice')),
        enabled: true,
        // !!form.watch('bidPrice'),
        onSuccess: (data: TransactionReceipt) => {
            if (toast.isActive('erc20-approval-loading-toast')) {
                toast.close('erc20-approval-loading-toast');
            }
            if (!toast.isActive('erc20-approval-success-toast')) {
                toast({
                    id: 'erc20-approval-success-toast',
                    title: "Approving Token Successfully.",
                    description: <div className="flex flex-col justify-center gap-1">
                        <span>You have approved tokens for Marketplace</span>
                        <a target='_blank' href={`${getExplorer(chainId)}/tx/${data.transactionHash}`} className='text-primary underline hover:scale-95 transition delay-100 duration-200 ease-in-out font-bold text-xl'>Transaction link</a>
                    </div>,
                    status: 'success',
                    isClosable: true,
                    position: "bottom-right"
                })
            }
        },
        onSettled: (data?: TransactionReceipt) => {
        },
        onError: (error?: Error) => {
            console.log(error);
            if (toast.isActive('erc20-approval-loading-toast')) {
                toast.close('erc20-approval-loading-toast');
            }
            toast({
                title: "Approving Token Error",
                description: "Something went wrong",
                isClosable: true,
                status: 'error',
                position: "bottom-right"
            })
        }
    })

    const onApprovalERC20Submit = async () => {
        if (!toast.isActive('erc20-approval-loading-toast')) {
            toast({
                id: 'erc20-approval-loading-toast',
                title: "Approving Token Pending",
                description: "Please wait a moment",
                status: 'loading',
                position: "bottom-right",
                duration: null,
                isClosable: false,
            });
        }
        await onERC20Approval();
    }

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        if (!toast.isActive('offer-order-loading-toast')) {
            toast({
                id: 'offer-order-loading-toast',
                title: "Placing a Bid this NFT Pending.",
                description: "Please wait a moment",
                status: 'loading',
                position: "bottom-right",
                duration: null,
                isClosable: false,
            });
        }
        await onBidOrder();
    }

    return (
        <Dialog>
            <DialogTrigger
                asChild
            >
                <MakeOfferButton
                    disabled={
                        bidOrderIsLoading || searchOrderStatus != 'open' || !isConnected || (searchOrderExpiresAt != null && isExpired(searchOrderExpiresAt))
                    }
                >
                    <ScaleIcon size={24} />
                    <span className="text-xl font-bold uppercase">Make offer</span>
                </MakeOfferButton>
            </DialogTrigger>
            <DialogContent className='h-fit'>
                <DialogHeader>
                    <DialogTitle className='text-primary font-bold text-3xl'>Place your bid</DialogTitle>
                    <DialogDescription>{"Offer your price suitably to nft's owner."}</DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col justify-center gap-2 border-2 border-primary rounded-lg px-5">
                        <span className='font-bold text-2xl'>Kakarotto Token</span>
                        <div className="flex justify-between">
                            <span className='text-lg font-bold'>TokenId:</span>
                            <span className='font-medium'>#0</span>
                        </div>
                        <div className=" flex justify-between">
                            <span className='text-lg font-bold'>Category:</span>
                            <span className='font-medium'>Character</span>
                        </div>
                        <div className="flex justify-between">
                            <span className='text-lg font-bold'>Rarity:</span>
                            <span className='font-medium'>Bronze</span>
                        </div>
                        <div className="flex justify-between">
                            <span className='text-lg font-bold'>Owner:</span>
                            <span className='font-medium'>{contractAddress ? truncateEthAddress(contractAddress.toString()) : "Unknown"}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className='text-lg font-bold'>Price:</span>
                            <span className='font-medium'>{formatUnitsToNumber(priceInWei)}</span>
                        </div>
                        <div className="flex justify-between gap-2 w-full text-primary">
                            <span className='text-lg font-bold'>Attributes:</span>
                            <div className="flex flex-col justify-center gap-2 w-full">
                                {
                                    attributes.map((attribute, index) => {
                                        return (<div key={index} className="flex flex-row items-center justify-between ml-10">
                                            <span className='font-medium'>{capitalizeFirstLetter(attribute?.attribute)}</span>
                                            <span className='font-medium'>{attribute?.value}</span>
                                        </div>)
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Image
                            // src={accessToPinataImage(image)} 
                            src={'/secret_treasure.gif'}
                            width={150}
                            height={150}
                            alt='NFT Image'
                            className='self-center'
                        />
                        <div className="flex flex-col justify-center gap-2">
                            <div className="flex flex-col justify-center gap-4">
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                        <FormField
                                            control={form.control}
                                            name="bidPrice"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Bid Price:</FormLabel>
                                                    <FormControl>
                                                        <Input {...field} placeholder="Price of Asset" type='number' />
                                                    </FormControl>
                                                    <FormDescription className="flex flex-col gap-2">
                                                        How much token do you want to place your bid ?
                                                        <span className='font-bold text-lg'>Your balance: {formatUnitsToNumber(tokenBalanceRaw?.value, tokenBalanceRaw?.decimals)}</span>
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
                                            !isSufficientAllowance || !isSufficientBalance
                                                ? <Button
                                                    className='w-full transition delay-100 duration-200 ease-in-out hover:scale-90 hover:cursor-pointer space-x-2 p-4'
                                                    disabled={!isSufficientBalance || !isConnected || erc20ApprovalIsLoading}
                                                    type='button'
                                                    onClick={onApprovalERC20Submit}
                                                >
                                                    {
                                                        erc20ApprovalIsLoading
                                                            ? <span className='text-xl font-bold'>Loading...</span>
                                                            : isSufficientBalance
                                                                ? <>
                                                                    <SignatureIcon size={24} />
                                                                    <span className="text-xl font-bold uppercase">Approve Token</span>
                                                                </> : "Insufficient balance"
                                                    }
                                                </Button>
                                                : <Button
                                                    className='w-full transition delay-100 duration-200 ease-in-out hover:scale-90 hover:cursor-pointer space-x-2 p-4'
                                                    disabled={!isSufficientAllowance || !isSufficientBalance || bidOrderIsLoading || searchOrderStatus != 'open' || !isConnected || (searchOrderExpiresAt != null && isExpired(searchOrderExpiresAt)) || !isSufficientAllowance || !isSufficientBalance}
                                                    type='submit'
                                                >
                                                    {
                                                        bidOrderIsLoading
                                                            ? <span className='text-xl font-bold'>Loading...</span>
                                                            : <>
                                                                <ScaleIcon size={24} />
                                                                <span className="text-xl font-bold uppercase">Make offer</span>
                                                            </>
                                                    }
                                                </Button>
                                        }
                                    </form>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog >
    )
}
