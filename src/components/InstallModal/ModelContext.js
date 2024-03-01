// ModalContext.js
import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
  const [modalType, setModalType] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ modalType, modalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};