import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { FlexboxGrid, Input, Panel } from "rsuite";
import { apiSettings } from "../../../API/API";
import LUploadPhotoCustom from "../../../components/LUploadPhotoCustom";
import useLeagueDashboard from "../../../hooks/useLeaugueDashboard";
import ButtonCustom from "../../../components/ButtonCustom";
import TeamStandings from "../../../components/TeamStandings";
import PlayerStandings from "../../../components/PlayerStandings";
import Loading from "../../../components/Loading";
import Confirmation from "../../../components/Confirmation";
import Error from "../../../components/Error";

const LDashboard = () => {
  const [leaguename, setLeaguename] = useState("");
  const [leaguedescription, setLeaguedescription] = useState("");
  const [file, setFile] = useState();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [triggerUpdateLeagueInfo, setTriggerUpdateLeagueInfo] = useState(false);
  const [reloadLogo, setReloadLogo] = useState(false);
  const {
    confirm,
    setConfirm,
    league,
    setLeague,
    setUpdateLeague,
    createTournament,
    setCreateTournament,
    tournament,
    loading,
    setError,
    error,
  } = useOutletContext();
  useEffect(() => {
    console.log("conf", confirm);
    console.log("trigger", triggerUpdateLeagueInfo);
    if (confirm && triggerUpdateLeagueInfo) {
      file && apiSettings.putImageLeague(league?.name, league?.id, file);

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
      setTriggerUpdateLeagueInfo(false);
      // setTriggerUpdateLeagueInfo(false);
    } else if (!showConfirmModal && !confirm) {
      setLeaguename(league?.name);
      setLeaguedescription(league?.description);
      setReloadLogo(true);
    }
  }, [confirm, triggerUpdateLeagueInfo, showConfirmModal]);
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
                reloadLogo={reloadLogo}
                setReloadLogo={setReloadLogo}
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
                setShowConfirmModal({ action: "update", type: "league" });
                setTriggerUpdateLeagueInfo(true);
                // file &&
                //   apiSettings.putImageLeague(league?.name, league?.id, file);

                // if (file) {
                //   setUpdateLeague({
                //     id: league?.id,
                //     name: leaguename,
                //     description: leaguedescription,
                //     logo: file
                //       ? `leagues/${leaguename}/${league?.id}/avatars/${file.name}`
                //       : league?.name,
                //   });af
                // } else {
                //   setUpdateLeague({
                //     id: league?.id,
                //     name: leaguename,
                //     description: leaguedescription,
                //   });
                // }
              }}
            >
              Save
            </ButtonCustom>
          </div>
        </Panel>

        <div>
          {tournament && tournament?.table && (
            <TeamStandings data={tournament && tournament?.table?.items} />
          )}

          {tournament && tournament?.playerTable && (
            <PlayerStandings
              data={tournament && tournament?.playerTable?.items}
            />
          )}
        </div>
      </div>

      {/* <div>tournament standings</div> */}
    </>
  );
};

export default LDashboard;
