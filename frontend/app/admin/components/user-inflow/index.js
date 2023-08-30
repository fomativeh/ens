import styles from "./style.module.css";

export default function UserInflow() {
  return (
    <div className={styles.container}>
      <h1 className={styles.head}>Daily User Inflow </h1>
      <div className={styles.graph}></div>
    </div>
  );
}