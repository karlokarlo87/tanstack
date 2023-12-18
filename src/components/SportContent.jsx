import styles from "../css/Livelist.module.css";

import Livesportheader from "./Livesportheader.jsx";

//import { useEffect, useState } from "react";
import { useGetGame } from "../services/queries.ts";
import { useIsFetching } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { SportTypeIdContext } from "./LiveContent.jsx";
export default function SportContent() {
  const { sportTypeid, setSportTypeid } = useContext(SportTypeIdContext);
  const isFeching = useIsFetching();

  //const sportTypesQuery = useGetGames().data;
  const sportTypesQuerys = useGetGame(sportTypeid).data;

  if (isFeching)
    return (
      <>
        <div className={styles.livelist}>
          <div>loading....</div>
        </div>
      </>
    );
  if (sportTypesQuerys == undefined) return null;

  return (
    <>
      <div className={styles.livelist}>
        {sportTypesQuerys.map((data, index) => (
          <div key={index} className={styles.livesportminimisecontainer}>
            <Livesportheader data={data} />
          </div>
        ))}
      </div>
    </>
  );
}
