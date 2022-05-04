import { withAuthenticator } from "@aws-amplify/ui-react";
import {
  Animation,
  Button,
  FlexboxGrid,
  IconButton,
  Input,
  List,
  Modal,
  Panel,
} from "rsuite";
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

import { BsFillXCircleFill, BsCheckCircleFill } from "react-icons/bs";
import { FaExclamation } from "react-icons/fa";
import { MdModeEdit, MdDelete, MdExitToApp } from "react-icons/md";
import useCreateTeam from "../../hooks/useCreateTeam";
import { useNavigate } from "react-router-dom";
import { useTimeout } from "rsuite/esm/utils";
import ListItemCustom from "../ListCustom";
import ButtonCustom from "../ButtonCustom";

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
  const handleClose = () => {
    setOpen(false);
    setValueName("");
    setValueAbout("");
  };
  const handleOK = () => {
    console.log("player update when OK", player);
    setCreateTeam({
      name: valueName,
      slogan: valueAbout,
      playerManagesId: player.id,
      teamManager: player.username,
      moderators: [player.username],
    });
    // setTeam(valueName, "", valueAbout);

    console.log(`team\nname: ${valueName}, about: ${valueAbout}`);
    // console.log("created", createdTeam);
    setOpen(false);
    setCreate(false);
    setValueName("");
    setValueAbout("");
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
          <ButtonCustom onClick={handleClose} appearance="subtle">
            Cancel
          </ButtonCustom>
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
      moderatornames: [player.username],
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
          <ButtonCustom onClick={handleClose} appearance="subtle">
            Cancel
          </ButtonCustom>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const PlayerRoles = ({
  player,
  setPlayer,
  setCreateTeam,
  setCreateLeague,
  setUpdateRequestFromLeague,
  setUpdateRequestFromTEam,
  setCreateTeamMember,
  setUpdateTeam,
  setDeleteTeamMember,
  setCreateTeamLeague,
  setUpdateLeague,
  setDeleteTeamLeague,
  setDeleteTeam,
}) => {
  const nav = useNavigate();
  const [openLeague, setOpenLeague] = useState(false);
  const [openTeam, setOpenTeam] = useState(false);
  const [requestShow, setRequestShow] = useState(false);
  const [showRequests, setShowRequests] = useState(false);

  useEffect(() => {
    if (player)
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          setRequestShow(i % 2 === 0);
        }, 1000 * i);
      }
  }, [player]);
  const handleLeaveLeague = (id) => {
    setDeleteTeamLeague({ id });

    console.log("delete TeamLeague with id", id);
  };
  const handleEditLeague = (id, role) => {
    console.log(`edit league with id: ${id} as ${role}`);
    nav(`/leaguedashboard/${id}/dashboard`);
  };
  const handleDeleteLeague = (id, role) => {
    console.log(`delete league with id: ${id} as ${role}`);
    //tournaments=> delete standings, fixtures, tournaments and all join table records

    setUpdateLeague({
      id,
      name: "deleted league",
      playerAdminsId: "null",
    });
    // const deleteLeagueFN = async () => {
    //   //delete all connections first

    //   // or make league inactive
    //   const result = await API.graphql({
    //     query: updateLeague,
    //     variables: { input: { id: id, status: "disabled" } },
    //     authMode: "AMAZON_COGNITO_USER_POOLS",
    //   }).catch((error) => {
    //     console.log("error when deleting", error);
    //   });

    //   console.log("res", result);
    // };

    // deleteLeagueFN();
  };
  // const handleLeaveLeague = (id) => {
  //   console.log(`leaving league with id: ${id}`);
  // };
  const handleEditTeam = (id, role, playerId) => {
    console.log(`edit Team with id: ${id} as ${role}`);
    if (role === "manager") nav(`/teamDashboard/${id}/dashboard`);
    if (role === "member") nav(`/playerDashboard/${id}+${playerId}/dashboard`);
    if (role === "managerNoLeague") nav(`/teamDashboard/${id}+No/dashboard`);
  };
  const handleDeleteTeam = (id, role) => {
    //remove team from players (admins,mods, mark it deleted) and rename it to created team
    setUpdateTeam({
      id,
      playerManagesId: "null",
      name: "deleted Team",
    });
    console.log(`delete Team with id: ${id} as ${role}`);

    //   const deleteTeamFN = async () => {
    //     //delete all connections first

    //     // or make Team inactive
    //     const result = await API.graphql({
    //       query: updateTeam,
    //       variables: { input: { id: id, status: "disabled" } },
    //       authMode: "AMAZON_COGNITO_USER_POOLS",
    //     }).catch((error) => {
    //       console.log("error when deleting", error);
    //     });

    //     console.log("res", result);
    //   };
    //   deleteTeamFN();
    // window.location.reload();
  };
  const handleLeaveTeam = (id) => {
    console.log(`leaving Team with id: ${id}`);
    setDeleteTeamMember({
      id,
    });
  };

  return (
    <>
      <Panel header="Player Roles" shaded>
        <FlexboxGrid justify="space-between">
          <FlexboxGrid.Item colspan={11}>
            <div style={{ marginRight: 0 }}>
              <label>Leagues</label>
              <List hover>
                <FlexboxGrid style={{ margin: 10 }} justify="space-between">
                  <FlexboxGrid.Item colspan={7}>League</FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={7}>Role</FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={3}></FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={3}></FlexboxGrid.Item>
                </FlexboxGrid>
                {/* Admin */}
                {player?.admins?.items?.map((league, index) => {
                  return (
                    league.status !== "qw" && (
                      <ListItemCustom key={`${league.id}${index}`}>
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
                            >
                              <IconButton
                                appearance="subtle"
                                color="blue"
                                size="xs"
                                icon={
                                  <MdModeEdit
                                    style={{ margin: "0 auto" }}
                                    size={"1.5em"}
                                  />
                                }
                                onClick={(e) => {
                                  handleEditLeague(league.id, "admin");
                                }}
                              />
                            </div>
                          </FlexboxGrid.Item>
                          <FlexboxGrid.Item colspan={3}>
                            <div
                              style={{
                                display: "flex",
                                width: "4em",
                              }}
                            >
                              <IconButton
                                appearance="subtle"
                                color="red"
                                size="xs"
                                icon={
                                  <MdDelete
                                    style={{ margin: "0 auto" }}
                                    size={"1.5em"}
                                  />
                                }
                                onClick={(e) => {
                                  handleDeleteLeague(league.id, "admin");
                                }}
                              />
                            </div>
                          </FlexboxGrid.Item>
                        </FlexboxGrid>
                      </ListItemCustom>
                    )
                  );
                })}
                {/* Mod */}
                {player?.moderates?.items?.map((league) => {
                  return (
                    league.league.status !== "qw" && (
                      <ListItemCustom key={`${league.league.id}-Mod`}>
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
                            >
                              <IconButton
                                appearance="subtle"
                                color="blue"
                                size="xs"
                                icon={
                                  <MdModeEdit
                                    style={{ margin: "0 auto" }}
                                    size={"1.5em"}
                                  />
                                }
                                onClick={(e) => {
                                  handleEditLeague(league.league.id, "mod");
                                }}
                              />
                            </div>
                          </FlexboxGrid.Item>
                          <FlexboxGrid.Item colspan={3}>
                            <div
                              style={{
                                display: "flex",
                                width: "4em",
                              }}
                            >
                              <IconButton
                                appearance="subtle"
                                color="red"
                                size="xs"
                                icon={
                                  <MdExitToApp
                                    style={{ margin: "0 auto" }}
                                    size={"1.5em"}
                                  />
                                }
                                onClick={(e) => {
                                  handleLeaveLeague(league.id);
                                }}
                              />
                            </div>
                          </FlexboxGrid.Item>
                        </FlexboxGrid>
                      </ListItemCustom>
                    )
                  );
                })}
              </List>
            </div>
            <ButtonCustom
              onClick={() => {
                console.log("create Team");
                setOpenLeague(true);
              }}
            >
              Create New League
            </ButtonCustom>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={11}>
            <div>
              <label>Teams</label>
              <List hover={!showRequests}>
                <FlexboxGrid style={{ margin: 10 }} justify="space-between">
                  <FlexboxGrid.Item colspan={7}>Team</FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={4}>Role</FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={4}>League</FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={1}></FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={1}></FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={1}></FlexboxGrid.Item>
                </FlexboxGrid>
                {/**Member request */}

                {player &&
                  player?.requestsfromTeam?.items?.filter(
                    (request) => request.status === "pending"
                  )[0] && (
                    <ListItemCustom
                      // style={{
                      //   background: "rgba(30,100,200,.5)",
                      // }}
                      onClick={(e) => {
                        setShowRequests(!showRequests);
                      }}
                    >
                      <FlexboxGrid justify="space-around">
                        <FlexboxGrid.Item colspan={13}>
                          Request to join a team
                        </FlexboxGrid.Item>

                        <FlexboxGrid.Item colspan={1}>
                          <div
                            style={{
                              display: "flex",
                              width: "4em",
                            }}
                          >
                            <Animation.Bounce in={requestShow}>
                              <IconButton
                                appearance={"subtle"}
                                color="orange"
                                size="xs"
                                icon={
                                  <FaExclamation
                                    color="green"
                                    style={{ margin: "0 auto" }}
                                    size={"1.5em"}
                                  />
                                }
                                onClick={(e) => {
                                  setShowRequests(!showRequests);
                                }}
                              />
                            </Animation.Bounce>
                          </div>
                        </FlexboxGrid.Item>
                      </FlexboxGrid>
                      {showRequests && (
                        <Panel
                          header={"requests"}
                          style={{
                            background: "rgba(30,100,200,.3)",
                          }}
                        >
                          <List hover>
                            {player?.requestsfromTeam?.items
                              ?.filter(
                                (request) => request.status === "pending"
                              )
                              .map((request) => (
                                <ListItemCustom
                                  style={{
                                    padding: 10,
                                    background: "rgba(30,100,200,.1)",
                                  }}
                                >
                                  <FlexboxGrid justify="space=between">
                                    <FlexboxGrid.Item colspan={8}>
                                      {request.from?.name}
                                    </FlexboxGrid.Item>
                                    <FlexboxGrid.Item
                                      colspan={8}
                                    ></FlexboxGrid.Item>
                                    <FlexboxGrid.Item colspan={4}>
                                      <IconButton
                                        appearance="subtle"
                                        color="green"
                                        size="xs"
                                        icon={
                                          <BsCheckCircleFill
                                            color={"green"}
                                            style={{
                                              margin: "0 auto",
                                            }}
                                            size={"1.5em"}
                                          />
                                        }
                                        onClick={(e) => {
                                          setUpdateRequestFromTEam({
                                            id: request.id,
                                            status: "accepted",
                                          });
                                          // setCreateTeamMember({
                                          //   playerID: player.id,
                                          //   teamID: team.id,
                                          // });

                                          setCreateTeamMember({
                                            teamTeamMembershipsId:
                                              request.from.id,
                                            playerTeamMembershipsId: player.id,
                                          });
                                          setShowRequests(!showRequests);
                                        }}
                                      />
                                    </FlexboxGrid.Item>
                                    <FlexboxGrid.Item colspan={4}>
                                      <IconButton
                                        appearance="subtle"
                                        color="red"
                                        size="xs"
                                        icon={
                                          <BsFillXCircleFill
                                            // color={"red"}
                                            style={{
                                              margin: "0 auto",
                                            }}
                                            size={"1.5em"}
                                          />
                                        }
                                        onClick={(e) => {
                                          setUpdateRequestFromTEam({
                                            id: request.id,
                                            status: "declined",
                                          });
                                          setShowRequests(!showRequests);
                                        }}
                                      />
                                    </FlexboxGrid.Item>
                                  </FlexboxGrid>
                                </ListItemCustom>
                              ))}
                          </List>
                        </Panel>
                      )}
                    </ListItemCustom>
                  )}
                {/* Manager */}
                {player &&
                  player?.manages?.items
                    .filter((manages) => manages?.slogan !== "modTeam")
                    .map((team, index) => {
                      return (
                        <>
                          {team?.leagueMemberships?.items[0] &&
                            team?.requestsfromLeague?.items.filter(
                              (request) => request.status === "pending"
                            )[0] && (
                              //showRequests
                              <ListItemCustom
                                style={{
                                  background: "rgba(30,100,200,.5)",
                                }}
                                onClick={(e) => {
                                  setShowRequests(!showRequests);
                                }}
                                key={`${team.id}-Man${index}`}
                              >
                                <FlexboxGrid justify="space-around">
                                  <FlexboxGrid.Item colspan={7}>
                                    {team.name}
                                  </FlexboxGrid.Item>
                                  <FlexboxGrid.Item colspan={4}>
                                    Request
                                  </FlexboxGrid.Item>
                                  <FlexboxGrid.Item
                                    colspan={4}
                                  ></FlexboxGrid.Item>
                                  <FlexboxGrid.Item colspan={1}>
                                    {team?.requestsfromLeague?.items.filter(
                                      (request) => request.status === "pending"
                                    )[0] && (
                                      <div
                                        style={{
                                          display: "flex",
                                          width: "4em",
                                        }}
                                      >
                                        <Animation.Bounce in={requestShow}>
                                          <IconButton
                                            appearance={"subtle"}
                                            color="orange"
                                            size="xs"
                                            icon={
                                              <FaExclamation
                                                color="green"
                                                style={{ margin: "0 auto" }}
                                                size={"1.5em"}
                                              />
                                            }
                                            onClick={(e) => {
                                              setShowRequests(!showRequests);
                                            }}
                                          />
                                        </Animation.Bounce>
                                      </div>
                                    )}
                                  </FlexboxGrid.Item>
                                </FlexboxGrid>
                                {showRequests &&
                                  team?.requestsfromLeague?.items.filter(
                                    (request) => request.status === "pending"
                                  )[0] && (
                                    <Panel
                                      header={"requests"}
                                      style={{
                                        background: "rgba(30,100,200,.3)",
                                      }}
                                    >
                                      <List hover>
                                        {team?.requestsfromLeague?.items
                                          .filter(
                                            (request) =>
                                              request.status === "pending"
                                          )
                                          .map((request) => (
                                            <ListItemCustom
                                              style={{
                                                padding: 10,
                                                background:
                                                  "rgba(30,100,200,.1)",
                                              }}
                                            >
                                              <FlexboxGrid justify="space=between">
                                                <FlexboxGrid.Item colspan={8}>
                                                  {request.from.name}
                                                </FlexboxGrid.Item>
                                                <FlexboxGrid.Item colspan={8}>
                                                  {request.from.admin.name}
                                                </FlexboxGrid.Item>
                                                <FlexboxGrid.Item colspan={4}>
                                                  <IconButton
                                                    appearance="subtle"
                                                    color="green"
                                                    size="xs"
                                                    icon={
                                                      <BsCheckCircleFill
                                                        color={"green"}
                                                        style={{
                                                          margin: "0 auto",
                                                        }}
                                                        size={"1.5em"}
                                                      />
                                                    }
                                                    onClick={(e) => {
                                                      setUpdateRequestFromLeague(
                                                        {
                                                          id: request.id,
                                                          status: "accepted",
                                                        }
                                                      );
                                                      // setCreateTeamMember({
                                                      //   playerID: player.id,
                                                      //   teamID: team.id,
                                                      // });
                                                      setCreateTeamLeague({
                                                        teamLeagueMembershipsId:
                                                          team.id,
                                                        leagueLeagueMembershipsId:
                                                          request.from.id,
                                                      });
                                                      setShowRequests(
                                                        !showRequests
                                                      );
                                                    }}
                                                  />
                                                </FlexboxGrid.Item>
                                                <FlexboxGrid.Item colspan={4}>
                                                  <IconButton
                                                    appearance="subtle"
                                                    color="red"
                                                    size="xs"
                                                    icon={
                                                      <BsFillXCircleFill
                                                        // color={"red"}
                                                        style={{
                                                          margin: "0 auto",
                                                        }}
                                                        size={"1.5em"}
                                                      />
                                                    }
                                                    onClick={(e) => {
                                                      setUpdateRequestFromLeague(
                                                        {
                                                          id: request.id,
                                                          status: "declined",
                                                        }
                                                      );
                                                      setShowRequests(
                                                        !showRequests
                                                      );
                                                    }}
                                                  />
                                                </FlexboxGrid.Item>
                                              </FlexboxGrid>
                                            </ListItemCustom>
                                          ))}
                                      </List>
                                    </Panel>
                                  )}
                              </ListItemCustom>
                            )}
                          {team?.leagueMemberships?.items[0] ? (
                            team?.leagueMemberships?.items?.map(
                              (teamLeague, index) => (
                                <ListItemCustom
                                  key={`${"teamLeague.id"} ${index}`}
                                >
                                  <FlexboxGrid justify="space-around">
                                    <FlexboxGrid.Item colspan={7}>
                                      {team.name}
                                    </FlexboxGrid.Item>
                                    <FlexboxGrid.Item colspan={4}>
                                      Manager
                                    </FlexboxGrid.Item>
                                    <FlexboxGrid.Item colspan={4}>
                                      {teamLeague.league.name}
                                    </FlexboxGrid.Item>

                                    <FlexboxGrid.Item colspan={1}>
                                      <div
                                        style={{
                                          display: "flex",
                                          width: "4em",
                                        }}
                                      >
                                        <IconButton
                                          appearance="subtle"
                                          color="blue"
                                          size="xs"
                                          icon={
                                            <MdModeEdit
                                              style={{ margin: "0 auto" }}
                                              size={"1.5em"}
                                            />
                                          }
                                          onClick={(e) => {
                                            handleEditTeam(
                                              teamLeague.id,
                                              "manager",
                                              false
                                            );
                                          }}
                                        />
                                      </div>
                                    </FlexboxGrid.Item>
                                    <FlexboxGrid.Item colspan={1}>
                                      <div
                                        style={{
                                          display: "flex",
                                          width: "4em",
                                        }}
                                      >
                                        <IconButton
                                          appearance="subtle"
                                          color="red"
                                          size="xs"
                                          icon={
                                            <MdExitToApp
                                              style={{ margin: "0 auto" }}
                                              size={"1.5em"}
                                            />
                                          }
                                          onClick={(e) => {
                                            handleLeaveLeague(teamLeague.id);
                                            // handleDeleteTeam(team.id, "manager");
                                          }}
                                        />
                                      </div>
                                    </FlexboxGrid.Item>
                                  </FlexboxGrid>
                                </ListItemCustom>
                              )
                            )
                          ) : (
                            <ListItemCustom key={`${team.id}-Man${index}`}>
                              <FlexboxGrid justify="space-around">
                                <FlexboxGrid.Item colspan={7}>
                                  {team.name}
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item colspan={4}>
                                  Manager
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item
                                  colspan={4}
                                ></FlexboxGrid.Item>
                                <FlexboxGrid.Item colspan={1}>
                                  {team?.requestsfromLeague?.items.filter(
                                    (request) => request.status === "pending"
                                  )[0] && (
                                    <div
                                      style={{
                                        display: "flex",
                                        width: "4em",
                                      }}
                                    >
                                      <Animation.Bounce in={requestShow}>
                                        <IconButton
                                          appearance={"subtle"}
                                          color="orange"
                                          size="xs"
                                          icon={
                                            <FaExclamation
                                              color="green"
                                              style={{ margin: "0 auto" }}
                                              size={"1.5em"}
                                            />
                                          }
                                          onClick={(e) => {
                                            setShowRequests(!showRequests);
                                          }}
                                        />
                                      </Animation.Bounce>
                                    </div>
                                  )}
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item colspan={1}>
                                  <div
                                    style={{
                                      display: "flex",
                                      width: "4em",
                                    }}
                                  >
                                    <IconButton
                                      appearance="subtle"
                                      color="blue"
                                      size="xs"
                                      icon={
                                        <MdModeEdit
                                          style={{ margin: "0 auto" }}
                                          size={"1.5em"}
                                        />
                                      }
                                      onClick={(e) => {
                                        handleEditTeam(
                                          team.id,
                                          "managerNoLeague",
                                          false
                                        );
                                      }}
                                    />
                                  </div>
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item colspan={1}>
                                  <div
                                    style={{
                                      display: "flex",
                                      width: "4em",
                                    }}
                                  >
                                    <IconButton
                                      appearance="subtle"
                                      color="red"
                                      size="xs"
                                      icon={
                                        <MdDelete
                                          style={{ margin: "0 auto" }}
                                          size={"1.5em"}
                                        />
                                      }
                                      onClick={(e) => {
                                        handleDeleteTeam(team.id, "manager");
                                      }}
                                    />
                                  </div>
                                </FlexboxGrid.Item>
                              </FlexboxGrid>
                              {showRequests &&
                                team?.requestsfromLeague?.items.filter(
                                  (request) => request.status === "pending"
                                )[0] && (
                                  <Panel
                                    header={"requests"}
                                    style={{
                                      background: "rgba(30,100,200,.3)",
                                    }}
                                  >
                                    <List hover>
                                      {team?.requestsfromLeague?.items
                                        .filter(
                                          (request) =>
                                            request.status === "pending"
                                        )
                                        .map((request) => (
                                          <ListItemCustom
                                            style={{
                                              padding: 10,
                                              background: "rgba(30,100,200,.1)",
                                            }}
                                          >
                                            <FlexboxGrid justify="space=between">
                                              <FlexboxGrid.Item colspan={8}>
                                                {request.from.name}
                                              </FlexboxGrid.Item>
                                              <FlexboxGrid.Item colspan={8}>
                                                {request.from.admin.name}
                                              </FlexboxGrid.Item>
                                              <FlexboxGrid.Item colspan={4}>
                                                <IconButton
                                                  appearance="subtle"
                                                  color="green"
                                                  size="xs"
                                                  icon={
                                                    <BsCheckCircleFill
                                                      color={"green"}
                                                      style={{
                                                        margin: "0 auto",
                                                      }}
                                                      size={"1.5em"}
                                                    />
                                                  }
                                                  onClick={(e) => {
                                                    setUpdateRequestFromLeague({
                                                      id: request.id,
                                                      status: "accepted",
                                                    });
                                                    // setCreateTeamMember({
                                                    //   playerID: player.id,
                                                    //   teamID: team.id,
                                                    // });
                                                    setCreateTeamLeague({
                                                      teamLeagueMembershipsId:
                                                        team.id,
                                                      leagueLeagueMembershipsId:
                                                        request.from.id,
                                                    });
                                                    setShowRequests(
                                                      !showRequests
                                                    );
                                                  }}
                                                />
                                              </FlexboxGrid.Item>
                                              <FlexboxGrid.Item colspan={4}>
                                                <IconButton
                                                  appearance="subtle"
                                                  color="red"
                                                  size="xs"
                                                  icon={
                                                    <BsFillXCircleFill
                                                      // color={"red"}
                                                      style={{
                                                        margin: "0 auto",
                                                      }}
                                                      size={"1.5em"}
                                                    />
                                                  }
                                                  onClick={(e) => {
                                                    setUpdateRequestFromLeague({
                                                      id: request.id,
                                                      status: "declined",
                                                    });
                                                    setShowRequests(
                                                      !showRequests
                                                    );
                                                  }}
                                                />
                                              </FlexboxGrid.Item>
                                            </FlexboxGrid>
                                          </ListItemCustom>
                                        ))}
                                    </List>
                                  </Panel>
                                )}
                            </ListItemCustom>
                          )}
                        </>
                      );
                    })}
                {/* Captain */}
                {player?.captains?.items
                  ?.filter((captains) => captains.slogan !== "modTeam")
                  .map((team, index) => {
                    return (
                      team.team.status !== "qw" && (
                        <ListItemCustom key={`${team.team.id}-Man${index}`}>
                          <FlexboxGrid justify="space-between">
                            <FlexboxGrid.Item colspan={7}>
                              {team.team.name}
                            </FlexboxGrid.Item>
                            <FlexboxGrid.Item colspan={7}>
                              Captain
                            </FlexboxGrid.Item>
                            <FlexboxGrid.Item colspan={3}></FlexboxGrid.Item>
                            <FlexboxGrid.Item colspan={3}>
                              <div
                                style={{
                                  display: "flex",
                                  width: "4em",
                                }}
                                onClick={(e) => {
                                  handleEditTeam(
                                    team.team.id,
                                    "captain",
                                    false
                                  );
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
                        </ListItemCustom>
                      )
                    );
                  })}
                {/* Member */}

                {player?.teamMemberships?.items
                  ?.filter((membership) => membership.team !== null)
                  ?.filter(
                    (membership) => membership?.team?.slogan !== "modTeam"
                  )
                  .filter(
                    (membership) =>
                      membership?.team?.playerManagesId !== player.id
                  )
                  .map((team, index) => {
                    console.log("index", team.team.leagueMemberships);
                    return team.team.leagueMemberships.items.map(
                      (membership, index) =>
                        team.team.status !== "qw" && (
                          <ListItemCustom key={`${team.team.id}-Man${index}`}>
                            <FlexboxGrid justify="space-around">
                              <FlexboxGrid.Item colspan={7}>
                                {team.team.name}
                              </FlexboxGrid.Item>
                              <FlexboxGrid.Item colspan={4}>
                                Member
                              </FlexboxGrid.Item>
                              <FlexboxGrid.Item colspan={4}>
                                {membership.league?.name}
                              </FlexboxGrid.Item>
                              <FlexboxGrid.Item colspan={1}></FlexboxGrid.Item>
                              <FlexboxGrid.Item colspan={1}>
                                <div
                                  style={{
                                    display: "flex",
                                    width: "4em",
                                  }}
                                >
                                  <IconButton
                                    appearance="subtle"
                                    color="blue"
                                    size="xs"
                                    icon={
                                      <MdModeEdit
                                        style={{ margin: "0 auto" }}
                                        size={"1.5em"}
                                      />
                                    }
                                    onClick={(e) => {
                                      handleEditTeam(
                                        membership.id,
                                        "member",
                                        player.id
                                      );
                                    }}
                                  />
                                </div>
                              </FlexboxGrid.Item>
                              <FlexboxGrid.Item colspan={1}>
                                <div
                                  style={{
                                    display: "flex",
                                    width: "4em",
                                  }}
                                >
                                  <IconButton
                                    appearance="subtle"
                                    color="red"
                                    size="xs"
                                    icon={
                                      <MdExitToApp
                                        style={{ margin: "0 auto" }}
                                        size={"1.5em"}
                                      />
                                    }
                                    onClick={(e) => {
                                      handleLeaveTeam(team.id, "member");
                                    }}
                                  />
                                </div>
                              </FlexboxGrid.Item>
                            </FlexboxGrid>
                          </ListItemCustom>
                        )
                    );
                  })}
              </List>
            </div>
            <ButtonCustom
              onClick={() => {
                console.log("create Team");
                setOpenTeam(true);
              }}
            >
              Create New Team
            </ButtonCustom>
          </FlexboxGrid.Item>
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
