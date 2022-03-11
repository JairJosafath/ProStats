import { useState } from "react";
import fixtures from "../../backend/db/fixtures";
import { FlexboxGrid, List, Pagination, Panel, Dropdown, Grid } from "rsuite";
import DropdownItem from "rsuite/esm/Dropdown/DropdownItem";
import FlexboxGridItem from "rsuite/esm/FlexboxGrid/FlexboxGridItem";
import DropdownMenu from "rsuite/esm/Dropdown/DropdownMenu";

const data = fixtures;
const rounds = [];

for (let i = 1; i <= 32; i++) rounds.push(i);

const FixturesPane = () => {
  const [round, setRound] = useState(1);

  return (
    <>
      <div style={{ margin: "0 auto", width: 600, minHeight: 1000 }}>
        <Dropdown size="xs" title={`Round ${round}`}>
          <DropdownMenu title={"0-10"}>
            {rounds.slice(0, 11).map((round, index) => (
              <DropdownItem
                style={{ width: 70 }}
                key={index}
                onSelect={() => setRound(round)}
              >
                {round}
              </DropdownItem>
            ))}
          </DropdownMenu>
          <DropdownMenu title={"10-20"}>
            {rounds.slice(10, 21).map((round, index) => (
              <DropdownItem key={index} onSelect={() => setRound(round)}>
                {round}
              </DropdownItem>
            ))}
          </DropdownMenu>
          <DropdownMenu title={"20 +"}>
            {rounds.slice(20, 42).map((round, index) => (
              <DropdownItem key={index} onSelect={() => setRound(round)}>
                {round}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <div>
          <List bordered style={{ width: 800 }}>
            <List.Item>
              <FlexboxGrid justify="space-around">
                <FlexboxGridItem colspan={10}>Home</FlexboxGridItem>
                <FlexboxGridItem colspan={5}></FlexboxGridItem>
                <FlexboxGridItem colspan={8}>Away</FlexboxGridItem>
              </FlexboxGrid>
            </List.Item>
            {data
              .filter((fixture) => fixture.round === round)
              .map((fixture, index) => {
                return (
                  <List.Item key={index}>
                    <FlexboxGrid justify="space-around">
                      <FlexboxGridItem colspan={8}>
                        {fixture.home}
                      </FlexboxGridItem>
                      <FlexboxGridItem colspan={2}>
                        {fixture.homeGoals}
                      </FlexboxGridItem>
                      <FlexboxGridItem colspan={3}>VS</FlexboxGridItem>
                      <FlexboxGridItem colspan={2}>
                        {fixture.awayGoald}
                      </FlexboxGridItem>
                      <FlexboxGridItem colspan={8}>
                        {fixture.away}
                      </FlexboxGridItem>
                    </FlexboxGrid>
                  </List.Item>
                );
              })}
          </List>
        </div>
      </div>
    </>
  );
};

export default FixturesPane;
