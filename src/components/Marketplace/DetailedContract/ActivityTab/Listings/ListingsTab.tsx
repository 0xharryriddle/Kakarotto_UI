import LoadingTemplate from '@/components/LoadingTemplate';
import { Order } from '@/generated/graphql';
import React from 'react'
import ListingsTable from './ListingsTable';
import { listingsColumns } from './ListingsColumns';

interface ListingsTabProps {
    loading?: boolean;
    orders: Order[]
}

export default function ListingsTab({
    loading,
    orders
}: ListingsTabProps) {
    return (
        loading ? <LoadingTemplate /> : <ListingsTable columns={listingsColumns} data={orders} />
    )
}
