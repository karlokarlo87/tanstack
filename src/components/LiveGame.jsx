import styles from "../css/LiveGame.module.css";
import { useRelatedGames } from "../services/queries.ts";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
export default function LiveGame() {
  const [count, setCount] = useState(0);
  const params = useParams();

  const liveTypesQuery = useRelatedGames(params.id, params.sport).data;
  console.log(liveTypesQuery);
  if (liveTypesQuery == undefined) return null;
  return (
    <>
      <div className={styles.afterheader}>
        <div className={styles.headerteamslist}>
          {liveTypesQuery.games.map((data, index) => (
            <div key={index} className={styles.headertopteamlist}>
              <div className={styles.topteamone}>
                <div
                  className={styles.topteamlogo}
                  style={{
                    backgroundImage: `url(https://crystalstatic.com/cache/b109/Mobile/content/images/live/baskethome.svg)`,
                  }}
                ></div>
                ბოლონია
              </div>
              <div className={styles.topteamtwo}>
                <div
                  className={styles.topteamlogo}
                  style={{
                    backgroundImage: `url(https://crystalstatic.com/cache/b109/Mobile/content/images/live/baskethome.svg)`,
                  }}
                ></div>
                რომა
              </div>
              <div className={styles.topodds}>
                <span className={styles.score1}>2</span>
                <span className={styles.scoremiddle}>:</span>
                <span className={styles.score2}>0</span>
              </div>
              <div className={styles.topoddstime}>II ტ. 90'</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
