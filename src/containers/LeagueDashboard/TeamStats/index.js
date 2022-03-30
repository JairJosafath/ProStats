import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

//Style
import {
  Button,
  Dropdown,
  FlexboxGrid,
  Input,
  List,
  Pagination,
  Panel,
} from "rsuite";
import { IoMdArrowBack } from "react-icons/io";

//Util
import teamStats from "../../../backend/db/teamStats";
import { createTableStat } from "../../../graphql/mutations";
import { useTimeout } from "rsuite/esm/utils";

//used to navigate the different stat types
const typeDataTeam = [
  "summary",
  "passing",
  "possession",
  "shooting",
  "defending",
];

//copy of the teamstats object
const tracker = { ...teamStats };

//use of controlled inputs so we can handle changes mapped to the teamstats object
const ControlledInput = ({
  teamstatsTracker,
  stadium,
  type,
  attr,
  val,
  setTeamstatsTracker,
  currentFixture,
  ...props
}) => {
  const [value, setValue] = useState(
    currentFixture?.teamStats?.items[0]
      ? currentFixture?.teamStats?.items[0][
          `${stadium}_${type}_${attr.replaceAll(" ", "_")}`
        ]
      : ""
  );
  useEffect(() => {
    teamstatsTracker[stadium][type].filter(
      (stat) => stat.attr === attr
    )[0].val = value;
    setTeamstatsTracker(teamstatsTracker);
  }, [value, teamstatsTracker, stadium, type, attr, val, currentFixture]);
  return (
    <Input value={value} {...props} onChange={setValue} placeholder="0"></Input>
  );
};

//component that handels type of stats to be shown in the stat grid
const StatPanel = ({
  typeDataTeamState,
  currentFixture,
  teamstatsTracker,
  setTeamstatsTracker,
  stadium,
}) => {
  return (
    <FlexboxGrid justify={"space between"}>
      <StatRow
        stadium={stadium}
        typeDataTeamState={typeDataTeamState}
        currentFixture={currentFixture}
        teamstatsTracker={teamstatsTracker}
        setTeamstatsTracker={setTeamstatsTracker}
        start={0}
        end={0.33 * teamStats[stadium][typeDataTeamState].length}
      />
      <StatRow
        stadium={stadium}
        typeDataTeamState={typeDataTeamState}
        currentFixture={currentFixture}
        teamstatsTracker={teamstatsTracker}
        setTeamstatsTracker={setTeamstatsTracker}
        start={0.33 * teamStats[stadium][typeDataTeamState].length}
        end={0.67 * teamStats[stadium][typeDataTeamState].length}
      />
      <StatRow
        stadium={stadium}
        typeDataTeamState={typeDataTeamState}
        currentFixture={currentFixture}
        teamstatsTracker={teamstatsTracker}
        setTeamstatsTracker={setTeamstatsTracker}
        start={0.67 * teamStats[stadium][typeDataTeamState].length}
        end={teamStats[stadium][typeDataTeamState].length}
      />
    </FlexboxGrid>
  );
};

//controls the different rows in the statpanel
const StatRow = ({
  stadium,
  typeDataTeamState,
  currentFixture,
  teamstatsTracker,
  setTeamstatsTracker,
  start,
  end,
}) => {
  return (
    <FlexboxGrid.Item colspan={7}>
      <List hover>
        {teamStats[stadium][typeDataTeamState].slice(start, end).map((stat) => {
          return (
            <List.Item>
              <FlexboxGrid justify={"space-around"}>
                <FlexboxGrid.Item colspan={16} style={{ minHeight: 50 }}>
                  {stat.attr}
                </FlexboxGrid.Item>
                <FlexboxGrid.Item>
                  <ControlledInput
                    currentFixture={currentFixture}
                    type={typeDataTeamState}
                    attr={stat.attr}
                    val={stat.val}
                    teamstatsTracker={teamstatsTracker}
                    setTeamstatsTracker={setTeamstatsTracker}
                    stadium={stadium}
                    size="sm"
                    style={{
                      width: 60,
                      marginLeft: 7,
                    }}
                    placeholder="value"
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
const LTeamStats = () => {
  //outletcontext provided by leaguedasbhoard mother component
  const {
    league,
    tournament,
    setTournament,
    setCreateFixtures,
    setDeleteAllFixtures,
    setGetFixturesByTournamentandRound,
    fixturesByTournamentAndRound,
    setCreateTeamStats,
    setUpdateTeamStats,
    setCreateTableStat,
    setUpdateTableStat,
  } = useOutletContext();

  const [showStats, setShowStats] = useState(false); //toggle between stats and fixtures
  const [typeDataTeamState, setTypeDataTeamState] = useState(typeDataTeam[0]); //keep track which datatype is being used
  const [activePage, setActivePage] = useState(1); //pagination
  const [currentFixture, setCurrentFixture] = useState(); //to access selected fixture data
  const [teamstatsTracker, setTeamstatsTracker] = useState(tracker); //track changes onchange
  const [updateFixtures, setUpdateFixtures] = useState(false);
  // const [deleteAllFixtureStats, setDeleteAllFixtureStats] = useState(false);

  // useEffect(() => {
  //   if (!deleteAllFixtureStats) return;
  //   setGetFixturesByTournamentandRound({
  //     tournamentID: tournament?.id,
  //     condition: { eq: 2 },
  //   });

  //   let mutationString = "";
  //   const statsIDs = fixturesByTournamentAndRound?.items.map(
  //     (fixture, index) => {
  //       if (fixture.teamStats.items[0]) {
  //         const temp = `
  //     mutation${index}tt: deleteTeamStats(
  //       input: {id:"${fixture.teamStats.items[0].id}"}
  //     ){
  //       id
  //     }
  //     `;
  //         mutationString += temp;
  //         return fixture.teamStats.items[0].id;
  //       }
  //       return "nothing";
  //     }
  //   );
  //   const tableIDs = tournament?.table.items.map((tableStat, index) => {
  //     const temp = `
  //     mutation${index}: deleteTableStat(
  //       input: {id:"${tableStat.id}"}
  //     ){
  //       id
  //     }
  //     `;
  //     mutationString += temp;
  //     return tableStat.id;
  //   });

  //   console.log("mutation reset", mutationString);
  //   console.log("fixturestatsIDs", statsIDs);
  //   console.log("tablestatsID", tableIDs);

  //   const mutation = /* GraphQL */ `
  //     mutation ResetTableAndFixtures{

  //     }
  //   `;
  // }, [deleteAllFixtureStats]);

  //if tournament changes update the fixture component
  useEffect(() => {
    setGetFixturesByTournamentandRound({
      tournamentID: tournament?.id,
      condition: { eq: activePage },
    });
  }, [activePage, tournament]);

  useEffect(() => {
    if (updateFixtures) {
      setTimeout(() => {
        setGetFixturesByTournamentandRound({
          tournamentID: tournament?.id,
          condition: { eq: activePage },
        });
      }, 300);

      setUpdateFixtures(false);
    }
  }, [updateFixtures]);
  useEffect(() => {
    console.log("updated fixbytourround", fixturesByTournamentAndRound);
  }, [fixturesByTournamentAndRound]);

  useEffect(() => {
    //when fixtures are selected update the stats based on the fixture
    setTeamstatsTracker({ ...teamStats });
    typeDataTeam.map(
      (type) => setTimeout(() => setTypeDataTeamState(type), 1000) //bug fix for not updating !showing stats
    );
    setTimeout(() => setTypeDataTeamState(typeDataTeam[0]), 1005);
  }, [currentFixture]);

  return (
    <>
      {/* <Button
        onClick={() => {
          setDeleteAllFixtureStats(!deleteAllFixtureStats);
        }}
      >
        reset
      </Button> */}
      <div style={{ display: "flex" }}>
        {!showStats && (
          <Panel header={`Fixtures round ${activePage}`} style={{ flex: 1 }}>
            {tournament?.fixtures?.items.length === 0 && (
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
                      setShowStats(false);
                      setTimeout(() => {
                        setShowStats(true);
                        setTypeDataTeamState(typeDataTeam[0]);
                      }, 500);

                      setCurrentFixture(fixture);
                    }}
                  >
                    <FlexboxGrid justify="space-between">
                      <FlexboxGrid.Item colspan={8}>
                        {fixture?.homeTeam.name}
                      </FlexboxGrid.Item>

                      <FlexboxGrid.Item colspan={3}>
                        {fixture?.homeScore}
                      </FlexboxGrid.Item>
                      <FlexboxGrid.Item>VS</FlexboxGrid.Item>
                      <FlexboxGrid.Item colspan={3}>
                        {fixture?.awayScore}
                      </FlexboxGrid.Item>

                      <FlexboxGrid.Item colspan={8}>
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

        {/* Stats */}
        {showStats && (
          <Panel header="Stats" style={{ flex: 2, minHeight: "70vh" }}>
            <IoMdArrowBack
              size={"1.5em"}
              style={{ display: "block", margin: 6 }}
              onClick={() => {
                setShowStats(false);
              }}
            />
            <Dropdown title={typeDataTeamState}>
              {typeDataTeam.map((type) => {
                return (
                  <Dropdown.Item
                    onClick={() => {
                      setTypeDataTeamState(type);
                    }}
                  >
                    {type}
                  </Dropdown.Item>
                );
              })}
            </Dropdown>

            <Panel
              header={`Home: ${currentFixture?.homeTeam?.name}`}
              collapsible
            >
              {typeDataTeamState === typeDataTeam[0] && (
                <StatPanel
                  typeDataTeamState={typeDataTeamState}
                  currentFixture={currentFixture}
                  teamstatsTracker={teamstatsTracker}
                  setTeamstatsTracker={setTeamstatsTracker}
                  stadium={"home"}
                />
              )}
              {typeDataTeamState === typeDataTeam[1] && (
                <StatPanel
                  typeDataTeamState={typeDataTeamState}
                  currentFixture={currentFixture}
                  teamstatsTracker={teamstatsTracker}
                  setTeamstatsTracker={setTeamstatsTracker}
                  stadium={"home"}
                />
              )}
              {typeDataTeamState === typeDataTeam[2] && (
                <StatPanel
                  typeDataTeamState={typeDataTeamState}
                  currentFixture={currentFixture}
                  teamstatsTracker={teamstatsTracker}
                  setTeamstatsTracker={setTeamstatsTracker}
                  stadium={"home"}
                />
              )}
              {typeDataTeamState === typeDataTeam[3] && (
                <StatPanel
                  typeDataTeamState={typeDataTeamState}
                  currentFixture={currentFixture}
                  teamstatsTracker={teamstatsTracker}
                  setTeamstatsTracker={setTeamstatsTracker}
                  stadium={"home"}
                />
              )}
              {typeDataTeamState === typeDataTeam[4] && (
                <StatPanel
                  typeDataTeamState={typeDataTeamState}
                  currentFixture={currentFixture}
                  teamstatsTracker={teamstatsTracker}
                  setTeamstatsTracker={setTeamstatsTracker}
                  stadium={"home"}
                />
              )}
            </Panel>

            <Panel
              header={`Away: ${currentFixture?.awayTeam?.name}`}
              collapsible
            >
              {typeDataTeamState === typeDataTeam[0] && (
                <StatPanel
                  typeDataTeamState={typeDataTeamState}
                  currentFixture={currentFixture}
                  teamstatsTracker={teamstatsTracker}
                  setTeamstatsTracker={setTeamstatsTracker}
                  stadium={"away"}
                />
              )}
              {typeDataTeamState === typeDataTeam[1] && (
                <StatPanel
                  typeDataTeamState={typeDataTeamState}
                  currentFixture={currentFixture}
                  teamstatsTracker={teamstatsTracker}
                  setTeamstatsTracker={setTeamstatsTracker}
                  stadium={"away"}
                />
              )}
              {typeDataTeamState === typeDataTeam[2] && (
                <StatPanel
                  typeDataTeamState={typeDataTeamState}
                  currentFixture={currentFixture}
                  teamstatsTracker={teamstatsTracker}
                  setTeamstatsTracker={setTeamstatsTracker}
                  stadium={"away"}
                />
              )}
              {typeDataTeamState === typeDataTeam[3] && (
                <StatPanel
                  typeDataTeamState={typeDataTeamState}
                  currentFixture={currentFixture}
                  teamstatsTracker={teamstatsTracker}
                  setTeamstatsTracker={setTeamstatsTracker}
                  stadium={"away"}
                />
              )}
              {typeDataTeamState === typeDataTeam[4] && (
                <StatPanel
                  typeDataTeamState={typeDataTeamState}
                  currentFixture={currentFixture}
                  teamstatsTracker={teamstatsTracker}
                  setTeamstatsTracker={setTeamstatsTracker}
                  stadium={"away"}
                />
              )}
            </Panel>

            <FlexboxGrid justify="space-around">
              <FlexboxGrid.Item colspan={9}></FlexboxGrid.Item>
              <FlexboxGrid.Item>
                <Button
                  onClick={() => {
                    console.log("save rex");
                    console.log("huge test right here", teamstatsTracker);

                    const temp = {};
                    console.log("temp obj", temp);

                    typeDataTeam.map((type) =>
                      teamstatsTracker.home[type].map((stat) => {
                        if (stat.val) {
                          temp[
                            `home_${type}_${stat.attr.replaceAll(" ", "_")}`
                          ] = parseInt(stat.val);
                        }
                      })
                    );
                    typeDataTeam.map((type) =>
                      teamstatsTracker.away[type].map((stat) => {
                        if (stat.val) {
                          temp[
                            `away_${type}_${stat.attr.replaceAll(" ", "_")}`
                          ] = parseInt(stat.val);
                        }
                      })
                    );

                    if (currentFixture?.teamStats?.items[0]) {
                      const oldStats = currentFixture;
                      //rollback changes of past stats on standings
                      const homeTS = tournament?.table?.items.filter(
                        (tableStat) =>
                          tableStat.team.id === currentFixture.homeID
                      )[0];
                      const awayTS = tournament?.table?.items.filter(
                        (tableStat) =>
                          tableStat.team.id === currentFixture.awayID
                      )[0];

                      let awayGoals = parseInt(
                        teamstatsTracker.away.summary.filter(
                          (stat) => stat.attr === "goals"
                        )[0].val
                      );
                      let homeGoals = parseInt(
                        teamstatsTracker.home.summary.filter(
                          (stat) => stat.attr === "goals"
                        )[0].val
                      );
                      const result =
                        (homeGoals > awayGoals && "W") ||
                        (homeGoals === awayGoals && "D") ||
                        (homeGoals < awayGoals && "L");

                      const oldResult =
                        (oldStats.homeScore > oldStats.awayScore && "W") ||
                        (oldStats.homeScore === oldStats.awayScore && "D") ||
                        (oldStats.homeScore < oldStats.awayScore && "L");

                      const homeUpdate = () => {
                        // if awaygoalsOld ===0 && awaygoalsNew === 0, do not change.
                        // if awaygoalsOld >0 && awaygoalsNew >0, do not change
                        //if awaygoalsOld ===0 and new !=0 , do -1
                        //if awaygoaldOld !=0 and new ===0 , do +1
                        const cleanSheatsHome = () => {
                          if (
                            (parseInt(awayGoals) === 0 &&
                              oldStats.awayScore === 0) ||
                            (parseInt(awayGoals) !== 0 &&
                              oldStats.awayScore !== 0)
                          )
                            return 0;
                          else if (
                            parseInt(awayGoals) !== 0 &&
                            oldStats.awayScore === 0
                          )
                            return -1;
                          else if (
                            parseInt(awayGoals) === 0 &&
                            oldStats.awayScore !== 0
                          )
                            return 1;
                        };

                        //if oldresult and new result are the same do not change
                        //otherwise if old was D, -1
                        const gamesDrawnHome = () => {
                          if (result === oldResult) return 0;
                          else if (result === "D") return -1;
                          return 0;
                        };
                        const gamesLostHome = () => {
                          if (result === oldResult) return 0;
                          else if (result === "L") return -1;
                          return 0;
                        };
                        const gamesWonHome = () => {
                          if (result === oldResult) return 0;
                          else if (result === "W") return -1;
                          return 0;
                        };
                        const goalDifferenceHome = () => {
                          const oldDiff =
                            parseInt(homeGoals) - parseInt(awayGoals);
                          const newDiff =
                            oldStats.homeScore - oldStats.awayScore;
                          return newDiff - oldDiff;
                        };

                        const goalForHome = () => {
                          const oldfor = homeGoals;
                          const newFor = oldStats.homeScore;
                          return newFor - oldfor;
                        };
                        const goalAgainstHome = () => {
                          const oldAgainst = awayGoals;
                          const newAgainst = oldStats.awayScore;
                          return newAgainst - oldAgainst;
                        };
                        const pointsHome = () => {
                          if (result === oldResult) return 0;
                          if (oldResult === "W" && result === "D") return -2;
                          if (oldResult === "W" && result === "L") return -3;

                          if (oldResult === "D" && result === "W") return 2;
                          if (oldResult === "D" && result === "L") return -1;

                          if (oldResult === "L" && result === "D") return 1;
                          if (oldResult === "L" && result === "W") return 3;
                        };
                        const recordHome = () => {
                          let arr = homeTS.record;
                          arr[parseInt(currentFixture.round) - 1] = result;
                          return arr;
                        };

                        return {
                          id: homeTS.id,
                          cleanSheats: homeTS.cleanSheats + cleanSheatsHome(),
                          gamesDrawn:
                            homeTS.gamesDrawn + gamesDrawnHome() < 0
                              ? 0
                              : homeTS.gamesDrawn + gamesDrawnHome(),
                          gamesLost:
                            homeTS.gamesLost + gamesLostHome() < 0
                              ? 0
                              : homeTS.gamesLost + gamesLostHome(),
                          gamesWon:
                            homeTS.gamesWon + gamesWonHome() < 0
                              ? 0
                              : homeTS.gamesWon + gamesWonHome(),
                          goalDifference:
                            homeTS.goalDifference + goalDifferenceHome(),
                          goalsAgainst: homeTS.goalsAgainst + goalAgainstHome(),
                          goalsFor: homeTS.goalsFor + goalForHome(),
                          points: homeTS.points + pointsHome(),
                          record: recordHome(),
                        };
                      };
                      const awayUpdate = () => {
                        const result2 =
                          (homeGoals > awayGoals && "L") ||
                          (homeGoals === awayGoals && "D") ||
                          (homeGoals < awayGoals && "W");
                        // if awaygoalsOld ===0 && awaygoalsNew === 0, do not change.
                        // if awaygoalsOld >0 && awaygoalsNew >0, do not change
                        //if awaygoalsOld ===0 and new !=0 , do -1
                        //if awaygoaldOld !=0 and new ===0 , do +1
                        const cleanSheatsAway = () => {
                          if (
                            (parseInt(homeGoals) === 0 &&
                              oldStats.homeScore === 0) ||
                            (parseInt(homeGoals) !== 0 &&
                              oldStats.homeScore !== 0)
                          )
                            return 0;
                          else if (
                            parseInt(homeGoals) !== 0 &&
                            oldStats.homeScore === 0
                          )
                            return -1;
                          else if (
                            parseInt(homeGoals) === 0 &&
                            oldStats.homeScore !== 0
                          )
                            return 1;
                        };

                        //if oldresult and new result are the same do not change
                        //otherwise if old was D, -1
                        const gamesDrawnAway = () => {
                          if (result === oldResult) return 0;
                          else if (result === "D") return -1;
                          return 0;
                        };
                        const gamesLostAway = () => {
                          if (result === oldResult) return 0;
                          else if (result === "W") return -1;
                          return 0;
                        };
                        const gamesWonAway = () => {
                          if (result === oldResult) return 0;
                          else if (result === "L") return -1;
                          return 0;
                        };
                        const goalDifferenceAway = () => {
                          const oldDiff = awayGoals - homeGoals;
                          const newDiff =
                            oldStats.awayScore - oldStats.homeScore;
                          return newDiff - oldDiff;
                        };

                        const goalForAway = () => {
                          const oldfor = awayGoals;
                          const newFor = oldStats.awayScore;
                          return newFor - oldfor;
                        };
                        const goalAgainstAway = () => {
                          const oldAgainst = homeGoals;
                          const newAgainst = oldStats.homeScore;
                          return newAgainst - oldAgainst;
                        };
                        const pointsAway = () => {
                          console.log(
                            `result: ${result}\noldresult: ${oldResult}`
                          );
                          if (result2 === oldResult) return 0;
                          if (oldResult === "W" && result2 === "D") return -2;
                          if (oldResult === "W" && result2 === "L") return -3;

                          if (oldResult === "D" && result2 === "W") return 2;
                          if (oldResult === "D" && result2 === "L") return -1;

                          if (oldResult === "L" && result2 === "D") return 1;
                          if (oldResult === "L" && result2 === "W") return 3;
                        };
                        const recordAway = () => {
                          let arr = awayTS.record;
                          arr[parseInt(currentFixture.round) - 1] = result2;
                          return arr;
                        };

                        return {
                          id: awayTS.id,
                          cleanSheats: awayTS.cleanSheats + cleanSheatsAway(),
                          gamesDrawn:
                            awayTS.gamesDrawn + gamesDrawnAway() < 0
                              ? 0
                              : awayTS.gamesDrawn + gamesDrawnAway(),
                          gamesLost:
                            awayTS.gamesLost + gamesLostAway() < 0
                              ? 0
                              : awayTS.gamesLost + gamesLostAway(),
                          gamesWon:
                            awayTS.gamesWon + gamesWonAway() < 0
                              ? 0
                              : awayTS.gamesWon + gamesWonAway(),
                          goalDifference:
                            awayTS.goalDifference + goalDifferenceAway(),
                          goalsAgainst: awayTS.goalsAgainst + goalAgainstAway(),
                          goalsFor: awayTS.goalsFor + goalForAway(),
                          points: awayTS.points + pointsAway(),
                          record: recordAway(),
                        };
                      };

                      const updateFixture = {
                        id: currentFixture?.id,
                        homeScore: parseInt(homeGoals),
                        awayScore: parseInt(awayGoals),
                      };
                      setUpdateTeamStats({
                        id: currentFixture?.teamStats?.items[0].id,
                        teamStatsAway_teamId: currentFixture.awayID,
                        teamStatsHome_teamId: currentFixture.homeID,
                        fixtureTeamStatsId: currentFixture.id,
                        ...temp,
                      });

                      console.log("update object", {
                        home: homeUpdate(),
                        away: awayUpdate(),
                        fixture: updateFixture,
                      });
                      setUpdateTableStat({
                        home: homeUpdate(),
                        away: awayUpdate(),
                        fixture: updateFixture,
                      });
                    } else {
                      setCreateTeamStats({
                        teamStatsAway_teamId: currentFixture.awayID,
                        teamStatsHome_teamId: currentFixture.homeID,
                        fixtureTeamStatsId: currentFixture.id,
                        ...temp,
                      });

                      const homeTS = tournament?.table?.items.filter(
                        (tableStat) =>
                          tableStat.team.id === currentFixture.homeID
                      )[0];
                      const awayTS = tournament?.table?.items.filter(
                        (tableStat) =>
                          tableStat.team.id === currentFixture.awayID
                      )[0];

                      let awayGoals = teamstatsTracker.away.summary.filter(
                        (stat) => stat.attr === "goals"
                      )[0].val;
                      let homeGoals = teamstatsTracker.home.summary.filter(
                        (stat) => stat.attr === "goals"
                      )[0].val;
                      let result =
                        (homeGoals > awayGoals && "W") ||
                        (homeGoals === awayGoals && "D") ||
                        (homeGoals < awayGoals && "L");

                      const updateFixture = {
                        id: currentFixture?.id,
                        homeScore: parseInt(homeGoals),
                        awayScore: parseInt(awayGoals),
                      };
                      const homePoints = () => {
                        switch (result) {
                          case "W":
                            return 3;

                          case "D":
                            return 1;

                          case "L":
                            return 0;

                          default:
                            return -1;
                        }
                      };
                      const awayPoints = () => {
                        switch (result) {
                          case "W":
                            return 0;

                          case "D":
                            return 1;

                          case "L":
                            return 3;

                          default:
                            return -1;
                        }
                      };

                      let tablestatHome = {};
                      let tablestatAway = {};
                      if (homeTS) {
                        //update standings for homeTeam
                        //currentFixture?.teamStats?.items[0]["away_summary_goals"]===0?1:0 ,

                        tablestatHome = {
                          id: homeTS.id,
                          cleanSheats:
                            parseInt(homeTS.cleanSheats) +
                            (parseInt(awayGoals) === 0 ? 1 : 0),
                          gamesDrawn:
                            parseInt(homeTS.gamesDrawn) +
                            (homeGoals === awayGoals ? 1 : 0),
                          gamesLost: parseInt(
                            homeTS.gamesLost + (homeGoals < awayGoals ? 1 : 0)
                          ),
                          gamesPlayed: parseInt(homeTS.gamesPlayed) + 1,
                          gamesWon:
                            parseInt(homeTS.gamesWon) +
                            (homeGoals > awayGoals ? 1 : 0),
                          goalDifference:
                            parseInt(homeTS.goalDifference) +
                            (parseInt(homeGoals) - parseInt(awayGoals)),
                          goalsAgainst:
                            parseInt(homeTS.goalsAgainst) + parseInt(awayGoals),
                          goalsFor:
                            parseInt(homeTS.goalsFor) + parseInt(homeGoals),
                          points: parseInt(homeTS.points) + homePoints(),
                          record: [...homeTS.record, result],
                          tableStatTeamId: currentFixture?.homeID,
                          tournamentTableId: tournament?.id,
                        };
                      } else {
                        //create standings for home team
                        tablestatHome = {
                          cleanSheats: parseInt(awayGoals) === 0 ? 1 : 0,
                          gamesDrawn: homeGoals === awayGoals ? 1 : 0,
                          gamesLost: homeGoals < awayGoals ? 1 : 0,
                          gamesPlayed: 1,
                          gamesWon: homeGoals > awayGoals ? 1 : 0,
                          goalDifference: homeGoals - awayGoals,
                          goalsAgainst: awayGoals,
                          goalsFor: homeGoals,
                          points: homePoints(),
                          record: [result],
                          tableStatTeamId: currentFixture?.homeID,
                          tournamentTableId: tournament?.id,
                        };
                      }
                      if (awayTS) {
                        //update standings for awayTEam
                        tablestatAway = {
                          id: awayTS.id,
                          cleanSheats:
                            parseInt(awayTS.cleanSheats) +
                            (parseInt(homeGoals) === 0 ? 1 : 0),
                          gamesDrawn:
                            parseInt(awayTS.gamesDrawn) +
                            (homeGoals === awayGoals ? 1 : 0),
                          gamesLost:
                            parseInt(awayTS.gamesLost) +
                            (parseInt(homeGoals) > parseInt(awayGoals) ? 1 : 0),
                          gamesPlayed: parseInt(awayTS.gamesPlayed) + 1,
                          gamesWon:
                            parseInt(awayTS.gamesWon) +
                            (parseInt(homeGoals) < parseInt(awayGoals) ? 1 : 0),
                          goalDifference:
                            parseInt(awayTS.goalDifference) +
                            (parseInt(awayGoals) - parseInt(homeGoals)),
                          goalsAgainst:
                            parseInt(awayTS.goalsAgainst) + parseInt(homeGoals),
                          goalsFor:
                            parseInt(awayTS.goalsFor) + parseInt(awayGoals),
                          points: parseInt(awayTS.points) + awayPoints(),
                          record: [
                            ...awayTS.record,
                            (result === "W" && "L") ||
                              (result === "D" && "D") ||
                              (result === "L" && "W"),
                          ],
                          tableStatTeamId: currentFixture?.awayID,
                          tournamentTableId: tournament?.id,
                        };
                      } else {
                        //create standings for awayTeam
                        tablestatAway = {
                          cleanSheats: parseInt(homeGoals) === 0 ? 1 : 0,
                          gamesDrawn: homeGoals === awayGoals ? 1 : 0,
                          gamesLost: homeGoals > awayGoals ? 1 : 0,
                          gamesPlayed: 1,
                          gamesWon: homeGoals < awayGoals ? 1 : 0,
                          goalDifference: awayGoals - homeGoals,
                          goalsAgainst: homeGoals,
                          goalsFor: awayGoals,
                          points: awayPoints(),
                          record: [
                            (result === "W" && "L") ||
                              (result === "D" && "D") ||
                              (result === "L" && "W"),
                          ],
                          tableStatTeamId: currentFixture?.awayID,
                          tournamentTableId: tournament?.id,
                        };
                      }

                      //create table standings
                      if (!homeTS && !awayTS) {
                        setCreateTableStat({
                          home: tablestatHome,
                          away: tablestatAway,
                          fixture: updateFixture,
                        });
                      } else if (!homeTS && awayTS) {
                        //update awayTS and create Home
                        console.log("not implemented yet");
                      } else if (homeTS && !awayTS) {
                        //create awayTS and update Home
                        console.log("not implemented yet V2");
                      } else if (homeTS && awayTS) {
                        // update home and away
                        setUpdateTableStat({
                          home: tablestatHome,
                          away: tablestatAway,
                          fixture: updateFixture,
                        });
                      }
                    }

                    setTeamstatsTracker({ ...teamStats });

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
                    setTeamstatsTracker(teamStats);
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
    </>
  );
};

export default LTeamStats;
