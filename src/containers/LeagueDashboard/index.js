import { Outlet, useParams, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import SideNavCustom from "../../components/SideNavCustom";
import useLeagueDashboard from "../../hooks/useLeaugueDashboard";

const LeagueDashboard = () => {
  const { id } = useParams();
  const {
    league,
    setLeague,
    tournament,
    setTournament,
    leagueId,
    setLeagueId,
    createTournament,
    setCreateTournament,
    setTournamentAddTeam,
    setTournamentRemoveTeam,
    setCreateTrophy,
    setCreateFixtures,
    setDeleteAllFixtures,
    setGetFixturesByTournamentandRound,
    fixturesByTournamentAndRound,
    setCreateTeamStats,
    setUpdateTeamStats,
    setCreateTableStat,
    setUpdateTableStat,
  } = useLeagueDashboard();

  useEffect(() => {
    setLeagueId(id);
  }, [id]);

  // console.log("test", leagueID);
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideNavCustom
          leagueID={id}
          league={league}
          style={{ flex: "1" }}
          tournament={tournament}
          setTournament={setTournament}
        />
        <div style={{ flex: "4" }}>
          <Outlet
            context={{
              league,
              setLeague,
              createTournament,
              setCreateTournament,
              setTournamentAddTeam,
              setTournamentRemoveTeam,
              setCreateTrophy,
              tournament,
              setTournament,
              setCreateFixtures,
              setDeleteAllFixtures,
              setGetFixturesByTournamentandRound,
              fixturesByTournamentAndRound,
              setCreateTeamStats,
              setUpdateTeamStats,
              setCreateTableStat,
              setUpdateTableStat,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default LeagueDashboard;
