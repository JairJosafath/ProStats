import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Col, InputGroup, Input, FlexboxGrid, Dropdown } from "rsuite";
import FlexboxGridItem from "rsuite/esm/FlexboxGrid/FlexboxGridItem";
const CustomInputGroupWidthButton = ({ placeholder, ...props }) => {
  const [selected, setSelected] = useState("player");

  return (
    <InputGroup {...props} inside>
      <Dropdown size="sm" title={selected}>
        <Dropdown.Item onSelect={() => setSelected("player")}>
          Player
        </Dropdown.Item>
        <Dropdown.Item onSelect={() => setSelected("team")}>Team</Dropdown.Item>
      </Dropdown>
      <Input style={{ marginLeft: 5 }} placeholder={selected + " name"} />
      <InputGroup.Button>
        <AiOutlineSearch />
      </InputGroup.Button>
    </InputGroup>
  );
};

const SearchPlayer = () => {
  return (
    <>
      <FlexboxGrid>
        <FlexboxGridItem>
          <CustomInputGroupWidthButton
            style={{ width: 400 }}
            size="sm"
            placeholder="player name"
          />
        </FlexboxGridItem>
      </FlexboxGrid>
    </>
  );
};

export default SearchPlayer;
