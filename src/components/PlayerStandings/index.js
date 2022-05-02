import { Table } from "rsuite";
import ClubTableCell from "../ClubTableCell";
import CustomHeaderCell from "../CustomHeaderCell";
import PlayerTableCell from "../PlayerTableCell";

const PlayerStandings = () => {
  return (
    <>
      <h5 style={{ margin: 5 }}>Team Standings</h5>
      <Table>
        <Table.Column width={250}>
          <CustomHeaderCell>Player Name</CustomHeaderCell>
          <PlayerTableCell player="player" />
        </Table.Column>
      </Table>
    </>
  );
};

export default PlayerStandings;
