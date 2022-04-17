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

const NewRequest = ({
  setOpen,
  open,
  setCreateRequestFromLeagueToTeam,
  leagueID,
}) => {
  const [teamId, setTeamId] = useState("");

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
              setCreateRequestFromLeagueToTeam({
                status: "pending",
                leagueRequeststoTeamId: leagueID,
                teamRequestsfromLeagueId: teamId,
              });

              setTeamId("");
              setOpen(false);
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
  } = useOutletContext();
  const [open, setOpen] = useState(false);

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

  return (
    <>
      {open && (
        <NewRequest
          open={open}
          setOpen={setOpen}
          setCreateRequestFromLeagueToTeam={setCreateRequestFromLeagueToTeam}
          leagueID={league?.id}
        />
      )}
      <div style={{ display: "flex" }}>
        <div style={{ flex: "1", margin: 10 }}>
          <h5>{"teams in " + league?.name}</h5>
          <List autoScroll={true} style={{ height: 600 }}>
            {league?.teams?.items.map((team) => (
              <List.Item>{team.name}</List.Item>
            ))}
          </List>
        </div>

        <Panel style={{ flex: "1" }} header={"Requests"}>
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
                console.log(open);
                setOpen(true);
                console.log("after", open);
              }}
            />
          </Whisper>

          <List hover style={{ marginTop: 10 }}>
            <List.Item key="dummyItem">
              <FlexboxGrid justify="space-between">
                <FlexboxGrid.Item colspan={6}>Team</FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={6}>Manager</FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={6}>Status</FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={1}></FlexboxGrid.Item>
              </FlexboxGrid>
            </List.Item>
            {leagueRequests?.requeststoTeam?.items?.map((request) => (
              <>
                <List.Item key={request.id}>
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
                          setDeleteL2TRequest({ id: request.id });
                        }}
                        appearance="subtle"
                        size={"xs"}
                        icon={<MdCancel />}
                      />
                    </FlexboxGrid.Item>
                  </FlexboxGrid>
                </List.Item>
              </>
            ))}
          </List>
        </Panel>
      </div>
    </>
  );
};

export default LTeams;
