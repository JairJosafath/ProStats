import { useState, useEffect } from "react";
import { apiSettings, apiSettingsTD } from "../API/API";

const useTeamDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const [teamId, setTeamId] = useState(false);
  const [teamIdNoLeague, setTeamIdNoLeague] = useState(false);
  const [team, setTeam] = useState(null);
  const [tournament, setTournament] = useState(null);
  const [getTeamFixtures, setGetTeamFixtures] = useState(false);
  const [teamFixtures, setTeamFixtures] = useState(false);
  const [updateFixture, setUpdateFixture] = useState(false);
  const [createTeamStats, setCreateTeamStats] = useState(false);
  const [updateTeamStats, setUpdateTeamStats] = useState(false);
  const [createPlayerStats, setCreatePlayerStats] = useState(false);
  const [updatePlayerStats, setUpdatePlayerStats] = useState(false);
  const [getTeamRequestsDahboard, setGetTeamRequestsDahboard] = useState(false);
  const [leagueMembershipId, setLeagueMembershipId] = useState(false);
  const [league, setLeague] = useState(false);

  const [updateTeam, setUpdateTeam] = useState(false);
  const [updateLeague, setUpdateLeague] = useState(false);

  const [deleteTeamMember, setDeleteTeamMember] = useState(false);
  const [activeRound, setActiveRound] = useState(1);
  const [createRequestFromTeamToPlayer, setCreateRequestFromTeamToPlayer] =
    useState(false);
  const [updateRequestFromTeamToPlayer, setUpdateRequestFromTeamToPlayer] =
    useState(false);
  const [deleteRequestFromTeamToPlayer, setDeleteRequestFromTeamToPlayer] =
    useState(false);
  const [getTeamRequests, setGetTeamRequests] = useState(false);
  const [teamRequests, setTeamRequests] = useState(false);
  const [teamRequestsDashboard, setTeamRequestsDashboard] = useState(false);
  const [getUsernameTeamReq, setGetUsernameTeamReq] = useState(false);
  const [username, setUsername] = useState(false);

  const getUsernameTeamReqTeamReqFunct = async () => {
    setLoading(true);
    if (getUsernameTeamReq) {
      const data = await apiSettingsTD
        .getPlayerUsername(getUsernameTeamReq.playerId)
        .then((data) => {
          setUsername(data);
          setCreateRequestFromTeamToPlayer({
            status: "pending",
            teamRequeststoPlayerId: getUsernameTeamReq.teamRequeststoPlayerId,
            playerRequestsfromTeamId: getUsernameTeamReq.playerId,
            members: [data.username],
          });
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
        //   id: league.id,
        //   header: league.header,
        // });
        setLoading(false);
        setGetUsernameTeamReq(false);
      }
    }
  };

  const setTeamLeagueFunct = async () => {
    if (leagueMembershipId) {
      const data = await apiSettingsTD
        .getLeagueMembership(leagueMembershipId)
        .catch((err) => {
          console.log(err);
          setError(true);
          setLoading(false);
        });

      console.log("err", error);
      if (!error) {
        setTeam(data.team);
        setLeague(data.league);
        console.log("SOO TIRED", data);
        setTournament(
          data?.team?.tournaments?.items.filter(
            (tour) => tour.tournament?.league?.name === data?.league?.name
          )[0]?.tournament
        );
        console.log("l", league);
        console.log("t", team);
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
  const getTeam = async () => {
    setLoading(true);
    if (teamId) {
      const data = await apiSettingsTD
        .getTeamForDashboard(teamId)
        // .then(() =>
        //   setTournament(
        //     team?.tournaments?.items.filter(
        //       (tour) => tour.tournament?.league?.name === league?.name
        //     )[0]?.tournament
        //   )
        // )
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
  const getTeamNoLeague = async () => {
    setLoading(true);
    if (teamIdNoLeague) {
      const data = await apiSettingsTD
        .getTeamForDashboard(teamIdNoLeague)
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
        setTeamIdNoLeague(false);
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
  const getTeamRequestsDashboardFunct = async () => {
    setLoading(true);
    if (getTeamRequestsDahboard) {
      const data = await apiSettingsTD
        .getTeamRequestsDashboard(getTeamRequestsDahboard)
        .catch((err) => {
          console.log(err);
          setError(true);
          setLoading(false);
        });
      if (!error) {
        setGetTeamRequestsDahboard(false);
        setTeamRequestsDashboard(data);
        setLoading(false);
        setTeamId(false);
      }
    }
  };
  const getTeamRequestsFunct = async () => {
    setLoading(true);
    if (getTeamRequests) {
      const data = await apiSettingsTD
        .getTeamRequests(getTeamRequests)
        .catch((err) => {
          console.log(err);
          setError(true);
          setLoading(false);
        });
      if (!error) {
        setTeamRequests(data);
        setGetTeamRequests(false);
        setLoading(false);
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
  const updateTeamFunct = async () => {
    if (updateTeam) {
      setLoading(true);
      apiSettings
        .updateTeam(updateTeam)
        .then(() => {
          try {
            setTeamId(team.id);
          } catch {
            setTeamIdNoLeague(team.id);
          }
        })
        .catch((err) => {
          console.log("errOr", err);
          setError(true);
          setLoading(false);
        });
      setUpdateTeam(false);
    }
  };
  const updateLeagueFunct = async () => {
    if (updateLeague) {
      setLoading(true);
      apiSettings
        .updateLeague(updateLeague)
        .then(() => {
          setTeamId(team.id);
        })
        .catch((err) => {
          console.log("errOr", err);
          setError(true);
          setLoading(false);
        });
      setUpdateLeague(false);
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
  const createRequestFromTeamToPlayerFunct = async () => {
    if (createRequestFromTeamToPlayer) {
      setLoading(true);
      apiSettingsTD
        .createRequestTeam2Player(createRequestFromTeamToPlayer)
        .then(() => {
          setGetTeamRequests(team?.id);
        })
        .catch((err) => {
          console.log("errOr", err);
          setError(true);
          setLoading(false);
        });
      setCreateRequestFromTeamToPlayer(false);
    }
  };
  const updateRequestFromTeamToPlayerFunct = async () => {
    if (updateRequestFromTeamToPlayer) {
      setLoading(true);
      apiSettingsTD
        .updateTeam2PlayerRequest(updateRequestFromTeamToPlayer)
        .then(() => {
          setGetTeamRequests(team?.id);
        })
        .catch((err) => {
          console.log("errOr", err);
          setError(true);
          setLoading(false);
        });
      setUpdateRequestFromTeamToPlayer(false);
    }
  };
  const deleteRequestFromTeamToPlayerFunct = async () => {
    if (deleteRequestFromTeamToPlayer) {
      setLoading(true);
      apiSettingsTD
        .deleteTeam2PlayerRequest(deleteRequestFromTeamToPlayer)
        .then(() => {
          setGetTeamRequests(team?.id);
        })
        .catch((err) => {
          console.log("errOr", err);
          setError(true);
          setLoading(false);
        });
      setDeleteRequestFromTeamToPlayer(false);
    }
  };
  const deleteTeamMemberFunct = async () => {
    if (deleteTeamMember) {
      setLoading(true);
      apiSettings
        .deleteTeamMembers(deleteTeamMember)
        .then(() => {
          setTeamId(team?.id);
        })
        .catch((err) => {
          console.log("errOr", err);
          setError(true);
          setLoading(false);
        });
      setDeleteTeamMember(false);
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
    getTeamNoLeague();
  }, [teamIdNoLeague]);
  useEffect(() => {
    setTeamLeagueFunct();
  }, [leagueMembershipId]);
  useEffect(() => {
    getUsernameTeamReqTeamReqFunct();
  }, [getUsernameTeamReq]);
  useEffect(() => {
    getTeamFixturesFunct();
  }, [getTeamFixtures]);
  useEffect(() => {
    getTeamRequestsDashboardFunct();
  }, [getTeamRequestsDahboard]);
  useEffect(() => {
    getTeamRequestsFunct();
  }, [getTeamRequests]);

  useEffect(() => {
    updateFixtureFunct();
  }, [updateFixture]);
  useEffect(() => {
    updateTeamStatsFunct();
  }, [updateTeamStats]);
  useEffect(() => {
    createTeamStatsFunct();
  }, [createTeamStats]);
  useEffect(() => {
    updateTeamFunct();
  }, [updateTeam]);
  useEffect(() => {
    updateLeagueFunct();
  }, [updateLeague]);
  useEffect(() => {
    updatePlayerStatsFunct();
  }, [updatePlayerStats]);
  useEffect(() => {
    createPlayerStatsFunct();
  }, [createPlayerStats]);
  useEffect(() => {
    updateRequestFromTeamToPlayerFunct();
  }, [updateRequestFromTeamToPlayer]);
  useEffect(() => {
    createRequestFromTeamToPlayerFunct();
  }, [createRequestFromTeamToPlayer]);
  useEffect(() => {
    deleteRequestFromTeamToPlayerFunct();
  }, [deleteRequestFromTeamToPlayer]);
  useEffect(() => {
    deleteTeamMemberFunct();
  }, [deleteTeamMember]);

  // useEffect(() => {
  //   setTournament(
  //     tournament
  //       ? team?.tournaments?.items.filter(
  //           (tournamenta) =>
  //             tournamenta.tournament.id === tournament?.id &&
  //             tournamenta.tournament?.league?.name === league?.name
  //         )[0]?.tournament
  //       : team?.tournaments?.items.filter(
  //           (tour) => tour.tournament?.league?.name === league?.name
  //         )[0]?.tournament
  //   );
  //   console.log("team chosen in nav", tournament);
  // }, [team, league]);
  return {
    setTeamId,
    setTeamIdNoLeague,
    team,
    tournament,
    setTournament,
    setGetTeamFixtures,
    setGetTeamRequestsDahboard,
    teamFixtures,
    teamRequestsDashboard,
    setUpdateFixture,
    setCreateTeamStats,
    setUpdateTeamStats,
    setCreatePlayerStats,
    setUpdatePlayerStats,
    setCreateRequestFromTeamToPlayer,
    setUpdateRequestFromTeamToPlayer,
    teamRequests,
    setGetTeamRequests,
    setDeleteRequestFromTeamToPlayer,
    setActiveRound,
    setGetUsernameTeamReq,
    username,
    setUpdateTeam,
    setDeleteTeamMember,
    setUpdateLeague,
    setLeagueMembershipId,
    league,
  };
};

export default useTeamDashboard;
