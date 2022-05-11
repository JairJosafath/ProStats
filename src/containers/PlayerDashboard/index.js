import { useEffect } from "react";
import { Outlet, useOutletContext, useParams } from "react-router-dom";
import PSideNavCustom from "../../components/PSideNavCustom";
import usePlayerDashboard from "../../hooks/usePlayerDashboard";
const PlayerDashboard = () => {
  const { id } = useParams();

  const {
    setTeamId,
    team,
    setPlayerId,
    player,
    tournament,
    setTournament,
    setGetTeamFixtures,
    teamFixtures,
    setCreatePlayerStats,
    setUpdatePlayerStats,
    setLeagueMembershipId,
    league,
  } = usePlayerDashboard();

  useEffect(() => {
    setLeagueMembershipId(id);
    setPlayerId(id);
  }, [id]);

  useEffect(() => {
    // console.log("team", team);
    // console.log("player", player);
  }, [team, player]);

  return (
    <>
      <div style={{ display: "flex", background: "var(--primary-grey)" }}>
        <PSideNavCustom
          style={{ flex: 1 }}
          player={player}
          team={team}
          league={league}
          tournament={tournament}
          setTournament={setTournament}
        />
        <div style={{ flex: "4" }}>
          {" "}
          <Outlet
            context={{
              setTeamId,
              tournament,
              team,
              setPlayerId,
              player,
              setGetTeamFixtures,
              teamFixtures,
              setCreatePlayerStats,
              setUpdatePlayerStats,
              setLeagueMembershipId,
              league,
            }}
          />
        </div>
        <div style={{ flex: 3 }}></div>
      </div>
    </>
  );
};

export default PlayerDashboard;
