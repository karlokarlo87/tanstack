import styles from "../css/LiveGame.module.css";
import { useRelatedGames } from "../services/queries.ts";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { SportTypeIdContext } from "./LiveContent.jsx";
import { useGameInfo } from "../services/queries.ts";
export default function LiveGameContent() {
  const navigate = useNavigate();
  const params = useParams();

  const liveGameInfoQuery = useGameInfo(params.sport).data;

  //if (liveGameInfoQuery.games == null) navigate(`/lives`, { replace: true });
  if (!liveGameInfoQuery)
    return (
      <>
        <div className={styles.livehead}>loading ...</div>
      </>
    );

  return (
    <>
      <div className={styles.livehead}>
        <a className={styles.gameinfoclose}>
          <span className={styles.livegameclose}></span>
        </a>

        <div className={styles.livetab}>
          <div className={styles.livegametrackerinfopanel}>
            <div>
              <div>
                <div className={styles.livegameperiod}>
                  {liveGameInfoQuery.ChampionatName}
                </div>
                <div className={styles.livegameheadertopinner}>
                  <div className={styles.livelisthedteam1}>
                    <div className={styles.vcenter}>
                      <span> {liveGameInfoQuery.HomeTeamName}</span>
                    </div>
                    <div className={styles.livetoplogoteam1}></div>
                  </div>
                  <div className={styles.livelisthedscore}>
                    <span className={styles.livelisthedscore1}>
                      {liveGameInfoQuery.HomeTeamResult}
                    </span>
                    <span>&nbsp;:&nbsp;</span>
                    <span className={styles.livelisthedscore2}>
                      {liveGameInfoQuery.AwayTeamResult}
                    </span>
                    <div className={styles.livegameperiodinfo}>
                      {liveGameInfoQuery.PeriodInfo}{" "}
                      {liveGameInfoQuery.TimeInfo}'
                    </div>
                  </div>
                  <div className={styles.livelisthedteam2}>
                    <div className={styles.livetoplogoteam2}></div>
                    <div className={styles.vcenter}>
                      <span> {liveGameInfoQuery.AwayTeamName}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.livegamedashboard}>
                  <div className={styles.livegamelist21}>
                    <div>{liveGameInfoQuery.HomeTeamName}</div>
                    <div>{liveGameInfoQuery.AwayTeamName}</div>
                  </div>
                  <div className={styles.livelistrightitems}>
                    {liveGameInfoQuery.TeamsPeriodScore.map((data, index) => (
                      <div className={styles.livelist23} key={index}>
                        <div className={styles.livelist231}>
                          {index == 0 ? "" : index}
                        </div>
                        <div
                          className={[styles.livelist232, styles.yellow].join(
                            " "
                          )}
                        >
                          {data.AwayPeriodScore}
                        </div>
                        <div
                          className={[styles.livelist233, styles.yellow].join(
                            " "
                          )}
                        >
                          {data.HomePeriodScore}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
