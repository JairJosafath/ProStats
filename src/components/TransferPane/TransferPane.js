import { useState } from "react";
import transfers from "../../backend/db/transfers";
import { FlexboxGrid, List, Pagination, Panel } from "rsuite";

import FlexboxGridItem from "rsuite/esm/FlexboxGrid/FlexboxGridItem";

const data = transfers;

const TransferPane = () => {
  const [activePage, setActivePage] = useState(1);
  return (
    <>
      <div style={{ height: 550 }}>
        <List>
          <List.Item>
            <FlexboxGrid>
              <FlexboxGridItem colspan={5}>Name</FlexboxGridItem>
              <FlexboxGridItem colspan={5}>From</FlexboxGridItem>
              <FlexboxGridItem colspan={5}>To</FlexboxGridItem>
              <FlexboxGridItem colspan={5}>Type</FlexboxGridItem>
            </FlexboxGrid>
          </List.Item>
          {data
            .slice((activePage - 1) * 10, (activePage - 1) * 10 + 10)
            .map((transfer, index) => {
              return (
                <List.Item key={index}>
                  <FlexboxGrid>
                    <FlexboxGridItem colspan={5}>
                      {transfer.player}
                    </FlexboxGridItem>
                    <FlexboxGridItem colspan={5}>
                      {transfer.from}
                    </FlexboxGridItem>
                    <FlexboxGridItem colspan={5}>{transfer.to}</FlexboxGridItem>
                    <FlexboxGridItem colspan={5}>
                      {transfer.type}
                    </FlexboxGridItem>
                  </FlexboxGrid>
                </List.Item>
              );
            })}
        </List>
      </div>
      <Pagination
        total={200}
        limit={10}
        activePage={activePage}
        onChangePage={setActivePage}
      />
    </>
  );
};

export default TransferPane;
