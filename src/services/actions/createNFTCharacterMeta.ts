import axios from 'axios';
import getEndpointURL from './endpoint';

export default async function createNFTCharacterMeta({  name, description, image }:{ name: string, description: string, image: string}): Promise<any> {
    const endpointURL = getEndpointURL(process.env.NEXT_PUBLIC_ENVIRONMENT);
    try {
        const response = await axios.post(`${endpointURL}/character/createMetadata`, {
            name, description, image
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log("Generate Metadata Response: ", response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        return undefined;
    }
}