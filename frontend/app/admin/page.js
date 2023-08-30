import Stats from "./components/stats";
import styles from "./page.module.css";


export default function Admin() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div className={styles.left}>
            <Stats />
          </div>
        </div>
      </div>
    </>
  );
}
