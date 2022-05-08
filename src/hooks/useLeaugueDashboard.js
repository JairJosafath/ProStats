import { useState, useEffect } from "react";
import { apiSettings, apiSettingsTD } from "../API/API";

const useLeagueDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [updateLeague, setUpdateLeague] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false); //only try to read player attr when data has been fecthed

  const [leagueId, setLeagueId] = useState(null);
  const [league, setLeague] = useState(null);
  const [leagueTeamp, setLeagueTemp] = useState(null);

  const [deleteTrophy, setDeleteTrophy] = useState(false);
  const [createTournament, setCreateTournament] = useState(false);
  const [createTrophy, setCreateTrophy] = useState(false);
  const [updateTrophy, setUpdateTrophy] = useState(false);
  const [updateTournament, setUpdateTournament] = useState(false);
  const [tournamentAddTeam, setTournamentAddTeam] = useState(false);
  const [tournamentRemoveTeam, setTournamentRemoveTeam] = useState(false);

  const [createFixtures, setCreateFixtures] = useState(false);
  const [deleteAllFixtures, setDeleteAllFixtures] = useState(false);
  const [createTeamStats, setCreateTeamStats] = useState(false);
  const [updateTeamStats, setUpdateTeamStats] = useState(false);
  const [createTableStat, setCreateTableStat] = useState(false);
  const [updateTableStat, setUpdateTableStat] = useState(false);
  const [createTableStat2, setCreateTableStat2] = useState(false);
  const [updateTableStat2, setUpdateTableStat2] = useState(false);
  const [activeRound, setActiveRound] = useState(1);
  const [createPlayerStats, setCreatePlayerStats] = useState(false);
  const [updatePlayerStats, setUpdatePlayerStats] = useState(false);
  const [createPlayerTableStat, setCreatePlayerTableStat] = useState(false);
  const [updatePlayerTableStat, setUpdatePlayerTableStat] = useState(false);
  const [updateFixture, setUpdateFixture] = useState(false);
  const [getUsernameLeagueReq, setGetUsernameLeagueReq] = useState(false);

  const [deleteTournament, setDeleteTournament] = useState(false);
  const [tournament, setTournament] = useState();
  const [getTournamentByID, setGetTournamentByID] = useState(false);

  const [getFixturesByTournamentandRound, setGetFixturesByTournamentandRound] =
    useState(false);
  const [fixturesByTournamentAndRound, setFixturesByTournamentAndRound] =
    useState();
  const [getLeagueRequests, setGetLeagueRequests] = useState(false);
  const [leagueRequests, setLeagueRequests] = useState();
  const [createRequestLeague2Team, setCreateRequestFromLeagueToTeam] =
    useState(false);

  const [deleteL2TRequest, setDeleteL2TRequest] = useState(false);

  const getUsernameLeagueReqFunct = async () => {
    setLoading(true);
    if (getUsernameLeagueReq) {
      const data = await apiSettingsTD
        .getTeamModUsernames(getUsernameLeagueReq.teamRequestsfromLeagueId)

        .then((data) => {
          console.log("this is the data", data);
          setCreateRequestFromLeagueToTeam({
            status: "pending",
            teamRequestsfromLeagueId:
              getUsernameLeagueReq.teamRequestsfromLeagueId,
            leagueRequeststoTeamId: getUsernameLeagueReq.leagueRequeststoTeamId,
            members: data.moderators,
          });
        })
        .then(() => {
          setLeagueId(league?.id);
        })
        .catch((err) => {
          console.log(err);
          setError(true);
          setLoading(false);
        });

      console.log("err", error);
      if (!error) {
        // setLeagueTemp({
        //   name: league.name,
        //   logo: league.logo,
        //   description: league.description,
        //   id: league?.id,
        //   header: league.header,
        // });

        setGetUsernameLeagueReq(false);
      }
    }
    setLoading(false);
  };

  const deleteTournamentFunct = async () => {
    if (deleteTournament) {
      setLoading(true);
      apiSettingsTD
        .deleteTournament(deleteTournament)
        .then(() => setLeagueId(league?.id))
        .catch((err) => {
          console.log(err);
          setError(true);
        });
      setDeleteTournament(false);
    }
    setLoading(false);
  };
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
        //   id: league?.id,
        //   header: league.header,
        // });
        setDataLoaded(true);
      }
      setLeagueId(false);
    }
    setLoading(false);
  };

  const updateLeaguefunct = async () => {
    if (updateLeague) {
      setLoading(true);
      apiSettings
        .updateLeague(updateLeague)
        .then(() => setLeagueId(league.id))
        .catch((err) => {
          console.log(err);
          setError(true);
        });
      setUpdateLeague(!updateLeague);
    }
    setLoading(false);
  };
  const createTournamentFunct = async () => {
    if (createTournament) {
      setLoading(true);
      apiSettings
        .createTournament(createTournament)
        .then(() => setLeagueId(league?.id))
        .catch((err) => {
          console.log(err);
          setError(true);
        });
      setCreateTournament(false);
    }
    setLoading(false);
  };
  const createTrophyFunct = async () => {
    if (createTrophy) {
      setLoading(true);
      apiSettings
        .createTrophy(createTrophy)
        .then(() => setLeagueId(league?.id))
        .catch((err) => {
          console.log(err);
          setError(true);
        });
      setCreateTrophy(false);
    }
    setLoading(false);
  };
  const updateTrophyFunct = async () => {
    if (updateTrophy) {
      setLoading(true);
      apiSettings
        .updateTrophy(updateTrophy)
        .then(() => setLeagueId(league?.id))
        .catch((err) => {
          console.log(err);
          setError(true);
        });
      setUpdateTrophy(false);
    }
    setLoading(false);
  };
  const deleteTrophyFunct = async () => {
    if (deleteTrophy) {
      setLoading(true);
      apiSettings
        .deleteTrophy(deleteTrophy)
        .then(() => setLeagueId(league?.id))
        .catch((err) => {
          console.log(err);
          setError(true);
        });
      setDeleteTrophy(false);
    }
    setLoading(false);
  };
  const updateTournamentFunct = async () => {
    if (createTournament) {
      setLoading(true);
      apiSettings
        .updateTournament(updateTournament)
        .then(() => setLeagueId(league?.id))
        .catch((err) => {
          console.log(err);
          setError(true);
        });
      setUpdateTournament(false);
    }
    setLoading(false);
  };
  const updateTournamentAddTeamFunct = async () => {
    if (tournamentAddTeam) {
      setLoading(true);
      apiSettings
        .updateTournamentAddTeam(tournamentAddTeam)
        .then(() => setLeagueId(league?.id))
        .catch((err) => {
          console.log("errOr", err);
          setError(true);
        });
      setTournamentAddTeam(false);
    }
    setLoading(false);
  };
  const updateTournamentRemoveTeamFunct = async () => {
    if (tournamentRemoveTeam) {
      setLoading(true);
      apiSettings
        .removeTeamfromTournament(tournamentRemoveTeam)
        .then(() => setLeagueId(league?.id))
        .catch((err) => {
          console.log("errOr", err);
          setError(true);
        });
      setTournamentRemoveTeam(false);
    }
    setLoading(false);
  };
  const createTeamStatsFunct = async () => {
    if (createTeamStats) {
      setLoading(true);
      const teamModsHome = await apiSettingsTD.getTeamModUsernames(
        createTeamStats.teamStatsHome_teamId
      );
      const teamModsAway = await apiSettingsTD.getTeamModUsernames(
        createTeamStats.teamStatsAway_teamId
      );

      const leagueMods = await apiSettingsTD.getLeagueModUsernames(league?.id);
      console.log(teamModsAway.moderators, "teamModsAway");
      console.log(teamModsHome.moderators, "teamModsHome");
      console.log(leagueMods.moderatornames, "leagueMods");
      const mods = [
        ...(teamModsHome.moderators || ["admin"]),
        ...(teamModsAway.moderators || ["admin"]),
        ...(leagueMods.moderatornames || ["admin"]),
      ];
      createTeamStats["members"] = mods;
      console.log(createTeamStats, "updated with members");
      apiSettings.createTeamStats(createTeamStats).catch((err) => {
        console.log("errOr", err);
        setError(true);
      });
      setCreateTeamStats(false);
    }
    setLoading(false);
  };
  const createPlayerStatsFunct = async () => {
    console.log(confirm, "confirrm");
    console.log(createPlayerStats, "data");

    if (createPlayerStats) {
      setLoading(true);
      apiSettings
        .createPlayerStats(createPlayerStats)
        .then(() => {
          setLeagueId(league?.id);
        })
        .catch((err) => {
          console.log("errOr", err);
          setError(true);
        });
      setCreatePlayerStats(false);
    }
    setLoading(false);
  };
  const updateTeamStatsFunct = async () => {
    if (updateTeamStats) {
      setLoading(true);
      apiSettings.updateTeamStats(updateTeamStats).catch((err) => {
        console.log("errOr", err);
        setError(true);
      });
      setUpdateTeamStats(false);
    }
    setLoading(false);
  };
  const updatePlayerStatsFunct = async () => {
    console.log(confirm, "confirrm");
    console.log(createPlayerStats, "data");
    if (updatePlayerStats) {
      setLoading(true);
      apiSettings
        .updatePlayerStats(updatePlayerStats)
        .then(() => {
          setGetFixturesByTournamentandRound({
            tournamentID: tournament?.id,
            condition: { eq: activeRound },
          });
        })
        .catch((err) => {
          console.log("errOr", err);
          setError(true);
        });
      setUpdatePlayerStats(false);
    }
    setLoading(false);
  };
  const createPlayerTableStatFunct = async () => {
    if (createPlayerTableStat) {
      setLoading(true);
      apiSettings
        .createPlayerTableStat(createPlayerTableStat)
        .then(() => setLeagueId(league.id))
        .catch((err) => {
          console.log("errOr", err);
          setError(true);
        });
      setCreatePlayerTableStat(false);
    }
    setLoading(false);
  };
  const updatePlayerTableStatFunct = async () => {
    if (updatePlayerTableStat) {
      setLoading(true);
      apiSettings
        .updatePlayerTableStat(updatePlayerTableStat)
        .then(() => setLeagueId(league.id))
        .catch((err) => {
          console.log("errOr", err);
          setError(true);
        });
      setUpdatePlayerTableStat(false);
    }
    setLoading(false);
  };
  const createTableStatFunct = async () => {
    if (createTableStat) {
      setLoading(true);
      apiSettings
        .createTableStat(createTableStat)
        .then(() => setLeagueId(league.id))
        .catch((err) => {
          console.log("errOr", err);
          setError(true);
        });
      setCreateTableStat(false);
    }
    setLoading(false);
  };
  const updateTableStatFunct = async () => {
    if (updateTableStat) {
      setLoading(true);
      apiSettings
        .updateTableStat(updateTableStat)
        .then(() => setLeagueId(league.id))
        .catch((err) => {
          console.log("errOr", err);
          setError(true);
        });
      setUpdateTableStat(false);
    }
    setLoading(false);
  };
  const createTableStatFunct2 = async () => {
    if (createTableStat2) {
      setLoading(true);
      apiSettings.createTableStat2(createTableStat).catch((err) => {
        console.log("errOr", err);
        setError(true);
      });
      setCreateTableStat(false);
    }
    setLoading(false);
  };
  const updateTableStatFunct2 = async () => {
    if (updateTableStat2) {
      setLoading(true);
      apiSettings.updateTableStat2(updateTableStat).catch((err) => {
        console.log("errOr", err);
        setError(true);
      });
      setUpdateTableStat(false);
    }
    setLoading(false);
  };
  const createFixturesFunct = async () => {
    console.log("conf status", confirm);
    if (createFixtures) {
      setLoading(true);
      apiSettings
        .createFixtures(createFixtures.teams, createFixtures.tournamentID)
        .then(() =>
          setFixturesByTournamentAndRound({
            tournamentID: tournament?.id,
            condition: { eq: 1 },
          })
        )
        .catch((err) => {
          console.log("errOr", err);
          setError(true);
        });
      setCreateFixtures(false);
    }
    setLoading(false);
  };
  const deleteAllFixturesFunct = async () => {
    if (deleteAllFixtures) {
      setLoading(true);
      apiSettings.removeAllFixtures(deleteAllFixtures.fixtures).catch((err) => {
        console.log("errOr", err);
        setError(true);
      });
      setDeleteAllFixtures(false);
    }
    setLoading(false);
  };
  const deleteL2TRequestFunct = async () => {
    if (deleteL2TRequest) {
      setLoading(true);
      apiSettings
        .deleteLeague2TeamRequest(deleteL2TRequest)
        .then(() => {
          setGetLeagueRequests(league?.id);
        })
        .catch((err) => {
          console.log("errOr", err);
          setError(true);
        });
      setLoading(false);
      setDeleteL2TRequest(false);
    }
  };
  const getTournamentByIDFunct = async () => {
    if (getTournamentByID) {
      setLoading(true);
      const result = await apiSettings
        .getTournament(getTournamentByID)
        .catch((err) => {
          console.log("errOr", err);
          setError(true);
        });
      setTournament(result);
      setGetTournamentByID(false);
    }
    setLoading(false);
  };
  const getLeagueRequestsFunct = async () => {
    if (getLeagueRequests) {
      setLoading(true);
      const result = await apiSettings
        .getLeagueRequests(getLeagueRequests)
        .catch((err) => {
          console.log("errOr", err);
          setError(true);
          setLoading(false);
        });
      setLeagueRequests(result);
      setGetLeagueRequests(false);
    }
    setLoading(false);
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
    setLoading(false);
  };

  const createRequestLeague2TeamFunct = async () => {
    if (createRequestLeague2Team) {
      setLoading(true);
      apiSettings
        .createRequestLeague2Team(createRequestLeague2Team)
        .catch((err) => {
          console.log("errOr", err);
          setError(true);
          setLoading(false);
        });

      setCreateRequestFromLeagueToTeam(false);
    }
    setLoading(false);
  };

  const updateFixtureFunct = async () => {
    if (updateFixture) {
      setLoading(true);
      apiSettingsTD
        .updateFixture(updateFixture)
        .then(() => {})
        .catch((err) => {
          console.log("errOr", err);
          setError(true);
          setLoading(false);
        });
      setUpdateFixture(false);
    }
  };

  useEffect(() => {
    fetchLeague();
  }, [leagueId]);
  useEffect(() => {
    if (confirm) {
      updateFixtureFunct();
      setConfirm(false);
    }

    fetchLeague();
  }, [updateFixture]);

  useEffect(() => {
    if (confirm) {
      createTournamentFunct();
      setConfirm(false);
    }
  }, [createTournament]);
  useEffect(() => {
    if (confirm) {
      updateTournamentFunct();
      setConfirm(false);
    }
  }, [updateTournament]);

  useEffect(() => {
    if (confirm) {
      updateTournamentAddTeamFunct();
      setConfirm(false);
    }
  }, [tournamentAddTeam]);
  useEffect(() => {
    if (confirm) {
      updateTournamentRemoveTeamFunct();
      setConfirm(false);
    }
  }, [tournamentRemoveTeam]);
  useEffect(() => {
    if (confirm) {
      createTrophyFunct();
      setConfirm(false);
    }
  }, [createTrophy]);
  useEffect(() => {
    if (confirm) {
      updateTrophyFunct();
      setConfirm(false);
    }
  }, [updateTrophy]);
  useEffect(() => {
    if (confirm) {
      deleteTrophyFunct();
      setConfirm(false);
    }
  }, [deleteTrophy]);
  useEffect(() => {
    if (confirm) {
      createFixturesFunct();
      setConfirm(false);
    }

    fetchLeague();
  }, [createFixtures]);
  useEffect(() => {
    if (confirm) {
      deleteAllFixturesFunct();
      setConfirm(false);
    }

    fetchLeague();
  }, [deleteAllFixtures]);
  useEffect(() => {
    getFixturesByTournamentandRoundFunct();
  }, [getFixturesByTournamentandRound]);
  useEffect(() => {
    if (confirm) {
      createTeamStatsFunct();
      setConfirm(false);
      getFixturesByTournamentandRoundFunct();
    }
  }, [createTeamStats]);
  useEffect(() => {
    if (confirm) {
      updateTeamStatsFunct();
      setConfirm(false);
      fetchLeague();

      getFixturesByTournamentandRoundFunct();
    }
  }, [updateTeamStats]);
  useEffect(() => {
    if (confirm) {
      createTableStatFunct();
      setConfirm(false);
      fetchLeague();
    }
  }, [createTableStat]);
  useEffect(() => {
    if (confirm) {
      updateTableStatFunct();
      setConfirm(false);
      fetchLeague();
    }
  }, [updateTableStat]);
  useEffect(() => {
    console.log("what is conf", confirm);

    createPlayerStatsFunct();
    // setConfirm(false);

    // getFixturesByTournamentandRoundFunct();
  }, [createPlayerStats]);
  useEffect(() => {
    updatePlayerStatsFunct();
    // setConfirm(false);
    fetchLeague();

    // getFixturesByTournamentandRoundFunct();
  }, [updatePlayerStats]);
  useEffect(() => {
    createPlayerTableStatFunct();
    // setConfirm(false);
    fetchLeague();
  }, [createPlayerTableStat]);
  useEffect(() => {
    updatePlayerTableStatFunct();
    // setConfirm(false);
    fetchLeague();
  }, [updatePlayerTableStat]);
  useEffect(() => {
    getTournamentByIDFunct();
    fetchLeague();
  }, [getTournamentByID]);

  useEffect(() => {
    getLeagueRequestsFunct();
  }, [getLeagueRequests]);

  useEffect(() => {
    if (confirm) {
      createRequestLeague2TeamFunct();
      setConfirm(false);
      setGetLeagueRequests(league?.id);
    }
  }, [createRequestLeague2Team]);

  useEffect(() => {
    if (confirm) {
      deleteL2TRequestFunct();
      setConfirm(false);
    }
  }, [deleteL2TRequest]);
  useEffect(() => {
    console.log("tour in side one", league);

    setTournament(
      tournament
        ? league?.tournaments?.items.filter(
            (tournamenta) => tournamenta.id === tournament?.id
          )[0]
        : league?.tournaments?.items[0]
    );
    console.log("tour in side", tournament);
  }, [league, tournament]);
  useEffect(() => {
    getUsernameLeagueReqFunct();
  }, [getUsernameLeagueReq]);
  useEffect(() => {
    if (confirm) {
      deleteTournamentFunct();
      setConfirm(false);
    }
  }, [deleteTournament]);
  useEffect(() => {
    if (confirm) {
      updateLeaguefunct();
      setConfirm(false);
    }
    //only run if user clicks save
  }, [updateLeague]);

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
    setCreateTableStat2,
    setUpdateTableStat2,
    setCreatePlayerStats,
    setUpdatePlayerStats,
    setCreatePlayerTableStat,
    setUpdatePlayerTableStat,
    tournament,
    setTournament,
    setGetTournamentByID,
    leagueRequests,
    setGetLeagueRequests,
    setCreateRequestFromLeagueToTeam,
    setDeleteL2TRequest,
    setUpdateFixture,
    setActiveRound,
    setGetUsernameLeagueReq,
    setDeleteTournament,
    setDeleteTrophy,
    setUpdateTrophy,
    setUpdateLeague,
    loading,
    setError,
    setConfirm,
    confirm,
    error,
  };
};
export default useLeagueDashboard;
