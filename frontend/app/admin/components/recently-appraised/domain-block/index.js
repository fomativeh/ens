import Link from "next/link";
import styles from "./style.module.css";

export default function DomainBlock({ domainName }) {
  return (
    <div className={styles.block}>
      <p>{domainName}.eth</p>
      <Link href={`/admin/ratings/#${domainName}`}>
        <button>Rate</button>
      </Link>
    </div>
  );
}
