import StatBlock from "./stat-block";
import styles from "./style.module.css";

export default function Stats() {
  return (
    <div className={styles.stats}>
      <StatBlock tittle="Total Users" value="3284" />
      <div className={styles.line}></div>
      <StatBlock tittle="Registered Users" value="2770" />
      <div className={styles.line}></div>
      <StatBlock tittle="Subscribed Users" value="1283" />
      <div className={styles.line}></div>
      <StatBlock tittle="Domains Appraised" value="65,231" />
    </div>
  );
}
