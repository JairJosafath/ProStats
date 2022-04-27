import { useOutletContext } from "react-router-dom";
import {
  Button,
  Dropdown,
  FlexboxGrid,
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

const NewTournamentModal = ({ open, setOpen, setCreateTournament, league }) => {
  const [overflow, setOverflow] = useState(true);
  // const [file, setFile] = useState(null);
  const [valueName, setValueName] = useState("");
  const [valueAbout, setValueAbout] = useState("");
  const [create, setCreate] = useState(false);
  const [tournament, setTournament] = useState({
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
    setCreateTournament({
      name: valueName,
      slogan: valueAbout,
      leagueTournamentsId: league.id,
    });

    // console.log("league inofo", league);

    console.log(`tourney\nname: ${valueName}, slogan: ${valueAbout}`);
    // console.log("created", createdTeam);
    setOpen(false);
    setCreate(false);
  };

  return (
    <div className="modal-container">
      <Modal overflow={true} open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Create New Tournament</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FlexboxGrid justify="space-around">
            <FlexboxGrid.Item colspan={6}></FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={6}>
              {/* <UploadPhotoCustom source={``} setFile={setFile} file={file} /> */}
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={10}>
              <div>
                <label>Tournament Name</label>
                <Input
                  placeholder={"Tournament name ..."}
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
const AddTeamModal = ({
  open,
  setOpen,
  setTournamentAddTeam,
  league,
  tournament,
}) => {
  // const { createdTeam, loadingCreateTeam, errorCreateTeam } =
  //   useCreateTeam(team);
  const [selected, setSelected] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSelected();
  };

  const handleOK = () => {
    setTournamentAddTeam({
      teamID: selected.id,
      tournamentID: tournament.id,
    });

    // console.log("league inofo", league);

    //console.log(`tourney\nname: ${valueName}, slogan: ${valueAbout}`);
    // console.log("created", createdTeam);
    setSelected();
    setOpen(false);
    setSelected();
  };

  const leagueteams = league?.teams?.items;
  const tourneyteams = tournament?.team?.items;
  const chooseteams = leagueteams?.filter((team) => {
    for (let i = 0; i < tourneyteams?.length; i++) {
      if (team.team.id === tourneyteams[i]?.team.id) return false;
    }
    return true;
  });

  return (
    <div className="modal-container">
      <Modal overflow={false} open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Add Team</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FlexboxGrid justify="space-around">
            <FlexboxGrid.Item colspan={12}>
              <Dropdown title={selected ? selected.name : "Add Team"}>
                {chooseteams?.map((team, index) => (
                  <Dropdown.Item
                    key={index}
                    onClick={() => setSelected(team.team)}
                  >
                    {team.team.name}
                  </Dropdown.Item>
                ))}
              </Dropdown>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={3}>
              {/* <UploadPhotoCustom source={``} setFile={setFile} file={file} /> */}
            </FlexboxGrid.Item>
            {/* <FlexboxGrid.Item colspan={10}>
              <div>
                <label>Tournament Name</label>
                <Input placeholder={"Tournament name ..."} />
              </div>

              <div>
                <label>About</label>
                <Input placeholder={"Slogan or anything really ..."} />
              </div>
            </FlexboxGrid.Item> */}
          </FlexboxGrid>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              if (selected) handleOK();
            }}
            appearance="primary"
          >
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

const NewTrophyModal = ({ open, setOpen, setCreateTrophy, tournament }) => {
  const [overflow, setOverflow] = useState(true);
  // const [file, setFile] = useState(null);
  const [valueName, setValueName] = useState("");
  const [valueAbout, setValueAbout] = useState("");
  const [create, setCreate] = useState(false);

  // const { createdTeam, loadingCreateTeam, errorCreateTeam } =
  //   useCreateTeam(team);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOK = () => {
    setCreateTrophy({
      name: valueName,
      description: valueAbout,
      tournamentTrophiesId: tournament.id,
    });

    // console.log("league inofo", league);

    console.log(`trophy\nname: ${valueName}, slogan: ${valueAbout}`);
    // console.log("created", createdTeam);
    setOpen(false);
    setCreate(false);
  };

  return (
    <div className="modal-container">
      <Modal overflow={true} open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Create New Trophy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FlexboxGrid justify="space-around">
            <FlexboxGrid.Item colspan={6}></FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={6}>
              {/* <UploadPhotoCustom source={``} setFile={setFile} file={file} /> */}
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={10}>
              <div>
                <label>Trophy Name</label>
                <Input
                  placeholder={"Trophy name ..."}
                  onChange={setValueName}
                  value={valueName}
                />
              </div>

              <div>
                <label>Description</label>
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
  } = useOutletContext();
  const [openTournament, setOpenTournament] = useState(false);
  const [openTournamentAdd, setOpenTournamentAdd] = useState(false);
  const [openCreateTrophy, setOpenCreateTrophy] = useState(false);

  useEffect(() => {
    const tourn = league?.tournaments?.items?.filter(
      (tournamenttemp) => tournament?.id === tournamenttemp?.id
    );
    setTournament(tourn && tourn[0]);
  }, [league]);
  // console.log("in tournaments, show teams", tournament);

  const removeTeamHandle = (id) => {
    setTournamentRemoveTeam({
      id: id,
    });
  };
  return (
    <>
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
            <List hover>
              {league &&
                league?.tournaments.items.map((tournament, index) => (
                  <ListItemCustom
                    key={index}
                    onClick={() => setTournament(tournament)}
                  >
                    <FlexboxGrid>
                      <FlexboxGrid.Item>{tournament.name}</FlexboxGrid.Item>
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
            style={{ minHeight: "40vh" }}
            header={tournament?.name}
            bordered
          >
            <List hover>
              {tournament &&
                tournament?.team?.items?.map((team) => (
                  <ListItemCustom key={team.id}>
                    <FlexboxGrid justify="space-between">
                      <FlexboxGrid.Item>{team.team.name}</FlexboxGrid.Item>
                      <FlexboxGrid.Item>
                        <div style={{ display: "flex" }}>
                          {/* <div
                            style={{ flex: 1, marginLeft: 5, marginRight: 5 }}
                          >
                            <MdModeEdit
                              style={{ margin: "0 auto" }}
                              size={"1.5em"}
                            />
                          </div> */}
                          <div
                            style={{
                              padding: 5,
                              flex: 1,
                              marginLeft: 5,
                              marginRight: 5,
                            }}
                            onClick={() => {
                              console.log(
                                "remove %s with id %s",
                                team.team.name,
                                team.id
                              );
                              removeTeamHandle(team.id);
                            }}
                          >
                            <MdDelete
                              style={{ margin: "0 auto" }}
                              size={"1.5em"}
                            />
                          </div>
                        </div>
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
          <Panel style={{ minWidth: "30vw" }} shaded header={"trophies"}>
            <List>
              {tournament?.trophies?.items.map((trophy, index) => (
                <ListItemCustom key={index}>
                  <FlexboxGrid justify="space-between">
                    <FlexboxGrid.Item>{trophy.name}</FlexboxGrid.Item>
                    <FlexboxGrid.Item>{trophy.description}</FlexboxGrid.Item>
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
          </Panel>
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <NewTournamentModal
        open={openTournament}
        setOpen={setOpenTournament}
        setCreateTournament={setCreateTournament}
        league={league}
      />
      <AddTeamModal
        open={openTournamentAdd}
        setOpen={setOpenTournamentAdd}
        setTournamentAddTeam={setTournamentAddTeam}
        league={league}
        tournament={tournament}
      />
      <NewTrophyModal
        open={openCreateTrophy}
        setOpen={setOpenCreateTrophy}
        setCreateTrophy={setCreateTrophy}
        tournament={tournament}
      />
    </>
  );
};

export default LTournaments;
