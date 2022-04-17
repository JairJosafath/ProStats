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

const typeDataPlayer = [
  "summary",
  "passing",
  "possession",
  "shooting",
  "defending",
  "goalkeeping",
];
const tracker = { ...playerStats };

//use of controlled inputs so we can handle changes mapped to the playerstats object
const ControlledInput = ({
  playerstatsTracker,
  stadium,
  type,
  attr,
  val,
  setPlayerstatsTracker,
  currentFixture,
  tempObject,
  setTempObject,
  currentPlayer,
  ...props
}) => {
  // const [playerTemp, setPlayerTemp] = useState({});
  const [value, setValue] = useState(
    currentFixture?.playerStats?.items?.filter(
      (stats) => stats.player.id === currentPlayer?.id
    )[0]
      ? currentFixture?.playerStats?.items?.filter(
          (stats) => stats.player.id === currentPlayer?.id
        )[0][`${type}_${attr.replaceAll(" ", "_")}`]
      : ""
  );

  // useEffect(() => {
  //   if (tempObject)
  //     setValue(
  //       // tempObject[currentPlayer?.name][`${type}_${attr.replaceAll(" ", "_")}`]
  //       tempObject[`${type}_${attr.replaceAll(" ", "_")}`]
  //     );
  // }, []);
  // useEffect(() => {
  //   if (tempObject === {})
  //     setValue(
  //       currentFixture?.playerStats?.items[0]
  //         ? currentFixture?.playerStats?.items[0][
  //             `${type}_${attr.replaceAll(" ", "_")}`
  //           ]
  //         : tempObject[`${type}_${attr.replaceAll(" ", "_")}`]
  //     );
  // }, [tempObject]);
  useEffect(() => {
    playerstatsTracker[type].filter((stat) => stat.attr === attr)[0].val =
      value;
    // console.log(
    //   "what does this look like",
    //   playerstatsTracker[type].filter((stat) => stat.attr === attr)
    // );
    setPlayerstatsTracker(playerstatsTracker);

    // console.log("current player", tempObject);

    // typeDataPlayer.map((type) =>
    //   playerstatsTracker[type].map((stat) => {
    //     try {
    //       if (stat.val) {
    //         tempObject[`${type}_${stat.attr.replaceAll(" ", "_")}`] = parseInt(
    //           stat.val
    //         );
    //       }
    //     } catch (error) {}
    //   })
    // );

    // setTempObject(tempObject);
    // console.log("temp obj ps", tempObject);
    // console.log("tracker", playerstatsTracker);
  }, [currentPlayer, value]);
  // useEffect(() => {
  //   // if (tempObject[currentPlayer?.name] === {}) {
  //   //   setValue("");
  //   // }
  // }, [currentPlayer]);
  return (
    <Input value={value} {...props} onChange={setValue} placeholder="0"></Input>
  );
};

//controls the different rows in the statpanel
const StatRow = ({
  stadium,
  typeDataPlayerState,
  currentFixture,
  playerstatsTracker,
  setPlayerstatsTracker,
  start,
  end,
  tempObject,
  setTempObject,
  currentPlayer,
}) => {
  return (
    <FlexboxGrid.Item colspan={7}>
      <List hover>
        {playerStats[typeDataPlayerState].slice(start, end).map((stat) => {
          return (
            <List.Item>
              <FlexboxGrid justify={"space-around"}>
                <FlexboxGrid.Item colspan={16} style={{ minHeight: 50 }}>
                  {stat.attr}
                </FlexboxGrid.Item>
                <FlexboxGrid.Item>
                  <ControlledInput
                    tempObject={tempObject}
                    setTempObject={setTempObject}
                    currentFixture={currentFixture}
                    type={typeDataPlayerState}
                    attr={stat.attr}
                    val={stat.val}
                    playerstatsTracker={playerstatsTracker}
                    setPlayerstatsTracker={setPlayerstatsTracker}
                    stadium={stadium}
                    size="sm"
                    style={{
                      width: 60,
                      marginLeft: 7,
                    }}
                    placeholder="value"
                    currentPlayer={currentPlayer}
                  />
                </FlexboxGrid.Item>
              </FlexboxGrid>
            </List.Item>
          );
        })}
      </List>
    </FlexboxGrid.Item>
  );
};
//component that handels type of stats to be shown in the stat grid
const StatPanel = ({
  typeDataPlayerState,
  currentFixture,
  playerstatsTracker,
  setPlayerstatsTracker,
  stadium,
  currentPlayer,
  tempObject,
  setTempObject,
}) => {
  // useEffect(() => {
  //   tempObject[currentPlayer?.name] = {};
  // }, []);

  return (
    <FlexboxGrid justify={"space between"}>
      <StatRow
        tempObject={tempObject}
        setTempObject={setTempObject}
        stadium={stadium}
        typeDataPlayerState={typeDataPlayerState}
        currentFixture={currentFixture}
        playerstatsTracker={playerstatsTracker}
        setPlayerstatsTracker={setPlayerstatsTracker}
        start={0}
        end={0.33 * playerStats[typeDataPlayerState].length}
        currentPlayer={currentPlayer}
      />
      <StatRow
        tempObject={tempObject}
        setTempObject={setTempObject}
        stadium={stadium}
        typeDataPlayerState={typeDataPlayerState}
        currentFixture={currentFixture}
        playerstatsTracker={playerstatsTracker}
        setPlayerstatsTracker={setPlayerstatsTracker}
        start={0.33 * playerStats[typeDataPlayerState].length}
        end={0.67 * playerStats[typeDataPlayerState].length}
        currentPlayer={currentPlayer}
      />
      <StatRow
        tempObject={tempObject}
        setTempObject={setTempObject}
        stadium={stadium}
        typeDataPlayerState={typeDataPlayerState}
        currentFixture={currentFixture}
        playerstatsTracker={playerstatsTracker}
        setPlayerstatsTracker={setPlayerstatsTracker}
        start={0.67 * playerStats[typeDataPlayerState].length}
        end={playerStats[typeDataPlayerState].length}
        currentPlayer={currentPlayer}
      />
    </FlexboxGrid>
  );
};

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
  } = useOutletContext();
  const [showStats, setShowStats] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [currentFixture, setCurrentFixture] = useState(false);
  const [typeDataPlayerState, setTypeDataPlayerState] = useState(
    typeDataPlayer[0]
  );
  const [updateFixtures, setUpdateFixtures] = useState(false);
  const [selectedTeam, setSelectedTEam] = useState(false);
  const [playerstatsTracker, setPlayerstatsTracker] = useState(tracker); //track changes onchange
  const [currentPlayer, setCurrentPlayer] = useState(false);
  const [tempObject, setTempObject] = useState({});

  useEffect(() => {
    setGetFixturesByTournamentandRound({
      tournamentID: tournament?.id,
      condition: { eq: activePage },
    });
  }, [activePage, tournament]);
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
    setPlayerstatsTracker({ ...playerStats });
    typeDataPlayer.map(
      (type) => setTimeout(() => setTypeDataPlayerState(type), 1000) //bug fix for not updating !showing stats
    );
    setTimeout(() => setTypeDataPlayerState(typeDataPlayer[0]), 1005);
  }, [currentPlayer]);

  useEffect(() => {
    if (updateFixtures) {
      setTimeout(() => {
        setGetFixturesByTournamentandRound({
          tournamentID: tournament?.id,
          condition: { eq: activePage },
        });
        setShowStats(false);
      }, 300);

      setUpdateFixtures(false);
    }
  }, [updateFixtures]);
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
          <List hover>
            {fixturesByTournamentAndRound?.items?.map((fixture) => {
              return (
                <List.Item
                  style={{
                    background:
                      currentFixture?.id === fixture?.id ? "blue" : "",
                  }}
                  onClick={() => {
                    console.log("nothing for now");
                  }}
                >
                  <FlexboxGrid justify="space-between">
                    <FlexboxGrid.Item
                      style={
                        selectedTeam === fixture?.teamHomefixturesId
                          ? { background: "red" }
                          : {}
                      }
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
                      {fixture?.homeTeam.name}
                    </FlexboxGrid.Item>

                    <FlexboxGrid.Item colspan={3}>
                      {fixture?.homeScore}
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item>VS</FlexboxGrid.Item>
                    <FlexboxGrid.Item colspan={3}>
                      {fixture?.awayScore}
                    </FlexboxGrid.Item>

                    <FlexboxGrid.Item
                      style={
                        selectedTeam === fixture?.teamAwayfixturesId
                          ? { background: "red" }
                          : {}
                      }
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
                      {fixture?.awayTeam.name}
                    </FlexboxGrid.Item>
                  </FlexboxGrid>
                </List.Item>
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
                {selectedTeam?.member?.items.map((membership) => (
                  <List.Item
                    onClick={() => {
                      setCurrentPlayer(membership.player);
                    }}
                  >
                    {membership.player.name}
                  </List.Item>
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

                        const temp = {};
                        console.log("temp obj", temp);

                        typeDataPlayer.map((type) =>
                          playerstatsTracker[type].map((stat) => {
                            if (stat.val) {
                              temp[
                                `${type}_${stat.attr.replaceAll(" ", "_")}`
                              ] = parseInt(stat.val);
                            }
                          })
                        );

                        console.log("temp obj ps", temp);

                        // setTeamstatsTracker({ ...teamStats });

                        // setUpdateFixtures(true);

                        // setGetTournamentByID(tournament?.id);

                        if (
                          currentFixture?.playerStats?.items?.filter(
                            (stats) => stats.player.id === currentPlayer?.id
                          )[0]
                        ) {
                          //means there is already stats for the player, so update
                          console.log("update code comes here");
                          setUpdatePlayerStats({
                            id: currentFixture?.playerStats?.items?.filter(
                              (stats) => stats.player.id === currentPlayer?.id
                            )[0].id,
                            playerPlayerStatsId: currentPlayer.id,
                            fixturePlayerStatsId: currentFixture.id,
                            ...temp,
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
                            goals: temp.summary_goals
                              ? temp.summary_goals + playerTable.goals
                              : 0 + playerTable.goals,
                            assists: temp.summary_assists
                              ? temp.summary_assists + playerTable.assists
                              : 0 + playerTable.assists,
                            beat: temp.possession_beat
                              ? temp.possession_beat + playerTable.beat
                              : 0 + playerTable.beat,
                            skillmove_beat: temp.possession_skillmove_beat
                              ? temp.possession_skillmove_beat +
                                playerTable.skillmove_beat
                              : 0 + playerTable.skillmove_beat,
                            nutmeg: temp.possession_nutmeg
                              ? temp.possession_nutmeg + playerTable.nutmeg
                              : 0 + playerTable.nutmeg,
                            match_rating: 0,
                            expected_assists: temp.passing_expected_assists
                              ? temp.passing_expected_assists +
                                playerTable.expected_assists
                              : 0 + playerTable.expected_assists,
                            interceptions: temp.defending_interceptions
                              ? temp.defending_interceptions +
                                playerTable.interceptions
                              : 0 + playerTable.interceptions,
                            tackles_won: temp.defending_tackles_won
                              ? temp.defending_tackles_won +
                                playerTable.tackles_won
                              : 0 + playerTable.tackles_won,
                            blocks: temp.defending_blocks
                              ? temp.defending_blocks + playerTable.blocks
                              : 0 + playerTable.blocks,
                            saves: temp.goalkeeping_saves
                              ? temp.goalkeeping_saves + playerTable.saves
                              : 0 + playerTable.saves,
                            playerOfTheMatch: 0,
                          });
                        } else {
                          //create the playerStat
                          setCreatePlayerStats({
                            playerPlayerStatsId: currentPlayer.id,
                            fixturePlayerStatsId: currentFixture.id,
                            ...temp,
                          });
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
                              goals: temp["summary_goals"]
                                ? temp["summary_goals"] + playerTable.goals
                                : 0 + playerTable.goals,
                              assists: temp["summary_assists"]
                                ? temp["summary_assists"] + playerTable.assists
                                : 0 + playerTable.assists,
                              beat: temp["possession_beat"]
                                ? temp["possession_beat"] + playerTable.beat
                                : 0 + playerTable.beat,
                              skillmove_beat: temp["possession_skillmove_beat"]
                                ? temp["possession_skillmove_beat"] +
                                  playerTable.skillmove_beat
                                : 0 + playerTable.skillmove_beat,
                              nutmeg: temp["possession_nutmeg"]
                                ? temp["possession_nutmeg"] + playerTable.nutmeg
                                : 0 + playerTable.nutmeg,
                              match_rating: 0,
                              expected_assists: temp["passing_expected_assists"]
                                ? temp["passing_expected_assists"] +
                                  playerTable.expected_assists
                                : 0 + playerTable.expected_assists,
                              interceptions: temp["defending_interceptions"]
                                ? temp["defending_interceptions"] +
                                  playerTable.interceptions
                                : 0 + playerTable.interceptions,
                              tackles_won: temp["defending_tackles_won"]
                                ? temp["defending_tackles_won"] +
                                  playerTable.tackles_won
                                : 0 + playerTable.tackles_won,
                              blocks: temp["defending_blocks"]
                                ? temp["defending_blocks"] + playerTable.blocks
                                : 0 + playerTable.blocks,
                              saves: temp["goalkeeping_saves"]
                                ? temp["goalkeeping_saves"] + playerTable.saves
                                : 0 + playerTable.saves,
                              playerOfTheMatch: 0,
                            });
                          } else {
                            setCreatePlayerTableStat({
                              tournamentPlayerTableId: tournament.id,
                              playerTableStatPlayerId: currentPlayer.id,
                              goals: temp["summary_goals"]
                                ? temp["summary_goals"]
                                : 0,
                              assists: temp["summary_assists"]
                                ? temp["summary_assists"]
                                : 0,
                              beat: temp["possession_beat"]
                                ? temp["possession_beat"]
                                : 0,
                              skillmove_beat: temp["possession_skillmove_beat"]
                                ? temp["possession_skillmove_beat"]
                                : 0,
                              nutmeg: temp["possession_nutmeg"]
                                ? temp["possession_nutmeg"]
                                : 0,
                              match_rating: 0,
                              expected_assists: temp["passing_expected_assists"]
                                ? temp["passing_expected_assists"]
                                : 0,
                              interceptions: temp["defending_interceptions"]
                                ? temp["defending_interceptions"]
                                : 0,
                              tackles_won: temp["defending_tackles_won"]
                                ? temp["defending_tackles_won"]
                                : 0,
                              blocks: temp["defending_blocks"]
                                ? temp["defending_blocks"]
                                : 0,
                              saves: temp["goalkeeping_saves"]
                                ? temp["goalkeeping_saves"]
                                : 0,
                              playerOfTheMatch: 0,
                            });
                          }
                        }
                        setUpdateFixtures(true);
                        setShowStats(false);
                      }}
                    >
                      Save
                    </Button>
                  </FlexboxGrid.Item>
                  <FlexboxGrid.Item>
                    <Button
                      onClick={() => {
                        console.log("reset");
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
