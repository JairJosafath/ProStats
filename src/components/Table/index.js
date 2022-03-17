import { useEffect, useState } from "react";
import { Dropdown, Popover, Whisper } from "rsuite";
import { Cell, HeaderCell, Column, Table } from "rsuite-table";
import DropdownItem from "rsuite/esm/Dropdown/DropdownItem";

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
      <img
        src={rowData[dataKey].logo || "fcb.png"}
        width="40"
        alt="club logo"
      />
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

const TeamNameCell = ({ rowData, dataKey, ...props }) => {
  return (
    <>
      <Cell {...props} style={{ paddingTop: 10, display: "flex" }}>
        {rowData[dataKey].name}
      </Cell>
    </>
  );
};

const LeagueTable = ({
  tournament,
  setTournament,
  setTournaments,
  tournaments,
  table,
  league,
  indexT,
  setIndexT,
}) => {
  const [sortColumn, setSortColumn] = useState();
  const [sortType, setSortType] = useState();
  const [loading, setLoading] = useState(false);

  const handleSortColumn = (sortColumn, sortType) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSortColumn(sortColumn);
      setSortType(sortType);
    }, 500);
  };

  console.log("tourney", tournament);
  console.log("table in leagueTableComp", table);
  if (table.items) {
    table.items.sort((i, j) => {
      if (j.points === i.points) {
        return j.goalDifference - i.goalDifference;
      }
      return j.points - i.points;
    });

    table.items.map((table, index) => (table["index"] = index + 1));
    console.log("with index", table.items);
  }
  const getData = (data) => {
    if (table.items)
      if (sortColumn && sortType) {
        return data.sort((a, b) => {
          let x = a[sortColumn];
          let y = b[sortColumn];
          if (typeof x === "string") {
            x = x.charCodeAt();
          }
          if (typeof y === "string") {
            y = y.charCodeAt();
          }
          if (sortType === "asc") {
            return x - y;
          } else {
            return y - x;
          }
        });
      }
    return data;
  };

  return (
    <>
      {table ? (
        <>
          <Dropdown title={!tournament ? "no tournaments" : tournament.name}>
            {tournaments?.map((tournament, index) => (
              <DropdownItem key={index} onSelect={() => setIndexT(index)}>
                {tournament.name}
              </DropdownItem>
            ))}
          </Dropdown>
          <Table
            style={{ zIndex: 0 }}
            height={600}
            data={getData(table.items)}
            id="table"
            onSortColumn={handleSortColumn}
          >
            {/* <Column width={50} align="center">
       <HeaderCell style={{ padding: 0 }}>
         <div style={{ lineHeight: "40px" }}></div>
       </HeaderCell>
     </Column>
     <Column width={80} align="center">
       <HeaderCell>Club Logo</HeaderCell>
       <ImageCell dataKey="logo" />
     </Column> */}
            <Column width={60}>
              <HeaderCell>Pos</HeaderCell>
              <Cell dataKey={"index"} />
            </Column>

            <Column width={60}>
              <HeaderCell></HeaderCell>
              <ImageCell dataKey={"team"} />
            </Column>
            <Column width={160}>
              <HeaderCell>Team</HeaderCell>
              <TeamNameCell dataKey="team" />
            </Column>

            <Column width={75} sortable>
              <HeaderCell>Points</HeaderCell>

              <Cell dataKey="points" />
            </Column>
            <Column width={70} sortable>
              <HeaderCell>GP</HeaderCell>
              <Cell dataKey="gamesPlayed" />
            </Column>

            <Column width={70} sortable>
              <HeaderCell>Won</HeaderCell>

              <Cell dataKey="gamesWon" />
            </Column>
            <Column width={70} sortable>
              <HeaderCell>Draw</HeaderCell>
              <Cell dataKey="gamesDrawn" />
            </Column>

            <Column width={70} sortable>
              <HeaderCell>Lost</HeaderCell>

              <Cell dataKey="gamesLost" />
            </Column>
            <Column width={70} sortable>
              <HeaderCell>GF</HeaderCell>

              <Cell dataKey="goalsFor" />
            </Column>
            <Column width={70} sortable>
              <HeaderCell>GA</HeaderCell>
              <Cell dataKey="goalsAgainst" />
            </Column>

            <Column width={70} sortable>
              <HeaderCell>GD</HeaderCell>

              <Cell dataKey="goalDifference" />
            </Column>

            <Column width={130}>
              <HeaderCell>Record</HeaderCell>
              <RecordCell dataKey="record" />
            </Column>
          </Table>
        </>
      ) : (
        <p>no data</p>
      )}
    </>
  );
};

export default LeagueTable;
