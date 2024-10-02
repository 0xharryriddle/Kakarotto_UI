'use client';
import React from 'react'

import LoadingTemplate from '@/components/LoadingTemplate';
import { Bid } from '@/generated/graphql';
import OffersTable from './OffersTable';
import { offersColumns } from './OffersColumns';

interface OffersTabProps {
    loading: boolean;
    bids: Bid[],
}

export default function OffersTab({ loading, bids }: OffersTabProps) {
    return (
        loading ? <LoadingTemplate /> : <OffersTable columns={offersColumns} data={bids} />
    )
}
