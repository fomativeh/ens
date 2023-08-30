"use client";
import { usePathname } from "next/navigation";
import styles from "./style.module.css";
import Link from "next/link";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <nav className={styles.sidebar}>
      <div className={styles.links}>
        <Link
          className={`${pathname === "/admin" ? styles.current : ""}`}
          href="/admin"
        >
          Home
        </Link>
        <Link
          className={`${pathname === "/admin/ratings" ? styles.current : ""}`}
          href="/admin/ratings"
        >
          Domain Rating
        </Link>
      </div>
    </nav>
  );
}
