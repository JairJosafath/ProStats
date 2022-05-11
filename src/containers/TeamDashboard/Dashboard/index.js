import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { FlexboxGrid, Input, Panel } from "rsuite";
import { apiSettings } from "../../../API/API";
import TUploadPhotoCustom from "../../../components/TUploadPhotoCustom";
import useTeamDashboard from "../../../hooks/useLeaugueDashboard";
import ButtonCustom from "../../../components/ButtonCustom";
import Loading from "../../../components/Loading";
import Confirmation from "../../../components/Confirmation";
import Error from "../../../components/Error";

const TDashboard = () => {
  const [teamname, setTeamname] = useState("");
  const [teamdescription, setTeamdescription] = useState("");
  const [file, setFile] = useState();
  const { team, setTeam, setUpdateTeam, loading, setError, error } =
    useOutletContext();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [triggerUpdateTeamInfo, setTriggerUpdateTeamInfo] = useState(false);
  const [reloadLogo, setReloadLogo] = useState(false);
  const [confirm, setConfirm] = useState(false);
  useEffect(() => {
    // console.log(team);
    setTeamname(team?.name);
    setTeamdescription(team?.slogan);
  }, [team]);

  useEffect(() => {
    // console.log("conf", confirm);
    // console.log("trigger", triggerUpdateTeamInfo);
    if (confirm && triggerUpdateTeamInfo) {
      file && apiSettings.putImageTeam(team?.name, team?.id, file);

      if (file) {
        setUpdateTeam({
          id: team?.id,
          name: teamname,
          slogan: teamdescription,
          logo: file
            ? `teams/${teamname}/${team?.id}/avatars/${file.name}`
            : team?.name,
        });
      } else {
        setUpdateTeam({
          id: team?.id,
          name: teamname,
          slogan: teamdescription,
        });
      }
      setTriggerUpdateTeamInfo(false);
      // setTriggerUpdateTeamInfo(false);
    } else if (!showConfirmModal && !confirm) {
      setTeamname(team?.name);
      setTeamdescription(team?.slogan);
      setReloadLogo(true);
    }
    setConfirm(false);
  }, [confirm, triggerUpdateTeamInfo, showConfirmModal]);
  return (
    <>
      {" "}
      {error && <Error error={error} setError={setError} />}
      {showConfirmModal && (
        <Confirmation
          setConfirm={setConfirm}
          action={showConfirmModal.action}
          type={showConfirmModal.type}
          setOpen={setShowConfirmModal}
        />
      )}
      {loading && <Loading size={"30px"} />}
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
            <p style={{ marginTop: 20 }}>Team ID</p>
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
              setShowConfirmModal({ action: "update", type: "team" });
              setTriggerUpdateTeamInfo(true);
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
