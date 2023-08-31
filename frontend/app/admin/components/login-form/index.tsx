import styles from "./style.module.css";
import Link from "next/link";

const AdminLoginForm: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.head}>Log In</h1>
      <form action="">
        <div className={styles.input}>
          <p>Email</p>
          <input type="email" name="email" id="" />
        </div>
        <div className={styles.input}>
          <p>Password</p>
          <input type="password" name="email" id="" />
        </div>
        <Link href="/admin">
          <button type="submit">Log In</button>
        </Link>
      </form>
    </div>
  );
};

export default AdminLoginForm;
