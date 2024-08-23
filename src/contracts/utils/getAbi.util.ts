import { ABI_CONTRACT } from "./commons.util"

export default function getABI (contractName: string) {
  return (ABI_CONTRACT as any)[contractName]
}
