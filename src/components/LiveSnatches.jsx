import styles from "../css/LiveOddsList.module.css";

export default function LiveSnatches({ snatches, i }) {
  //console.log(Object.keys(snatches));
  const snatchskey = Object.keys(snatches);

  return (
    <>
      {snatchskey.map((data, index) => (
        <a key={index} className={styles.live4k}>
          <span className={styles.live4k1}>{snatches[data].Result.Text}</span>
          <span
            className={
              !snatches[data].IsPaused ? styles.live4k2 : styles.live4k2
            }
          >
            {snatches[data].IsPaused
              ? snatches[data].SnatchText
              : snatches[data].SnatchText}
          </span>
        </a>
      ))}
    </>
  );
}
