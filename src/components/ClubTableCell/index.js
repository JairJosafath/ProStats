import { useEffect, useState } from "react";
import { FlexboxGrid, Table } from "rsuite";
import { apiSettings } from "../../API/API";
import CustomHeaderCell from "../CustomHeaderCell";

const ClubTableCell = ({ rowData, team, ...props }) => {
  //   console.log("in Cell", rowData[dataKey]);
  const [logo, setLogo] = useState(false);
  console.log(props.rowIndex);
  useEffect(() => {
    // console.log(fixture.homeTeam, "logo");
    const setLogoF = async () => {
      const logo = await apiSettings.getImage(rowData[team].logo);
      setLogo(logo);
    };
    setLogoF();
  }, []);
  return (
    <>
      <Table.Cell {...props}>
        <FlexboxGrid>
          <FlexboxGrid.Item colspan={3}>{props.rowIndex + 1}</FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={5}>
            <img
              alt="club logo"
              src={logo ? logo : "dummy.jpg"}
              style={{ maxHeight: "2em" }}
            />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={15}>{rowData[team].name}</FlexboxGrid.Item>
        </FlexboxGrid>
      </Table.Cell>
    </>
  );
};
export default ClubTableCell;
