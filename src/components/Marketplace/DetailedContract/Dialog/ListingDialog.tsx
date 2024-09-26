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
import { CalendarIcon, RocketIcon, ScaleIcon, SignatureIcon } from 'lucide-react';
import { useAccount } from 'wagmi';
import { ToastId, useToast } from '@chakra-ui/react';
import { Address, isAddressEqual, parseEther, TransactionReceipt } from 'viem';
import { getKakarottoCharacterAddress, getKakarottoMarketplaceAddress, getKakarottoTokenAddress } from '@/contracts/utils/getAddress.util';
import { z } from "zod"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TimePicker } from '@/components/time-picker/time-picker';
import getABI from '@/contracts/utils/getAbi.util';
import { isExpired } from '@/utils/date.util';
import { usePublicationFee } from '@/hooks/usePublicationFee';
import { useFormattedTokenBalance } from '@/hooks/useFormattedTokenBalance';
import { useERC20Allowance } from '@/hooks/useERC20Allowance';
import { useERC721Allowance } from '@/hooks/useERC721Allowance';
import { useCreateOrder } from '@/hooks/useCreateOrder';
import * as Enums from "@/utils/enum.util";
import { useERC20Approval } from '@/hooks/useERC20Approval';
import { useERC721Approval } from '@/hooks/useERC721Approval';
import { formatUnitsToNumber } from '@/utils/token-unit-utils/format-units-to-number';
import { ORDER_CONSTANTS } from '@/lib/constants/marketplace';
import { useERC721AllowanceAll } from '@/hooks/useERC721AllowanceAll';
import getExplorer from '@/contracts/utils/getExplorer.util';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';

interface ListingDialogProps {
    searchOrderStatus?: OrderStatus | null;
    contractAddress: Address;
    tokenId: string;
    searchOrderExpiresAt?: number;
    category: Enums.Categories;
}

const formSchema = z.object({
    price: z.string().refine(value => !Number.isNaN(parseInt(value, 10)), {
        message: "Expected number, received a string"
    }).refine(value => parseInt(value, 10) > 0, {
        message: "Price must be larger than 0"
    }),
    expiredAt: z.date().refine((date) => {
        return date > new Date(Date.now() + ORDER_CONSTANTS.THRESHOLD_ORDER * 1000);
    }, {
        message: "The expired date must be after today 10 minutes"
    })
});

export default function ListingDialog({ searchOrderStatus, contractAddress, tokenId, searchOrderExpiresAt, category }: ListingDialogProps) {
    const { chainId, address } = useAccount();
    const [isERC721ApprovalSubmit, setERC721ApprovalSubmit] = useState<boolean>(false);
    const [isERC20ApprovalSubmit, setERC20ApprovalSubmit] = useState<boolean>(false);

    const toast = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            price: "0",
            expiredAt: new Date(new Date(Date.now() + ORDER_CONSTANTS.THRESHOLD_ORDER * 1000).setMilliseconds(0)),
        }
    });

    const {
        publicationFeeInWei,
        isSuccess: publicationFeeIsSuccess,
        parsedPublicationFee,
    } = usePublicationFee({
        address: getKakarottoMarketplaceAddress(chainId),
        chainId,
        enabled: true
    })

    const {
        tokenBalanceRaw,
    } = useFormattedTokenBalance({
        tokenAddress: getKakarottoTokenAddress(chainId),
        account: address,
        chainId,
        enabled: true,
    })

    const {
        approvedAddress: erc721ApprovedAddress,
    } = useERC721Allowance({
        tokenAddress: contractAddress,
        tokenId: BigInt(parseInt(tokenId)),
        chainId,
        enabled: true,
    })

    const {
        isLoading: erc721AllowanceAllIsLoading,
        isApprovedAll,
    } = useERC721AllowanceAll({
        tokenAddress: contractAddress,
        chainId,
        operator: getKakarottoMarketplaceAddress(chainId),
        enabled: true,
    })

    const {
        allowance: marketplaceERC20Allowance,
    } = useERC20Allowance({
        tokenAddress: getKakarottoTokenAddress(chainId),
        allowedAddress: getKakarottoMarketplaceAddress(chainId),
        chainId,
        enabled: true,
    })

    const {
        error: createOrderError,
        isLoading: createOrderIsLoading,
        onCreateOrder,
    } = useCreateOrder({
        chainId,
        tokenAddress: contractAddress,
        tokenId: BigInt(parseInt(tokenId)),
        priceInWei: parseEther(form.getValues('price')),
        expiresAt: BigInt(Math.floor(form.getValues('expiredAt').getTime() / 1000)),
        enabled: !form.getFieldState('price').invalid && !form.getFieldState('expiredAt').invalid,
        onSuccess: (data: TransactionReceipt) => {
            toast({
                title: "Listing Your Asset Successfully.",
                description: <div className="flex flex-col justify-center gap-1">
                    <span>You have been listing your token for Marketplace</span>
                    <a target='_blank' href={`${getExplorer(chainId)}/tx/${data.transactionHash}`} className='text-primary underline hover:scale-95 transition delay-100 duration-200 ease-in-out font-bold text-xl'>Transaction link</a>
                </div>,
                status: 'success',
                isClosable: true,
                position: "bottom-right"
            })
        },
        onSettled: (data?: TransactionReceipt) => {
            if (toast.isActive('create-order-loading-toast')) {
                toast.close('create-order-loading-toast');
            }
        },
        onError: (error?: Error) => {
            console.log(error);
            toast({
                title: "Listing Your Asset Error.",
                description: "Something went wrong",
                isClosable: true,
                status: 'error',
                position: "bottom-right"
            })
            if (toast.isActive('create-order-loading-toast')) {
                toast.close('create-order-loading-toast');
            }
        }
    })

    const {
        isLoading: erc721ApprovalIsLoading,
        onERC721Approval,
    } = useERC721Approval({
        chainId,
        address,
        spender: getKakarottoMarketplaceAddress(chainId),
        tokenId: BigInt(parseInt(tokenId)),
        enabled: !!tokenId && !!isERC721ApprovalSubmit,
        onSuccess: (data: TransactionReceipt) => {
            setERC721ApprovalSubmit(false);
            if (toast.isActive('erc721-approval-loading-toast')) {
                toast.close('erc721-approval-loading-toast');
            }
            toast({
                title: "Approving Your Asset Successfully.",
                description: <div className="flex flex-col justify-center gap-1">
                    <span>You have approved your asset for Marketplace</span>
                    <a target='_blank' href={`${getExplorer(chainId)}/tx/${data.transactionHash}`} className='text-primary underline hover:scale-95 transition delay-100 duration-200 ease-in-out font-bold text-xl'>Transaction link</a>
                </div>,
                status: 'success',
                isClosable: true,
                position: "bottom-right"
            })
        },
        onSettled: (data?: TransactionReceipt) => {
            setERC721ApprovalSubmit(false);
            if (toast.isActive('erc721-approval-loading-toast')) {
                toast.close('erc721-approval-loading-toast');
            }
        },
        onError: (error?: Error) => {
            console.log(error);
            toast({
                title: "Approving Your Asset Error.",
                description: "Something went wrong",
                isClosable: true,
                status: 'error',
                position: "bottom-right"
            })
            setERC721ApprovalSubmit(false);
            if (toast.isActive('erc721-approval-loading-toast')) {
                toast.close('erc721-approval-loading-toast');
            }
        }
    })

    const {
        isLoading: erc20ApprovalIsLoading,
        onERC20Approval,
    } = useERC20Approval({
        chainId,
        address: getKakarottoTokenAddress(chainId),
        spender: getKakarottoMarketplaceAddress(chainId),
        amount: publicationFeeInWei as bigint,
        enabled: !!publicationFeeIsSuccess && !!publicationFeeInWei && !!isERC20ApprovalSubmit,
        onSuccess: (data: TransactionReceipt) => {
            toast({
                title: "Approving Token Successfully.",
                description: <div className="flex flex-col justify-center gap-1">
                    <span>You have approved tokens for Marketplace</span>
                    <a target='_blank' href={`${getExplorer(chainId)}/tx/${data.transactionHash}`} className='text-primary underline hover:scale-95 transition delay-100 duration-200 ease-in-out font-bold text-xl'>Transaction link</a>
                </div>,
                status: 'success',
                isClosable: true,
                position: "bottom-right"
            })
        },
        onSettled: (data?: TransactionReceipt) => {
            setERC20ApprovalSubmit(false);
            if (toast.isActive('erc20-approval-loading-toast')) {
                toast.close('erc20-approval-loading-toast');
            }
        },
        onError: (error?: Error) => {
            console.log(error);
            toast({
                title: "Approving Token Error",
                description: "Something went wrong",
                isClosable: true,
                status: 'error',
                position: "bottom-right"
            })
            setERC20ApprovalSubmit(false);
            if (toast.isActive('erc20-approval-loading-toast')) {
                toast.close('erc20-approval-loading-toast');
            }
        }
    })

    async function onSubmit(
        values: z.infer<typeof formSchema>
    ) {
        if (!toast.isActive('create-order-loading-toast')) {
            toast({
                id: 'create-order-loading-toast',
                title: "Listing Your Asset Pending.",
                description: "Please wait a moment",
                status: 'loading',
                position: "bottom-right",
                duration: null,
                isClosable: false,
            });
        }
        await onCreateOrder();
    }

    async function onApprovalERC721Submit() {
        setERC721ApprovalSubmit(true);
        toast({
            id: 'erc721-approval-loading-toast',
            title: "Approving Your Asset Pending.",
            description: "Please wait a moment",
            status: 'loading',
            position: "bottom-right",
            duration: null,
            isClosable: false,
        });
        await onERC721Approval();
    }

    async function onApprovalERC20Submit() {
        setERC20ApprovalSubmit(true);
        toast({
            id: 'erc20-approval-loading-toast',
            title: "Approving Token Pending",
            description: "Please wait a moment",
            status: 'loading',
            position: "bottom-right",
            duration: null,
            isClosable: false,
        });
        await onERC20Approval();
    }

    return (
        <Dialog>
            <DialogTrigger
                asChild
            >
                <ListingButton
                    disabled={searchOrderStatus == 'open' && searchOrderExpiresAt != null && !isExpired(searchOrderExpiresAt)}
                    relisting={searchOrderStatus == 'open' && searchOrderExpiresAt != null && isExpired(searchOrderExpiresAt)}
                />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className='flex flex-row items-center gap-2 text-primary text-2xl font-bold'>
                        <ScaleIcon size={32} />
                        <span>Listings Your Assets</span>
                    </DialogTitle>
                    <DialogDescription>
                        List your assets to everyone being able to buy.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col justify-center gap-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="price"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Price (Publication Fee: {parsedPublicationFee})</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder="Price of Asset" type='number' />
                                        </FormControl>
                                        <FormDescription className="flex flex-col gap-2">
                                            How much do you want to list your asset ?
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
                                (marketplaceERC20Allowance != undefined && marketplaceERC20Allowance < (publicationFeeInWei as bigint))
                                    ? <Button
                                        className={`transition delay-100 duration-200 ease-in-out hover:scale-90 hover:cursor-pointer space-x-2 p-4 w-full `}
                                        onClick={onApprovalERC20Submit}
                                        type='button'
                                        disabled={erc20ApprovalIsLoading}
                                    >
                                        {
                                            erc20ApprovalIsLoading
                                                ? <span className='text-xl font-bold'>Loading...</span>
                                                : <>
                                                    <SignatureIcon size={24} />
                                                    <span className="text-xl font-bold uppercase">Approve Token</span>
                                                </>
                                        }
                                    </Button>
                                    : ((erc721ApprovedAddress != undefined && isAddressEqual(erc721ApprovedAddress, getKakarottoCharacterAddress(chainId))) || (isApprovedAll))
                                        ? <Button
                                            className={`transition delay-100 duration-200 ease-in-out hover:scale-90 hover:cursor-pointer space-x-2 p-4 w-full `}
                                            onClick={onApprovalERC721Submit}
                                            type='button'
                                            disabled={erc721ApprovalIsLoading}
                                        >
                                            {
                                                erc721AllowanceAllIsLoading
                                                    ? <span className='text-xl font-bold'>Loading...</span>
                                                    : <>
                                                        <SignatureIcon size={24} />
                                                        <span className="text-xl font-bold uppercase">Approve NFT</span>
                                                    </>
                                            }

                                        </Button>
                                        : <Button
                                            className={`transition delay-100 duration-200 ease-in-out hover:scale-90 hover:cursor-pointer space-x-2 p-4 w-full `}
                                            type="submit"
                                            disabled={createOrderIsLoading || (searchOrderStatus != 'open')}
                                        >
                                            {
                                                createOrderIsLoading
                                                    ? <span className='text-xl font-bold'>Loading...</span>
                                                    : <>
                                                        <RocketIcon size={24} />
                                                        <span className="text-xl font-bold uppercase">Listing</span>
                                                    </>
                                            }
                                        </Button>
                            }
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog >
    )
}
