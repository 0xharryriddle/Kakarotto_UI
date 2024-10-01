import { WriteContractErrorType } from "@wagmi/core";
import { useEffect, useRef } from "react";
import { TransactionReceipt } from "viem";
import { Config } from "wagmi";
import { WaitForTransactionReceiptData } from "wagmi/query";

type Props = {
  receipt?: WaitForTransactionReceiptData<Config, any>;
  isFetched?: boolean;
  isFetchedConfirmation?: boolean;
  isSuccessConfirmation?: boolean;
  onSuccess?: (data: TransactionReceipt, isConfirmed: boolean) => void;
  onSettled?: (data?: TransactionReceipt, isConfirmed?: boolean) => void;
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
  const hasCalledInitialCallbacks = useRef(false);
  const hasCalledConfirmationCallbacks = useRef(false);

  useEffect(() => {
    if (
      isFetched &&
      receipt &&
      receipt.status === "success" &&
      !hasCalledInitialCallbacks.current
    ) {
      console.log("Initial Success Callback");
      onSuccess?.(receipt, false);
      onSettled?.(receipt, false);
      hasCalledInitialCallbacks.current = true;
    }
  }, [isFetched, receipt, onSuccess, onSettled]);

  useEffect(() => {
    if (
      isFetchedConfirmation &&
      isSuccessConfirmation &&
      receipt &&
      !hasCalledConfirmationCallbacks.current
    ) {
      console.log("Confirmation Success Callback");
      onSuccess?.(receipt, true);
      onSettled?.(receipt, true);
      hasCalledConfirmationCallbacks.current = true;
    } else if (error && !hasCalledConfirmationCallbacks.current) {
      onError?.(
        error instanceof Error ? error : new Error("Transaction is reverted")
      );
      hasCalledConfirmationCallbacks.current = true;
    }
  }, [
    isFetchedConfirmation,
    isSuccessConfirmation,
    receipt,
    error,
    onSuccess,
    onSettled,
    onError,
  ]);

  // Reset the refs when the receipt changes
  useEffect(() => {
    hasCalledInitialCallbacks.current = false;
    hasCalledConfirmationCallbacks.current = false;
  }, [receipt]);

  //$ Second
  // const hasCalledCallbacks = useRef(false);

  // useEffect(() => {
  //   console.log("isFetched", isFetched);
  //   console.log("isFetchedConfirmation", isFetchedConfirmation);
  //   console.log("hasCalledCallbacks.current", hasCalledCallbacks)

  //   if (isFetched && isFetchedConfirmation && !hasCalledCallbacks.current) {
  //     if (receipt && receipt.status === "success" && isSuccessConfirmation) {
  //       console.log("Success Callback");
  //       onSuccess?.(receipt);
  //     } else if (error) {
  //       onError?.(
  //         error instanceof Error ? error : new Error("Transaction is reverted")
  //       );
  //     }
  //     onSettled?.(receipt);
  //     hasCalledCallbacks.current = true;
  //   }
  // }, [
  //   isFetched,
  //   isFetchedConfirmation,
  //   isSuccessConfirmation,
  //   receipt,
  //   error,
  //   onSuccess,
  //   onError,
  //   onSettled,
  // ]);

  // // Reset the ref when the receipt changes
  // useEffect(() => {
  //   hasCalledCallbacks.current = false;
  // }, [receipt]);

  //$ First
  // if (isFetched && isFetchedConfirmation) {
  //   if (receipt && receipt.status == "success" && isSuccessConfirmation) {
  //     // Call Success callback if has.
  //     console.log("Success Callback");
  //     onSuccess?.(receipt);
  //   } else if (error) {
  //     onError?.(
  //       error instanceof Error ? error : new Error("Transaction is reverted")
  //     );
  //   }
  //   onSettled?.(receipt);
  // }
};
