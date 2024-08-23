import axios from 'axios';
import getEndpointURL from './endpoint';

export async function generateImage (): Promise<any> {
    const endpointURL = getEndpointURL(process.env.NEXT_PUBLIC_ENVIRONMENT);
    try {
        const imageAPIData = await axios.get(`${endpointURL}/character/image`, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log("Received image data:", imageAPIData.data);
        return imageAPIData.data;
    } catch (error) {
        console.error("Error in generateImage function:", error);
        return undefined;
    }
};