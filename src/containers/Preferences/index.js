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

const PlayerInfo = ({ playerID }) => {
  // const [file, setFile] = useState(null);
  // const [valueName, setValueName] = useState("");
  // const [valueAbout, setValueAbout] = useState("");
  // // const [createdTeam,loadingCreateTeam,errorCreateTeam]=useCreateTeam()

  // useEffect(() => {
  //   setValueName(playerInfo?.name);
  //   setValueAbout(playerInfo?.slogan);
  // }, [playerInfo]);

  return (
    <>
      {/* <PlayerInfoFrame
        playerInfo={playerInfo}
        file={file}
        setFile={setFile}
        valueName={valueName}
        setValueName={setValueName}
        valueAbout={valueAbout}
        setValueAbout={setValueAbout}
        playerID={playerID}
      />

      <PlayerRoles playerInfo={playerInfo} />

      <Panel header="Favorite Leagues">
        <FlexboxGrid justify="space-around">
          <FlexboxGrid.Item colspan={3}></FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={8}>
            <div>
              <label>Leagues</label>
              <List hover>
                <List.Item>League1 </List.Item>
                <List.Item>League2</List.Item>

                <List.Item>League3</List.Item>
                <List.Item>League4</List.Item>
              </List>
            </div>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={3}></FlexboxGrid.Item>
        </FlexboxGrid>
      </Panel> */}
    </>
  );
};

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

      {/* <Panel header="Favorite Leagues">
        <FlexboxGrid justify="space-around">
          <FlexboxGrid.Item colspan={3}></FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={8}>
            <div>
              <label>Leagues</label>
              <List hover>
                <List.Item>League1 </List.Item>
                <List.Item>League2</List.Item>

                <List.Item>League3</List.Item>
                <List.Item>League4</List.Item>
              </List>
            </div>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={3}></FlexboxGrid.Item>
        </FlexboxGrid>
      </Panel> */}
    </>
  );
};
export default Preferences;
