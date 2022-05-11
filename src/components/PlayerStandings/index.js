import { Table } from "rsuite";
import ClubTableCell from "../ClubTableCell";
import CustomHeaderCell from "../CustomHeaderCell";
import PlayerTableCell from "../PlayerTableCell";

const PlayerStandings = ({ data }) => {
  console.log("scorers", data);
  data.sort((a, b) =>
    b.goals === a.goals ? b.assists - a.assists : b.goals - a.goals
  );
  return (
    <>
      <h5 style={{ margin: 5 }}>Player Standings</h5>
      <h6 style={{ margin: 5, color: "lightgrey" }}>goals</h6>
      <Table autoHeight data={data} width={580} style={{ margin: 10 }}>
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
