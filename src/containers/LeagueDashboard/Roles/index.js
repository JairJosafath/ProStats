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
import useTeamDashboard from "../../../hooks/useTeamDashboard";
import ListItemCustom from "../../../components/ListCustom";

const NewRequest = ({
  setOpen,
  open,
  setCreateRequestFromTeamToPlayer,
  teamID,
  setGetUsernameTeamReq,
  username,
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
      console.log(username, "is the username");
      console.log("id", playerId);

      setGetUsernameTeamReq({
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
const LRoles = () => {
  const {
    team,
    setTeamId,
    setCreateRequestFromTeamToPlayer,
    setGetUsernameTeamReq,
    setGetTeamRequests,
    teamRequests,
    setDeleteRequestFromTeamToPlayer,
    setGetUsername,
    setUpdateTeam,
    setDeleteTeamMember,
    username,
    setUpdateLeague,
  } = useTeamDashboard();
  const { league } = useOutletContext();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    // console.log(
    //   league?.leagueMemberships?.items.filter(
    //     (leagueTeam) => leagueTeam.team.slogan === "modTeam"
    //   ),
    //   "league"
    // );
    const leagueModsTeamId = league?.leagueMemberships?.items.filter(
      (leagueTeam) => leagueTeam.team.slogan === "modTeam"
    )[0]?.team.id;
    setTeamId(leagueModsTeamId);
    console.log(team, "team after ini useff");
  }, [league]);

  console.log(team, "team");
  useEffect(() => {
    setGetTeamRequests(team?.id);
  }, [team]);
  return (
    <>
      {open && (
        <NewRequest
          open={open}
          setOpen={setOpen}
          setCreateRequestFromTeamToPlayer={setCreateRequestFromTeamToPlayer}
          teamID={team?.id}
          setGetUsernameTeamReq={setGetUsernameTeamReq}
          username={username}
        />
      )}
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ flex: "1", margin: 10 }}>
          <h5>{`Moderators in  ${league?.name} league`}</h5>
          <PlayerList
            team={team}
            setUpdateTeam={setUpdateTeam}
            setDeleteTeamMember={setDeleteTeamMember}
            league={league}
            setUpdateLeague={setUpdateLeague}
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
                console.log(open);
                setOpen(true);
                console.log("after", open);
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
                          setDeleteRequestFromTeamToPlayer({ id: request.id });
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

export default LRoles;
