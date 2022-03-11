import { useState } from "react";
import { Panel, Dropdown, List, Pagination, FlexboxGrid } from "rsuite";
import DropdownItem from "rsuite/esm/Dropdown/DropdownItem";
import freeAgents from "../../backend/db/freeAgents";

const data = freeAgents;
const FreeAgents = () => {
  const [activePage, setActivePage] = useState(1);
  const [position, setPosition] = useState("FORWARD");
  return (
    <Panel header="Free Agents" bordered>
      <Dropdown title={position}>
        <DropdownItem onSelect={() => setPosition("FORWARD")}>
          FORWARD
        </DropdownItem>
        <DropdownItem onSelect={() => setPosition("MIDFIELDER")}>
          MIDFIELDER
        </DropdownItem>
        <DropdownItem onSelect={() => setPosition("DEFENDER")}>
          DEFENDER
        </DropdownItem>
        <DropdownItem onSelect={() => setPosition("GOALKEEPER")}>
          GOALKEEPER
        </DropdownItem>
      </Dropdown>
      <div style={{ height: 500, marginBottom: 10 }}>
        <List>
          <List.Item key={-1}>
            <FlexboxGrid>
              <FlexboxGrid.Item colspan={10}>Name</FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={4}>Position</FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={10}>Club</FlexboxGrid.Item>
            </FlexboxGrid>{" "}
          </List.Item>
          {data
            .filter((freeAgent) => freeAgent.type === position)
            .slice((activePage - 1) * 10, (activePage - 1) * 10 + 10)
            .map((freeAgent, index) => (
              <List.Item key={index}>
                <FlexboxGrid>
                  <FlexboxGrid.Item colspan={10}>
                    {freeAgent.name}
                  </FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={4}>
                    {freeAgent.pos}
                  </FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={10}>
                    {freeAgent.club}
                  </FlexboxGrid.Item>
                </FlexboxGrid>{" "}
              </List.Item>
            ))}
          {data.filter((freeAgent) => freeAgent.type === position).length <=
            0 && <h4>no Free Agents</h4>}
        </List>
      </div>
      <Pagination
        total={140}
        limit={10}
        activePage={activePage}
        onChangePage={setActivePage}
      />
    </Panel>
  );
};
export default FreeAgents;
