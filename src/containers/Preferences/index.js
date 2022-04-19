import { withAuthenticator } from "@aws-amplify/ui-react";
import { Button, FlexboxGrid, Input, List, Panel } from "rsuite";
import UploadPhotoCustom from "../../components/UploadPhotoCustom";
import useGetCurrentPlayerInfo from "../../hooks/useGetCurrentPlayerInfo";
import awsmobile from "../../aws-exports";
import { useEffect, useState } from "react";
import { updatePlayer } from "../../graphql/mutations";
import { API } from "aws-amplify";
import {
  deleteLeague,
  updateLeague,
  updateTeam,
} from "../../graphql/mutations";

//Icons
import { MdModeEdit, MdDelete, MdExitToApp } from "react-icons/md";
import useCreateTeam from "../../hooks/useCreateTeam";
import PlayerInfoFrame from "../../components/Preferences.PlayerInfo";
import PlayerRoles from "../../components/Preferences.PlayerRoles";

//Hooks
import usePreferences from "../../hooks/usePreferences";

const Preferences = ({ playerID }) => {
  const {
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
  } = usePreferences();
  useEffect(() => {
    setPlayerId(playerID);
  }, [playerID]);

  return (
    <>
      {player && (
        <PlayerInfoFrame
          player={player}
          setPlayer={setPlayer}
          playerTemp={playerTemp}
          setPlayerTemp={setPlayerTemp}
          setUpdatePlayer={setUpdatePlayer}
        />
      )}

      {player && (
        <PlayerRoles
          player={player}
          setPlayer={setPlayer}
          playerTemp={playerTemp}
          setPlayerTemp={setPlayerTemp}
          setCreateTeam={setCreateTeam}
          setCreateLeague={setCreateLeague}
        />
      )}
    </>
  );
};
export default Preferences;
