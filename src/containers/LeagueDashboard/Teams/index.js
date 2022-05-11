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
import ListItemCustom from "../../../components/ListCustom";
import Confirmation from "../../../components/Confirmation";
import Error from "../../../components/Error";

const NewRequest = ({
  setOpen,
  open,
  setCreateRequestFromLeagueToTeam,
  leagueID,
  setGetUsername,
  username,
  setGetUsernameLeagueReq,
  addTeamTrigger,
  setAddTeamTrigger,
  setShowConfirmModal,
}) => {
  const [teamId, setTeamId] = useState("");
  const [searchPlayer, setSearchPlayer] = useState(false);
  useEffect(() => {
    if (searchPlayer) {
      setTeamId(teamId);
      // if (searchPlayer) {
      //   const search = async () => {
      //     apiSettingsTD
      //       .getPlayerUsername(teamId)
      //       .then((data) => {
      // console.log("the player is", data);
      //       })
      //       .catch(() => {
      // console.log("error");
      //       });
      //   };
      //   search();
      //   setOpen(false);
      // }
      // console.log(username, "is the username");
      // console.log("this is the object request", {
      //   status: "pending",
      //   leagueRequeststoTeamId: leagueID,
      //   teamRequestsfromLeagueId: teamId,
      // });

      // setGetUsernameLeagueReq({
      //   status: "pending",
      //   leagueRequeststoTeamId: leagueID,
      //   teamRequestsfromLeagueId: teamId,
      // });

      setAddTeamTrigger({
        status: "pending",
        leagueRequeststoTeamId: leagueID,
        teamRequestsfromLeagueId: teamId,
      });

      // if (username)
      //   setCreateRequestFromTeamToPlayer({
      //     status: "pending",
      //     teamRequeststoTeamId: teamID,
      //     playerRequestsfromTeamId: teamId,
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
            value={teamId}
            onChange={setTeamId}
            placeholder="Team ID"
          ></Input>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setSearchPlayer(true);
              setOpen(true);
              setShowConfirmModal(true);
            }}
          >
            Add
          </Button>
          <Button
            onClick={() => {
              setTeamId("");
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
const LTeams = () => {
  const {
    league,
    tournament,
    setTournament,
    leagueRequests,
    setGetLeagueRequests,
    setCreateRequestFromLeagueToTeam,
    setDeleteL2TRequest,
    setGetUsername,
    username,
    setGetUsernameLeagueReq,
    confirm,
    setConfirm,
    setError,
    error,
  } = useOutletContext();
  const [open, setOpen] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [addTeamTrigger, setAddTeamTrigger] = useState(false);
  const [deleteRequestTrigger, setDeleteRequestTrigger] = useState(false);

  useEffect(() => {
    console.log("reqs", leagueRequests);
  }, [leagueRequests]);

  useEffect(() => {
    setTournament(
      league?.tournaments?.items.filter(
        (tournamenta) => tournamenta.id === tournament?.id
      )[0]
    );
    setGetLeagueRequests(league?.id);
  }, [league]);

  useEffect(() => {
    if (addTeamTrigger && confirm) {
      setGetUsernameLeagueReq(addTeamTrigger);
      setAddTeamTrigger(false);
    }
    setAddTeamTrigger(false);

    if (deleteRequestTrigger && confirm) {
      setDeleteL2TRequest(deleteRequestTrigger);
      setDeleteRequestTrigger(false);
    }
    setDeleteRequestTrigger(false);
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
          setCreateRequestFromLeagueToTeam={setCreateRequestFromLeagueToTeam}
          leagueID={league?.id}
          setGetUsernameLeagueReq={setGetUsernameLeagueReq}
          username={username}
          setShowConfirmModal={setShowConfirmModal}
          setAddTeamTrigger={setAddTeamTrigger}
        />
      )}

      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ flex: "1", margin: 10 }}>
          <h5>{"teams in " + league?.name}</h5>
          <List autoScroll={true} style={{ height: 600 }}>
            {league?.leagueMemberships?.items
              .filter((team) => team.team.slogan !== "modTeam")
              .map((team) => (
                <ListItemCustom>{team.team.name}</ListItemCustom>
              ))}
          </List>
        </div>

        <Panel style={{ flex: "1.5" }} header={"Requests"}>
          {league?.leagueMemberships?.items.filter(
            (team) => team.team.slogan !== "modTeam"
          ).length < 10 && (
            <Whisper
              placement="right"
              controlId="control-id-hover"
              trigger="hover"
              speaker={<Tooltip>Add a new Team, send a request</Tooltip>}
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
          )}
          <FlexboxGrid justify="space-between">
            <FlexboxGrid.Item colspan={6}>Team</FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={6}>Manager</FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={6}>Status</FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={1}></FlexboxGrid.Item>
          </FlexboxGrid>
          <List hover style={{ marginTop: 10 }}>
            {leagueRequests?.requeststoTeam?.items?.map((request) => (
              <>
                <ListItemCustom key={request.id}>
                  <FlexboxGrid justify="space-between">
                    <FlexboxGrid.Item colspan={6}>
                      {request.to?.name}
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
                          // setDeleteL2TRequest({ id: request.id });
                          setShowConfirmModal({
                            type: "request",
                            action:
                              request?.status === "pending"
                                ? "cancel"
                                : "delete",
                          });
                          setDeleteRequestTrigger({ id: request.id });
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

export default LTeams;
