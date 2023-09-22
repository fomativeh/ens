"use client";
import "./globals.css";
import { NavModalContextProvider } from "../context/NavModalContext";
import { UserContextProvider } from "../context/UserContext";
import SiteMeta from "../components/SiteMeta";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <SiteMeta />
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
