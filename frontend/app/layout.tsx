"use client";
import "./globals.css";
import type { Metadata } from "next";
import { NavModalContextProvider } from "../context/NavModalContext";

export const metadata: Metadata = {
  title: "Domain Plug",
  description: "The Everything ENS Related",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
   {/* {typeof window !== 'undefined' && ( */}
        <NavModalContextProvider>
          <body>{children}</body>
        </NavModalContextProvider>
      {/* )} */}
    </html>
  );
};

export default RootLayout;
