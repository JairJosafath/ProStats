import { useState, useEffect } from "react";
import { apiSettings, apiSettingsTD } from "../API/API";

const usePlayerDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [playerId, setPlayerId] = useState(false);
  const [player, setPlayer] = useState(null);
  const [teamId, setTeamId] = useState(false);
  const [team, setTeam] = useState(null);
  const [tournament, setTournament] = useState(null);
  const [getTeamFixtures, setGetTeamFixtures] = useState(false);
  const [teamFixtures, setTeamFixtures] = useState(false);
  const [createPlayerStats, setCreatePlayerStats] = useState(false);
  const [updatePlayerStats, setUpdatePlayerStats] = useState(false);
  const [getPlayerRequests, setGetPlayerRequests] = useState(false);
  const [updateRequestFromTeamToPlayer, setUpdateRequestFromTeamToPlayer] =
    useState(false);
  const [playerRequests, setPlayerRequests] = useState(false);

  const getPlayer = async () => {
    setLoading(true);
    if (playerId) {
      const data = await apiSettingsTD
        .getPlayerForDashboard(playerId.split("+")[1])
        .catch((err) => {
          console.log(err);
          setError(true);
          setLoading(false);
        });

      console.log("err", error);
      if (!error) {
        setPlayer(data);
        // setLeagueTemp({
        //   name: league.name,
        //   logo: league.logo,
        //   description: league.description,
        //   id: league.id,
        //   header: league.header,
        // });
        setLoading(false);
        setPlayerId(false);
      }
    }
  };
  const getTeam = async () => {
    setLoading(true);
    if (teamId) {
      const data = await apiSettingsTD
        .getTeamForDashboard(teamId.split("+")[0])
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

  const updatePlayerStatsFunct = async () => {
    if (updatePlayerStats) {
      setLoading(true);
      apiSettings
        .updatePlayerStats(updatePlayerStats)
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
      setUpdatePlayerStats(false);
    }
  };

  const createPlayerStatsFunct = async () => {
    if (createPlayerStats) {
      setLoading(true);
      apiSettings
        .createPlayerStats(createPlayerStats)
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
      setCreatePlayerStats(false);
    }
  };

  useEffect(() => {
    getTeam();
  }, [teamId]);
  useEffect(() => {
    getPlayer();
  }, [playerId]);

  useEffect(() => {
    updatePlayerStatsFunct();
  }, [updatePlayerStats]);
  useEffect(() => {
    createPlayerStatsFunct();
  }, [createPlayerStats]);
  useEffect(() => {
    getTeamFixturesFunct();
  }, [getTeamFixtures]);
  return {
    setPlayerId,
    setTeamId,
    player,
    team,
    tournament,
    setTournament,
    setGetTeamFixtures,
    teamFixtures,
    setCreatePlayerStats,
    setUpdatePlayerStats,
  };
};

export default usePlayerDashboard;
