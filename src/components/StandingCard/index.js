import { useState } from "react";
import { Dropdown, Panel, Paragraph } from "rsuite";
import DropdownItem from "rsuite/esm/Dropdown/DropdownItem";
import LeagueTable from "../Table";
import TopPerformers from "../TopScorers";

const StandingCard = ({ title, content }) => {
  const [type, setType] = useState("Goals");
  return (
    <Panel header={title} shaded>
      {title !== "Table" && (
        <Dropdown title={type}>
          <DropdownItem onSelect={() => setType("Goals")}>Goals</DropdownItem>
          <DropdownItem onSelect={() => setType("Assists")}>
            Assists
          </DropdownItem>
          <DropdownItem onSelect={() => setType("Saves")}>Saves</DropdownItem>
          <DropdownItem onSelect={() => setType("Tackles")}>
            Tackles
          </DropdownItem>
          <DropdownItem onSelect={() => setType("Yellow Card")}>
            Yellow Card
          </DropdownItem>
          <DropdownItem onSelect={() => setType("Red Card")}>
            Red Card
          </DropdownItem>
        </Dropdown>
      )}
      {title === "Table" ? <LeagueTable /> : <TopPerformers type={type} />}
    </Panel>
  );
};

export default StandingCard;
