import { WriteContractErrorType } from "@wagmi/core";
import { TransactionReceipt } from "viem";
import { Config } from "wagmi";
import { WaitForTransactionReceiptData } from "wagmi/query";
// import { type GetTransactionConfirmationsData } from "wagmi/query";

type Props = {
  receipt?: WaitForTransactionReceiptData<Config, any>;
  // receipt?: GetTransactionConfirmationsData;
  isFetched?: boolean;
  isFetchedConfirmation?: boolean;
  isSuccessConfirmation?: boolean;
  onSuccess?: (data: TransactionReceipt) => void;
  onSettled?: (data?: TransactionReceipt) => void;
  onError?: (error?: Error) => void;
  error: WriteContractErrorType | null;
};

export const useWriteContractCallbacks = ({
  receipt,
  isFetched,
  isFetchedConfirmation,
  isSuccessConfirmation,
  onSuccess,
  onSettled,
  onError,
  error,
}: Props) => {
  if (isFetched && isFetchedConfirmation) {
    if (receipt && receipt.status == "success" && isSuccessConfirmation) {
      // Call Success callback if has.
      console.log("Success Callback");
      onSuccess?.(receipt);
    } else if (error) {
      onError?.(
        error instanceof Error ? error : new Error("Transaction is reverted")
      );
    }
    onSettled?.(receipt);
  }
};
