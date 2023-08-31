import Link from "next/link";
import styles from "./style.module.css";

interface DomainBlockProps {
  domainName: string;
}

const DomainBlock: React.FC<DomainBlockProps> = ({ domainName }) => {
  return (
    <div className={styles.block}>
      <p>{domainName}.eth</p>
      <Link href={`/admin/ratings/#${domainName}`}>
        <button>Rate</button>
      </Link>
    </div>
  );
};

export default DomainBlock;
