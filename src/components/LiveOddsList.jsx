import styles from "../css/LiveOddsList.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { useGameOdds } from "../services/queries.ts";
import LiveSnatches from "../components/LiveSnatches";
import { useIsFetching } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { SportTypeIdContext } from "./LiveContent.jsx";
export default function LiveGame() {
  const navigate = useNavigate();
  const params = useParams();
  const { searchText, setSearchText } = useContext(SportTypeIdContext);
  const liveOddsInfoQuery = useGameOdds(params.sport).data;
  console.log(searchText);
  if (!liveOddsInfoQuery) return <div>Loading ....</div>;
  console.log(liveOddsInfoQuery);
  //const isFeching = useIsFetching();
  //console.log(isFeching);
  //if (isFeching){i++;}
  return (
    <>
      <div className={styles.live4}>
        {liveOddsInfoQuery.Details.map((data, index) => (
          <div key={index} className={styles.live4live4}>
            <div className={styles.live4name}>
              <span className={styles.live4center}>{data.DetailName.Text}</span>
            </div>
            <div className={styles.favoritedetaillive}></div>
            <div className={styles.live4kdiv}>
              <div className={styles.contentcenter}>
                <LiveSnatches snatches={data.Sntaches} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
