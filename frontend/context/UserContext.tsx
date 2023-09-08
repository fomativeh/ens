"use client";
import { createContext, useState, Dispatch, SetStateAction } from "react";

interface UserContextProps {
  isLoggedIn: Boolean;
  userData: any;
}

const initialState = {
  isLoggedIn: false,
  userData: {},
};

export const UserContext = createContext<{
  userState: UserContextProps;
  setUserState: Dispatch<SetStateAction<UserContextProps>>;
}>({ userState: initialState, setUserState: () => {} });

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userState, setUserState] = useState<UserContextProps>(initialState);

  return (
    <UserContext.Provider
      value={{ userState: userState, setUserState: setUserState }}
    >
      {children}
    </UserContext.Provider>
  );
};
