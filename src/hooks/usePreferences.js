import { useState, useEffect } from "react";
import { apiSettings, apiSettingsTD } from "../API/API";

const usePreferences = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false); //only try to read player attr when data has been fecthed
  //only when the player clicks save, the changes will be updated
  const [updatePlayer, setUpdatePlayer] = useState(false);
  //player info states
  const [playerId, setPlayerId] = useState(null);
  const [player, setPlayer] = useState();
  //will be used to show changes when player gets updated without saving, will revert back to player if canceled
  const [playerTemp, setPlayerTemp] = useState();

  //will be used to temporarily hold team data to be created
  const [createTeam, setCreateTeam] = useState(false);
  const [createLeague, setCreateLeague] = useState(false);

  const [updateRequestFromLeague, setUpdateRequestFromLeague] = useState(false);
  const [updateRequestFromTEam, setUpdateRequestFromTEam] = useState(false);

  const [createTeamMember, setCreateTeamMember] = useState(false);
  const [deleteTeamMember, setDeleteTeamMember] = useState(false);
  const [updateTeam, setUpdateTeam] = useState(false);
  const [createTeamLeague, setCreateTeamLeague] = useState(false);
  const [deleteTeamLeague, setDeleteTeamLeague] = useState(false);
  const [deleteTeam, setDeleteTeam] = useState(false);
  const [updateLeague, setUpdateLeague] = useState(false);

  const fetchPlayer = async () => {
    setLoading(true);

    if (playerId) {
      const data = await apiSettings.getPlayer(playerId).catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });

      if (!error) {
        setPlayer(data);
        // setPlayerTemp({
        //   name: player.name,
        //   image: player.image,
        //   slogan: player.slogan,
        //   id: player.id,
        // });
        setDataLoaded(true);
        setLoading(false);
      }
      setPlayerId(false);
    }
  };

  const updatePlayerfunct = async () => {
    if (updatePlayer) {
      setLoading(true);
      apiSettings
        .updatePlayer(playerTemp)
        .then(() => setPlayerId(player.id))
        .catch((err) => {
          console.log(err);
          setError(true);
          setLoading(false);
        });
      setUpdatePlayer(!updatePlayer);
    }
  };

  const createTeamFunct = async () => {
    if (createTeam) {
      setLoading(true);
      apiSettings
        .createTeam(createTeam)
        .then(() => setPlayerId(player.id))
        .catch((err) => {
          console.log(err);
          setError(true);
          setLoading(false);
        });
      setCreateTeam(false);
    }
  };
  const updateTeamFunct = async () => {
    if (updateTeam) {
      setLoading(true);
      apiSettings
        .updateTeam(updateTeam)
        .then(() => setPlayerId(player.id))
        .catch((err) => {
          console.log(err);
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
        .then(() => setPlayerId(player.id))
        .catch((err) => {
          console.log(err);
          setError(true);
          setLoading(false);
        });
      setUpdateLeague(false);
    }
  };
  const createTeamMemberFunct = async () => {
    if (createTeamMember) {
      console.log("fresh member obj", createTeamMember);

      setLoading(true);
      const data = await apiSettingsTD
        .getTeamModUsernames(createTeamMember.teamTeamMembershipsId)
        .then((data) => {
          createTeamMember["moderators"] = data.moderators;
          console.log("updated tea,member", createTeamMember);
          apiSettings.createTeamMembers(createTeamMember);
        })

        .then(() => setPlayerId(player.id))
        .catch((err) => {
          console.log(err);
          setError(true);
          setLoading(false);
        });
      setCreateTeamMember(false);
    }
  };
  const createTeamLeagueFunct = async () => {
    if (createTeamLeague) {
      setLoading(true);
      apiSettings
        .createTeamLeague(createTeamLeague)
        .then(() => {
          setPlayerId(player.id);
        })
        .catch((err) => {
          console.log(err);
          setError(true);
          setLoading(false);
        });
      setCreateTeamLeague(false);
    }
  };
  const deleteTeamLeagueFunct = async () => {
    if (deleteTeamLeague) {
      setLoading(true);
      apiSettings
        .deleteTeamLeague(deleteTeamLeague)
        .then(() => {
          setPlayerId(player.id);
        })
        .catch((err) => {
          console.log(err);
          setError(true);
          setLoading(false);
        });
      setDeleteTeamLeague(false);
    }
  };
  const deleteTeamFunct = async () => {
    if (deleteTeam) {
      setLoading(true);
      apiSettings
        .deleteTeam(deleteTeam)
        .then(() => {
          setPlayerId(player.id);
        })
        .catch((err) => {
          console.log(err);
          setError(true);
          setLoading(false);
        });
      setDeleteTeam(false);
    }
  };
  const deleteTeamMemberFunct = async () => {
    if (deleteTeamMember) {
      setLoading(true);
      apiSettings
        .deleteTeamMembers(deleteTeamMember)
        .then(() => setPlayerId(player.id))
        .catch((err) => {
          console.log(err);
          setError(true);
          setLoading(false);
        });
      setDeleteTeamMember(false);
    }
  };
  const createLeaguFunct = async () => {
    if (createLeague) {
      setLoading(true);
      apiSettings
        .createLeague(createLeague)
        .then(() => setPlayerId(player.id))
        .catch((err) => {
          console.log(err);
          setError(true);
          setLoading(false);
        });
      setCreateLeague(false);
    }
  };
  const updateRequestLeague2TeamFunct = async () => {
    if (updateRequestFromLeague) {
      setLoading(true);
      apiSettings
        .updateRequestLeague2Team(updateRequestFromLeague)
        .then(() => setPlayerId(player.id))
        .catch((err) => {
          console.log("errOr", err);
          setError(true);
          setLoading(false);
        });

      setLoading(false);
      setUpdateRequestFromLeague(false);
    }
  };
  const updateRequestTeam2LeagueFunct = async () => {
    if (updateRequestFromTEam) {
      setLoading(true);
      apiSettingsTD
        .updateTeam2PlayerRequest(updateRequestFromTEam)

        .catch((err) => {
          console.log("errOr", err);
          setError(true);
          setLoading(false);
        });

      setLoading(false);
      setUpdateRequestFromTEam(false);
    }
  };
  useEffect(() => {
    //might be improved to loading object with specific component name
    fetchPlayer();
  }, [playerId]);

  useEffect(() => {
    //only run if user clicks save
    updatePlayerfunct();
  }, [updatePlayer]);

  useEffect(() => {
    createTeamFunct();
    fetchPlayer();
  }, [createTeam]);
  useEffect(() => {
    updateTeamFunct();
  }, [updateTeam]);
  useEffect(() => {
    updateLeagueFunct();
  }, [updateLeague]);
  useEffect(() => {
    createTeamMemberFunct();
  }, [createTeamMember]);
  useEffect(() => {
    createTeamLeagueFunct();
  }, [createTeamLeague]);
  useEffect(() => {
    deleteTeamLeagueFunct();
  }, [deleteTeamLeague]);
  useEffect(() => {
    deleteTeamFunct();
  }, [deleteTeam]);
  useEffect(() => {
    deleteTeamMemberFunct();
  }, [deleteTeamMember]);
  useEffect(() => {
    createLeaguFunct();
    fetchPlayer();
  }, [createLeague]);
  useEffect(() => {
    updateRequestLeague2TeamFunct();
  }, [updateRequestFromLeague]);
  useEffect(() => {
    updateRequestTeam2LeagueFunct();
  }, [updateRequestFromTEam]);
  return {
    loading,
    setLoading,
    error,
    setError,
    dataLoaded,
    setDataLoaded,
    updatePlayer,
    setUpdatePlayer,
    playerId,
    setPlayerId,
    player,
    setPlayer,
    playerTemp,
    setPlayerTemp,
    setCreateTeam,
    setCreateLeague,
    setUpdateRequestFromTEam,
    setUpdateRequestFromLeague,
    setCreateTeamMember,
    setDeleteTeamMember,
    setUpdateTeam,
    setCreateTeamLeague,
    setUpdateLeague,
    setDeleteTeamLeague,
    setDeleteTeam,
  };
};

export default usePreferences;
