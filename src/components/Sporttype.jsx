import styles from "../css/SportType.module.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { SportTypeIdContext } from "./LiveContent.jsx";
import { useSportTypes } from "../services/queries";
import { useIsFetching } from "@tanstack/react-query";

export default function Sporttype() {
  const navigate = useNavigate();
  const sportTypesQuery = useSportTypes().data;
  const isFeching = useIsFetching();
  const { sportTypeid, setSportTypeid } = useContext(SportTypeIdContext);

  if (sportTypesQuery == undefined) return null;

  const handleGetSport = (id) => {
    console.log(id);
    setSportTypeid(id);
    navigate("/lives", { replace: true });
  };
  return (
    <>
      {sportTypesQuery.map((data, index) => (
        <div
          key={index}
          className={styles.sporttoplista}
          onClick={() => handleGetSport(data.Id)}
        >
          <div className={[styles.sportscrolllist, styles.active].join(" ")}>
            <span
              className={styles.sportscrolllistspan}
              style={{
                backgroundImage: `url(https://crystalstatic.com/cache/b109/Content/Images/Sport/SportTypeIcons/${
                  data.Id == -1111 ? "streamnew" : `SportType${data.Id}`
                }.svg)`,
              }}
            ></span>
            <div className={styles.tag}>{data.SportTypeName}</div>
          </div>
        </div>
      ))}
    </>
  );
}
