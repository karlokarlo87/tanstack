import styles from "../css/LiveOddsList.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { useGameOdds } from "../services/queries.ts";
import { useContext, useState } from "react";
import { SportTypeIdContext } from "./LiveContent.jsx";
export default function LiveOddsHeader() {
  const navigate = useNavigate();
  const params = useParams();
  const liveOddsInfoQuery = useGameOdds(params.sport).data;
  const [isAvtive, setIsactive] = useState(0);
  console.log(liveOddsInfoQuery);
  const { searchText, setSearchText } = useContext(SportTypeIdContext);
  if (!liveOddsInfoQuery) return <div>Loading ....</div>;
  const handleGetOddsFilter = (name, i) => {
    setIsactive(i);
    setSearchText(name);
  };
  return (
    <>
      <div className={styles.livepagetop}>
        <div className={styles.livesearch}>
          <input
            type="text"
            className={styles.livesearchinput}
            placeholder="მოძებნეთ სასურველი პოზიცია"
          />
          <div className={styles.searchfilterclosebtlive}></div>
        </div>
        <div className={styles.sportfilterright}>
          <span className={styles.searchfilter}>
            <div className={styles.livesearchbt}></div>
          </span>
          <span className={styles.detilsfavorites}>
            <span className={styles.favoritesitemcount}>0</span>
          </span>
        </div>
        <div className={styles.livefiltercont}>
          <div className={styles.livefilter}>
            {liveOddsInfoQuery.Header.map((data, index) => (
              <div
                key={index}
                className={[
                  styles.livefilterlist,
                  isAvtive == index ? styles.active : "",
                ].join(" ")}
                data-attr={data.key}
                onClick={(e) => handleGetOddsFilter(data.Value, index)}
              >
                {data.Value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
