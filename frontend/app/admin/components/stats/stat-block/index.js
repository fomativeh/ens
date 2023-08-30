import styles from "./style.module.css";

export default function StatBlock({tittle, value}) {
  return (
    <div className={styles.block}>
      <p className={styles.tittle}>{tittle}</p>
      <p className={styles.value}>{value}</p>
    </div>
  );
}
