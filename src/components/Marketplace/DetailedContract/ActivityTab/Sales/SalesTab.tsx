'use client';
import React from 'react'
import LoadingTemplate from '@/components/LoadingTemplate';
import { Sale } from '@/generated/graphql';
import SalesTable from './SalesTable';
import { salesColumns } from './SalesColumns';

interface SalesTabProps {
    loading: boolean;
    data?: Sale[]
}

export default function SalesTab({ loading, data }: SalesTabProps) {
    return (
        loading ? <LoadingTemplate /> : <SalesTable columns={salesColumns} data={data || []} />
    )
}
