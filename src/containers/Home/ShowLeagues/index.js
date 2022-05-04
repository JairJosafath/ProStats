import { Col, Grid, Pagination, Row } from "rsuite";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import LeagueGrid from "../../../components/LeagueGrid";

const ShowLeagues = () => {
  const { leagues } = useOutletContext();

  // console.log(leagues, "in leaguesshow");

  return (
    <>
      {" "}
      <div style={{ flex: 7 }}>
        <div style={{ padding: 10 }}>
          {/* <List>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <ListItemCustom>{item} Leagues</ListItemCustom>
        ))}
      </List> */}
          <LeagueGrid leagues={leagues} />
        </div>
      </div>
    </>
  );
};
export default ShowLeagues;
