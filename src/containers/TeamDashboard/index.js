import { useEffect } from "react";
import { Outlet, useParams, useOutletContext } from "react-router-dom";
import TSideNavCustom from "../../components/TSideNavCustom";
import useTeamDashoard from "../../hooks/useTeamDashboard";

const TeamDashboard = () => {
  const { id } = useParams();
  const {
    setTeamId,
    team,
    tournament,
    setTournament,
    setGetTeamFixtures,
    teamFixtures,
    setUpdateFixture,
    setCreateTeamStats,
    setUpdateTeamStats,
  } = useTeamDashoard();
  useEffect(() => {
    setTeamId(id);
  }, [id]);

  useEffect(() => {
    console.log("team", team);
  }, [team]);
  return (
    <>
      {" "}
      <div style={{ display: "flex" }}>
        <TSideNavCustom
          team={team}
          //   league={league}
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
            }}
          />
        </div>
      </div>
    </>
  );
};

export default TeamDashboard;
