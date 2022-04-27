import { FlexboxGrid, List } from "rsuite";
import teamStats from "../../backend/db/teamStats";
import ControlledInput from "../ControlledInput";
import ListItemCustom from "../ListCustom";

//used to navigate the different stat types
const typeDataTeam = [
  "summary",
  "passing",
  "possession",
  "shooting",
  "defending",
];

//controls the different rows in the statpanel
const StatRow = ({
  stadium,
  typeDataTeamState,
  currentFixture,
  teamstatsTracker,
  setTeamstatsTracker,
  start,
  end,
}) => {
  return (
    <FlexboxGrid.Item colspan={7}>
      <List hover>
        {teamStats[stadium][typeDataTeamState].slice(start, end).map((stat) => {
          return (
            <ListItemCustom>
              <FlexboxGrid justify={"space-around"}>
                <FlexboxGrid.Item colspan={16} style={{ minHeight: 50 }}>
                  {stat.attr}
                </FlexboxGrid.Item>
                <FlexboxGrid.Item>
                  <ControlledInput
                    currentFixture={currentFixture}
                    type={typeDataTeamState}
                    attr={stat.attr}
                    val={stat.val}
                    teamstatsTracker={teamstatsTracker}
                    setTeamstatsTracker={setTeamstatsTracker}
                    stadium={stadium}
                    size="sm"
                    style={{
                      width: 60,
                      marginLeft: 7,
                    }}
                    placeholder="value"
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
