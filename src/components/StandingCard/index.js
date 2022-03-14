import { useState } from "react";
import { Dropdown, Panel, Paragraph } from "rsuite";
import DropdownItem from "rsuite/esm/Dropdown/DropdownItem";
import LeagueTable from "../Table";
import TopPerformers from "../TopScorers";

const StandingCard = ({
  title,
  content,
  tournament,
  setTournament,
  tournaments,
  setTournaments,
  league,
  table,
  indexT,
  setIndexT,
  playerTable,
}) => {
  const [type, setType] = useState("goals");
  return (
    <Panel header={title} shaded>
      {title !== "Table" && (
        <Dropdown title={type}>
          <DropdownItem onSelect={() => setType("goals")}>Goals</DropdownItem>
          <DropdownItem onSelect={() => setType("assists")}>
            Assists
          </DropdownItem>
          <DropdownItem onSelect={() => setType("saves")}>Saves</DropdownItem>
          <DropdownItem onSelect={() => setType("beat")}>Beat</DropdownItem>
          <DropdownItem onSelect={() => setType("blocks")}>Blocks</DropdownItem>
          <DropdownItem onSelect={() => setType("expectedAssists")}>
            Expected Assists
          </DropdownItem>
        </Dropdown>
      )}
      {title === "Table" ? (
        <LeagueTable
          tournament={tournament}
          tournaments={tournaments}
          setTournament={setTournament}
          setTournaments={setTournaments}
          league={league}
          table={table}
          indexT={indexT}
          setIndexT={setIndexT}
        />
      ) : (
        <TopPerformers type={type} playerTable={playerTable} />
      )}
    </Panel>
  );
};

export default StandingCard;
