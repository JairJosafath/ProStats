import { FlexboxGrid, List } from "rsuite";
import playerStats from "../../backend/db/playerStats";
import ControlledInput from "../ControlledInput.PlayerStats";
import ListItemCustom from "../ListCustom";

//controls the different rows in the statpanel
const StatRow = ({
  stadium,
  typeDataPlayerState,
  currentFixture,
  playerstatsTracker,
  setPlayerstatsTracker,
  start,
  end,
  tempObject,
  setTempObject,
  currentPlayer,
}) => {
  return (
    <FlexboxGrid.Item colspan={7}>
      <List hover>
        {playerStats[typeDataPlayerState].slice(start, end).map((stat) => {
          return (
            <ListItemCustom>
              <FlexboxGrid justify={"space-around"}>
                <FlexboxGrid.Item colspan={16} style={{ minHeight: 50 }}>
                  {stat.attr}
                </FlexboxGrid.Item>
                <FlexboxGrid.Item>
                  <ControlledInput
                    tempObject={tempObject}
                    setTempObject={setTempObject}
                    currentFixture={currentFixture}
                    type={typeDataPlayerState}
                    attr={stat.attr}
                    val={stat.val}
                    playerstatsTracker={playerstatsTracker}
                    setPlayerstatsTracker={setPlayerstatsTracker}
                    stadium={stadium}
                    size="sm"
                    style={{
                      width: 60,
                      marginLeft: 7,
                    }}
                    placeholder="value"
                    currentPlayer={currentPlayer}
                  />
                </FlexboxGrid.Item>
              </FlexboxGrid>
            </ListItemCustom>
          );
        })}
      </List>
    </FlexboxGrid.Item>
  );
};

export default StatRow;
