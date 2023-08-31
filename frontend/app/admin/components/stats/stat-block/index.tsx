import styles from "./style.module.css";

interface StatBlockProps {
  tittle: string;
  value: string;
}

export default function StatBlock({ tittle, value }: StatBlockProps): JSX.Element {
  return (
    <div className={styles.block}>
      <p className={styles.tittle}>{tittle}</p>
      <p className={styles.value}>{value}</p>
    </div>
  );
}