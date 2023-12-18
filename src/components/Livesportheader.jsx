import styles from "../css/Livelist.module.css";
import Livelistnames from "./Livelistnames";
import Oddslist from "./Oddslist";

export default function Livesportheader({ data }) {
  return (
    <>
      <div className={styles.topleagueshead}>
        <div
          className={styles.topleaguesheadlogo}
          style={{
            backgroundImage: `url(${data.Logo})`,
          }}
        ></div>
        <div
          className={styles.sportTypeFlag}
          style={{
            backgroundImage: `url(https://crystalstatic.com/Content/Images/Sport/SportTypeIcons/SportType${data.TypeId}.svg)`,
          }}
        ></div>
        <span>{data.Name} </span>
      </div>
      {data.Games.map((datain, i) => (
        <div key={i} className={styles.live2}>
          <div className={styles.favorite}>&#9734;</div>
          <div className={styles.live2_1}>
            <Livelistnames games={datain} typeId={data.TypeId} />
          </div>
          <div className={styles.live2_3}>
            <div className={styles.live2_3_1}>
              <Oddslist odds={datain.Odds} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
