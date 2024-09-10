import axios from 'axios';
import getEndpointURL from './endpoint';

export async function createNFTAPI (
    {  
        creator, 
        createNFTSignature, 
        networkId, 
        tokenURI, 
        image
    }:  { 
        creator: `0x${string}`, 
        createNFTSignature: any, 
        networkId: number, 
        tokenURI: string,
        image: string
    }): Promise<any> {
    const endpointURL = getEndpointURL(process.env.NEXT_PUBLIC_ENVIRONMENT);
    try {
        const response = await axios.post(`${endpointURL}/character/mint`, { creator, createNFTSignature, networkId, tokenURI, image }, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return undefined;
    }
};