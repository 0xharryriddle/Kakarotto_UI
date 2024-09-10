import axios from 'axios';
import getEndpointURL from './endpoint';

export default async function createNFTTreasure(
    {
        creator,
        signature,
        tokenId,
        value,
        data,
        chainId
    }: {
        creator: `0x${string}`,
        signature: any,
        tokenId: string,
        value: number,
        data: any,
        chainId: any
    }
): Promise<any> {
    const endpointURL = getEndpointURL(process.env.NEXT_PUBLIC_ENVIRONMENT);
    try {
        const response = await axios.post(`${endpointURL}/treasure/mint`, {
            creator,
            signature,
            tokenId,
            value,
            data,
            chainId
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.data.error) throw new Error(response.data.message);
        return response.data.data;
    } catch (error) {
        console.log("Error in createNFTTreasure function:", error);
        return null;
    }
}