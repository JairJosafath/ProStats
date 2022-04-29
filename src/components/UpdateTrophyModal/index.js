import { useEffect, useState } from "react";
import { Button, FlexboxGrid, Input, Modal } from "rsuite";
import { apiSettings } from "../../API/API";
import UploadTrophyCustom from "../TrophyUpload";

const UpdateTrophyModal = ({
  open,
  setOpen,
  setUpdateTrophy,
  tournament,
  league,
  trophy,
}) => {
  const [overflow, setOverflow] = useState(true);
  // const [file, setFile] = useState(null);
  const [valueName, setValueName] = useState("");
  const [valueAbout, setValueAbout] = useState("");
  const [create, setCreate] = useState(false);
  const [file, setFile] = useState();

  // const { createdTeam, loadingCreateTeam, errorCreateTeam } =
  //   useCreateTeam(team);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setValueAbout("");
    setValueName("");
  };
  const handleOK = () => {
    if (file) {
      apiSettings.putImageTournament(
        league?.name,
        league?.id,
        tournament?.name,
        tournament?.id,
        file
      );

      setUpdateTrophy({
        id: trophy.id,
        name: valueName,
        description: valueAbout,
        tournamentTrophiesId: tournament?.id,
        image: file
          ? `${league?.name}/${league?.id}/tournaments/${tournament?.name}/${tournament?.id}/avatars/${file.name}`
          : tournament?.image,
      });
    } else {
      setUpdateTrophy({
        id: trophy.id,

        name: valueName,
        description: valueAbout,
        tournamentTrophiesId: tournament?.id,
      });
    }

    // console.log("league inofo", league);

    console.log(`trophy\nname: ${valueName}, slogan: ${valueAbout}`);
    // console.log("created", createdTeam);
    setOpen(false);
    setCreate(false);
    setValueAbout("");
    setValueName("");
  };

  useEffect(() => {
    setValueAbout(trophy?.description);
    setValueName(trophy?.name);
    console.log(trophy);
    console.log(league);
  }, [trophy, open]);

  return (
    <div className="modal-container">
      <Modal overflow={true} open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Create New Trophy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FlexboxGrid justify="space-around">
            <FlexboxGrid.Item colspan={6}>
              <UploadTrophyCustom
                trophy={trophy}
                file={file}
                setFile={setFile}
              />
            </FlexboxGrid.Item>
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
export default UpdateTrophyModal;
