import { useAuthenticator, withAuthenticator } from "@aws-amplify/ui-react";
import { Button, FlexboxGrid, Input, List, Panel } from "rsuite";
import UploadPhotoCustom from "../../components/UploadPhotoCustom";
import useGetCurrentPlayerInfo from "../../hooks/useGetCurrentPlayerInfo";
import awsmobile from "../../aws-exports";
import { useEffect, useState } from "react";
import { updatePlayer } from "../../graphql/mutations";
import { API, Auth } from "aws-amplify";
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
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const Preferences = ({}) => {
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
    setCreateUserPlayer,
    confirm,
    setConfirm,
  } = usePreferences();

  useEffect(() => {
    const setUserData = async () => {
      const userData = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      const { username, attributes } = userData;
      if (
        attributes["custom:player_id"] === "" ||
        !attributes["custom:player_id"]
      ) {
        const createPlayerInput = {
          name: username,
          username: username,
        };

        setCreateUserPlayer({ input: createPlayerInput, user: userData });
      } else {
        setPlayerId(attributes["custom:player_id"]);
      }
      // console.log("theteeest", username, attributes["custom:player_id"]);
      // setUser(CognitoUser);
    };

    setUserData();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          minHeight: "88vh",
          background: "var(--primary-grey)",
        }}
      >
        <div style={{ flex: 1 }}></div>
        <div style={{ flex: 3 }}>
          {loading && <Loading size={"30px"} />}
          {error && <Error error={error} setError={setError} />}

          {player && (
            <PlayerInfoFrame
              player={player}
              setPlayer={setPlayer}
              playerTemp={playerTemp}
              setPlayerTemp={setPlayerTemp}
              setUpdatePlayer={setUpdatePlayer}
              confirm={confirm}
              setConfirm={setConfirm}
            />
          )}

          {player && (
            <PlayerRoles
              confirm={confirm}
              setConfirm={setConfirm}
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
      <div
        style={{
          display: "flex",
          height: "5vh",
          background: "var(--primary-blue-dark)",
        }}
      >
        {" "}
        Footer
      </div>
    </>
  );
};
export default Preferences;
