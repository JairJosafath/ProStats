import { useEffect } from "react";
import { Outlet, useParams, useOutletContext } from "react-router-dom";
import TSideNavCustom from "../../components/TSideNavCustom";
import useTeamDashoard from "../../hooks/useTeamDashboard";

const TeamDashboard = () => {
  const { id } = useParams();
  const {
    league,
    setTeamId,
    setTeamIdNoLeague,
    team,
    tournament,
    setTournament,
    setGetTeamFixtures,
    teamFixtures,
    setUpdateFixture,
    setCreateTeamStats,
    setUpdateTeamStats,
    setCreatePlayerStats,
    setUpdatePlayerStats,
    setCreateRequestFromTeamToPlayer,
    setUpdateRequestFromTeamToPlayer,
    teamRequests,
    teamRequestsDashboard,
    setGetTeamRequestsDahboard,
    setGetTeamRequests,
    setDeleteRequestFromTeamToPlayer,
    setGetUsernameTeamReq,
    username,
    setUpdateTeam,
    setDeleteTeamMember,
    setLeagueMembershipId,
  } = useTeamDashoard();
  useEffect(() => {
    console.log("soplitter", id.split("+")[0]);
    if (id.split("+").length > 0 && id.split("+")[1] === "No") {
      setTeamIdNoLeague(id.split("+")[0]);
    } else setLeagueMembershipId(id);
  }, [id]);

  useEffect(() => {
    console.log("league", league);
    console.log("team", team);
  }, [league, team]);
  return (
    <>
      {" "}
      <div style={{ display: "flex", background: "var(--primary-grey)" }}>
        <TSideNavCustom
          team={team}
          league={league}
          style={{ flex: "1" }}
          tournament={tournament}
          setTournament={setTournament}
        />

        <div style={{ flex: "4" }}>
          <Outlet
            context={{
              team,
              tournament,
              setGetTeamFixtures,
              teamFixtures,
              setUpdateFixture,
              setCreateTeamStats,
              setUpdateTeamStats,
              setCreatePlayerStats,
              setUpdatePlayerStats,
              setCreateRequestFromTeamToPlayer,
              setUpdateRequestFromTeamToPlayer,
              teamRequestsDashboard,
              teamRequests,
              setGetTeamRequestsDahboard,
              setGetTeamRequests,
              setDeleteRequestFromTeamToPlayer,
              setGetUsernameTeamReq,
              username,
              setUpdateTeam,
              setDeleteTeamMember,
            }}
          />
        </div>
        <div style={{ flex: 3 }}></div>
      </div>
    </>
  );
};

export default TeamDashboard;
