import { FlexboxGrid } from "rsuite";
import playerStats from "../../backend/db/playerStats";
import StatRow from "../StatRow.PlayerStats";
//component that handels type of stats to be shown in the stat grid
const StatPanel = ({
  typeDataPlayerState,
  currentFixture,
  playerstatsTracker,
  setPlayerstatsTracker,
  stadium,
  currentPlayer,
  tempObject,
  setTempObject,
}) => {
  // useEffect(() => {
  //   tempObject[currentPlayer?.name] = {};
  // }, []);

  return (
    <FlexboxGrid justify={"space between"}>
      <StatRow
        tempObject={tempObject}
        setTempObject={setTempObject}
        stadium={stadium}
        typeDataPlayerState={typeDataPlayerState}
        currentFixture={currentFixture}
        playerstatsTracker={playerstatsTracker}
        setPlayerstatsTracker={setPlayerstatsTracker}
        start={0}
        end={0.33 * playerStats[typeDataPlayerState].length}
        currentPlayer={currentPlayer}
      />
      <StatRow
        tempObject={tempObject}
        setTempObject={setTempObject}
        stadium={stadium}
        typeDataPlayerState={typeDataPlayerState}
        currentFixture={currentFixture}
        playerstatsTracker={playerstatsTracker}
        setPlayerstatsTracker={setPlayerstatsTracker}
        start={0.33 * playerStats[typeDataPlayerState].length}
        end={0.67 * playerStats[typeDataPlayerState].length}
        currentPlayer={currentPlayer}
      />
      <StatRow
        tempObject={tempObject}
        setTempObject={setTempObject}
        stadium={stadium}
        typeDataPlayerState={typeDataPlayerState}
        currentFixture={currentFixture}
        playerstatsTracker={playerstatsTracker}
        setPlayerstatsTracker={setPlayerstatsTracker}
        start={0.67 * playerStats[typeDataPlayerState].length}
        end={playerStats[typeDataPlayerState].length}
        currentPlayer={currentPlayer}
      />
    </FlexboxGrid>
  );
};
export default StatPanel;
