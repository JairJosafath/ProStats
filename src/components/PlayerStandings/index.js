import { Table } from "rsuite";
import ClubTableCell from "../ClubTableCell";
import CustomHeaderCell from "../CustomHeaderCell";
import PlayerTableCell from "../PlayerTableCell";

const PlayerStandings = ({ data }) => {
  return (
    <>
      <h5 style={{ margin: 5 }}>Player Standings</h5>
      <h6 style={{ margin: 5, color: "lightgrey" }}>goals</h6>
      <Table data={data} width={580} style={{ margin: 10 }}>
        <Table.Column width={250}>
          <CustomHeaderCell>Player Name</CustomHeaderCell>
          <PlayerTableCell player="player" />
        </Table.Column>
        <Table.Column>
          <CustomHeaderCell>Goals</CustomHeaderCell>
          <Table.Cell dataKey="goals" />
        </Table.Column>
        <Table.Column width={"100%"}>
          <CustomHeaderCell>Assists</CustomHeaderCell>
          <Table.Cell dataKey="assists" />
        </Table.Column>
      </Table>
    </>
  );
};

export default PlayerStandings;
