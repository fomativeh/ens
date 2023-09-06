"use client";
import { useEffect, useState } from "react";
import "./globals.css";
import type { Metadata } from "next";
import { NavModalContextProvider } from "../context/NavModalContext";

export const metadata: Metadata = {
  title: "Domain Plug",
  description: "The Everything ENS Related",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [navModalOpen, setNavModalOpen] = useState(false);
  return (
    <html lang="en">
      <NavModalContextProvider>
        <body>{children}</body>
      </NavModalContextProvider>
    </html>
  );
};

export default RootLayout;
