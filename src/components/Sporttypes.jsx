import styles from "../css/SportType.module.css";
import Sporttype from "./Sporttype";

import { useSportTypes } from "../services/queries";
import { useIsFetching } from "@tanstack/react-query";

export default function Sporttypes() {
  //const isFeching = useIsFetching();
  const isFeching = false;
  //const sportTypesQuery = useSportTypes().data;

  if (isFeching)
    return (
      <>
        <div className={styles.sporttoplist}>loading....</div>
      </>
    );

  // if (sportTypesQuery == undefined) return null;

  return (
    <>
      <div className={styles.sporttoplist}>
        <Sporttype />
      </div>
    </>
  );
}
