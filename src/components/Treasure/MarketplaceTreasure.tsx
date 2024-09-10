'use client';
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { saiyaLeftFont } from "@/styles/fonts"
import { Button } from '@/components/ui/button';
import { useToast } from '@chakra-ui/react';
import { useAccount, useReadContract, useReadContracts, useSignMessage, useWaitForTransactionReceipt, useWatchContractEvent, useWriteContract, type BaseError } from 'wagmi';
import { getTreasureAction } from '@/contracts/utils/getContractAction.util';
import { decodeEventLog, encodePacked, formatEther, keccak256, parseAbiParameters, parseEther, toBytes, DecodeEventLogReturnType, isAddressEqual } from 'viem';
import { kakarottoTokenConfig, kakarottoTreasureConfig } from '@/contracts/config/writeContract.config';
import getTreasureRarity from '@/services/actions/getTreasureRarity';
import { getKakarottoTokenAddress, getKakarottoTreasureAddress } from '@/contracts/utils/getAddress.util';
import getABI from '@/contracts/utils/getAbi.util';
import { customConfig } from '@/config/rainbow.config';
import createNFTTreasure from '@/services/actions/createNFTTreasure';

interface MarketplaceTreasureProps {
    listRarityTreasures: any;
}

type ApprovalEventArgs = {
    owner: `0x${string}`,
    spender: `0x${string}`,
    value: BigInt
}

export default function MarketplaceTreasure({ listRarityTreasures }: MarketplaceTreasureProps) {
    // const [selectedTreasure, setSelectedTreasure] = React.useState<number>(0);
    const { chainId, address, isConnected } = useAccount();
    const toast = useToast();
    const [loading, setLoading] = useState({
        buy: false,
        approval: false
    })

    const treasureConfig: any = kakarottoTreasureConfig(chainId);
    const tokenConfig: any = kakarottoTokenConfig(chainId);

    // Fake data
    const approvalAmountFake = 0;

    const { isError: signMessageIsError, reset: signMessageReset, signMessageAsync } = useSignMessage();

    const { data: price, error: priceError, isPending: priceIsPending, refetch: priceRefetch } = useReadContract({
        ...treasureConfig,
        functionName: "price",
    });

    const { data: balance, error: balanceError, isPending: balanceIsPending, refetch: balanceRefetch } = useReadContract({
        ...tokenConfig,
        functionName: "balanceOf",
        args: [address],
    });

    const { data: approvalAmount, error: approvalAmountError, isPending: isPendingApprovalAmount, refetch: approvalAmountRefetch } = useReadContract({
        ...tokenConfig,
        functionName: "allowance",
        args: [address, getKakarottoTreasureAddress(chainId)],
    });

    // Approval 
    const { data: approvalHash, isPending: approvalIsPending, error: approvalError, writeContract: approvalWriteContract, writeContractAsync: approvalWriteContractAsync, reset: approvalReset } = useWriteContract();
    const { data: hash, isPending, error, writeContract, writeContractAsync } = useWriteContract()
    const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });

    const approvalButton = () => {
        if (!isConnected) {
            return true;
        }
        if (!approvalHash) {
            return true;
        }
        return false;
    }

    // Buy
    const buyButton = () => {
        if (!isConnected) {
            return true;
        }
        if (Number(formatEther((approvalAmount || 0) as bigint)) >= (priceIsPending || !price ? 0 : Number(formatEther(price as bigint)))) {
            return false;
        }
        return true
    }

    useEffect(() => {
        priceRefetch?.();
        balanceRefetch?.();
        approvalAmountRefetch?.();
    }, [setLoading, priceRefetch,
        balanceRefetch,
        approvalAmountRefetch]);

    return (
        <div className='flex flex-row gap-2 items-center w-full p-5' >
            <div className="flex flex-col gap-2 items-center w-1/2 justify-center text-8xl font-bold text-primary p-5">
                <span className={`${saiyaLeftFont.className} uppercase tracking-widest`}>treasure shop</span>
                <span className={`${saiyaLeftFont.className} uppercase tracking-widest text-5xl`}>sale off</span>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center p-5 w-1/2">
                <Card className='w-fit h-fit'>
                    <CardContent className="flex aspect-square items-center justify-center">
                        {/* <Image src={"/TreasureChest.gif"} alt={`Treasure`} width={100} height={100} unoptimized={true} /> */}
                        <Image src={"/secret_treasure.gif"} alt={`Treasure`} width={300} height={300} unoptimized={true} />
                    </CardContent>
                    <CardFooter>
                        <div className="flex flex-row gap-2 items-center justify-center font-bold w-fit h-fit">
                            <span>Price:</span>
                            <span className='line-through'>{priceIsPending || !price ? "0" : Number(formatEther(price as bigint)) * 2}</span>
                            <span className='text-5xl text-primary'>{priceIsPending || !price ? "0" : Number(formatEther(price as bigint))}</span>
                            <span>$KRT</span>
                        </div>
                    </CardFooter>
                </Card>
                <div className="flex flex-col items-center justify-center gap-2 w-full p-10 ">
                    <div className="flex flex-row items-center gap-2 justify-around w-full text-secondary font-bold text-xl">
                        <span>Approve fee token</span>
                        <Button className='' disabled={approvalButton()} onClick={() => {
                            const approvalPromise = new Promise(async (resolve, reject) => {
                                try {
                                    setLoading({ ...loading, approval: true });
                                    const approvalResult = await approvalWriteContractAsync({
                                        abi: getABI("KakarottoToken"),
                                        address: getKakarottoTokenAddress(chainId),
                                        functionName: "approve",
                                        args: [getKakarottoTreasureAddress(chainId), price],
                                    });
                                    if (approvalResult == null) {
                                        reject("Error while approving fee token");
                                        return;
                                    }
                                    setLoading({ ...loading, approval: false });
                                    resolve(approvalResult);
                                } catch (error) {
                                    console.log("Error in approving fee token:", error);
                                    reject(`An error occurred: ${(error as Error).message}`);
                                }
                            });
                            toast.promise(approvalPromise, {
                                success: {
                                    title: "Approval Fee Token Success",
                                    description: "You have minted a treasure",
                                    isClosable: true,
                                    position: "bottom-right"
                                },
                                loading: {
                                    title: "Approval Fee Token Pending",
                                    description: "Please wait a moment",
                                    position: "bottom-right"
                                },
                                error: {
                                    title: "Approval Fee Token Error",
                                    description: "Something went wrong",
                                    isClosable: true,
                                    position: "bottom-right"
                                }
                            });
                        }}>Approve</Button>
                    </div>
                    <div className="flex flex-row items-center gap-2 justify-around w-full text-secondary font-bold text-xl">
                        <span>Buy Treasure: </span>
                        <Button disabled={buyButton()} onClick={() => {
                            const buyPromise = new Promise(async (resolve, reject) => {
                                try {
                                    setLoading({ ...loading, buy: true });
                                    if (!address) {
                                        reject("Error while getting address");
                                        return;
                                    }
                                    const MINT_ACTION = getTreasureAction("MINT_ACTION");
                                    const treasureTokenId = await getTreasureRarity();
                                    if (!treasureTokenId) {
                                        reject("Error while getting treasure token id");
                                        return;
                                    }
                                    const signMessage = await signMessageAsync({
                                        message: {
                                            raw: toBytes(
                                                keccak256(
                                                    encodePacked(
                                                        ["bytes32", "uint256", "address"],
                                                        [MINT_ACTION, treasureTokenId, address]
                                                    )
                                                )
                                            ),
                                        }
                                    });
                                    if (signMessageIsError) {
                                        reject("Error while signing message");
                                        return;
                                    }
                                    const mintTreasure = await createNFTTreasure({
                                        creator: address,
                                        signature: signMessage,
                                        tokenId: treasureTokenId,
                                        value: 1,
                                        data: "",
                                        chainId
                                    })
                                    if (mintTreasure == null) {
                                        reject("Error while minting Treasure");
                                        return;
                                    }
                                    setLoading({ ...loading, buy: false });
                                    resolve(mintTreasure);
                                } catch (error) {
                                    console.log("Error in mint treasure function:", error);
                                    reject(`An error occurred: ${(error as Error).message}`);
                                }
                            });
                            toast.promise(buyPromise, {
                                success: {
                                    title: "Mint Treasure Success",
                                    description: "You have minted a treasure",
                                    isClosable: true,
                                    position: "bottom-right"
                                },
                                loading: {
                                    title: "Mint Treasure Pending",
                                    description: "Please wait a moment",
                                    position: "bottom-right"
                                },
                                error: {
                                    title: "Mint Treasure Error",
                                    description: "Something went wrong",
                                    isClosable: true,
                                    position: "bottom-right"
                                }
                            });
                        }}>Buy</Button>
                    </div>
                    <div className="flex flex-row items-end gap-2">
                        <span className='text-secondary font-bold'>Your balance: </span>
                        <span className='text-primary'>{balanceError || balanceIsPending ? 0 : formatEther(balance as bigint)}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-center"></div>
        </div >
    )
}
