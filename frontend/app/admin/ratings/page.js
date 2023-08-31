import UserDomain from "../components/user-domain";
import styles from "./style.module.css";

export default function Ratings() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <p className={styles.head}>
            Here’s where you can see all searches by subscribed users, and also
            rate their domains
          </p>
          <div className={styles.domains}>
            <div className={styles.top}>
              <p>Appraisals</p>
              <p>User</p>
              <p>Rate Domain</p>
            </div>
            <div className={styles.blocks}>
              <UserDomain domainName="bloom" userName="Sandra Ralph" />
              <UserDomain domainName="happy" userName="Frank Billon" />
              <UserDomain domainName="mungry" userName="Sandra Ralph" />
              <UserDomain domainName="trump" userName="Danny Phantom" />
              <UserDomain domainName="unfi" userName="Rilan Smith" />
              <UserDomain domainName="mirava" userName="Sandra Ralph" />
              <UserDomain domainName="anvil" userName="Paul Rabbit" />
              <UserDomain domainName="kiki" userName="Sandra Ralph" />
              <UserDomain domainName="trava" userName="Danny Phantom" />
              <UserDomain domainName="moins" userName="Rilan Smith" />
              <UserDomain domainName="quava" userName="Sandra Ralph" />
              <UserDomain domainName="loki" userName="Paul Rabbit" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
