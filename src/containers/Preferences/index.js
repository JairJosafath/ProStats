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
    setUpdateRequestFromLeague,
    setUpdateRequestFromTEam,
    setCreateTeamMember,
    setUpdateTeam,
    setDeleteTeamMember,
    setCreateTeamLeague,
    setUpdateLeague,
    setDeleteTeamLeague,
    setDeleteTeam,
  } = usePreferences();
  useEffect(() => {
    setPlayerId(playerID);
  }, [playerID]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}></div>
        <div style={{ flex: 3 }}>
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
              setUpdateRequestFromLeague={setUpdateRequestFromLeague}
              setUpdateRequestFromTEam={setUpdateRequestFromTEam}
              setCreateTeamMember={setCreateTeamMember}
              setUpdateTeam={setUpdateTeam}
              setDeleteTeamMember={setDeleteTeamMember}
              setCreateTeamLeague={setCreateTeamLeague}
              setUpdateLeague={setUpdateLeague}
              setDeleteTeamLeague={setDeleteTeamLeague}
              setDeleteTeam={setDeleteTeam}
            />
          )}
        </div>
        <div style={{ flex: 1 }}></div>
      </div>
    </>
  );
};
export default Preferences;
