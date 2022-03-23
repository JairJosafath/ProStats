import { useOutletContext } from "react-router-dom";
import { Button, FlexboxGrid, Input, List, Modal, Panel } from "rsuite";
import { useState, useEffect } from "react";
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

const LTournaments = () => {
  const { league, setLeague, createTournament, setCreateTournament } =
    useOutletContext();
  const [openTournament, setOpenTournament] = useState(false);
  const [tournament, setTournament] = useState("");
  console.log("in tournaments", league?.tournaments.items);
  return (
    <>
      <FlexboxGrid justify="space-around">
        <FlexboxGrid.Item colspan={8}>
          <Panel header="Tournaments" shaded>
            <List hover>
              {league &&
                league?.tournaments.items.map((tournament, index) => (
                  <List.Item
                    key={index}
                    onClick={() => setTournament(tournament)}
                  >
                    {tournament.name}
                  </List.Item>
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
          <Panel header={tournament.name} bordered></Panel>
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <NewTournamentModal
        open={openTournament}
        setOpen={setOpenTournament}
        setCreateTournament={setCreateTournament}
        league={league}
      />
    </>
  );
};

export default LTournaments;
