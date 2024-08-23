import axios from 'axios';
import getEndpointURL from './endpoint';

export default async function createNFTTreasure(): Promise<any> {
    const endpointURL = getEndpointURL(process.env.NEXT_PUBLIC_ENVIRONMENT);
    try {
        const response = await axios.get(`${endpointURL}/treasure/rarity`);
        if (response.data.error) throw new Error(response.data.message);
        return response.data.data;
    } catch (error) {
        console.log("Error in createNFTTreasure function:", error);
        return undefined;
    }
}