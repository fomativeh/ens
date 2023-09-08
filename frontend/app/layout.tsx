"use client";
import "./globals.css";
import { NavModalContextProvider } from "../context/NavModalContext";
import { UserContextProvider } from "../context/UserContext";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Domain Plug</title>
        <meta name="description" content="The Everything ENS Related" />
      </head>
      <NavModalContextProvider>
        <UserContextProvider>
          <body>{children}</body>
        </UserContextProvider>
      </NavModalContextProvider>
    </html>
  );
};

export default RootLayout;
