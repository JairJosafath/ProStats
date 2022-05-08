import { useOutletContext } from "react-router-dom";
import {
  Button,
  Dropdown,
  FlexboxGrid,
  IconButton,
  Input,
  List,
  Modal,
  Panel,
} from "rsuite";
import { useState, useEffect } from "react";
import DropdownItem from "rsuite/esm/Dropdown/DropdownItem";
import { MdModeEdit, MdDelete, MdExitToApp } from "react-icons/md";
import { map } from "rsuite/esm/utils/ReactChildren";
import ListItemCustom from "../../../components/ListCustom";
import NewTournamentModal from "../../../components/NewTournamentModal";
import AddTeamModal from "../../../components/AddTeamModal";
import NewTrophyModal from "../../../components/NewTrophyModal";
import UpdateTrophyModal from "../../../components/UpdateTrophyModal";
import Confirmation from "../../../components/Confirmation";
import Error from "../../../components/Error";

const LTournaments = () => {
  const {
    league,
    setLeague,
    createTournament,
    setCreateTournament,
    setTournamentAddTeam,
    setTournamentRemoveTeam,
    setCreateTrophy,
    tournament,
    setTournament,
    setDeleteTournament,
    setDeleteTrophy,
    setUpdateTrophy,
    confirm,
    setConfirm,
    setError,
    error,
  } = useOutletContext();
  const [openTournament, setOpenTournament] = useState(false);
  const [openTournamentAdd, setOpenTournamentAdd] = useState(false);
  const [openCreateTrophy, setOpenCreateTrophy] = useState(false);
  const [openUpdateTrophy, setOpenUpdateTrophy] = useState(false);
  const [trophy, setTrophy] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [addTeamTrigger, setAddTeamTrigger] = useState(false);
  const [removeTeamTrigger, setRemoveTeamTrigger] = useState(false);
  const [newTournamentTrigger, setNewTournamentTrigger] = useState(false);
  const [deleteTournamentTrigger, setDeleteTournamentTrigger] = useState(false);

  useEffect(() => {
    if (addTeamTrigger && confirm) {
      //add team

      // console.log("test", addTeamTrigger, confirm);
      setTournamentAddTeam(addTeamTrigger);
      setAddTeamTrigger(false);
    }
    setAddTeamTrigger(false);

    if (removeTeamTrigger && confirm) {
      //remove team
      removeTeamHandle(removeTeamTrigger);
      setRemoveTeamTrigger(false);
    }
    setRemoveTeamTrigger(false);

    if (newTournamentTrigger && confirm) {
      //new tournamentm
      setCreateTournament(newTournamentTrigger);
      setNewTournamentTrigger(false);
    }
    setNewTournamentTrigger(false);
    if (deleteTournamentTrigger && confirm) {
      //delete tournamentm
      handleDeleteTOurnament(
        deleteTournamentTrigger?.id,
        deleteTournamentTrigger?.teams
      );
      setDeleteTournamentTrigger(false);
    }
    setDeleteTournamentTrigger(false);
  }, [confirm]);

  useEffect(() => {
    const tourn = league?.tournaments?.items?.filter(
      (tournamenttemp) => tournament?.id === tournamenttemp?.id
    );
    setTournament(tourn && tourn[0]);
  }, [league]);
  // console.log("in tournaments, show teams", tournament);

  const handleDeleteTOurnament = (id, teams) => {
    setDeleteTournament({ id, teams: teams });
  };

  const removeTeamHandle = (id) => {
    setTournamentRemoveTeam({
      id: id,
    });
  };
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
      <div style={{ width: "100%" }}>
        <FlexboxGrid justify="space-around">
          <FlexboxGrid.Item colspan={8}>
            <Panel
              style={{ minHeight: "40vh" }}
              header={
                league ? (
                  <>
                    <h5>{league?.name}</h5> Tournaments
                  </>
                ) : (
                  "Tournaments"
                )
              }
              shaded
            >
              <List hover style={{ margin: 4 }}>
                {league &&
                  league?.tournaments.items.map((tournament1, index) => (
                    <ListItemCustom
                      isSelected={tournament?.id === tournament1?.id}
                      key={index}
                      onClick={() => setTournament(tournament1)}
                    >
                      <FlexboxGrid justify="space-between">
                        {/* <FlexboxGrid.Item></FlexboxGrid.Item> */}

                        <FlexboxGrid.Item style={{ marginLeft: 10 }}>
                          {tournament1?.name}
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item style={{ marginRight: 10 }}>
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
                              // console.log(tournament?.team.items);
                              setShowConfirmModal({
                                type: "tournament",
                                action: "delete",
                              });
                              setDeleteTournamentTrigger({
                                id: tournament1?.id,
                                teams: tournament1?.team.items,
                              });
                              // handleDeleteTOurnament(
                              //   tournament1?.id,
                              //   tournament1?.team.items
                              // );
                            }}
                          />
                        </FlexboxGrid.Item>
                      </FlexboxGrid>
                    </ListItemCustom>
                  ))}
              </List>
              <Button
                onClick={() => {
                  console.log("NT");
                  setOpenTournament(true);
                }}
              >
                Add New Tournament
              </Button>
            </Panel>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={15}>
            <Panel
              style={{ minHeight: "40vh", maxHeight: "40em" }}
              header={tournament?.name}
              shaded
            >
              <List hover>
                {tournament &&
                  tournament?.team?.items?.map((team) => (
                    <ListItemCustom key={team.id}>
                      <FlexboxGrid justify="space-between">
                        <FlexboxGrid.Item style={{ marginLeft: 10 }}>
                          {team.team.name}
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item style={{ marginRight: 10 }}>
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
                            onClick={() => {
                              console.log(
                                "remove %s with id %s",
                                team.team.name,
                                team.id
                              );
                              setShowConfirmModal({
                                type: "team",
                                action: "remove",
                              });
                              setRemoveTeamTrigger(team.id);
                            }}
                          />
                        </FlexboxGrid.Item>
                      </FlexboxGrid>
                    </ListItemCustom>
                  ))}
              </List>
              <Button
                onClick={() => {
                  setOpenTournamentAdd(true);
                }}
              >
                Add Team
              </Button>
            </Panel>
          </FlexboxGrid.Item>
        </FlexboxGrid>{" "}
        <FlexboxGrid>
          <FlexboxGrid.Item>
            {/* <Panel style={{ minWidth: "30vw" }} shaded header={"trophies"}>
            <List>
              {tournament?.trophies?.items.map((trophy, index) => (
                <ListItemCustom key={index}>
                  <FlexboxGrid justify="space-between">
                    <FlexboxGrid.Item colspan={7} style={{ marginLeft: 10 }}>
                      {trophy.name}
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={7}>
                      <p>{trophy.description}</p>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={3}>
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
                          setTrophy(trophy);
                          setOpenUpdateTrophy(true);
                        }}
                      />
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item style={{ marginRight: 10 }} colspan={3}>
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
                          setDeleteTrophy({ id: trophy.id });
                        }}
                      />
                    </FlexboxGrid.Item>
                  </FlexboxGrid>
                </ListItemCustom>
              ))}
            </List>
            <Button
              onClick={() => {
                setOpenCreateTrophy(true);
              }}
            >
              Create Trophy
            </Button>
          </Panel> */}
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </div>

      <NewTournamentModal
        open={openTournament}
        setOpen={setOpenTournament}
        setCreateTournament={setCreateTournament}
        league={league}
        setNewTournamentTrigger={setNewTournamentTrigger}
        setShowConfirmModal={setShowConfirmModal}
      />
      <AddTeamModal
        open={openTournamentAdd}
        setOpen={setOpenTournamentAdd}
        setTournamentAddTeam={setTournamentAddTeam}
        league={league}
        tournament={tournament}
        setAddTeamTrigger={setAddTeamTrigger}
        setShowConfirmModal={setShowConfirmModal}
      />
      <NewTrophyModal
        open={openCreateTrophy}
        setOpen={setOpenCreateTrophy}
        setCreateTrophy={setCreateTrophy}
        tournament={tournament}
        league={league}
      />
      <UpdateTrophyModal
        open={openUpdateTrophy}
        setOpen={setOpenUpdateTrophy}
        setUpdateTrophy={setUpdateTrophy}
        tournament={tournament}
        league={league}
        trophy={trophy}
      />
    </>
  );
};

export default LTournaments;
