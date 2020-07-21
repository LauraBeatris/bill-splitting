import React, { useCallback, useState, useMemo } from "react";

import { ModalProvider } from "./ModalContext";

const ModalContainer: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(() => ({
    isOpen,
    openModal,
    closeModal,
  }), [
    isOpen,
    openModal,
    closeModal,
  ]);

  return (
    <ModalProvider value={value}>
      {children}
    </ModalProvider>
  );
};

export default ModalContainer;
