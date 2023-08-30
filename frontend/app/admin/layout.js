import Sidebar from "./components/sidebar";

export const metadata = {
  title: "Domain Plug - Admin",
  description: "The Everything ENS Related",
};

export default function DashboardLayout({ children }) {
  return (
    <section>
      <Sidebar />
      {children}
    </section>
  );
}
