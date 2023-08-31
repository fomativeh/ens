import StarRating from "../star-rating";
import styles from "./style.module.css";

export default function UserDomain({domainName, userName}) {
  return (
    <div id={domainName} className={styles.user_domain}>
      <p>{domainName}.eth</p>
      <p className={styles.user_name}>{userName}</p>
      <div className={styles.rating}>
        <StarRating />
        <button className={styles.send}>Send to user</button>
      </div>
    </div>
  );
}
