import { EXPLORER_URL } from "./commons.util";

export default function getExplorer(networkId: any) {
    return (EXPLORER_URL as { [key: string]: string })[networkId];
}