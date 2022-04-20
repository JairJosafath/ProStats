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
  const [player, setPlayer] = useState({
    name: "ini",
    image: "ini", //use fallback image
    slogan: "ini",
  });
  //will be used to show changes when player gets updated without saving, will revert back to player if canceled
  const [playerTemp, setPlayerTemp] = useState({
    name: "temp.ini",
    image: "temp.ini",
    slogan: "temp.ini",
  });

  //will be used to temporarily hold team data to be created
  const [createTeam, setCreateTeam] = useState(false);
  const [createLeague, setCreateLeague] = useState(false);

  const [updateRequestFromLeague, setUpdateRequestFromLeague] = useState(false);
  const [updateRequestFromTEam, setUpdateRequestFromTEam] = useState(false);

  const [createTeamMember, setCreateTeamMember] = useState(false);
  const [deleteTeamMember, setDeleteTeamMember] = useState(false);
  const [updateTeam, setUpdateTeam] = useState(false);

  const fetchPlayer = async () => {
    setLoading(true);

    if (playerId) {
      const data = await apiSettings.getPlayer(playerId).catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
      if (!player || !data) setError(true);

      if (!error) {
        setPlayer(data);
        setPlayerTemp({
          name: player.name,
          image: player.image,
          slogan: player.slogan,
          id: player.id,
        });
        setDataLoaded(true);
        setLoading(false);
      }
    }
  };

  const updatePlayerfunct = async () => {
    if (updatePlayer) {
      setLoading(true);
      apiSettings.updatePlayer(playerTemp).catch((err) => {
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
      apiSettings.createTeam(createTeam).catch((err) => {
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
        .then(setPlayerId(player.id))
        .catch((err) => {
          console.log(err);
          setError(true);
          setLoading(false);
        });
      setUpdateTeam(false);
    }
  };
  const createTeamMemberFunct = async () => {
    if (createTeamMember) {
      setLoading(true);
      apiSettings
        .createTeamMembers(createTeamMember)
        .then(setPlayerId(player.id))
        .catch((err) => {
          console.log(err);
          setError(true);
          setLoading(false);
        });
      setCreateTeamMember(false);
    }
  };
  const deleteTeamMemberFunct = async () => {
    if (deleteTeamMember) {
      setLoading(true);
      apiSettings
        .deleteTeamMembers(deleteTeamMember)
        .then(setPlayerId(player.id))
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
      apiSettings.createLeague(createLeague).catch((err) => {
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
        .then(setPlayerId(player.id))
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
        .then(setPlayerId(player.id))
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
    createTeamMemberFunct();
  }, [createTeamMember]);
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
  };
};

export default usePreferences;
