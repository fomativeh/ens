import type { Metadata } from "next";
import Sidebar from "./components/sidebar";

export const metadata = {
  title: "Domain Plug - Admin",
  description: "The Everything ENS Related",
};

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Sidebar />
      {children}
    </section>
  );
}
