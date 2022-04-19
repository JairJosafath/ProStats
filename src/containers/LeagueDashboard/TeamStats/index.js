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
import { Icon } from "@rsuite/icons";
import { IoMdArrowBack } from "react-icons/io";
import { MdVerified, MdPendingActions } from "react-icons/md";

//Util
import teamStats from "../../../backend/db/teamStats";
import { createTableStat } from "../../../graphql/mutations";
import { useTimeout } from "rsuite/esm/utils";
import ControlledInput from "../../../components/ControlledInput";
import StatPanel from "../../../components/StatPanel";

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
    setGetTournamentByID,
  } = useOutletContext();

  const [showStats, setShowStats] = useState(false); //toggle between stats and fixtures
  const [typeDataTeamState, setTypeDataTeamState] = useState(typeDataTeam[0]); //keep track which datatype is being used
  const [activePage, setActivePage] = useState(1); //pagination
  const [currentFixture, setCurrentFixture] = useState(); //to access selected fixture data
  const [teamstatsTracker, setTeamstatsTracker] = useState(tracker); //track changes onchange
  const [updateFixtures, setUpdateFixtures] = useState(false);
  const [deleteAllFixtureStats, setDeleteAllFixtureStats] = useState(false);
  const [tempData, setTempData] = useState({});

  useEffect(() => {
    if (!deleteAllFixtureStats) return;
    setGetFixturesByTournamentandRound({
      tournamentID: tournament?.id,
      condition: { eq: 1 },
    });

    let mutationString = "";
    const statsIDs = fixturesByTournamentAndRound?.items.map(
      (fixture, index) => {
        if (fixture.teamStats.items[0]) {
          const temp = `
      mutation${index}tt: deleteTeamStats(
        input: {id:"${fixture.teamStats.items[0].id}"}
      ){
        id
      }
      `;
          mutationString += temp;
          return fixture.teamStats.items[0].id;
        }
        return "nothing";
      }
    );
    const tableIDs = tournament?.table.items.map((tableStat, index) => {
      const temp = `
      mutation${index}: deleteTableStat(
        input: {id:"${tableStat.id}"}
      ){
        id
      }
      `;
      mutationString += temp;
      return tableStat.id;
    });

    console.log("mutation reset", mutationString);
    console.log("fixturestatsIDs", statsIDs);
    console.log("tablestatsID", tableIDs);

    const mutation = /* GraphQL */ `
      mutation ResetTableAndFixtures{

      }
    `;
  }, [deleteAllFixtureStats]);

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
        setShowStats(false);
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
      <Button
        onClick={() => {
          setDeleteAllFixtureStats(!deleteAllFixtureStats);
        }}
      >
        reset
      </Button>
      <div style={{ display: "flex" }}>
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
                      background: currentFixture?.id === fixture?.id ? "" : "",
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
                      <FlexboxGrid.Item colspan={6}>
                        {fixture?.homeTeam?.name}
                      </FlexboxGrid.Item>

                      <FlexboxGrid.Item colspan={3}>
                        {fixture?.homeScore}
                      </FlexboxGrid.Item>
                      <FlexboxGrid.Item>VS</FlexboxGrid.Item>
                      <FlexboxGrid.Item colspan={3}>
                        {fixture?.awayScore}
                      </FlexboxGrid.Item>

                      <FlexboxGrid.Item colspan={6}>
                        {fixture?.awayTeam?.name}
                      </FlexboxGrid.Item>
                      <FlexboxGrid.Item colspan={2}>
                        {fixture?.status === "pending" && (
                          <Icon
                            as={MdPendingActions}
                            size="1.5em"
                            fill="yellow"
                          />
                        )}
                        {fixture?.status === "verified" && (
                          <Icon as={MdVerified} size="1.5em" fill="green" />
                        )}
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
                      // const oldTeamStats = currentFixture?.teamStats?.items[0];
                      const homeTableStat = tournament?.table?.items.filter(
                        (tableStat) =>
                          tableStat.team.id === currentFixture?.homeID
                      )[0];
                      const awayTableStat = tournament?.table?.items.filter(
                        (tableStat) =>
                          tableStat.team.id === currentFixture?.awayID
                      )[0];

                      console.log("temporary Object", temp);
                      console.log("old tables", {
                        homeTableStat,
                        awayTableStat,
                      });

                      //check for cleansheets
                      if (currentFixture?.awayScore === 0) {
                        homeTableStat.cleanSheats--;
                      }
                      if (currentFixture?.homeScore === 0) {
                        awayTableStat.cleanSheats--;
                      }

                      //check W,D,L count and points upddate
                      if (
                        currentFixture?.awayScore === currentFixture?.homeScore
                      ) {
                        homeTableStat.gamesDrawn--;
                        if (homeTableStat.gamesDrawn < 0)
                          homeTableStat.gamesDrawn = 0;
                        awayTableStat.gamesDrawn--;
                        if (awayTableStat.gamesDrawn < 0)
                          awayTableStat.gamesDrawn = 0;
                        homeTableStat.points--;
                        awayTableStat.points--;
                      } else if (
                        currentFixture?.awayScore > currentFixture?.homeScore
                      ) {
                        awayTableStat.gamesWon--;
                        homeTableStat.gamesLost--;
                        awayTableStat.points -= 3;
                      } else if (
                        currentFixture?.awayScore < currentFixture?.homeScore
                      ) {
                        awayTableStat.gamesLost--;
                        homeTableStat.gamesWon--;
                        homeTableStat.points -= 3;
                      }

                      //update goal diff, for and against
                      homeTableStat.goalDifference -=
                        currentFixture.homeScore - currentFixture.awayScore;
                      awayTableStat.goalDifference -=
                        currentFixture.awayScore - currentFixture.homeScore;

                      homeTableStat.goalsAgainst -= currentFixture.awayScore;
                      awayTableStat.goalsAgainst -= currentFixture.homeScore;

                      homeTableStat.goalsFor -= currentFixture.homeScore;
                      awayTableStat.goalsFor -= currentFixture.awayScore;

                      //update with new results
                      //check for cleansheets
                      const awayGoals = parseInt(
                        teamstatsTracker.away.summary.filter(
                          (stat) => stat.attr === "goals"
                        )[0].val
                      );
                      const homeGoals = parseInt(
                        teamstatsTracker.home.summary.filter(
                          (stat) => stat.attr === "goals"
                        )[0].val
                      );
                      if (awayGoals === 0) {
                        homeTableStat.cleanSheats++;
                      }
                      if (homeGoals === 0) {
                        awayTableStat.cleanSheats++;
                      }

                      //check W,D,L count and points upddate
                      if (awayGoals === homeGoals) {
                        homeTableStat.gamesDrawn++;
                        awayTableStat.gamesDrawn++;
                        homeTableStat.points++;
                        awayTableStat.points++;
                      } else if (awayGoals > homeGoals) {
                        awayTableStat.gamesWon++;
                        homeTableStat.gamesLost++;
                        awayTableStat.points += 3;
                      } else if (awayGoals < homeGoals) {
                        awayTableStat.gamesLost++;
                        homeTableStat.gamesWon++;
                        homeTableStat.points += 3;
                      }

                      //update goal diff, for and against
                      homeTableStat.goalDifference =
                        homeTableStat.goalDifference + homeGoals - awayGoals;
                      awayTableStat.goalDifference =
                        awayTableStat.goalDifference + awayGoals - homeGoals;

                      homeTableStat.goalsAgainst =
                        homeTableStat.goalsAgainst + awayGoals < 0
                          ? 0
                          : homeTableStat.goalsAgainst + awayGoals;
                      awayTableStat.goalsAgainst =
                        awayTableStat.goalsAgainst + homeGoals < 0
                          ? 0
                          : awayTableStat.goalsAgainst + homeGoals;

                      homeTableStat.goalsFor =
                        homeTableStat.goalsFor + homeGoals < 0
                          ? 0
                          : homeTableStat.goalsFor + homeGoals;
                      awayTableStat.goalsFor =
                        awayTableStat.goalsFor + awayGoals < 0
                          ? 0
                          : awayTableStat.goalsFor + awayGoals;

                      console.log("updated tables", {
                        homeTableStat,
                        awayTableStat,
                      });
                      //update record
                      homeTableStat.record[activePage - 1] =
                        (homeGoals > awayGoals && "W") ||
                        (homeGoals < awayGoals && "L") ||
                        "D";
                      awayTableStat.record[activePage - 1] =
                        (awayGoals > homeGoals && "W") ||
                        (awayGoals < homeGoals && "L") ||
                        "D";

                      setCreateTeamStats({
                        teamStatsAway_teamId: currentFixture.awayID,
                        teamStatsHome_teamId: currentFixture.homeID,
                        fixtureTeamStatsId: currentFixture.id,
                        ...temp,
                      });
                      const updateFixture = {
                        id: currentFixture?.id,
                        homeScore: parseInt(homeGoals),
                        awayScore: parseInt(awayGoals),
                        status: "verified",
                      };
                      setUpdateTableStat({
                        home: homeTableStat,
                        away: awayTableStat,
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
                        status: "verified",
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
                          gamesPlayed:
                            parseInt(awayTS.gamesPlayed) + 1
                              ? parseInt(awayTS.gamesPlayed) + 1
                              : 1,
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

                    setGetTournamentByID(tournament?.id);

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
