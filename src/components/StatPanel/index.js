import { FlexboxGrid } from "rsuite";
import teamStats from "../../backend/db/teamStats";
import StatRow from "../StatRow";

//used to navigate the different stat types
const typeDataTeam = [
  "summary",
  "passing",
  "possession",
  "shooting",
  "defending",
];

//copy of the teamstats object
const tracker = { ...teamStats };

//component that handels type of stats to be shown in the stat grid
const StatPanel = ({
  typeDataTeamState,
  currentFixture,
  teamstatsTracker,
  setTeamstatsTracker,
  stadium,
}) => {
  return (
    <FlexboxGrid justify={"space between"}>
      <StatRow
        stadium={stadium}
        typeDataTeamState={typeDataTeamState}
        currentFixture={currentFixture}
        teamstatsTracker={teamstatsTracker}
        setTeamstatsTracker={setTeamstatsTracker}
        start={0}
        end={0.33 * teamStats[stadium][typeDataTeamState].length}
      />
      <StatRow
        stadium={stadium}
        typeDataTeamState={typeDataTeamState}
        currentFixture={currentFixture}
        teamstatsTracker={teamstatsTracker}
        setTeamstatsTracker={setTeamstatsTracker}
        start={0.33 * teamStats[stadium][typeDataTeamState].length}
        end={0.67 * teamStats[stadium][typeDataTeamState].length}
      />
      <StatRow
        stadium={stadium}
        typeDataTeamState={typeDataTeamState}
        currentFixture={currentFixture}
        teamstatsTracker={teamstatsTracker}
        setTeamstatsTracker={setTeamstatsTracker}
        start={0.67 * teamStats[stadium][typeDataTeamState].length}
        end={teamStats[stadium][typeDataTeamState].length}
      />
    </FlexboxGrid>
  );
};

export default StatPanel;
