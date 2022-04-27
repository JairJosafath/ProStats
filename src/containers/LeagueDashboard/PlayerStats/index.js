import {
  Button,
  Dropdown,
  FlexboxGrid,
  Grid,
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
import FlexItemCustom from "../../../components/FlexItemCustom";
const typeDataPlayer = [
  "summary",
  "passing",
  "possession",
  "shooting",
  "defending",
  "goalkeeping",
];
const tracker = { ...playerStats };

const LPlayerStats = () => {
  const {
    tournament,
    fixturesByTournamentAndRound,
    setCreateFixtures,
    setGetFixturesByTournamentandRound,
    setCreatePlayerStats,
    setUpdatePlayerStats,
    setUpdatePlayerTableStat,
    setCreatePlayerTableStat,
    setActiveRound,
  } = useOutletContext();
  const [showStats, setShowStats] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [currentFixture, setCurrentFixture] = useState(false);
  const [typeDataPlayerState, setTypeDataPlayerState] = useState(
    typeDataPlayer[0]
  );
  const [updateFixtures, setUpdateFixtures] = useState(false);
  const [selectedTeam, setSelectedTEam] = useState(false);
  const [playerstatsTracker, setPlayerstatsTracker] = useState({}); //track changes onchange
  const [currentPlayer, setCurrentPlayer] = useState(false);
  const [tempObject, setTempObject] = useState({});

  useEffect(() => {
    setGetFixturesByTournamentandRound({
      tournamentID: tournament?.id,
      condition: { eq: activePage },
    });
  }, [activePage, tournament]);
  useEffect(() => {
    setActiveRound(activePage);
  }, [activePage]);
  const onChangeHandler = () => {
    const temp = {};
    console.log("temp obj", temp);

    typeDataPlayer.map((type) =>
      playerstatsTracker[type].map((stat) => {
        if (stat.val) {
          temp[`${type}_${stat.attr.replaceAll(" ", "_")}`] = parseInt(
            stat.val
          );
        }
      })
    );

    console.log("temp obj ps", temp);
  };
  useEffect(() => {
    //when fixtures are selected update the stats based on the fixture
    setPlayerstatsTracker({});
    typeDataPlayer.map(
      (type) => setTimeout(() => setTypeDataPlayerState(type), 1000) //bug fix for not updating !showing stats
    );
    setTimeout(() => setTypeDataPlayerState(typeDataPlayer[0]), 1005);
  }, [currentPlayer]);
  useEffect(() => {
    if (currentFixture)
      setCurrentFixture(
        fixturesByTournamentAndRound?.items?.filter(
          (fixture) => fixture?.id === currentFixture.id
        )[0]
      );
  }, [fixturesByTournamentAndRound]);

  // useEffect(() => {
  //   if (updateFixtures) {
  //     setTimeout(() => {
  //       setGetFixturesByTournamentandRound({
  //         tournamentID: tournament?.id,
  //         condition: { eq: activePage },
  //       });
  //       setShowStats(false);
  //     }, 300);

  //     setUpdateFixtures(false);
  //   }
  // }, [updateFixtures]);
  return (
    <>
      {!showStats && (
        <Panel header={`Fixtures round ${activePage}`} style={{ flex: 1 }}>
          {fixturesByTournamentAndRound?.items.length === 0 && (
            <Button
              onClick={() => {
                console.log(":gen fixtures");
                const inp = {
                  teams: tournament?.team?.items?.map((team) => team.team.id),
                  tournamentID: tournament?.id,
                };

                setCreateFixtures(inp);
              }}
            >
              generate fixtures
            </Button>
          )}
          <List>
            {fixturesByTournamentAndRound?.items?.map((fixture) => {
              return (
                <ListItemCustom
                  disableHover
                  onClick={() => {
                    console.log("nothing for now");
                  }}
                >
                  <FlexboxGrid justify="center">
                    <FlexItemCustom
                      colspan={8}
                      onMouseEnter={() => {
                        console.log("hovering", fixture?.homeTeam.name);
                        setSelectedTEam(fixture?.teamHomefixturesId);
                      }}
                      onClick={() => {
                        setShowStats(false);
                        setTimeout(() => {
                          setShowStats(true);
                          setTypeDataPlayerState(typeDataPlayer[0]);
                          setSelectedTEam(fixture?.homeTeam);
                        }, 500);

                        setCurrentFixture(fixture);
                      }}
                    >
                      <FlexboxGrid justify="center">
                        <FlexboxGrid.Item>
                          {fixture?.homeTeam.name}
                        </FlexboxGrid.Item>
                      </FlexboxGrid>
                    </FlexItemCustom>

                    <FlexboxGrid.Item colspan={3}>
                      <FlexboxGrid justify="center">
                        <FlexboxGrid.Item>
                          {fixture?.homeScore}
                        </FlexboxGrid.Item>
                      </FlexboxGrid>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item>VS</FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={3}>
                      <FlexboxGrid justify="center">
                        <FlexboxGrid.Item>
                          {fixture?.awayScore}
                        </FlexboxGrid.Item>
                      </FlexboxGrid>
                    </FlexboxGrid.Item>

                    <FlexItemCustom
                      colspan={8}
                      onMouseEnter={() => {
                        console.log("hovering", fixture?.awayTeam.name);
                        setSelectedTEam(fixture?.teamAwayfixturesId);
                      }}
                      onClick={() => {
                        setShowStats(false);
                        setTimeout(() => {
                          setShowStats(true);
                          setTypeDataPlayerState(typeDataPlayer[0]);
                          setSelectedTEam(fixture?.awayTeam);
                        }, 500);

                        setCurrentFixture(fixture);
                      }}
                    >
                      <FlexboxGrid justify="center">
                        <FlexboxGrid.Item>
                          {fixture?.awayTeam.name}
                        </FlexboxGrid.Item>
                      </FlexboxGrid>
                    </FlexItemCustom>
                  </FlexboxGrid>
                </ListItemCustom>
              );
            })}
          </List>
          <Pagination
            total={
              tournament?.team?.items.length *
              (tournament?.team?.items.length - 1)
            }
            limit={Math.floor(tournament?.team?.items?.length / 2)}
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
              setCurrentPlayer(false);
            }}
          />

          <div style={{ display: "flex" }}>
            <Panel header={`${selectedTeam?.name} players`} style={{ flex: 1 }}>
              <List>
                {selectedTeam?.teamMemberships?.items.map((membership) => (
                  <ListItemCustom
                    onClick={() => {
                      setCurrentPlayer(membership.player);
                    }}
                  >
                    <FlexboxGrid>
                      <FlexboxGrid.Item colspan={10}>
                        {membership.player.name}
                      </FlexboxGrid.Item>
                      <FlexboxGrid.Item colspan={10}>
                        {currentFixture?.playerStats?.items?.filter(
                          (stats) => stats.player.id === membership?.player?.id
                        )[0]?.status === "pending" && (
                          <Icon
                            as={MdPendingActions}
                            size="1.5em"
                            fill="yellow"
                          />
                        )}
                        {currentFixture?.playerStats?.items?.filter(
                          (stats) => stats.player.id === membership?.player?.id
                        )[0]?.status === "verified" && (
                          <Icon as={MdVerified} size="1.5em" fill="green" />
                        )}
                      </FlexboxGrid.Item>
                    </FlexboxGrid>
                  </ListItemCustom>
                ))}
              </List>
            </Panel>{" "}
            {currentPlayer && (
              <Panel header={currentPlayer?.name} style={{ flex: 3 }}>
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
                      currentPlayer={currentPlayer}
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
                      currentPlayer={currentPlayer}
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
                      currentPlayer={currentPlayer}
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
                      currentPlayer={currentPlayer}
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
                      currentPlayer={currentPlayer}
                      playerstatsTracker={playerstatsTracker}
                      setPlayerstatsTracker={setPlayerstatsTracker}
                    />
                  )}
                  {typeDataPlayerState === typeDataPlayer[5] && (
                    <StatPanel
                      typeDataPlayerState={typeDataPlayerState}
                      currentPlayer={currentPlayer}
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
                        console.log("save rex");
                        console.log("huge test right here", playerstatsTracker);

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

                        console.log("temp obj ps", playerstatsTracker);

                        // setTeamstatsTracker({ ...teamStats });

                        // setUpdateFixtures(true);

                        // setGetTournamentByID(tournament?.id);

                        if (
                          currentFixture?.playerStats?.items?.filter(
                            (stats) => stats.player.id === currentPlayer?.id
                          )[0] &&
                          currentFixture?.playerStats?.items?.filter(
                            (stats) => stats.status === "verified"
                          )
                        ) {
                          //means there is already stats for the player, so update
                          console.log("update code comes here");
                          setUpdatePlayerStats({
                            id: currentFixture?.playerStats?.items?.filter(
                              (stats) => stats.player.id === currentPlayer?.id
                            )[0].id,
                            playerPlayerStatsId: currentPlayer.id,
                            fixturePlayerStatsId: currentFixture.id,
                            status: "verified",
                            ...playerstatsTracker,
                          });
                          const playerTable =
                            tournament?.playerTable?.items?.filter(
                              (table) => table.player.id === currentPlayer.id
                            )[0];
                          const oldStats =
                            currentFixture?.playerStats?.items?.filter(
                              (stats) => stats.player.id === currentPlayer?.id
                            )[0];
                          playerTable.goals -= oldStats.summary_goals;
                          playerTable.assists -= oldStats.summary_assists;
                          playerTable.beat -= oldStats.possession_beat;
                          playerTable.skillmove_beat -=
                            oldStats.possession_skillmove_beat;
                          playerTable.nutmeg -= oldStats.possession_nutmeg;
                          playerTable.match_rating -= oldStats.rating;
                          // playerTable.playerOfTheMatch-=oldStats.passing_expected_assists
                          playerTable.expected_assists -=
                            oldStats.passing_expected_assists;
                          playerTable.interceptions -=
                            oldStats.defending_interceptions;
                          playerTable.tackles_won -=
                            oldStats.defending_interceptions;
                          playerTable.blocks -= oldStats.defending_blocks;
                          playerTable.saves -= oldStats.goalkeeping_saves;

                          setUpdatePlayerTableStat({
                            id: tournament?.playerTable?.items?.filter(
                              (table) => table.player.id === currentPlayer.id
                            )[0].id,
                            goals: playerstatsTracker.summary_goals
                              ? playerstatsTracker.summary_goals +
                                playerTable.goals
                              : 0 + playerTable.goals,
                            assists: playerstatsTracker.summary_assists
                              ? playerstatsTracker.summary_assists +
                                playerTable.assists
                              : 0 + playerTable.assists,
                            beat: playerstatsTracker.possession_beat
                              ? playerstatsTracker.possession_beat +
                                playerTable.beat
                              : 0 + playerTable.beat,
                            skillmove_beat:
                              playerstatsTracker.possession_skillmove_beat
                                ? playerstatsTracker.possession_skillmove_beat +
                                  playerTable.skillmove_beat
                                : 0 + playerTable.skillmove_beat,
                            nutmeg: playerstatsTracker.possession_nutmeg
                              ? playerstatsTracker.possession_nutmeg +
                                playerTable.nutmeg
                              : 0 + playerTable.nutmeg,
                            match_rating: 0,
                            expected_assists:
                              playerstatsTracker.passing_expected_assists
                                ? playerstatsTracker.passing_expected_assists +
                                  playerTable.expected_assists
                                : 0 + playerTable.expected_assists,
                            interceptions:
                              playerstatsTracker.defending_interceptions
                                ? playerstatsTracker.defending_interceptions +
                                  playerTable.interceptions
                                : 0 + playerTable.interceptions,
                            tackles_won:
                              playerstatsTracker.defending_tackles_won
                                ? playerstatsTracker.defending_tackles_won +
                                  playerTable.tackles_won
                                : 0 + playerTable.tackles_won,
                            blocks: playerstatsTracker.defending_blocks
                              ? playerstatsTracker.defending_blocks +
                                playerTable.blocks
                              : 0 + playerTable.blocks,
                            saves: playerstatsTracker.goalkeeping_saves
                              ? playerstatsTracker.goalkeeping_saves +
                                playerTable.saves
                              : 0 + playerTable.saves,
                            playerOfTheMatch: 0,
                          });
                          return;
                        } else if (
                          currentFixture?.playerStats?.items?.filter(
                            (stats) => stats.player.id === currentPlayer?.id
                          )[0] &&
                          currentFixture?.playerStats?.items?.filter(
                            (stats) => stats.status !== "verified"
                          )
                        ) {
                          setUpdatePlayerStats({
                            id: currentFixture?.playerStats?.items?.filter(
                              (stats) => stats.player.id === currentPlayer?.id
                            )[0].id,
                            playerPlayerStatsId: currentPlayer.id,
                            fixturePlayerStatsId: currentFixture.id,
                            status: "verified",
                            ...playerstatsTracker,
                          });
                        } else {
                          //create the playerStat
                          setCreatePlayerStats({
                            playerPlayerStatsId: currentPlayer.id,
                            fixturePlayerStatsId: currentFixture.id,
                            status: "verified",

                            ...playerstatsTracker,
                          });
                        }
                        if (
                          tournament?.playerTable?.items?.filter(
                            (table) => table.player.id === currentPlayer.id
                          )[0]
                        ) {
                          const playerTable =
                            tournament?.playerTable?.items?.filter(
                              (table) => table.player.id === currentPlayer.id
                            )[0];
                          const oldStats =
                            currentFixture?.playerStats?.items?.filter(
                              (stats) => stats.player.id === currentPlayer?.id
                            );

                          setUpdatePlayerTableStat({
                            id: tournament?.playerTable?.items?.filter(
                              (table) => table.player.id === currentPlayer.id
                            )[0].id,
                            goals: playerstatsTracker["summary_goals"]
                              ? playerstatsTracker["summary_goals"] +
                                playerTable.goals
                              : 0 + playerTable.goals,
                            assists: playerstatsTracker["summary_assists"]
                              ? playerstatsTracker["summary_assists"] +
                                playerTable.assists
                              : 0 + playerTable.assists,
                            beat: playerstatsTracker["possession_beat"]
                              ? playerstatsTracker["possession_beat"] +
                                playerTable.beat
                              : 0 + playerTable.beat,
                            skillmove_beat: playerstatsTracker[
                              "possession_skillmove_beat"
                            ]
                              ? playerstatsTracker[
                                  "possession_skillmove_beat"
                                ] + playerTable.skillmove_beat
                              : 0 + playerTable.skillmove_beat,
                            nutmeg: playerstatsTracker["possession_nutmeg"]
                              ? playerstatsTracker["possession_nutmeg"] +
                                playerTable.nutmeg
                              : 0 + playerTable.nutmeg,
                            match_rating: 0,
                            expected_assists: playerstatsTracker[
                              "passing_expected_assists"
                            ]
                              ? playerstatsTracker["passing_expected_assists"] +
                                playerTable.expected_assists
                              : 0 + playerTable.expected_assists,
                            interceptions: playerstatsTracker[
                              "defending_interceptions"
                            ]
                              ? playerstatsTracker["defending_interceptions"] +
                                playerTable.interceptions
                              : 0 + playerTable.interceptions,
                            tackles_won: playerstatsTracker[
                              "defending_tackles_won"
                            ]
                              ? playerstatsTracker["defending_tackles_won"] +
                                playerTable.tackles_won
                              : 0 + playerTable.tackles_won,
                            blocks: playerstatsTracker["defending_blocks"]
                              ? playerstatsTracker["defending_blocks"] +
                                playerTable.blocks
                              : 0 + playerTable.blocks,
                            saves: playerstatsTracker["goalkeeping_saves"]
                              ? playerstatsTracker["goalkeeping_saves"] +
                                playerTable.saves
                              : 0 + playerTable.saves,
                            playerOfTheMatch: 0,
                          });
                        } else {
                          setCreatePlayerTableStat({
                            tournamentPlayerTableId: tournament.id,
                            playerTableStatPlayerId: currentPlayer.id,
                            goals: playerstatsTracker["summary_goals"]
                              ? playerstatsTracker["summary_goals"]
                              : 0,
                            assists: playerstatsTracker["summary_assists"]
                              ? playerstatsTracker["summary_assists"]
                              : 0,
                            beat: playerstatsTracker["possession_beat"]
                              ? playerstatsTracker["possession_beat"]
                              : 0,
                            skillmove_beat: playerstatsTracker[
                              "possession_skillmove_beat"
                            ]
                              ? playerstatsTracker["possession_skillmove_beat"]
                              : 0,
                            nutmeg: playerstatsTracker["possession_nutmeg"]
                              ? playerstatsTracker["possession_nutmeg"]
                              : 0,
                            match_rating: 0,
                            expected_assists: playerstatsTracker[
                              "passing_expected_assists"
                            ]
                              ? playerstatsTracker["passing_expected_assists"]
                              : 0,
                            interceptions: playerstatsTracker[
                              "defending_interceptions"
                            ]
                              ? playerstatsTracker["defending_interceptions"]
                              : 0,
                            tackles_won: playerstatsTracker[
                              "defending_tackles_won"
                            ]
                              ? playerstatsTracker["defending_tackles_won"]
                              : 0,
                            blocks: playerstatsTracker["defending_blocks"]
                              ? playerstatsTracker["defending_blocks"]
                              : 0,
                            saves: playerstatsTracker["goalkeeping_saves"]
                              ? playerstatsTracker["goalkeeping_saves"]
                              : 0,
                            playerOfTheMatch: 0,
                          });
                        }
                        // setUpdateFixtures(true);
                        // setShowStats(false);
                      }}
                    >
                      Save
                    </Button>
                  </FlexboxGrid.Item>
                  <FlexboxGrid.Item>
                    <Button
                      onClick={() => {
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

export default LPlayerStats;
