'use client';
import React, { useState } from 'react'
import Image from 'next/image';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { CircleArrowOutUpRightIcon } from 'lucide-react';
import { capitalizeFirstLetter } from '@/contracts/utils/string.util';
import getExplorer from '@/contracts/utils/getExplorer.util';
import { useAccount, useWriteContract } from 'wagmi';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Link from 'next/link';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Web3ButtonCustom from '../Web3ButtonCustom';
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { isAddress } from 'viem';
import { Categories, Rarities } from '@/utils/enum.util';

interface AssetCardProps {
    image: string;
    name: string;
    tokenId: string;
    rarity: string;
    attributes?: any[];
    account: string;
    creator: string;
    className?: string;
    category: Categories;
}

const rarityMap: any = [{
    name: 'Bronze',
    color: 'bg-amber-950',
},
{
    name: 'Silver',
    color: 'bg-lime-50',
},
{
    name: 'Gold',
    color: 'bg-yellow-300',
},
{
    name: 'Platinum',
    color: 'bg-green-400',
},
{
    name: 'Diamond',
    color: 'bg-indigo-500',
}]

const formSchema = z.object({
    address: z.string({
        required_error: "Address is required",
        invalid_type_error: "Invalid address",
    }).refine((value) => isAddress(value), "Invalid address"),
    amount: z.number().int().positive(),
    rarity: z.nativeEnum(Rarities),
})

export default function AssetCard({ image, name, tokenId, rarity, attributes, className, account, creator, category }: AssetCardProps) {
    const { chainId, isConnected } = useAccount();
    const [chooseAction, setChooseAction] = useState<{
        rootDialog: boolean,
        openDialog: boolean,
        transferDialog: boolean,
    }>({
        rootDialog: false,
        openDialog: false,
        transferDialog: false,
    });
    const [loading, setLoading] = useState({
        transferLoading: false,
        openLoading: false,
    })

    const { data: transferData, writeContract: transferWriteContract } = useWriteContract();

    const transferForm = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            address: "0x",
            amount: 1,
            rarity: Rarities.Bronze,
        },
    })

    const onTransferSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    }

    return (
        <Dialog>
            <DialogTrigger><HoverCard openDelay={100} closeDelay={0}>
                <HoverCardTrigger>
                    <Card className={`${className} border-primary border-4 w-64 h-auto lg:min-h-[410px] text-secondary bg-slate-700`}>
                        <CardContent className='flex flex-col items-center justify-center gap-2 font-bold w-full'>
                            <div className="flex flex-row ${rarityMap[rarity].color} bg-opacity-70 w-full">
                                <div className={`flex flex-row items-center justify-center w-[220px] h-[220px] relative`}>
                                    <Image src={"/item_frame.png"} alt="Item frame" width={220} height={220} className='rounded-md w-full h-full absolute' />
                                    <Image src={image} alt="Asset Image" className='rounded-lg' width={150} height={150} />
                                </div>
                            </div>

                            <span className="text-2xl">{name}</span>
                            <div className="flex flex-row items-center justify-center gap-5">
                                <div className="flex flex-col items-center justify-center">
                                    <span className='text-xl'>Token ID</span>
                                    <span className='text-lg'>{`#${tokenId}`}</span>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <span className='text-xl'>Rarity</span>
                                    <span className='text-lg'>{rarityMap[rarity].name}</span>
                                </div>
                            </div>
                            {
                                account && creator && chainId && <div className="flex flex-row items-center justify-center gap-2">
                                    <a href={`${getExplorer(chainId)}/address/${account}`} target='blank'>
                                        <Button className='cursor-default flex flex-row items-center justify-center gap-2 hover:opacity-90'>
                                            <span>Account</span>
                                            <CircleArrowOutUpRightIcon size={16} />
                                        </Button>
                                    </a>
                                    <a href={`${getExplorer(chainId)}/address/${creator}`} target='blank'>
                                        <Button className='cursor-default flex flex-row items-center justify-center gap-2 hover:opacity-90'>
                                            <span>Creator</span>
                                            <CircleArrowOutUpRightIcon size={16} />
                                        </Button>
                                    </a>

                                </div>
                            }
                        </CardContent>
                    </ Card>
                </HoverCardTrigger>
                <HoverCardContent side='right'>
                    <div className='flex flex-col gap-2'>
                        <span className='text-center font-bold text-xl'>Attributes</span>
                        <div className='flex flex-col gap-2'>
                            {attributes?.map((data, index) => {
                                return <div key={index} className='flex flex-row gap-2'>
                                    <span className='font-bold'>{capitalizeFirstLetter(data.key)}:</span>
                                    <span>{data.value ? data.value : 0}</span>
                                </div>
                            })}
                        </div>
                    </div>
                </HoverCardContent >
            </HoverCard ></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Choose your action</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                    <div className="flex flex-row items-center justify-around gap-2 p-5">
                        {
                            category === Categories.Treasure && <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button className="cursor-pointer" onClick={() => {
                                    }}>Open</Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Do you want to open?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            Will open the treasure chest and reveal the contents inside.
                                            Try your best. Good luck!!
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction>
                                            <Web3ButtonCustom buttonName="Open" onClick={() => { }} className="cursor-pointer" />
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        }

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="cursor-pointer" onClick={() => transferForm.reset()}>Transfer</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Transfer treasure to any adventurer</DialogTitle>
                                    <DialogDescription>
                                        Transfer your treasure to any adventurer by entering their address and amount of treasure.
                                    </DialogDescription>
                                </DialogHeader>

                                <div className="grid gap-4 py-4">
                                    <Form {...transferForm}>
                                        <form onSubmit={transferForm.handleSubmit(onTransferSubmit)} className="space-y-8 z-0">
                                            <FormField
                                                control={transferForm.control}
                                                name="address"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Address</FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                id="address"
                                                                placeholder='User address (0x...)'
                                                                className="col-span-3"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormDescription>
                                                            This is your public display name.
                                                        </FormDescription>
                                                        <FormMessage />
                                                    </FormItem>

                                                )}
                                            />
                                            <FormField
                                                control={transferForm.control}
                                                name="amount"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Address</FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                id="amount"
                                                                className="col-span-3"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormDescription>
                                                            This is your public display name.
                                                        </FormDescription>
                                                        <FormMessage />
                                                    </FormItem>

                                                )}
                                            />
                                            <FormField
                                                control={transferForm.control}
                                                name="rarity"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Address</FormLabel>
                                                        <FormControl>
                                                            <Select onValueChange={(value) => field.onChange(Number(value))} defaultValue={field.value.toString()}>
                                                                <SelectTrigger className="w-[240px] hover:cursor-pointer">
                                                                    <SelectValue placeholder="Select the treasure's rarity" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectItem value="0">Bronze</SelectItem>
                                                                    <SelectItem value="1">Silver</SelectItem>
                                                                    <SelectItem value="2">Gold</SelectItem>
                                                                    <SelectItem value="3">Platinum</SelectItem>
                                                                    <SelectItem value="4">Diamond</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </FormControl>
                                                        <FormDescription>
                                                            This is your public display name.
                                                        </FormDescription>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <div className="flex flex-col justify-center items-center w-full gap-2"><Button type="submit" className="cursor-pointer w-full" disabled={!isConnected}>
                                                Transfer
                                            </Button>
                                                {!isConnected && <FormLabel className='text-red-600'>Please connect your wallet before doing something</FormLabel>}
                                            </div>

                                        </form>
                                    </Form>
                                </div>
                            </DialogContent>
                        </Dialog>
                        <Link href={`/treasure`}>
                            <Button className="cursor-pointer">
                                Buy more
                            </Button>
                        </Link>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}