import { Outlet, useParams, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import SideNavCustom from "../../components/SideNavCustom";
import useLeagueDashboard from "../../hooks/useLeaugueDashboard";

const LeagueDashboard = () => {
  const { id } = useParams();
  const {
    league,
    setLeague,
    leagueId,
    setLeagueId,
    createTournament,
    setCreateTournament,
  } = useLeagueDashboard();

  useEffect(() => {
    setLeagueId(id);
  }, [id]);
  console.log("in leaguedashboard mom", league?.tournaments.items);
  // console.log("test", leagueID);
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideNavCustom leagueID={id} style={{ flex: "1" }} />
        <div style={{ flex: "4" }}>
          <Outlet
            context={{
              league,
              setLeague,
              createTournament,
              setCreateTournament,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default LeagueDashboard;
