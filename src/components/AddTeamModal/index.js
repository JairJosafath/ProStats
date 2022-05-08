import { useState } from "react";
import { Button, Dropdown, FlexboxGrid, Modal } from "rsuite";

const AddTeamModal = ({
  open,
  setOpen,
  setTournamentAddTeam,
  league,
  tournament,
  setAddTeamTrigger,
  setShowConfirmModal,
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
    setShowConfirmModal({ type: "team", action: "add" });
    setAddTeamTrigger({
      teamID: selected.id,
      tournamentID: tournament?.id,
    });

    // console.log("league inofo", league);

    //console.log(`tourney\nname: ${valueName}, slogan: ${valueAbout}`);
    // console.log("created", createdTeam);
    setSelected();
    setOpen(false);
    setSelected();
  };

  const leagueteams = league?.leagueMemberships?.items;
  const tourneyteams = tournament?.team?.items;
  const chooseteams = leagueteams
    ?.filter((team) => {
      for (let i = 0; i < tourneyteams?.length; i++) {
        if (team.team.id === tourneyteams[i]?.team.id) return false;
      }
      return true;
    })
    .filter((team) => team.team.slogan !== "modTeam");

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
export default AddTeamModal;
