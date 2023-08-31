import DomainBlock from "./block";
import styles from "./style.module.css";

export default function RecentlyAppraised() {
  return (
    <div className={styles.container}>
      <h1 className={styles.head}>Recently Appraised Domains</h1>
      <div className={styles.domains}>
        {/* All domains should be mapped */}
        <DomainBlock domainName="bloom" />
        <DomainBlock domainName="happy" />
        <DomainBlock domainName="mungry" />
        <DomainBlock domainName="trump" />
        <DomainBlock domainName="unfi" />
        <DomainBlock domainName="mirava" />
        <DomainBlock domainName="anvil" />
      </div>
    </div>
  );
}
