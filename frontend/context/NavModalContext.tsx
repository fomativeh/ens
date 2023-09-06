import { createContext, useContext, useState, ReactNode, SetStateAction, Dispatch } from "react";

export interface NavModalContextValue {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const NavModalContext = createContext<NavModalContextValue | undefined>(undefined);

interface NavModalContextProviderProps {
  children: ReactNode;
}

export const NavModalContextProvider: React.FC<NavModalContextProviderProps> = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const contextValue: NavModalContextValue = {
    modalOpen,
    setModalOpen,
  };

  return <NavModalContext.Provider value={contextValue}>{children}</NavModalContext.Provider>;
};
