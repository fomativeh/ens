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
          content="http://ens-lite.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSEO.a172ddbd.jpg&w=256&q=75"
        />
        <meta property="og:url" content="https://ens-lite.vercel.app" />
        <meta property="og:type" content="website" />

        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Domain Plug" />
        <meta name="twitter:description" content="The Everything ENS Related." />
        <meta
          name="twitter:image"
          content="http://ens-lite.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSEO.a172ddbd.jpg&w=256&q=75"
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
