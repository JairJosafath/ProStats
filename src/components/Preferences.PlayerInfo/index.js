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
}) => {
  const [playername, setPlayername] = useState();
  const [playerabout, setPlayerabout] = useState();
  const [file, setFile] = useState();
  useEffect(() => {
    setPlayername(player?.name);
    setPlayerabout(player?.slogan);
  }, [player]);

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
          <p style={{ color: "var(--primary-blue-very-light" }}>{player?.id}</p>
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
            apiSettings.putImagePlayer(player.username, player.id, file);

            setUpdatePlayer(true);
          }}
        >
          Save
        </ButtonCustom>
      </div>
    </Panel>
  );
};

export default PlayerInfoFrame;
