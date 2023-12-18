import styles from "../css/Livelist.module.css";
import { useNavigate } from "react-router-dom";
import { SportTypeIdContext } from "./LiveContent.jsx";
import { useContext, useState } from "react";
export default function Livelistnames({ games, typeId }) {
  const { sportTypeid, setSportTypeid } = useContext(SportTypeIdContext);
  const navigate = useNavigate();
  const handleGetLiveGame = (e) => {
    const livegameid = games.Id;
    navigate(`/live/${typeId}/${livegameid}`, { replace: true });
  };
  return (
    <>
      <div onClick={(e) => handleGetLiveGame(games.Id)}>
        <div className={styles.live2_1_1}>{games.t1}</div>
        <div className={styles.live2_1_2}>{games.t2}</div>

        <div className={styles.live2_1_3}>
          {games.time}
          <div className={styles.livegamedetailcount}>
            +1{games.totalOddCount}
          </div>
        </div>
      </div>
      <div className={styles.live_2_2_2}>
        <div className={styles.live2_2_2}>
          <div className={styles.resultgroup}>
            <div className={styles.team1result}>{games.r1}</div>
            <div className={styles.team2result}>{games.r2}</div>
          </div>
        </div>
        <div className={styles.live2_1_3_stat}></div>
      </div>
    </>
  );
}
