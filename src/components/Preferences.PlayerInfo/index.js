import { withAuthenticator } from "@aws-amplify/ui-react";
import { Button, FlexboxGrid, Input, List, Panel } from "rsuite";
import UploadPhotoCustom from "../../components/UploadPhotoCustom";
import useGetCurrentPlayerInfo from "../../hooks/useGetCurrentPlayerInfo";
import awsmobile from "../../aws-exports";
import { useEffect, useState } from "react";
import { updatePlayer } from "../../graphql/mutations";
import { API } from "aws-amplify";
import Confirmation from "../Confirmation";
import {
  deleteLeague,
  updateLeague,
  updateTeam,
} from "../../graphql/mutations";
import { apiSettings } from "../../API/API";
import ButtonCustom from "../ButtonCustom";

const updateplayerQuery = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
    }
  }
`;

const PlayerInfoFrame = ({
  player,
  setPlayer,
  playerTemp,
  setPlayerTemp,
  setUpdatePlayer,
  confirm,
  setConfirm,
}) => {
  const [playername, setPlayername] = useState();
  const [playerabout, setPlayerabout] = useState();
  const [file, setFile] = useState();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [triggerUpdatePlayer, setTriggerUpdatePlayer] = useState(false);
  useEffect(() => {
    setPlayername(player?.name);
    setPlayerabout(player?.slogan);
  }, [player]);

  useEffect(() => {
    if (confirm && triggerUpdatePlayer) {
      apiSettings.putImagePlayer(player.username, player.id, file);
      setUpdatePlayer(true);
    } else if (!showConfirmModal) {
      setPlayername(player?.name);
      setPlayerabout(player?.slogan);
      setPlayerTemp(false);
    }
    setTriggerUpdatePlayer(false);
  }, [triggerUpdatePlayer]);
  useEffect(() => {
    setPlayerTemp({
      name: playername,
      slogan: playerabout,
      id: player.id,
      image: file
        ? `players/${player.username}/${player.id}/avatars/${file.name}`
        : player.image,
    });

    console.log("playerTemp", playerTemp);
  }, [playername, playerabout, file]);

  return (
    <>
      {showConfirmModal && (
        <Confirmation
          setConfirm={setConfirm}
          action={showConfirmModal.action}
          type={showConfirmModal.type}
          setOpen={setShowConfirmModal}
        />
      )}
      <Panel header="Update Player Info" shaded>
        <FlexboxGrid justify="space-around">
          <FlexboxGrid.Item colspan={6}></FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={6}>
            <UploadPhotoCustom
              player={player}
              playerTemp={playerTemp}
              setPlayerTemp={setPlayerTemp}
              file={file}
              setFile={setFile}
            />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={6}>
            <div>
              <label>Player Name</label>
              <Input
                value={playername}
                placeholder={"player name ..."}
                onChange={setPlayername}
              />
            </div>

            <div>
              <label>About</label>
              <Input
                placeholder={"Slogan or anything really ..."}
                onChange={setPlayerabout}
                value={playerabout}
              />
            </div>
            <p style={{ marginTop: 20 }}>Player ID</p>
            <p style={{ color: "var(--primary-blue-very-light" }}>
              {player?.id}
            </p>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={6}></FlexboxGrid.Item>
        </FlexboxGrid>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ButtonCustom
            size="md"
            style={{ margin: " auto", width: 60 }}
            onClick={() => {
              setShowConfirmModal({ action: "update", type: "player" });
              setTriggerUpdatePlayer(true);
              //  apiSettings.putImagePlayer(player.username, player.id, file);
            }}
          >
            Save
          </ButtonCustom>
        </div>
      </Panel>
    </>
  );
};

export default PlayerInfoFrame;
