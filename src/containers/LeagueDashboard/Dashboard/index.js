import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { FlexboxGrid, Input, Panel } from "rsuite";
import { apiSettings } from "../../../API/API";
import LUploadPhotoCustom from "../../../components/LUploadPhotoCustom";
import useLeagueDashboard from "../../../hooks/useLeaugueDashboard";
import ButtonCustom from "../../../components/ButtonCustom";

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
  } = useOutletContext();
  useEffect(() => {
    // console.log(league);
    setLeaguename(league?.name);
    setLeaguedescription(league?.description);
  }, [league]);
  return (
    <>
      <Panel shaded header="League Info">
        <FlexboxGrid justify="space-around">
          <FlexboxGrid.Item colspan={6}>
            <LUploadPhotoCustom league={league} file={file} setFile={setFile} />
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
        <div style={{ display: "grid" }}>
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
                  slogan: leaguedescription,
                  logo: file
                    ? `leagues/${leaguename}/${league?.id}/avatars/${file.name}`
                    : league?.name,
                });
              } else {
                setUpdateLeague({
                  id: league?.id,
                  name: leaguename,
                  slogan: leaguedescription,
                });
              }
            }}
          >
            Save
          </ButtonCustom>
        </div>
      </Panel>

      <div>tournament standings</div>
    </>
  );
};

export default LDashboard;
