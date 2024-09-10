import { Abi } from "viem"
import { ABI_CONTRACT } from "./commons.util"

export default function getABI (contractName: string): Abi {
  return (ABI_CONTRACT as any)[contractName] as Abi
}
