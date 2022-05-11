import {
  Button,
  FlexboxGrid,
  IconButton,
  Input,
  List,
  Modal,
  Panel,
  Tooltip,
  Whisper,
} from "rsuite";
import { MdCancel } from "react-icons/md";
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { apiSettings, apiSettingsTD } from "../../../API/API";
import { MdModeEdit, MdDelete, MdExitToApp } from "react-icons/md";
import PlayerList from "../../../components/PlayerList";
import ListItemCustom from "../../../components/ListCustom";
import Confirmation from "../../../components/Confirmation";
import Error from "../../../components/Error";

const NewRequest = ({
  setOpen,
  open,
  setCreateRequestFromTeamToPlayer,
  teamID,
  setGetUsernameTeamReq,
  username,
  setAddPlayerTrigger,
  setShowConfirmModal,
}) => {
  const [playerId, setPlayerId] = useState("");
  const [searchPlayer, setSearchPlayer] = useState(false);
  useEffect(() => {
    if (searchPlayer) {
      setPlayerId(playerId);
      // if (searchPlayer) {
      //   const search = async () => {
      //     apiSettingsTD
      //       .getPlayerUsername(playerId)
      //       .then((data) => {
      //         console.log("the player is", data);
      //       })
      //       .catch(() => {
      //         console.log("error");
      //       });
      //   };
      //   search();
      //   setOpen(false);
      // }
      // console.log(username, "is the username");
      // console.log("id", playerId);

      // setGetUsernameTeamReq({
      //   playerId,
      //   status: "pending",
      //   teamRequeststoPlayerId: teamID,
      // });
      setAddPlayerTrigger({
        playerId,
        status: "pending",
        teamRequeststoPlayerId: teamID,
      });

      // if (username)
      //   setCreateRequestFromTeamToPlayer({
      //     status: "pending",
      //     teamRequeststoPlayerId: teamID,
      //     playerRequestsfromTeamId: playerId,
      //     members: [username],
      //   });
      setSearchPlayer(false);
      setOpen(false);
    }
  }, [searchPlayer]);

  return (
    <>
      <Modal open={open}>
        <Modal.Body>
          <Input
            value={playerId}
            onChange={setPlayerId}
            placeholder="Player ID"
          ></Input>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setSearchPlayer(true);
              setOpen(true);
              setShowConfirmModal({ type: "player", action: "add" });
            }}
          >
            Add
          </Button>
          <Button
            onClick={() => {
              setPlayerId("");
              setOpen(false);
            }}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
const TPlayers = () => {
  const {
    team,
    setCreateRequestFromTeamToPlayer,
    setGetUsernameTeamReq,
    setGetTeamRequests,
    teamRequests,
    setDeleteRequestFromTeamToPlayer,
    setGetUsername,
    setUpdateTeam,
    setDeleteTeamMember,
    username,
    error,
    setError,
  } = useOutletContext();
  const [open, setOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [addPlayerTrigger, setAddPlayerTrigger] = useState(false);
  const [deletePlayerRequestTrigger, setDeletePlayerRequestTrigger] =
    useState(false);

  console.log(team, "team");
  useEffect(() => {
    setGetTeamRequests(team?.id);
  }, [team]);

  useEffect(() => {
    if (confirm && addPlayerTrigger) {
      setGetUsernameTeamReq(addPlayerTrigger);
    }
    setAddPlayerTrigger(false);
    if (confirm && deletePlayerRequestTrigger) {
      setDeleteRequestFromTeamToPlayer(deletePlayerRequestTrigger);
    }
    setAddPlayerTrigger(false);
    setConfirm(false);
  }, [confirm]);
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
      {open && (
        <NewRequest
          open={open}
          setOpen={setOpen}
          setCreateRequestFromTeamToPlayer={setCreateRequestFromTeamToPlayer}
          teamID={team?.id}
          setGetUsernameTeamReq={setGetUsernameTeamReq}
          username={username}
          setShowConfirmModal={setShowConfirmModal}
          setAddPlayerTrigger={setAddPlayerTrigger}
        />
      )}
      <div style={{ display: "flex" }}>
        <div style={{ flex: "1.4", margin: 10 }}>
          <h5>{"players in " + team?.name}</h5>
          <PlayerList
            team={team}
            setUpdateTeam={setUpdateTeam}
            setDeleteTeamMember={setDeleteTeamMember}
          />
        </div>

        <Panel style={{ flex: "1" }} header={"Requests"}>
          <Whisper
            placement="right"
            controlId="control-id-hover"
            trigger="hover"
            speaker={<Tooltip>Add a new Player, send a request</Tooltip>}
          >
            <IconButton
              appearance="primary"
              color="green"
              size={"xs"}
              icon={<AiOutlinePlus size={38} />}
              circle
              onClick={() => {
                // console.log(open);
                setOpen(true);
                // console.log("after", open);
              }}
            />
          </Whisper>
          <FlexboxGrid justify="space-between">
            <FlexboxGrid.Item colspan={6}>Player</FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={6}>Username</FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={6}>Status</FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={1}></FlexboxGrid.Item>
          </FlexboxGrid>
          <List hover style={{ marginTop: 10 }}>
            {teamRequests?.requeststoPlayer?.items?.map((request) => (
              <>
                <ListItemCustom key={request.id}>
                  <FlexboxGrid justify="space-between">
                    <FlexboxGrid.Item colspan={6}>
                      {request.to.name}
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={6}>
                      {request.to?.manager?.name}
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={6}>
                      {request.status}
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={1}>
                      <IconButton
                        onClick={() => {
                          setShowConfirmModal({
                            type: "request",
                            action:
                              request?.status === "pending"
                                ? "cancel"
                                : "delete",
                          });
                          setDeletePlayerRequestTrigger({ id: request.id });
                          // setDeleteRequestFromTeamToPlayer({ id: request.id });
                        }}
                        appearance="subtle"
                        size={"xs"}
                        icon={<MdCancel />}
                      />
                    </FlexboxGrid.Item>
                  </FlexboxGrid>
                </ListItemCustom>
              </>
            ))}
          </List>
        </Panel>
      </div>
    </>
  );
};

export default TPlayers;
