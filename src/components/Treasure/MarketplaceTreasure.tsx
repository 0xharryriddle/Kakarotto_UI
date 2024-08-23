'use client';
import React from 'react'
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
import { Button } from '../ui/button';
import { useToast } from '@chakra-ui/react';
import { useAccount, useReadContract, useSignMessage } from 'wagmi';
import { getTreasureAction } from '@/contracts/utils/getContractAction.util';
import { encodePacked, formatEther, keccak256, toBytes } from 'viem';
import { kakarottoTreasureConfig } from '@/contracts/config/writeContract.config';
import getTreasureRarity from '@/services/actions/getTreasureRarity';

interface MarketplaceTreasureProps {
    listRarityTreasures: any;
}

export default function MarketplaceTreasure({ listRarityTreasures }: MarketplaceTreasureProps) {
    // const [selectedTreasure, setSelectedTreasure] = React.useState<number>(0);
    const { chainId, address } = useAccount();
    const [minFee, setMinFee] = React.useState<number>(0);
    const { isError: signMessageIsError, reset: signMessageReset, signMessageAsync } = useSignMessage();
    console.log(signMessageIsError);
    const toast = useToast();

    // const { data: treasureTokenId, error: treasureTokenIdError, isPending: treasureTokenIdIsPending } = useReadContract({
    //     ...kakarottoTreasureConfig(chainId),
    //     functionName: "tokenIdCounter",
    //     args: []
    // });

    return (
        <div className='flex flex-row gap-2 items-center w-full p-5'>
            <div className="flex flex-col gap-2 items-center w-1/2 justify-center text-9xl font-bold text-primary p-5">
                <span className={`${saiyaLeftFont.className} uppercase tracking-widest`}>sale offs</span>
                <span className=''>100%</span>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center p-5 w-1/2">
                <Card className={``}>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image src={"/TreasureChest.gif"} alt={`Treasure`} width={100} height={100} unoptimized={true} />

                    </CardContent>
                    <CardFooter>
                        <div className="flex flex-row gap-2 items-center font-bold">
                            <span>Price:</span>
                            <span className='line-through'>20</span>
                            <span className='text-5xl text-primary'>{minFee}</span>
                            <span>$KRT</span>
                        </div>
                    </CardFooter>
                </Card>
                <div className="flex flex-col items-center justify-center gap-2 w-full p-10  text-secondary font-bold text-2xl">
                    <div className="flex flex-row items-center gap-2 justify-around w-full">
                        <span>Charge Mint Fee: </span>
                        <Button className='' onClick={() => { }} disabled={minFee == 0}>Charge Fee</Button>
                    </div>
                    <div className="flex flex-row items-center gap-2 justify-around w-full">
                        <span>Mint Fee: </span>
                        <Button className='' onClick={() => {
                            const buyPromise = new Promise(async (resolve, reject) => {
                                try {
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
                                    resolve(signMessage);
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
                </div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-center"></div>
        </div>
    )
}
