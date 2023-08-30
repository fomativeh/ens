import "./globals.css";

export const metadata = {
  title: "Domain Plug",
  description: "The Everything ENS Related",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
