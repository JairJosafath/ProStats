import { useState, useEffect } from "react";
import apiSettings from "../API/API";

const useLeagueDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [updateLeague, setUpdateLeague] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false); //only try to read player attr when data has been fecthed

  const [leagueId, setLeagueId] = useState(null);
  const [league, setLeague] = useState(null);
  const [leagueTeamp, setLeagueTemp] = useState(null);

  const [createTournament, setCreateTournament] = useState(false);
  const [createTrophy, setCreateTrophy] = useState(false);
  const [updateTournament, setUpdateTournament] = useState(false);
  const [tournamentAddTeam, setTournamentAddTeam] = useState(false);
  const [tournamentRemoveTeam, setTournamentRemoveTeam] = useState(false);

  const [createFixtures, setCreateFixtures] = useState(false);
  const [deleteAllFixtures, setDeleteAllFixtures] = useState(false);
  const [createTeamStats, setCreateTeamStats] = useState(false);
  const [updateTeamStats, setUpdateTeamStats] = useState(false);
  const [createTableStat, setCreateTableStat] = useState(false);
  const [updateTableStat, setUpdateTableStat] = useState(false);

  const [tournament, setTournament] = useState();

  const [getFixturesByTournamentandRound, setGetFixturesByTournamentandRound] =
    useState(false);
  const [fixturesByTournamentAndRound, setFixturesByTournamentAndRound] =
    useState();

  const fetchLeague = async () => {
    setLoading(true);
    if (leagueId) {
      const data = await apiSettings
        .getLeagueForDashboard(leagueId)
        .catch((err) => {
          console.log(err);
          setError(true);
          setLoading(false);
        });

      console.log("err", error);
      if (!error) {
        setLeague(data);
        // setLeagueTemp({
        //   name: league.name,
        //   logo: league.logo,
        //   description: league.description,
        //   id: league.id,
        //   header: league.header,
        // });
        setDataLoaded(true);
        setLoading(false);
      }
    }
  };

  const createTournamentFunct = async () => {
    if (createTournament) {
      setLoading(true);
      apiSettings.createTournament(createTournament).catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
      setCreateTournament(false);
    }
  };
  const createTrophyFunct = async () => {
    if (createTrophy) {
      setLoading(true);
      apiSettings.createTrophy(createTrophy).catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
      setCreateTrophy(false);
    }
  };
  const updateTournamentFunct = async () => {
    if (createTournament) {
      setLoading(true);
      apiSettings.updateTournament(updateTournament).catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
      setUpdateTournament(false);
    }
  };
  const updateTournamentAddTeamFunct = async () => {
    if (tournamentAddTeam) {
      setLoading(true);
      apiSettings.updateTournamentAddTeam(tournamentAddTeam).catch((err) => {
        console.log("errOr", err);
        setError(true);
        setLoading(false);
      });
      setTournamentAddTeam(false);
    }
  };
  const updateTournamentRemoveTeamFunct = async () => {
    if (tournamentRemoveTeam) {
      setLoading(true);
      apiSettings
        .removeTeamfromTournament(tournamentRemoveTeam)
        .catch((err) => {
          console.log("errOr", err);
          setError(true);
          setLoading(false);
        });
      setTournamentRemoveTeam(false);
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
  const createTableStatFunct = async () => {
    if (createTableStat) {
      setLoading(true);
      apiSettings.createTableStat(createTableStat).catch((err) => {
        console.log("errOr", err);
        setError(true);
        setLoading(false);
      });
      setCreateTableStat(false);
    }
  };
  const updateTableStatFunct = async () => {
    if (updateTableStat) {
      setLoading(true);
      apiSettings.updateTableStat(updateTableStat).catch((err) => {
        console.log("errOr", err);
        setError(true);
        setLoading(false);
      });
      setUpdateTableStat(false);
    }
  };
  const createFixturesFunct = async () => {
    if (createFixtures) {
      setLoading(true);
      apiSettings
        .createFixtures(createFixtures.teams, createFixtures.tournamentID)
        .catch((err) => {
          console.log("errOr", err);
          setError(true);
          setLoading(false);
        });
      setCreateFixtures(false);
    }
  };
  const deleteAllFixturesFunct = async () => {
    if (deleteAllFixtures) {
      setLoading(true);
      apiSettings.removeAllFixtures(deleteAllFixtures.fixtures).catch((err) => {
        console.log("errOr", err);
        setError(true);
        setLoading(false);
      });
      setDeleteAllFixtures(false);
    }
  };
  const getFixturesByTournamentandRoundFunct = async () => {
    if (getFixturesByTournamentandRound) {
      setLoading(true);
      const result = await apiSettings
        .getFixtureByRoundandTournament(getFixturesByTournamentandRound)
        .catch((err) => {
          console.log("errOr", err);
          setError(true);
          setLoading(false);
        });
      setFixturesByTournamentAndRound(result);
      setGetFixturesByTournamentandRound(false);
    }
  };

  useEffect(() => {
    setError(false);
    fetchLeague();
  }, [leagueId]);

  useEffect(() => {
    setError(false);

    createTournamentFunct();
    fetchLeague();
  }, [createTournament]);

  useEffect(() => {
    setError(false);

    updateTournamentFunct();
    fetchLeague();
  }, [updateTournament]);

  useEffect(() => {
    setError(false);

    updateTournamentAddTeamFunct();
    setError(false);
    fetchLeague();
  }, [tournamentAddTeam]);
  useEffect(() => {
    setError(false);

    updateTournamentRemoveTeamFunct();
    setError(false);
    fetchLeague();
  }, [tournamentRemoveTeam]);
  useEffect(() => {
    setError(false);

    createTrophyFunct();
    setError(false);
    fetchLeague();
  }, [createTrophy]);
  useEffect(() => {
    setError(false);

    createFixturesFunct();
    setError(false);
    fetchLeague();
  }, [createFixtures]);
  useEffect(() => {
    setError(false);

    deleteAllFixturesFunct();
    setError(false);
    fetchLeague();
  }, [deleteAllFixtures]);
  useEffect(() => {
    setError(false);

    getFixturesByTournamentandRoundFunct();
    setError(false);
  }, [getFixturesByTournamentandRound]);
  useEffect(() => {
    setError(false);

    createTeamStatsFunct();
    getFixturesByTournamentandRoundFunct();
    setError(false);
  }, [createTeamStats]);
  useEffect(() => {
    setError(false);

    updateTeamStatsFunct();
    getFixturesByTournamentandRoundFunct();
    setError(false);
  }, [updateTeamStats]);
  useEffect(() => {
    setError(false);

    createTableStatFunct();

    setError(false);
  }, [createTableStat]);
  useEffect(() => {
    setError(false);

    updateTableStatFunct();

    setError(false);
  }, [updateTableStat]);

  return {
    league,
    setLeague,
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
    tournament,
    setTournament,
  };
};
export default useLeagueDashboard;
