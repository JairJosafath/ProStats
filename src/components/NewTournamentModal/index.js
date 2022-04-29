import { useState } from "react";
import { Button, FlexboxGrid, Input, Modal } from "rsuite";

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
  const handleClose = () => {
    setOpen(false);
    setValueAbout("");
    setValueName("");
  };
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
    setValueAbout("");
    setValueName("");
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

export default NewTournamentModal;
