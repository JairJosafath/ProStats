import { withAuthenticator } from "@aws-amplify/ui-react";
import { Button, FlexboxGrid, Input, List, Modal, Panel } from "rsuite";
import UploadPhotoCustom from "../../components/UploadPhotoCustom";
// import useGetCurrentplayer from "../../hooks/useGetCurrentplayer";
import awsmobile from "../../aws-exports";
import { useEffect, useState } from "react";
import { updatePlayer } from "../../graphql/mutations";
import { API } from "aws-amplify";
import {
  deleteLeague,
  updateLeague,
  updateTeam,
} from "../../graphql/mutations";

import { MdModeEdit, MdDelete, MdExitToApp } from "react-icons/md";
import useCreateTeam from "../../hooks/useCreateTeam";
import { useNavigate } from "react-router-dom";

const NewTeamModal = ({ open, setOpen, setCreateTeam, player }) => {
  const [overflow, setOverflow] = useState(true);
  const [file, setFile] = useState(null);
  const [valueName, setValueName] = useState("");
  const [valueAbout, setValueAbout] = useState("");
  const [create, setCreate] = useState(false);
  const [team, setTeam] = useState({
    name: "",
    logo: "",
    slogan: "",
    create,
  });
  // const { createdTeam, loadingCreateTeam, errorCreateTeam } =
  //   useCreateTeam(team);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOK = () => {
    console.log("player update when OK", player);
    setCreateTeam({
      name: valueName,
      slogan: valueAbout,
      playerManagesId: player.id,
      teamManager: player.username,
    });
    // setTeam(valueName, "", valueAbout);

    console.log(`team\nname: ${valueName}, about: ${valueAbout}`);
    // console.log("created", createdTeam);
    setOpen(false);
    setCreate(false);
  };

  return (
    <div className="modal-container">
      <Modal overflow={true} open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Create New Team</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FlexboxGrid justify="space-around">
            <FlexboxGrid.Item colspan={6}></FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={6}>
              {/* <UploadPhotoCustom source={``} setFile={setFile} file={file} /> */}
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={10}>
              <div>
                <label>Team Name</label>
                <Input
                  placeholder={"team name ..."}
                  onChange={setValueName}
                  value={valueName}
                />
              </div>

              <div>
                <label>About</label>
                <Input
                  placeholder={"Slogan or anything really ..."}
                  onChange={setValueAbout}
                  value={valueAbout}
                />
              </div>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleOK} appearance="primary">
            Ok
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const NewLeagueModal = ({ open, setOpen, setCreateLeague, player }) => {
  const [overflow, setOverflow] = useState(true);
  const [file, setFile] = useState(null);
  const [valueName, setValueName] = useState("");
  const [valueAbout, setValueAbout] = useState("");
  const [create, setCreate] = useState(false);
  const [league, setLeague] = useState({
    name: "",
    logo: "",
    slogan: "",
    create,
  });
  // const { createdTeam, loadingCreateTeam, errorCreateTeam } =
  //   useCreateTeam(team);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOK = () => {
    console.log("player update when OK", player);
    setCreateLeague({
      name: valueName,
      description: valueAbout,
      playerAdminsId: player.id,
      leagueAdmin: player.username,
    });

    console.log("league inofo", league);

    console.log(`league\nname: ${valueName}, descr: ${valueAbout}`);
    // console.log("created", createdTeam);
    setOpen(false);
    setCreate(false);
  };

  return (
    <div className="modal-container">
      <Modal overflow={true} open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Create New League</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FlexboxGrid justify="space-around">
            <FlexboxGrid.Item colspan={6}></FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={6}>
              {/* <UploadPhotoCustom source={``} setFile={setFile} file={file} /> */}
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={10}>
              <div>
                <label>League Name</label>
                <Input
                  placeholder={"league name ..."}
                  onChange={setValueName}
                  value={valueName}
                />
              </div>

              <div>
                <label>About</label>
                <Input
                  placeholder={"Slogan or anything really ..."}
                  onChange={setValueAbout}
                  value={valueAbout}
                />
              </div>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleOK} appearance="primary">
            Ok
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const PlayerRoles = ({
  player,
  setPlayer,
  playerTemp,
  setPlayerTemp,
  setCreateTeam,
  setCreateLeague,
}) => {
  const nav = useNavigate();
  const [openLeague, setOpenLeague] = useState(false);
  const [openTeam, setOpenTeam] = useState(false);
  const handleEditLeague = (id, role) => {
    console.log(`edit league with id: ${id} as ${role}`);
    nav(`/leaguedashboard/${id}/dashboard`);
  };
  const handleDeleteLeague = (id, role) => {
    console.log(`delete league with id: ${id} as ${role}`);
    const deleteLeagueFN = async () => {
      //delete all connections first

      // or make league inactive
      const result = await API.graphql({
        query: updateLeague,
        variables: { input: { id: id, status: "disabled" } },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      }).catch((error) => {
        console.log("error when deleting", error);
      });

      console.log("res", result);
    };

    deleteLeagueFN();
  };
  const handleLeaveLeague = (id) => {
    console.log(`leaving league with id: ${id}`);
  };
  const handleEditTeam = (id, role) => {
    console.log(`edit Team with id: ${id} as ${role}`);
  };
  const handleDeleteTeam = (id, role) => {
    console.log(`delete Team with id: ${id} as ${role}`);

    const deleteTeamFN = async () => {
      //delete all connections first

      // or make Team inactive
      const result = await API.graphql({
        query: updateTeam,
        variables: { input: { id: id, status: "disabled" } },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      }).catch((error) => {
        console.log("error when deleting", error);
      });

      console.log("res", result);
    };
    deleteTeamFN();
    window.location.reload();
  };
  const handleLeaveTeam = (id) => {
    console.log(`leaving Team with id: ${id}`);
  };

  return (
    <>
      <Panel header="Player Roles">
        <FlexboxGrid justify="space-around">
          <FlexboxGrid.Item colspan={3}></FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={8}>
            <div>
              <label>Leagues</label>
              <List hover>
                <FlexboxGrid style={{ margin: 10 }} justify="space-between">
                  <FlexboxGrid.Item colspan={7}>League</FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={7}>Role</FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={3}></FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={3}></FlexboxGrid.Item>
                </FlexboxGrid>
                {/* Admin */}
                {player?.admins?.items?.map((league) => {
                  return (
                    league.status !== "disabled" && (
                      <List.Item key={league.id}>
                        <FlexboxGrid justify="space-between">
                          <FlexboxGrid.Item colspan={7}>
                            {league.name}
                          </FlexboxGrid.Item>
                          <FlexboxGrid.Item colspan={7}>Admin</FlexboxGrid.Item>
                          <FlexboxGrid.Item colspan={3}>
                            <div
                              style={{
                                display: "flex",
                                width: "4em",
                              }}
                              onClick={(e) => {
                                handleEditLeague(league.id, "admin");
                              }}
                            >
                              <MdModeEdit
                                style={{ margin: "0 auto" }}
                                size={"1.5em"}
                              />
                            </div>
                          </FlexboxGrid.Item>
                          <FlexboxGrid.Item colspan={3}>
                            <div
                              style={{
                                display: "flex",
                                width: "4em",
                              }}
                              onClick={(e) => {
                                handleDeleteLeague(league.id, "admin");
                              }}
                            >
                              <MdDelete
                                style={{ margin: "0 auto" }}
                                size={"1.5em"}
                              />
                            </div>
                          </FlexboxGrid.Item>
                        </FlexboxGrid>
                      </List.Item>
                    )
                  );
                })}
                {/* Mod */}
                {player?.moderates?.items?.map((league) => {
                  return (
                    league.league.status !== "disabled" && (
                      <List.Item key={`${league.league.id}-Mod`}>
                        <FlexboxGrid justify="space-between">
                          <FlexboxGrid.Item colspan={7}>
                            {league.league.name}
                          </FlexboxGrid.Item>
                          <FlexboxGrid.Item colspan={7}>Mod</FlexboxGrid.Item>

                          <FlexboxGrid.Item colspan={3}>
                            <div
                              style={{
                                display: "flex",
                                width: "4em",
                              }}
                              onClick={(e) => {
                                handleEditLeague(league.league.id, "mod");
                              }}
                            >
                              <MdModeEdit
                                style={{ margin: "0 auto" }}
                                size={"1.5em"}
                              />
                            </div>
                          </FlexboxGrid.Item>
                          <FlexboxGrid.Item colspan={3}>
                            <div
                              style={{
                                display: "flex",
                                width: "4em",
                              }}
                              onClick={(e) => {
                                handleLeaveLeague(league.id);
                              }}
                            >
                              <MdExitToApp
                                style={{ margin: "0 auto" }}
                                size={"1.5em"}
                              />
                            </div>
                          </FlexboxGrid.Item>
                        </FlexboxGrid>
                      </List.Item>
                    )
                  );
                })}
              </List>
            </div>
            <Button
              onClick={() => {
                console.log("create Team");
                setOpenLeague(true);
              }}
            >
              Create New League
            </Button>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={8}>
            <div>
              <label>Teams</label>
              <List hover>
                <FlexboxGrid style={{ margin: 10 }} justify="space-between">
                  <FlexboxGrid.Item colspan={7}>Team</FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={7}>Role</FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={3}></FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={3}></FlexboxGrid.Item>
                </FlexboxGrid>
                {/* Manager */}
                {player?.manages?.items?.map((team) => {
                  return (
                    team.status !== "disabled" && (
                      <List.Item key={`${team.id}-Man`}>
                        <FlexboxGrid justify="space-between">
                          <FlexboxGrid.Item colspan={7}>
                            {team.name}
                          </FlexboxGrid.Item>
                          <FlexboxGrid.Item colspan={7}>
                            Manager
                          </FlexboxGrid.Item>
                          <FlexboxGrid.Item colspan={3}>
                            <div
                              style={{
                                display: "flex",
                                width: "4em",
                              }}
                              onClick={(e) => {
                                handleEditTeam(team.id, "manager");
                              }}
                            >
                              <MdModeEdit
                                style={{ margin: "0 auto" }}
                                size={"1.5em"}
                              />
                            </div>
                          </FlexboxGrid.Item>
                          <FlexboxGrid.Item colspan={3}>
                            <div
                              style={{
                                display: "flex",
                                width: "4em",
                              }}
                              onClick={(e) => {
                                handleDeleteTeam(team.id, "manager");
                              }}
                            >
                              <MdDelete
                                style={{ margin: "0 auto" }}
                                size={"1.5em"}
                              />
                            </div>
                          </FlexboxGrid.Item>
                        </FlexboxGrid>
                      </List.Item>
                    )
                  );
                })}
                {/* Captain */}
                {player?.captains?.items?.map((team) => {
                  return (
                    team.team.status !== "disabled" && (
                      <List.Item key={`${team.team.id}-Man`}>
                        <FlexboxGrid justify="space-between">
                          <FlexboxGrid.Item colspan={7}>
                            {team.team.name}
                          </FlexboxGrid.Item>
                          <FlexboxGrid.Item colspan={7}>
                            Captain
                          </FlexboxGrid.Item>
                          <FlexboxGrid.Item colspan={3}>
                            <div
                              style={{
                                display: "flex",
                                width: "4em",
                              }}
                              onClick={(e) => {
                                handleEditTeam(team.team.id, "captain");
                              }}
                            >
                              <MdModeEdit
                                style={{ margin: "0 auto" }}
                                size={"1.5em"}
                              />
                            </div>
                          </FlexboxGrid.Item>
                          <FlexboxGrid.Item colspan={3}>
                            <div
                              style={{
                                display: "flex",
                                width: "4em",
                              }}
                              onClick={(e) => {
                                handleLeaveTeam(team.id, "captain");
                              }}
                            >
                              <MdExitToApp
                                style={{ margin: "0 auto" }}
                                size={"1.5em"}
                              />
                            </div>
                          </FlexboxGrid.Item>
                        </FlexboxGrid>
                      </List.Item>
                    )
                  );
                })}
                {/* Member */}
                {player?.teams?.items?.map((team) => {
                  return (
                    team.team.status !== "disabled" && (
                      <List.Item key={`${team.team.id}-Man`}>
                        <FlexboxGrid justify="space-between">
                          <FlexboxGrid.Item colspan={7}>
                            {team.team.name}
                          </FlexboxGrid.Item>
                          <FlexboxGrid.Item colspan={7}>
                            Member
                          </FlexboxGrid.Item>
                          <FlexboxGrid.Item colspan={3}></FlexboxGrid.Item>
                          <FlexboxGrid.Item colspan={3}>
                            <div
                              style={{
                                display: "flex",
                                width: "4em",
                              }}
                              onClick={(e) => {
                                handleLeaveTeam(team.id, "member");
                              }}
                            >
                              <MdExitToApp
                                style={{ margin: "0 auto" }}
                                size={"1.5em"}
                              />
                            </div>
                          </FlexboxGrid.Item>
                        </FlexboxGrid>
                      </List.Item>
                    )
                  );
                })}
              </List>
            </div>
            <Button
              onClick={() => {
                console.log("create Team");
                setOpenTeam(true);
              }}
            >
              Create New Team
            </Button>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={3}></FlexboxGrid.Item>
        </FlexboxGrid>
      </Panel>
      <NewTeamModal
        open={openTeam}
        setOpen={setOpenTeam}
        setCreateTeam={setCreateTeam}
        player={player}
      />
      <NewLeagueModal
        open={openLeague}
        setOpen={setOpenLeague}
        player={player}
        setCreateLeague={setCreateLeague}
      />
    </>
  );
};

export default PlayerRoles;
