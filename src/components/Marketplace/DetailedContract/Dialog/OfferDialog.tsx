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
import { Attribute, OrderStatus } from '@/generated/graphql';
import MakeOfferButton from '../Button/MakeOfferButton';
import { useAccount } from 'wagmi';
import { isExpired } from '@/utils/date.util';
import { useToast } from '@chakra-ui/react';
import Image from 'next/image';
import { accessToPinataImage } from '@/utils/image.util';
import { useBidOrder } from '@/hooks/useBidOrder';
import { getERC721BidAddress, getKakarottoTokenAddress } from '@/contracts/utils/getAddress.util';
import getABI from '@/contracts/utils/getAbi.util';
import { Address, isAddressEqual, TransactionReceipt } from 'viem';
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
import { CalendarIcon } from 'lucide-react';
import { TimePicker } from '@/components/time-picker/time-picker';
import { useERC20Allowance } from '@/hooks/useERC20Allowance';

interface OfferDialogProps {
    searchOrderStatus?: OrderStatus | null;
    contractAddress: Address;
    tokenId: bigint;
    searchOrderExpiresAt?: number;
    image: string;
    attributes: Attribute[],
    owner?: Address;
}

const formSchema = z.object({
    bidPrice: z.string().refine(value => !Number.isNaN(parseInt(value, 10)), {
        message: "Expected number, received a string"
    }).refine(value => parseInt(value, 10) > 0, {
        message: "Price must be larger than 0"
    }),
    // duration: z.string().refine(value => !Number.isNaN(parseInt(value, 10)), {
    //     message: "Expected number, received a string"
    // }).refine((duration) => {
    //     return parseInt(duration) >= BID_CONSTANTS.MIN_BID_DURATION && parseInt(duration) <= BID_CONSTANTS.MAX_BID_DURATION
    // }, {
    //     message: "The expired date must be after today 10 minutes"
    // })
    expiredAt: z.date().refine((date) => {
        const timeStamp = date.getTime();
        return (timeStamp > Date.now()) && (timeStamp - Date.now() > BID_CONSTANTS.MIN_BID_DURATION * 1000) && (timeStamp - Date.now() <= BID_CONSTANTS.MAX_BID_DURATION * 1000)
    }, {
        message: "The period time at least 5 minutes and maximum 30 days"
    })
});

export default function OfferDialog({ searchOrderStatus, contractAddress, tokenId, searchOrderExpiresAt, image, attributes, owner }: OfferDialogProps) {
    const { isConnected, chainId, address } = useAccount();
    // const [bidPrice, setBidPrice] = useState<bigint>(BigInt(0));
    // const [bidDuration, setBidDuration] = useState<bigint>(BigInt(0));

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            bidPrice: "0",
            expiredAt: new Date(Date.now() + BID_CONSTANTS.MIN_BID_DURATION * 1000)
        }
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
        price: BigInt(form.getValues('bidPrice')),
        duration: form.getValues('expiredAt').getTime() > Date.now() ? BigInt(Math.floor((form.getValues('expiredAt').getTime() - Date.now()) / 1000)) : BigInt(0),
        enabled: form.getValues('expiredAt').getTime() > Date.now() && BigInt(form.getValues('bidPrice')) > BigInt(0),
        onSuccess: (data: TransactionReceipt) => { },
        onSettled: (data?: TransactionReceipt) => { },
        onError: (error?: Error) => { }
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
        balanceRequired: BigInt(form.getValues('bidPrice')),
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
        enabled: BigInt(form.getValues('bidPrice')) > BigInt(0)
    });

    const {
        isLoading: erc20AllowanceIsLoading,
        isFetching: erc20AllowanceIsFetching,
        isSuccess: erc20AllowanceIsSuccess,
        isError: erc20AllowanceIsError,
        allowance: erc20Allowance,
        refetch: erc20AllowanceRefetch
    } = useERC20Allowance({
        tokenAddress: getKakarottoTokenAddress(chainId),
        allowedAddress: getERC721BidAddress(chainId),
        chainId,
        enabled: true,
    })

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

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values.expiredAt.getTime() - Date.now())
    }

    return (
        <Dialog>
            <DialogTrigger
                asChild
            >
                <MakeOfferButton
                    disabled={
                        !(searchOrderStatus == 'open' && isConnected && address && owner && !isAddressEqual(address, owner) && (!searchOrderExpiresAt || (searchOrderExpiresAt && !isExpired(searchOrderExpiresAt))))
                    }
                />
            </DialogTrigger>
            <DialogContent className='h-fit'>
                <DialogHeader>
                    <DialogTitle className='text-primary font-bold text-3xl'>Place your bid</DialogTitle>
                    <DialogDescription>{"Offer your price suitably to nft's owner."}</DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col justify-center gap-2 border-2 rounded-lg px-5">
                        <span className='font-bold text-2xl'>Kakarotto Token</span>
                        <div className="space-x-2 flex justify-between">
                            <span className='text-lg font-bold'>TokenId:</span>
                            <span className='font-medium'>#0</span>
                        </div>
                        <div className="space-x-2 flex justify-between">
                            <span className='text-lg font-bold'>Category:</span>
                            <span className='font-medium'>Character</span>
                        </div>
                        <div className="space-x-2 flex justify-between">
                            <span className='text-lg font-bold'>Rarity:</span>
                            <span className='font-medium'>Bronze</span>
                        </div>
                        <div className="space-x-2 flex justify-between">
                            <span className='text-lg font-bold'>Owner:</span>
                            <span className='font-medium'>{contractAddress ? truncateEthAddress(contractAddress.toString()) : "Unknown"}</span>
                        </div>
                        <div className="space-x-2 flex justify-between">
                            <span className='text-lg font-bold'>Price:</span>
                            <span className='font-medium'>$60</span>
                        </div>
                        <div className="space-x-2 flex justify-between">
                            <span className='text-lg font-bold'>Attributes:</span>
                            <div className="ml-5">
                                <span className='font-medium'>Attack: </span>
                                <span className='font-medium'>40</span>
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
                                        <Button type='submit' className='w-full'>Place bid</Button>
                                    </form>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
