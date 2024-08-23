import axios from "axios";
import getEndpointURL from "./endpoint";

export default async function fetchTreasureMetadata({rarityNumber}: {rarityNumber: string}): Promise<any> {
    const endpointURL = getEndpointURL(process.env.NEXT_PUBLIC_ENVIRONMENT);
    try {
        const metadataAPIData = await axios.get(`${endpointURL}/treasure/metadata?rarityNumber=${rarityNumber}`, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log(metadataAPIData.data);
        return metadataAPIData.data;
    } catch (error) {
        console.error("Error in fetchPinataImage function:", error);
        return undefined;
    }
}