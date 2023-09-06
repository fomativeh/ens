"use client";
import "./globals.css";
import { NavModalContextProvider } from "../context/NavModalContext";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Domain Plug</title>
        <meta name="description" content="The Everything ENS Related"/>
      </head>
        <NavModalContextProvider>
          <body>{children}</body>
        </NavModalContextProvider>
    </html>
  );
};

export default RootLayout;
