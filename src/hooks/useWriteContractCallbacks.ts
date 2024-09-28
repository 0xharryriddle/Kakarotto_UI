import { WriteContractErrorType } from "@wagmi/core";
import { TransactionReceipt } from "viem";
import { Config } from "wagmi";
import { WaitForTransactionReceiptData } from "wagmi/query";

type Props = {
  receipt?: WaitForTransactionReceiptData<Config, any>;
  isFetched?: boolean;
  onSuccess?: (data: TransactionReceipt) => void;
  onSettled?: (data?: TransactionReceipt) => void;
  onError?: (error?: Error) => void;
  error: WriteContractErrorType | null;
};

export const useWriteContractCallbacks = ({
  receipt,
  isFetched,
  onSuccess,
  onSettled,
  onError,
  error,
}: Props) => {
  if (isFetched) {
    if (receipt && receipt.status == "success") {
      // Call Success callback if has.
      onSuccess?.(receipt);
    } else if (error) {
      onError?.(
        error instanceof Error ? error : new Error("Transaction is reverted")
      );
    }
    onSettled?.(receipt);
  }
};
