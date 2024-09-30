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
import { OrderStatus } from '@/generated/graphql';
import BuyButton from '../Button/BuyButton';
import { useAccount } from 'wagmi';
import { isExpired } from '@/utils/date.util';
import { Address, TransactionReceipt } from 'viem';
import { useFeePercentageMarketplace } from '@/hooks/useFeePercentageMarketplace';
import { getKakarottoMarketplaceAddress, getKakarottoTokenAddress } from '@/contracts/utils/getAddress.util';
import { HandshakeIcon, SignatureIcon } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { PRECISION } from '@/lib/constants/marketplace';
import { formatUnitsToNumber } from '@/utils/token-unit-utils/format-units-to-number';
import * as Enums from '@/utils/enum.util';
import { useBuyOrder } from '@/hooks/useBuyOrder';
import getExplorer from '@/contracts/utils/getExplorer.util';
import { useToast } from '@chakra-ui/react';
import { useERC20Approval } from '@/hooks/useERC20Approval';
import { useIsSufficientTokenBalance } from '@/hooks/useIsSufficientTokenBalance';

interface BuyDialogProps {
    searchOrderStatus?: OrderStatus | null;
    contractAddress: Address;
    tokenId: string;
    searchOrderExpiresAt?: number;
    priceInWei: bigint;
    category: Enums.Categories;
    rarity?: string;
}

export default function BuyDialog({
    searchOrderStatus,
    contractAddress,
    tokenId,
    searchOrderExpiresAt,
    priceInWei,
    category,
    rarity
}: BuyDialogProps) {
    const { isConnected, chainId } = useAccount();
    const toast = useToast();

    const {
        feePercentage,
        isLoading: feePercentageIsLoading,
        isSuccess: feePercentageIsSuccess
    } = useFeePercentageMarketplace({
        address: getKakarottoMarketplaceAddress(chainId),
        chainId,
        enabled: true,
    })

    const feeCost = priceInWei * BigInt(feePercentage ? feePercentage as number : 0) / BigInt(PRECISION);
    const saleFeeAmount = priceInWei + feeCost;

    const {
        parsedBalanceRequired,
        isSufficientAllowance,
        isSufficientBalance,
        isLoading: isSufficientIsLoading,
        isFetching: isSufficientIsFetching
    } = useIsSufficientTokenBalance({
        balanceRequired: saleFeeAmount,
        currencyAddress: getKakarottoTokenAddress(chainId),
        enabled: feePercentageIsSuccess && !!saleFeeAmount,
        contractToApprove: getKakarottoMarketplaceAddress(chainId),
        chainId,
        isNativeCurrency: false,
        tokenInfo: {
            address: getKakarottoTokenAddress(chainId),
            decimals: 18,
            name: 'Kakarotto',
            symbol: 'KKR'
        },
    })

    const {
        error: buyOrderError,
        isLoading: buyOrderIsLoading,
        onBuyOrder,
    } = useBuyOrder({
        chainId,
        tokenAddress: contractAddress,
        tokenId: tokenId ? BigInt(parseInt(tokenId)) : undefined,
        priceInWei,
        enabled: !isSufficientIsLoading && !isSufficientIsFetching && isSufficientAllowance && isSufficientBalance && tokenId != undefined && contractAddress != undefined,
        onSuccess: (data: TransactionReceipt) => {
            if (toast.isActive('buy-order-loading-toast')) {
                toast.close('buy-order-loading-toast');
            }
            if (!toast.isActive('buy-order-success-toast')) {
                toast({
                    id: 'buy-order-success-toast',
                    title: "Bought This Asset Successfully.",
                    description: <div className="flex flex-col justify-center gap-1">
                        <span>You have bought this asset.</span>
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
            if (toast.isActive('buy-order-loading-toast')) {
                toast.close('buy-order-loading-toast');
            }
            toast({
                title: "Buying This Asset Error.",
                description: "Something went wrong",
                isClosable: true,
                status: 'error',
                position: "bottom-right"
            })
        }
    })

    const {
        isLoading: erc20ApprovalIsLoading,
        onERC20Approval,
    } = useERC20Approval({
        chainId,
        address: getKakarottoTokenAddress(chainId),
        spender: getKakarottoMarketplaceAddress(chainId),
        amount: saleFeeAmount,
        enabled: !!feePercentageIsSuccess && !!feePercentage && !!saleFeeAmount,
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

    async function onSubmit() {
        if (!toast.isActive('buy-order-loading-toast')) {
            toast({
                id: 'buy-order-loading-toast',
                title: "Buying This Asset Pending.",
                description: "Please wait a moment",
                status: 'loading',
                position: "bottom-right",
                duration: null,
                isClosable: false,
            });
        }
        await onBuyOrder();
    }

    async function onApprovalERC20Submit() {
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
                <BuyButton
                    disabled={
                        buyOrderIsLoading ||
                        searchOrderStatus != 'open' ||
                        !isConnected || (searchOrderExpiresAt != null && isExpired(searchOrderExpiresAt))
                    }
                >
                    <HandshakeIcon size={24} />
                    <span className="text-xl font-bold uppercase">Buy</span>
                </BuyButton>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className='flex flex-row items-center gap-2 text-primary text-2xl font-bold'>
                        <HandshakeIcon size={32} />
                        <span>Buy Asset</span>
                    </DialogTitle>
                    <DialogDescription>
                        Accept the retailed price and own it soon.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col justify-center gap-4">
                    <span className='self-center font-bold text-2xl text-primary uppercase'>Review your detailed buy</span>
                    <div className="space-x-2 flex justify-between items-center">
                        <span className='text-lg font-bold'>TokenId:</span>
                        <span className='font-medium'>{`#${tokenId}`}</span>
                    </div>
                    <div className="space-x-2 flex justify-between items-center">
                        <span className='text-lg font-bold'>Category:</span>
                        <span className='font-medium'>{category == Enums.Categories.Character ? "Character" : category == Enums.Categories.Item ? "Item" : "Unknown"}</span>
                    </div>
                    <div className="space-x-2 flex justify-between items-center">
                        <span className='text-lg font-bold'>Rarity:</span>
                        <span className='font-medium'>{rarity}</span>
                    </div>
                    <div className="space-x-2 flex justify-between items-center">
                        <span className='text-lg font-bold'>Price:</span>
                        <span className='font-medium'>{formatUnitsToNumber(priceInWei, 18)}</span>
                    </div>
                    <div className="space-x-2 flex justify-between items-center">
                        <span className='text-lg font-bold'>Fee:</span>
                        <span className='font-medium'>{formatUnitsToNumber(feeCost, 18)}</span>
                    </div>
                    <Separator className='w-full' />
                    <div className="space-x-2 flex justify-between items-center">
                        <span className='text-xl font-bold'>Total price:</span>
                        <span className='font-medium'>{parsedBalanceRequired}</span>
                    </div>
                </div>
                {
                    !isSufficientAllowance || !isSufficientBalance
                        ? <BuyButton
                            disabled={!isSufficientBalance || !isConnected}
                            onClick={onApprovalERC20Submit}
                        >
                            {
                                isSufficientBalance
                                    ? <>
                                        <SignatureIcon size={24} />
                                        <span className="text-xl font-bold uppercase">Approve Token</span>
                                    </> : "Insufficient balance"
                            }
                        </BuyButton>
                        : <BuyButton
                            disabled={!isSufficientAllowance || !isSufficientBalance || buyOrderIsLoading || searchOrderStatus != 'open' || !isConnected || (searchOrderExpiresAt != null && isExpired(searchOrderExpiresAt)) || !isSufficientAllowance || !isSufficientBalance}
                            onClick={onSubmit}
                        >
                            {
                                isSufficientBalance ? <>
                                    <HandshakeIcon size={24} />
                                    <span className="text-xl font-bold uppercase">Buy</span>
                                </> : "Insufficient balance"
                            }
                        </BuyButton>
                }
            </DialogContent>
        </Dialog>
    )
}
