import { Popover, Whisper } from "rsuite";
import { Cell, HeaderCell, Column, Table } from "rsuite-table";
import players from "../../backend/db/players";

const TopPerformers = ({ type, playerTable }) => {
  //const data = players;
  console.log("items", playerTable);
  playerTable.items.sort((i, j) => {
    console.log("whatisittt", type);
    return j[type] - i[type];
  });
  const NameCell = ({ rowData, dataKey, ...props }) => {
    return (
      <>
        <Cell {...props} style={{ paddingTop: 10, display: "flex" }}>
          {rowData[dataKey].name}
        </Cell>
      </>
    );
  };

  return (
    <>
      {playerTable ? (
        <Table height={500} data={playerTable?.items} id="table">
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
            <NameCell dataKey="player" />
          </Column>

          <Column width={80}>
            <HeaderCell>{type}</HeaderCell>

            <Cell dataKey={type.toLowerCase()} />
          </Column>
        </Table>
      ) : (
        <p>no data</p>
      )}
    </>
  );
};

export default TopPerformers;
