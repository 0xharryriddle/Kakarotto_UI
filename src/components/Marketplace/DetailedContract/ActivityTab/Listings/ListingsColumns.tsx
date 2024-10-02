import { Bid, Order } from "@/generated/graphql"
import { truncateEthAddress } from "@/utils/address.util"
import { timeAgo, timeLeft } from "@/utils/date.util";
import { ColumnDef } from "@tanstack/react-table"
import { CoinsIcon } from "lucide-react";
import { formatEther } from "viem";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { capitalizeFirstLetter } from "@/utils/string.util";

export const listingsColumns: ColumnDef<Order>[] = [
    {
        accessorKey: "owner",
        header: "Owner",
        cell: ({ row }) => {
            const owner = row.getValue('owner') as string;
            const truncatedAddress = truncateEthAddress(owner);
            return (<HoverCard>
                <HoverCardTrigger className="font-bold cursor-pointer transition delay-100 duration-200 ease-in-out hover:scale-90" onClick={() => { navigator.clipboard.writeText(owner) }}>
                    <div>{truncatedAddress}</div>
                </HoverCardTrigger>
                <HoverCardContent>
                    Copy Clipboard
                </HoverCardContent>
            </HoverCard>)
        }
    },
    {
        accessorKey: "buyer",
        header: "Buyer",
        cell: ({ row }) => {
            const buyer = row.getValue('buyer') as string;
            const truncatedAddress = truncateEthAddress(buyer);
            return (<HoverCard>
                <HoverCardTrigger className={`font-bold cursor-pointer transition delay-100 duration-200 ease-in-out hover:scale-90 ${!buyer && "text-secondary/70"}`} onClick={() => { if (buyer) navigator.clipboard.writeText(buyer) }}>
                    <div>{buyer ? truncatedAddress : "No one"}</div>
                </HoverCardTrigger>
                <HoverCardContent>
                    Copy Clipboard
                </HoverCardContent>
            </HoverCard>)
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
        accessorKey: 'status',
        header: "Status",
        cell: ({ row }) => {
            const status = row.getValue('status');
            return <div className={`font-bold space-x-2 ${status != "open" && "text-secondary/70"}`}>
                {capitalizeFirstLetter(status as string)}
            </div>
        }
    },
    {
        accessorKey: 'expiresAt',
        header: "Time left",
        cell: ({ row }) => {
            const formatedTime = timeLeft(parseInt(row.getValue('expiresAt')));
            return <div className="font-bold">{formatedTime}</div>
        }
    }
]