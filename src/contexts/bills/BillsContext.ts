import { useContext, createContext } from "react";

import { BillsContextPayload } from "./types";

const UserBillsContext = createContext<BillsContextPayload | undefined>(undefined);

export const BillsProvider = UserBillsContext.Provider;

export const useBills = (): BillsContextPayload => {
  const context = useContext(UserBillsContext);

  if (!context) {
    throw new Error("useBills should be within BillProvider");
  }

  return context;
};
