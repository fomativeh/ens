"use client";
import {
  createContext,
  Context,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface ModalContextProps {
  modalOpen: Boolean;
  setModalOpen: Dispatch<SetStateAction<Boolean>>;
}

const initialState = {
  modalOpen: false,
  setModalOpen: (modalOpen: Boolean) => {},
} as ModalContextProps;

export const NavModalContext = createContext<ModalContextProps>(initialState);

export const NavModalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [modalOpen, setModalOpen] = useState<Boolean>(false);

  return (
    <NavModalContext.Provider
      value={{ modalOpen: modalOpen, setModalOpen: setModalOpen }}
    >
      {children}
    </NavModalContext.Provider>
  );
};
