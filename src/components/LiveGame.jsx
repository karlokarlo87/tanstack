import LiveGameContent from "../components/LiveGameContent";
import LiveRelated from "../components/LiveRelated";
import LiveOddsList from "../components/LiveOddsList";
import LiveOddsHeader from "../components/LiveOddsHeader";
export default function LiveGame() {
  return (
    <>
      <LiveRelated />
      <LiveGameContent />
      <LiveOddsHeader />
      <LiveOddsList />
    </>
  );
}
