import { useContext, createContext } from "react";

interface ModalContextData {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextData | undefined>(
  undefined,
);

export const ModalProvider = ModalContext.Provider;

export const useModal = (): ModalContextData => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be within ModalProvider");
  }

  return context;
};
