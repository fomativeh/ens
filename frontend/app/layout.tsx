"use client";
import "./globals.css";
import { NavModalContextProvider } from "../context/NavModalContext";
import { UserContextProvider } from "../context/UserContext";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Domain Plug</title>
        <meta name="description" content="The Everything ENS Related." />
        {/* Facebook, Whatsapp, Pinterest, LinkedIn SEO */}
        <meta property="og:title" content="Domain Plug" />
        <meta property="og:description" content="The Everything ENS Related." />/
        <meta
          property="og:image"
          content="https://ens-lite.vercel.app/_next/static/media/appraise.6be0e786.svg"
        />
        <meta property="og:url" content="https://ens-lite.vercel.app" />
        <meta property="og:type" content="website" />

        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Domain Plug" />
        <meta name="twitter:description" content="The Everything ENS Related." />
        <meta
          name="twitter:image"
          content="https://ens-lite.vercel.app/_next/static/media/appraise.6be0e786.svg"
        />
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
