import styles from "../css/Header.module.css";
import Sporttypes from "./Sporttypes";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div id="HyperLinkLogo" className={styles.header_logo}></div>
      </div>
      <div className={styles.sportlistcont}>
        <Sporttypes />
      </div>
    </>
  );
}
