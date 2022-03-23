import { withAuthenticator } from "@aws-amplify/ui-react";
import { Button, FlexboxGrid, Input, List, Panel } from "rsuite";
import UploadPhotoCustom from "../../components/UploadPhotoCustom";
import useGetCurrentLeagueInfo from "../../hooks/useGetCurrentLeagueInfo";
import awsmobile from "../../aws-exports";
import { useEffect, useState } from "react";
import { updateLeague } from "../../graphql/mutations";
import { API } from "aws-amplify";
// import {
//   deleteLeague,
//   updateLeague,
//   updateTeam,
// } from "../../graphql/mutations";
import apiSettings from "../../API/API";

const LeagueInfoFrame = ({
  league,
  setLeague,
  LeagueTemp,
  setLeagueTemp,
  setUpdateLeague,
}) => {
  const [Leaguename, setLeaguename] = useState();
  const [Leagueabout, setLeagueabout] = useState();
  const [file, setFile] = useState();
  useEffect(() => {
    setLeaguename(league?.name);
    setLeagueabout(league?.slogan);
  }, [league]);

  useEffect(() => {
    setLeagueTemp({
      name: Leaguename,
      slogan: Leagueabout,
      id: league.id,
      image: file
        ? `${league.username}/${league.id}/avatars/${file.name}`
        : league.image,
    });

    console.log("LeagueTemp", LeagueTemp);
  }, [Leaguename, Leagueabout, file]);

  return (
    <Panel header="Update League Info" shaded>
      <FlexboxGrid justify="space-around">
        <FlexboxGrid.Item colspan={6}></FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={6}>
          <UploadPhotoCustom
            League={league}
            LeagueTemp={LeagueTemp}
            setLeagueTemp={setLeagueTemp}
            file={file}
            setFile={setFile}
          />
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={6}>
          <div>
            <label>League Name</label>
            <Input
              value={Leaguename}
              placeholder={"League name ..."}
              onChange={setLeaguename}
            />
          </div>

          <div>
            <label>About</label>
            <Input
              placeholder={"Slogan or anything really ..."}
              onChange={setLeagueabout}
              value={Leagueabout}
            />
          </div>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={6}></FlexboxGrid.Item>
      </FlexboxGrid>
      <div style={{ display: "grid" }}>
        <Button
          size="md"
          style={{ margin: " auto", width: 60 }}
          onClick={() => {
            apiSettings.putImageLeague(league.username, league.id, file);

            setUpdateLeague(true);
          }}
        >
          Save
        </Button>
      </div>
    </Panel>
  );
};

export default LeagueInfoFrame;
