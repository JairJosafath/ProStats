import {
  Button,
  Dropdown,
  FlexboxGrid,
  Input,
  List,
  Pagination,
  Panel,
} from "rsuite";
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import playerStats from "../../../backend/db/playerStats";
import StatPanel from "../../../components/StatPanel.PlayerStats";
import { Icon } from "@rsuite/icons";
import { MdVerified, MdPendingActions } from "react-icons/md";
import ListItemCustom from "../../../components/ListCustom";
import Fixture from "../../../components/Fixture";
import Confirmation from "../../../components/Confirmation";
import Error from "../../../components/Error";
const typeDataPlayer = [
  "summary",
  "passing",
  "possession",
  "shooting",
  "defending",
  "goalkeeping",
];
const tracker = { ...playerStats };
const PPlayerStats = () => {
  const {
    tournament,
    setGetTeamFixtures,
    teamFixtures,
    team,
    setCreatePlayerStats,
    setUpdatePlayerStats,
    player,
    error,
    setError,
    loading,
  } = useOutletContext();
  const [showStats, setShowStats] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [currentFixture, setCurrentFixture] = useState();
  const [typeDataPlayerState, setTypeDataPlayerState] = useState(
    typeDataPlayer[0]
  );
  const [updateFixtures, setUpdateFixtures] = useState(false);

  const [playerstatsTracker, setPlayerstatsTracker] = useState({}); //track changes onchange
  const [tempObject, setTempObject] = useState({});
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [addPlayerStatsTrigger, setAddPlayerStatsTrigger] = useState(false);
  useEffect(() => {
    if (addPlayerStatsTrigger && confirm) {
      handleSave(addPlayerStatsTrigger);
      setAddPlayerStatsTrigger(false);

      setShowStats(false);
      setConfirm(false);
    }
    setAddPlayerStatsTrigger(false);
  }, [confirm]);
  useEffect(() => {
    if (currentFixture)
      setCurrentFixture(
        teamFixtures?.filter(
          (fixture) => fixture?.round === currentFixture.round
        )[0]
      );
  }, [teamFixtures]);
  useEffect(() => {
    // console.log(tournament);
    if (tournament && team)
      setGetTeamFixtures({
        tournamentID: { eq: tournament?.id },
        homeID: team?.id,
      });
    // const TF = teamFixtures?.sort(
    //   (fixture1, fixture2) => fixture1.round - fixture2.round
    // );
    // console.log("TF", TF);
  }, [team, tournament, player]);
  useEffect(() => {
    setPlayerstatsTracker({});
  }, [currentFixture]);
  const handleSave = () => {
    if (
      currentFixture?.playerStats?.items?.filter(
        (stats) => stats.player.id === player?.id
      )[0]
    ) {
      //means there is already stats for the player, so update
      // console.log("update code comes here");
      setUpdatePlayerStats({
        id: currentFixture?.playerStats?.items?.filter(
          (stats) => stats.player.id === player?.id
        )[0].id,
        playerPlayerStatsId: player.id,
        fixturePlayerStatsId: currentFixture.id,
        status: "pending",
        ...playerstatsTracker,
      });
    } else {
      //create the playerStat
      setCreatePlayerStats({
        playerPlayerStatsId: player.id,
        fixturePlayerStatsId: currentFixture.id,
        status: "pending",
        moderators: [
          player.username && player.username,
          ...(team.moderators ? team.moderators : []),
          ...(tournament.league.moderatornames
            ? tournament.league.moderatornames
            : []),
        ],
        ...playerstatsTracker,
      });
    }
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
      {!showStats && (
        <Panel header={`Fixtures `} style={{ flex: 1 }}>
          <List hover>
            {teamFixtures &&
              teamFixtures
                ?.sort((fixture1, fixture2) => fixture1.round - fixture2.round)
                .slice((activePage - 1) * 10, (activePage - 1) * 10 + 10)
                .map((fixture) => {
                  return (
                    <Fixture
                      fixture={fixture}
                      setShowStats={setShowStats}
                      setTypeDataPlayerState={setTypeDataPlayerState}
                      typeDataPlayer={typeDataPlayer}
                      setCurrentFixture={setCurrentFixture}
                    />
                  );
                })}
          </List>
          <Pagination
            total={teamFixtures?.length}
            limit={10}
            activePage={activePage}
            onChangePage={setActivePage}
          />
        </Panel>
      )}
      {showStats && (
        <Panel header={"player stats"} style={{ minHeight: "70vh" }}>
          <IoMdArrowBack
            size={"1.5em"}
            style={{ display: "block", margin: 6 }}
            onClick={() => {
              setShowStats(false);
            }}
          />

          <div style={{ width: " 70vw" }}>
            {player && (
              <Panel
                header={
                  <FlexboxGrid justify={"start"}>
                    <FlexboxGrid.Item colspan={7}>
                      {player?.name}
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={5}>
                      {"Status: "}
                      {currentFixture?.playerStats?.items?.filter(
                        (stats) => stats.player.id === player?.id
                      )[0]?.status === "pending" && (
                        <Icon
                          as={MdPendingActions}
                          size="1.5em"
                          fill="yellow"
                        />
                      )}
                      {currentFixture?.playerStats?.items?.filter(
                        (stats) => stats.player.id === player?.id
                      )[0]?.status === "verified" && (
                        <Icon as={MdVerified} size="1.5em" fill="green" />
                      )}
                    </FlexboxGrid.Item>
                  </FlexboxGrid>
                }
              >
                <Dropdown title={typeDataPlayerState}>
                  {typeDataPlayer.map((type) => {
                    return (
                      <Dropdown.Item
                        onClick={() => {
                          setTypeDataPlayerState(type);
                        }}
                      >
                        {type}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown>
                <Panel
                  header={`${currentFixture?.homeTeam?.name} vs ${currentFixture?.awayTeam?.name} `}
                >
                  {typeDataPlayerState === typeDataPlayer[0] && (
                    <StatPanel
                      setTempObject={setTempObject}
                      currentFixture={currentFixture}
                      tempObject={tempObject}
                      typeDataPlayerState={typeDataPlayerState}
                      currentPlayer={player}
                      playerstatsTracker={playerstatsTracker}
                      setPlayerstatsTracker={setPlayerstatsTracker}
                    />
                  )}
                  {typeDataPlayerState === typeDataPlayer[1] && (
                    <StatPanel
                      setTempObject={setTempObject}
                      currentFixture={currentFixture}
                      tempObject={tempObject}
                      typeDataPlayerState={typeDataPlayerState}
                      currentPlayer={player}
                      playerstatsTracker={playerstatsTracker}
                      setPlayerstatsTracker={setPlayerstatsTracker}
                    />
                  )}
                  {typeDataPlayerState === typeDataPlayer[2] && (
                    <StatPanel
                      setTempObject={setTempObject}
                      currentFixture={currentFixture}
                      tempObject={tempObject}
                      typeDataPlayerState={typeDataPlayerState}
                      currentPlayer={player}
                      playerstatsTracker={playerstatsTracker}
                      setPlayerstatsTracker={setPlayerstatsTracker}
                    />
                  )}
                  {typeDataPlayerState === typeDataPlayer[3] && (
                    <StatPanel
                      setTempObject={setTempObject}
                      currentFixture={currentFixture}
                      tempObject={tempObject}
                      typeDataPlayerState={typeDataPlayerState}
                      currentPlayer={player}
                      playerstatsTracker={playerstatsTracker}
                      setPlayerstatsTracker={setPlayerstatsTracker}
                    />
                  )}
                  {typeDataPlayerState === typeDataPlayer[4] && (
                    <StatPanel
                      setTempObject={setTempObject}
                      currentFixture={currentFixture}
                      tempObject={tempObject}
                      typeDataPlayerState={typeDataPlayerState}
                      currentPlayer={player}
                      playerstatsTracker={playerstatsTracker}
                      setPlayerstatsTracker={setPlayerstatsTracker}
                    />
                  )}
                  {typeDataPlayerState === typeDataPlayer[5] && (
                    <StatPanel
                      typeDataPlayerState={typeDataPlayerState}
                      currentPlayer={player}
                      playerstatsTracker={playerstatsTracker}
                      setPlayerstatsTracker={setPlayerstatsTracker}
                    />
                  )}
                </Panel>
                <FlexboxGrid justify="space-around">
                  <FlexboxGrid.Item colspan={9}></FlexboxGrid.Item>
                  <FlexboxGrid.Item>
                    <Button
                      onClick={() => {
                        // console.log("save rex");
                        // console.log("huge test right here", playerstatsTracker);

                        // const temp = {};
                        // console.log("temp obj", temp);

                        // typeDataPlayer.map((type) =>
                        //   playerstatsTracker[type].map((stat) => {
                        //     if (stat.val) {
                        //       temp[
                        //         `${type}_${stat.attr.replaceAll(" ", "_")}`
                        //       ] = parseInt(stat.val);
                        //     }
                        //   })
                        // );

                        // console.log("temp obj ps", playerstatsTracker);

                        // setTeamstatsTracker({ ...teamStats });

                        // setUpdateFixtures(true);

                        // setGetTournamentByID(tournament?.id);

                        // setShowStats(false);
                        setShowConfirmModal({
                          type: "stats",
                          action: "save/update",
                        });
                        setAddPlayerStatsTrigger(playerstatsTracker);
                      }}
                    >
                      Save
                    </Button>
                  </FlexboxGrid.Item>
                  <FlexboxGrid.Item>
                    <Button
                      onClick={() => {
                        // console.log("reset");
                        setPlayerstatsTracker({});
                      }}
                    >
                      Reset
                    </Button>
                  </FlexboxGrid.Item>{" "}
                  <FlexboxGrid.Item colspan={9}></FlexboxGrid.Item>
                </FlexboxGrid>
              </Panel>
            )}
          </div>
        </Panel>
      )}
    </>
  );
};

export default PPlayerStats;
