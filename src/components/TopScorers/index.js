import { Popover, Whisper } from "rsuite";
import { Cell, HeaderCell, Column, Table } from "rsuite-table";
import players from "../../backend/db/players";

const TopPerformers = ({ type }) => {
  const data = players;
  return (
    <Table height={500} data={data} id="table">
      {/* <Column width={50} align="center">
        <HeaderCell style={{ padding: 0 }}>
          <div style={{ lineHeight: "40px" }}></div>
        </HeaderCell>
      </Column>
      <Column width={80} align="center">
        <HeaderCell>Club Logo</HeaderCell>
        <ImageCell dataKey="logo" />
      </Column> */}

      <Column width={160}>
        <HeaderCell>player</HeaderCell>
        <Cell dataKey="name" />
      </Column>

      <Column width={80}>
        <HeaderCell>{type}</HeaderCell>

        <Cell dataKey={type.toLowerCase()} />
      </Column>
      <Column width={150}>
        <HeaderCell>Club</HeaderCell>

        <Cell dataKey="team" />
      </Column>
    </Table>
  );
};

export default TopPerformers;
