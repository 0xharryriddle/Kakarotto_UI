import axios from "axios";
import getEndpointURL from "./endpoint";

export default async function fetchImage({groupId, cid}: {groupId: string, cid: string}): Promise<any> {
    const endpointURL = getEndpointURL(process.env.NEXT_PUBLIC_ENVIRONMENT);
    try {
        const imageAPIData = await axios.get(`${endpointURL}/pinata/fetch${groupId || cid ? "?" : ""}${groupId ? `groupId=${groupId}` : ""}${cid && groupId ? "=" : ""}${cid ? `cid=${cid}` : ""}`, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log(imageAPIData.data);
        return imageAPIData.data;
    } catch (error) {
        console.error("Error in fetchPinataImage function:", error);
        return undefined;
    }
}