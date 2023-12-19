import styles from "../css/LiveGame.module.css";
import { useRelatedGames } from "../services/queries.ts";
import { useParams, useNavigate } from "react-router-dom";

export default function LiveRelated() {
  const navigate = useNavigate();

  const params = useParams();

  const liveTypesQuery = useRelatedGames(params.id, params.sport).data;

  if (!liveTypesQuery)
    return (
      <>
        <div className={styles.afterheader}>loading ...</div>
      </>
    );
  if (liveTypesQuery.games == null) {
    // navigate(`/lives`, { replace: true });
    //return <div className={styles.afterheader}>redirecting live page ...</div>;
  }
  const handleGetGame = (val) => {
    navigate(`/live/${params.id}/${val}`, { replace: true });
  };
  return (
    <>
      <div className={styles.afterheader}>
        <div className={styles.headerteamslist}>
          {liveTypesQuery.games.map((data, index) => (
            <div
              key={index}
              className={styles.headertopteamlist}
              onClick={(e) => {
                handleGetGame(data.GameId);
              }}
            >
              <div className={styles.topteamone}>
                <div
                  className={styles.topteamlogo}
                  style={{
                    backgroundImage: `url(https://crystalstatic.com/cache/b109/Mobile/content/images/live/baskethome.svg)`,
                  }}
                ></div>
                {data.HomeTeamName}
              </div>
              <div className={styles.topteamtwo}>
                <div
                  className={styles.topteamlogo}
                  style={{
                    backgroundImage: `url(https://crystalstatic.com/cache/b109/Mobile/content/images/live/baskethome.svg)`,
                  }}
                ></div>
                {data.AwayTeamName}
              </div>
              <div className={styles.topodds}>
                <span className={styles.score1}>{data.HomeTeamResult}</span>
                <span className={styles.scoremiddle}>:</span>
                <span className={styles.score2}>{data.AwayTeamResult}</span>
              </div>
              <div className={styles.topoddstime}>{data.ShortPeriodInfo}'</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
