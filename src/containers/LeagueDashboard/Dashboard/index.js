import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { FlexboxGrid, Input, Panel } from "rsuite";
import { apiSettings } from "../../../API/API";
import LUploadPhotoCustom from "../../../components/LUploadPhotoCustom";
import useLeagueDashboard from "../../../hooks/useLeaugueDashboard";
import ButtonCustom from "../../../components/ButtonCustom";
import TeamStandings from "../../../components/TeamStandings";
import PlayerStandings from "../../../components/PlayerStandings";

const LDashboard = () => {
  const [leaguename, setLeaguename] = useState("");
  const [leaguedescription, setLeaguedescription] = useState("");
  const [file, setFile] = useState();

  const {
    league,
    setLeague,
    setUpdateLeague,
    createTournament,
    setCreateTournament,
    tournament,
  } = useOutletContext();
  useEffect(() => {
    // console.log(league);
    setLeaguename(league?.name);
    setLeaguedescription(league?.description);
  }, [league]);
  useEffect(() => {
    console.log(tournament);
  }, [tournament]);
  return (
    <>
      <div style={{ width: "100%" }}>
        <Panel
          shaded
          header="League Info"
          style={{ height: 360, width: "90%", margin: 5 }}
        >
          <FlexboxGrid justify="space-around">
            <FlexboxGrid.Item colspan={6}>
              <LUploadPhotoCustom
                league={league}
                file={file}
                setFile={setFile}
              />
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={6}>
              <div>
                <label>League Name</label>
                <Input
                  value={leaguename}
                  placeholder={"league name ..."}
                  onChange={setLeaguename}
                />
              </div>

              <div>
                <label>Description</label>
                <Input
                  placeholder={"Slogan or anything really ..."}
                  onChange={setLeaguedescription}
                  value={leaguedescription}
                />
              </div>
            </FlexboxGrid.Item>
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
                file &&
                  apiSettings.putImageLeague(league?.name, league?.id, file);

                if (file) {
                  setUpdateLeague({
                    id: league?.id,
                    name: leaguename,
                    description: leaguedescription,
                    logo: file
                      ? `leagues/${leaguename}/${league?.id}/avatars/${file.name}`
                      : league?.name,
                  });
                } else {
                  setUpdateLeague({
                    id: league?.id,
                    name: leaguename,
                    description: leaguedescription,
                  });
                }
              }}
            >
              Save
            </ButtonCustom>
          </div>
        </Panel>

        <div>
          <TeamStandings data={tournament && tournament?.table?.items} />

          <PlayerStandings
            data={tournament && tournament?.playerTable?.items}
          />
        </div>
      </div>

      {/* <div>tournament standings</div> */}
    </>
  );
};

export default LDashboard;
