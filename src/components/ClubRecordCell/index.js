import { useEffect, useState } from "react";
import { FlexboxGrid, Table } from "rsuite";
import { apiSettings } from "../../API/API";
import { BsFillCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
import { Icon } from "@rsuite/icons";

const ClubRecordCell = ({ rowData, dataKey, ...props }) => {
  //   console.log("in Cell", rowData[dataKey]);

  //   console.log("incell", rowData[dataKey]);
  return (
    <>
      <Table.Cell {...props}>
        <FlexboxGrid>
          {rowData[dataKey].map((result) => {
            return (
              <>
                {result === "W" && (
                  <Icon
                    as={BsFillCheckCircleFill}
                    color="green"
                    style={{ margin: 5 }}
                  />
                )}
                {result === "D" && (
                  <Icon
                    as={AiFillMinusCircle}
                    color="grey"
                    style={{ margin: 5 }}
                  />
                )}
                {result === "L" && (
                  <Icon
                    as={BsFillXCircleFill}
                    color="#cf2d21"
                    style={{ margin: 5 }}
                  />
                )}
              </>
            );
          })}
        </FlexboxGrid>
      </Table.Cell>
    </>
  );
};
export default ClubRecordCell;
