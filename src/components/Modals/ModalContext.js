import React, { createContext, useState, useContext } from 'react';
import { useLenis } from 'lenis/react';

const ModalContext = createContext();

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
  const [modalType, setModalType] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const lenis = useLenis();

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
    lenis.stop();
  };

  const closeModal = () => {
    setModalOpen(false);
    lenis.start();
  };

  return (
    <ModalContext.Provider value={{ modalType, modalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};