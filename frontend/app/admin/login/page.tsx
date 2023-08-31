"use client";
import AdminLoginForm from "../components/login-form";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./page.module.css";

const Login: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.head}>
          <Image
            src="/logo.svg"
            width={116}
            quality={100}
            priority
            height={46}
            alt="domain plug logo"
          />
        </div>
        <div className={styles.flex}>
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: "-50px" }}
            className={styles.greeting}
          >
            <Image
              src="/illustration.svg"
              width={328}
              quality={100}
              priority
              height={485}
              alt="illustration"
            />
            <div className={styles.boxes}>
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
                className={styles.box}
              ></motion.div>
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: 0.4 }}
                className={styles.box}
              ></motion.div>
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: 0.6 }}
                className={styles.txt}
              >
                Welcome Back
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 1.2 }}
          >
            <AdminLoginForm />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Login;
