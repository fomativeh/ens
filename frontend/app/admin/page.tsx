"use client";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import RecentlyAppraised from "./components/recently-appraised";
import UserInflow from "./components/user-inflow";
import Stats from "./components/stats";

const Admin: React.FC = () => {
  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className={styles.container}
      >
        <div className={styles.flex}>
          <div className={styles.left}>
            <Stats />
            <UserInflow />
          </div>
          <div className={styles.right}>
            <RecentlyAppraised />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Admin;
