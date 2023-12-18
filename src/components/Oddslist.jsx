import styles from "../css/Livelist.module.css";

export default function Oddslist({ odds }) {
  return (
    <>
      {odds.map((data, i) => (
        <div key={i} className={styles.live2_3_0}>
          {data.title}
          <span className={styles.live2_3_span}>{data.snatch}</span>
        </div>
      ))}
    </>
  );
}
