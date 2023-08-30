import RecentlyAppraised from "./components/recently-appraised";
import StarRating from "./components/star-rating";
import Stats from "./components/stats";
import UserInflow from "./components/user-inflow";
import styles from "./page.module.css";

export default function Admin() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div className={styles.left}>
            <Stats />
            <UserInflow />
          </div>
          <div className={styles.right}>
            <RecentlyAppraised />
          </div>
        </div>
      </div>
    </>
  );
}
