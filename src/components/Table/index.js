import { Popover, Whisper } from "rsuite";
import { Cell, HeaderCell, Column, Table } from "rsuite-table";

const fakeData = [
  {
    id: 1,
    logo: "rmd.png",
    team: "real madrid",
    GP: 24,
    win: 12,
    draw: 6,
    lost: 6,
    GF: 23,
    GA: 12,
    GD: 11,
    points: 35,
    record: ["W", "W", "L", "W", "L"],
  },
  {
    id: 2,
    logo: "fcb.png",
    team: "FC barcelona",
    GP: 24,
    win: 12,
    draw: 6,
    lost: 6,
    GF: 40,
    GA: 12,
    GD: 28,
    points: 34,
    record: ["W", "W", "W", "W", "D"],
  },
  {
    id: 3,
    logo: "psg.png",
    team: "Getafe",
    GP: 24,
    win: 11,
    draw: 6,
    lost: 6,
    GF: 20,
    GA: 12,
    GD: 8,
    points: 30,
    record: ["L", "W", "L", "W", "L"],
  },
  {
    id: 4,
    logo: "sev.png",
    team: "Sevilla",
    GP: 24,
    win: 12,
    draw: 6,
    lost: 6,
    GF: 10,
    GA: 15,
    GD: -5,
    points: 23,
    record: ["W", "L", "L", "L", "L"],
  },
];

const data = fakeData.filter((v, i) => i < 10);

const ImageCell = ({ rowData, dataKey, ...props }) => (
  <Cell {...props} style={{ padding: 0 }}>
    <div
      style={{
        width: 40,
        height: 40,
        marginTop: 2,
        overflow: "hidden",
        display: "inline-block",
      }}
    >
      <img src={rowData[dataKey]} width="40" alt="club logo" />
    </div>
  </Cell>
);
const RecordCell = ({ rowData, dataKey, ...props }) => {
  return (
    <>
      <Cell {...props} style={{ paddingTop: 10, display: "flex" }}>
        {rowData[dataKey].map((record, index) =>
          record === "W" ? (
            <div
              key={index}
              style={{
                margin: 1,
                padding: "2px 4px ",
                width: 20,
                background: "green",
                color: "white",
              }}
            >
              <b>
                <b>W</b>
              </b>
            </div>
          ) : record === "D" ? (
            <div
              key={index}
              style={{
                margin: 1,
                padding: "2px 4px ",
                width: 20,
                background: "grey",
                color: "white",
              }}
            >
              <b>D</b>
            </div>
          ) : (
            record === "L" && (
              <div
                key={index}
                style={{
                  margin: 1,
                  padding: "2px 4px ",
                  paddingLeft: 5,
                  width: 20,
                  background: "red",
                  color: "white",
                }}
              >
                <b>L</b>
              </div>
            )
          )
        )}
      </Cell>
    </>
  );
};

const LeagueTable = () => {
  return (
    <Table height={600} data={data} id="table">
      {/* <Column width={50} align="center">
        <HeaderCell style={{ padding: 0 }}>
          <div style={{ lineHeight: "40px" }}></div>
        </HeaderCell>
      </Column>
      <Column width={80} align="center">
        <HeaderCell>Club Logo</HeaderCell>
        <ImageCell dataKey="logo" />
      </Column> */}
      <Column width={50}>
        <HeaderCell>Pos</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={60}>
        <HeaderCell></HeaderCell>
        <ImageCell dataKey={"logo"} />
      </Column>
      <Column width={160}>
        <HeaderCell>Team</HeaderCell>
        <Cell dataKey="team" />
      </Column>

      <Column width={70}>
        <HeaderCell>Points</HeaderCell>

        <Cell dataKey="points" />
      </Column>
      <Column width={70}>
        <HeaderCell>GP</HeaderCell>
        <Cell dataKey="GP" />
      </Column>

      <Column width={70}>
        <HeaderCell>Won</HeaderCell>

        <Cell dataKey="win" />
      </Column>
      <Column width={70}>
        <HeaderCell>Draw</HeaderCell>
        <Cell dataKey="draw" />
      </Column>

      <Column width={70}>
        <HeaderCell>Lost</HeaderCell>

        <Cell dataKey="lost" />
      </Column>
      <Column width={70}>
        <HeaderCell>GF</HeaderCell>

        <Cell dataKey="GF" />
      </Column>
      <Column width={70}>
        <HeaderCell>GA</HeaderCell>
        <Cell dataKey="GA" />
      </Column>

      <Column width={70}>
        <HeaderCell>GD</HeaderCell>

        <Cell dataKey="GD" />
      </Column>
      <Column width={70}>
        <HeaderCell>Points</HeaderCell>

        <Cell dataKey="points" />
      </Column>
      <Column width={130}>
        <HeaderCell>Record</HeaderCell>
        <RecordCell dataKey="record" />
      </Column>
    </Table>
  );
};

export default LeagueTable;
