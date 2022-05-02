import { FlexboxGrid, List } from "rsuite";
import playerStats from "../../backend/db/playerStats";
import ControlledInput from "../ControlledInput.PlayerStats";
import ListItemCustom from "../ListCustom";

const TinyText = ({ value }) => {
  return <p style={{ fontSize: ".8em" }}>{value}</p>;
};
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
    <FlexboxGrid.Item colspan={8} justify={"space-between"}>
      <List hover>
        {playerStats[typeDataPlayerState].slice(start, end).map((stat) => {
          return (
            <ListItemCustom>
              <FlexboxGrid justify={"space-around"} style={{ padding: 6 }}>
                <FlexboxGrid.Item colspan={16}>
                  <TinyText value={stat.attr.replace("percentage", "%")} />
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={8}>
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
                      marginLeft: 0,
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
