import React from 'react'
import DisplayedInformation from '@/components/ContractDetail/DisplayedInformation';
import OrderInformation from '@/components/ContractDetail/OrderInformation';

interface ContractDetailPageProps {

}

export default function ContractDetailPage({ }: ContractDetailPageProps) {
    return <main className='flex flex-col gap-5 items-center justify-center text-secondary w-full h-full min-h-screen'>
        <DisplayedInformation />
        <OrderInformation />
    </main>
}
