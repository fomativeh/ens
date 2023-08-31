import styles from "./style.module.css";

const UserInflow: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.head}>Daily User Inflow </h1>
      <div className={styles.graph}></div>
    </div>
  );
};

export default UserInflow;
