import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { FlexboxGrid, Input, Panel } from "rsuite";
import { apiSettings } from "../../../API/API";
import TUploadPhotoCustom from "../../../components/TUploadPhotoCustom";
import useTeamDashboard from "../../../hooks/useLeaugueDashboard";
import ButtonCustom from "../../../components/ButtonCustom";

const TDashboard = () => {
  const [teamname, setTeamname] = useState("");
  const [teamdescription, setTeamdescription] = useState("");
  const [file, setFile] = useState();
  const { team, setTeam, setUpdateTeam } = useOutletContext();
  useEffect(() => {
    // console.log(team);
    setTeamname(team?.name);
    setTeamdescription(team?.slogan);
  }, [team]);
  return (
    <>
      <Panel shaded header="Team Info">
        <FlexboxGrid justify="space-around">
          <FlexboxGrid.Item colspan={6}>
            <TUploadPhotoCustom team={team} file={file} setFile={setFile} />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={6}>
            <div>
              <label>Team Name</label>
              <Input
                value={teamname}
                placeholder={"team name ..."}
                onChange={setTeamname}
              />
            </div>

            <div>
              <label>Description</label>
              <Input
                placeholder={"Slogan or anything really ..."}
                onChange={setTeamdescription}
                value={teamdescription}
              />
            </div>
            <p style={{ marginTop: 20 }}>Player ID</p>
            <p
              style={{
                minWidth: "500px",
                color: "var(--primary-blue-very-light",
              }}
            >
              {team?.id}
            </p>
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
              apiSettings.putImageTeam(team?.name, team?.id, file);
              if (file)
                setUpdateTeam({
                  id: team?.id,
                  name: teamname,
                  slogan: teamdescription,
                  logo: file
                    ? `teams/${teamname}/${team?.id}/avatars/${file.name}`
                    : team?.name,
                });
              else
                setUpdateTeam({
                  id: team?.id,
                  name: teamname,
                  slogan: teamdescription,
                });
            }}
          >
            Save
          </ButtonCustom>
        </div>
      </Panel>
      <h5>Work in Progress</h5>
    </>
  );
};

export default TDashboard;
