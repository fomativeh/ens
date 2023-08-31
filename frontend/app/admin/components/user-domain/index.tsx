import StarRating from "../star-rating";
import styles from "./style.module.css";

interface UserDomainProps {
  domainName: string;
  userName: string;
}

export default function UserDomain({
  domainName,
  userName,
}: UserDomainProps): JSX.Element {
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
