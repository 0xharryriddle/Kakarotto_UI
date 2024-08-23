import React from 'react'
import Image from 'next/image';
import DisplayCharacter from './DisplayCharacter';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


interface BagProps {
    title: string;
    data: any[];
}

const Bag = ({ title, data }: BagProps) => {
    return (
        <Card className="w-1/2 h-full">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                {data.map((item, index) => {
                    return <Card key={index}>
                        <CardHeader>
                            <CardTitle>{item.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                        </CardContent>
                    </Card>
                })}
            </CardContent>
        </Card>
    );
}

export default Bag;