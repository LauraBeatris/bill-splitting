import { useContext, createContext } from "react";

import { PopupContextPayload } from "./types";

const PopupContext = createContext<PopupContextPayload | undefined>(undefined);

export const PopupProvider = PopupContext.Provider;

export const usePopup = (): PopupContextPayload => {
  const context = useContext(PopupContext);

  if (!context) {
    throw new Error("usePopup should be within PopupProvider");
  }

  return context;
};
