import { FlexboxGrid } from "rsuite";
import FlexboxGridItem from "rsuite/esm/FlexboxGrid/FlexboxGridItem";
import StandingCard from "../../components/StandingCard";
import banner from "../../img/banner.png";

const Standings = ({
  tournament,
  setTournament,
  tournaments,
  setTournaments,
  league,
  table,
  playerTable,
  indexT,
  setIndexT,
}) => {
  return (
    <>
      <FlexboxGrid justify={"space-around"} style={{ padding: 10 }}>
        <FlexboxGridItem colspan={16}>
          {/*  */}
          <StandingCard
            title={"Table"}
            data={"data"}
            tournament={tournament}
            tournaments={tournaments}
            setTournament={setTournament}
            setTournaments={setTournaments}
            league={league}
            table={table}
            indexT={indexT}
            setIndexT={setIndexT}
          />
        </FlexboxGridItem>
        <FlexboxGridItem colspan={6}>
          {/*  */}
          <StandingCard title={"Top Performers"} playerTable={playerTable} />
        </FlexboxGridItem>
      </FlexboxGrid>
    </>
  );
};

export default Standings;
