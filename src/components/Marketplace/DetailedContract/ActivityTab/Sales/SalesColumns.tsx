import { Sale } from "@/generated/graphql"
import { truncateHash } from "@/utils/address.util"
import { timeAgo, timeLeft, isExpired } from '@/utils/date.util';
import { ColumnDef } from "@tanstack/react-table"
import { CoinsIcon } from "lucide-react";
import { formatEther, zeroAddress } from "viem";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button";

export const salesColumns: ColumnDef<Sale>[] = [
    {
        accessorKey: "seller",
        header: "Seller",
        cell: ({ row }) => {
            const seller = row.getValue('seller') as string;
            const truncatedAddress = truncateHash(seller || zeroAddress);
            return (<HoverCard>
                <HoverCardTrigger className="font-bold cursor-pointer transition delay-100 duration-200 ease-in-out hover:scale-90" onClick={() => { navigator.clipboard.writeText(seller) }}>
                    <div>{truncatedAddress}</div>
                </HoverCardTrigger>
                <HoverCardContent>
                    Copy Clipboard
                </HoverCardContent>
            </HoverCard>)
        }
    },
    {
        accessorKey: "bidder",
        header: "Bidder",
        cell: ({ row }) => {
            const bidder = row.getValue('bidder') as string;
            const truncatedAddress = truncateHash(bidder || zeroAddress);
            return (<HoverCard>
                <HoverCardTrigger className="font-bold cursor-pointer transition delay-100 duration-200 ease-in-out hover:scale-90" onClick={() => { navigator.clipboard.writeText(bidder) }}>
                    <div>{truncatedAddress}</div>
                </HoverCardTrigger>
                <HoverCardContent>
                    Copy Clipboard
                </HoverCardContent>
            </HoverCard>)
        }
    },
    {
        accessorKey: "createdAt",
        header: "Created",
        cell: ({ row }) => {
            const formatedTime = timeAgo(parseInt(row.getValue("createdAt")));
            return <div className="font-bold">{formatedTime}</div>
        }
    },
    {
        accessorKey: "price",
        header: "Price",
        cell: ({ row }) => {
            const amount = formatEther(row.getValue('price'));
            return <div className="font-bold space-x-2">
                <CoinsIcon size={24} />
                {amount}
            </div>
        }
    },
    {
        accessorKey: "expiresAt",
        header: "Time left",
        cell: ({ row }) => {
            const formatedTime = timeLeft(parseInt(row.getValue('expiresAt')));
            return <div className="font-bold">{formatedTime}</div>
        }
    },
    {
        id: 'acceptBid',
        cell: ({ row }) => {
            const isBidExpired = isExpired(parseInt(row.getValue('expiresAt')));
            return <Button disabled={isBidExpired}>Accept Bid</Button>
        }
    }
]