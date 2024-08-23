import axios from 'axios';
import getEndpointURL from './endpoint';

export async function createNFTAPI (
    { 
        creator, 
        createNFTSignature, 
        rarityNumber, 
        attributes, 
        ipfsHash,
        networkId
    }:  { 
        creator: `0x${string}`, 
        createNFTSignature: any, 
        rarityNumber: string,
        attributes: any,
        ipfsHash: string ,
        networkId: number
    }): Promise<any> {
    const endpointURL = getEndpointURL(process.env.NEXT_PUBLIC_ENVIRONMENT);
    try {
        const response = await axios.post(`${endpointURL}/character/generate`, {
            creator,
            createNFTSignature,
            rarityNumber, 
            attributes, 
            ipfsHash,
            networkId
        }, {
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