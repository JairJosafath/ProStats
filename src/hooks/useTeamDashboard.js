import { useState, useEffect } from "react";
import { apiSettings, apiSettingsTD } from "../API/API";

const useTeamDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [teamId, setTeamId] = useState(false);
  const [team, setTeam] = useState(null);
  const [tournament, setTournament] = useState(null);
  const [getTeamFixtures, setGetTeamFixtures] = useState(false);
  const [teamFixtures, setTeamFixtures] = useState(false);
  const [updateFixture, setUpdateFixture] = useState(false);
  const [createTeamStats, setCreateTeamStats] = useState(false);
  const [updateTeamStats, setUpdateTeamStats] = useState(false);

  const getTeam = async () => {
    setLoading(true);
    if (teamId) {
      const data = await apiSettingsTD
        .getTeamForDashboard(teamId)
        .catch((err) => {
          console.log(err);
          setError(true);
          setLoading(false);
        });

      console.log("err", error);
      if (!error) {
        setTeam(data);
        // setLeagueTemp({
        //   name: league.name,
        //   logo: league.logo,
        //   description: league.description,
        //   id: league.id,
        //   header: league.header,
        // });
        setLoading(false);
        setTeamId(false);
      }
    }
  };
  const getTeamFixturesFunct = async () => {
    setLoading(true);
    if (getTeamFixtures) {
      const dataH = await apiSettingsTD
        .getTeamFixturesHome(getTeamFixtures)
        .catch((err) => {
          console.log(err);
          setError(true);
          setLoading(false);
        });
      const dataA = await apiSettingsTD
        .getTeamFixturesAway({
          awayID: getTeamFixtures.homeID,
          tournamentID: { eq: tournament?.id },
        })
        .catch((err) => {
          console.log(err);
          setError(true);
          setLoading(false);
        });

      console.log("err", error);
      if (!error) {
        const data = [...dataH.items, ...dataA.items];
        // console.log("data concat", data);
        setTeamFixtures(data);
        // setLeagueTemp({
        //   name: league.name,
        //   logo: league.logo,
        //   description: league.description,
        //   id: league.id,
        //   header: league.header,
        // });
        setLoading(false);
        setTeamId(false);
      }
    }
  };

  const createTeamStatsFunct = async () => {
    if (createTeamStats) {
      setLoading(true);
      apiSettings.createTeamStats(createTeamStats).catch((err) => {
        console.log("errOr", err);
        setError(true);
        setLoading(false);
      });
      setCreateTeamStats(false);
    }
  };
  const updateTeamStatsFunct = async () => {
    if (updateTeamStats) {
      setLoading(true);
      apiSettings.updateTeamStats(updateTeamStats).catch((err) => {
        console.log("errOr", err);
        setError(true);
        setLoading(false);
      });
      setUpdateTeamStats(false);
    }
  };
  const updateFixtureFunct = async () => {
    if (updateFixture) {
      setLoading(true);
      apiSettingsTD
        .updateFixture(updateFixture)
        .then(() => {
          setGetTeamFixtures({
            tournamentID: { eq: tournament?.id },
            homeID: team?.id,
          });
        })
        .catch((err) => {
          console.log("errOr", err);
          setError(true);
          setLoading(false);
        });
      setUpdateFixture(false);
    }
  };
  useEffect(() => {
    getTeam();
  }, [teamId]);
  useEffect(() => {
    getTeamFixturesFunct();
  }, [getTeamFixtures]);

  useEffect(() => {
    updateFixtureFunct();
  }, [updateFixture]);
  useEffect(() => {
    updateTeamStatsFunct();
  }, [updateTeamStats]);
  useEffect(() => {
    createTeamStatsFunct();
  }, [createTeamStats]);
  return {
    setTeamId,
    team,
    tournament,
    setTournament,
    setGetTeamFixtures,
    teamFixtures,
    setUpdateFixture,
    setCreateTeamStats,
    setUpdateTeamStats,
  };
};

export default useTeamDashboard;
