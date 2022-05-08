import { Table } from "rsuite";
import ClubRecordCell from "../ClubRecordCell";
import ClubTableCell from "../ClubTableCell";
import CustomHeaderCell from "../CustomHeaderCell";

const TeamStandings = ({ data }) => {
  return (
    <>
      <h5 style={{ margin: 5 }}>Team Standings</h5>
      <Table data={data} style={{ margin: 10 }}>
        <Table.Column width={250}>
          <CustomHeaderCell>Club</CustomHeaderCell>
          <ClubTableCell team="team" />
        </Table.Column>
        <Table.Column width={40}>
          <CustomHeaderCell>MP</CustomHeaderCell>
          <Table.Cell dataKey="gamesPlayed" />
        </Table.Column>
        <Table.Column width={40}>
          <CustomHeaderCell>W</CustomHeaderCell>
          <Table.Cell dataKey="gamesWon" />
        </Table.Column>
        <Table.Column width={40}>
          <CustomHeaderCell>D</CustomHeaderCell>
          <Table.Cell dataKey="gamesDrawn" />
        </Table.Column>
        <Table.Column width={40}>
          <CustomHeaderCell>L</CustomHeaderCell>
          <Table.Cell dataKey="gamesLost" />
        </Table.Column>
        <Table.Column width={40}>
          <CustomHeaderCell>GF</CustomHeaderCell>
          <Table.Cell dataKey="goalsAgainst" />
        </Table.Column>
        <Table.Column width={40}>
          <CustomHeaderCell>GA</CustomHeaderCell>
          <Table.Cell dataKey="goalsFor" />
        </Table.Column>
        <Table.Column width={40}>
          <CustomHeaderCell>GD</CustomHeaderCell>
          <Table.Cell dataKey="goalDifference" />
        </Table.Column>
        <Table.Column width={40}>
          <CustomHeaderCell>Pts</CustomHeaderCell>
          <Table.Cell dataKey="points" />
        </Table.Column>
        <Table.Column width="100%">
          <CustomHeaderCell>Last 5</CustomHeaderCell>
          <ClubRecordCell dataKey="record" />
        </Table.Column>
      </Table>
    </>
  );
};

export default TeamStandings;
