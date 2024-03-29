import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Loading from "../../../components/Loading";

//Style
import {
  Avatar,
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
import StatPanel from "../../../components/StatPanel";
import { TeamStats } from "../../../backend/db/teamStatsClass";
import ListItemCustom from "../../../components/ListCustom";
import Fixture from "../../../components/Fixture";
import Confirmation from "../../../components/Confirmation";
import Error from "../../../components/Error";
//used to navigate the different stat types
const typeDataTeam = [
  "summary",
  "passing",
  "possession",
  "shooting",
  "defending",
];

//copy of the teamstats object
const tracker = new TeamStats();

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
    setCreateTableStat2,
    setUpdateTableStat2,
    setUpdateFixture,
    setActiveRound,
    confirm,
    setConfirm,
    setError,
    error,
  } = useOutletContext();

  const [showStats, setShowStats] = useState(false); //toggle between stats and fixtures
  const [typeDataTeamState, setTypeDataTeamState] = useState(typeDataTeam[0]); //keep track which datatype is being used
  const [activePage, setActivePage] = useState(1); //pagination
  const [currentFixture, setCurrentFixture] = useState(); //to access selected fixture data
  const [teamstatsTracker, setTeamstatsTracker] = useState({}); //track changes onchange
  const [updateFixtures, setUpdateFixtures] = useState(false);
  const [deleteAllFixtureStats, setDeleteAllFixtureStats] = useState(false);
  const [tempData, setTempData] = useState({});
  const [createFixturesTrigger, setCreateFixturesTrigger] = useState(false);
  const [createTeamStatsTrigger, setCreateTeamStatsTrigger] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  useEffect(() => {
    setActiveRound(activePage);
  }, [activePage]);
  useEffect(() => {
    console.log("teamstatshow", teamstatsTracker);
  }, [teamstatsTracker]);
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
    if (tournament)
      setGetFixturesByTournamentandRound({
        tournamentID: tournament?.id,
        condition: { eq: activePage },
      });
  }, [activePage, tournament]);

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
  useEffect(() => {
    console.log("updated fixbytourround", fixturesByTournamentAndRound);
  }, [fixturesByTournamentAndRound]);

  useEffect(() => {
    //when fixtures are selected update the stats based on the fixture
    setTeamstatsTracker({});
    // typeDataTeam.map(
    //   (type) => setTimeout(() => setTypeDataTeamState(type), 1000) //bug fix for not updating !showing stats
    // );
    // setTimeout(() => setTypeDataTeamState(typeDataTeam[0]), 1005);
  }, [currentFixture]);

  useEffect(() => {
    console.log("conf status useff", confirm, createFixturesTrigger);

    if (confirm && createFixturesTrigger) {
      setCreateFixtures(createFixturesTrigger);
      setCreateFixturesTrigger(false);
    }
    if (confirm && createTeamStatsTrigger) {
      handleSave();
    }
  }, [confirm]);

  const handleSave = () => {
    const homeTS = tournament?.table?.items.filter(
      (tableStat) => tableStat.team.id === currentFixture.homeID
    )[0];
    const awayTS = tournament?.table?.items.filter(
      (tableStat) => tableStat.team.id === currentFixture.awayID
    )[0];
    let tablestatHome = {};
    let tablestatAway = {};

    let awayGoals = teamstatsTracker["away_summary_goals"];
    let homeGoals = teamstatsTracker["home_summary_goals"];
    let result =
      (homeGoals > awayGoals && "W") ||
      (homeGoals === awayGoals && "D") ||
      (homeGoals < awayGoals && "L");

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
    const updateFixture = {
      id: currentFixture?.id,
      homeScore: parseInt(homeGoals),
      awayScore: parseInt(awayGoals),
      status: "verified",
    };
    console.log("testing ", currentFixture?.teamStats?.items[0]);
    if (
      currentFixture?.teamStats?.items[0] &&
      currentFixture?.status === "verified"
    ) {
      // const oldTeamStats = currentFixture?.teamStats?.items[0];
      if (homeTS && awayTS) {
        const homeTableStat = tournament?.table?.items.filter(
          (tableStat) => tableStat.team.id === currentFixture?.homeID
        )[0];
        const awayTableStat = tournament?.table?.items.filter(
          (tableStat) => tableStat.team.id === currentFixture?.awayID
        )[0];

        // console.log("old tables", {
        //   homeTableStat,
        //   awayTableStat,
        // });

        //check for cleansheets
        if (currentFixture?.awayScore === 0) {
          if (homeTableStat.cleanSheats - 1 >= 0) homeTableStat.cleanSheats--;
        }
        if (currentFixture?.homeScore === 0) {
          if (awayTableStat.cleanSheats - 1 >= 0) awayTableStat.cleanSheats--;
        }

        //check W,D,L count and points upddate
        if (currentFixture?.awayScore === currentFixture?.homeScore) {
          if (homeTableStat.gamesDrawn - 1 >= 0) homeTableStat.gamesDrawn--;
          if (homeTableStat.gamesDrawn < 0) homeTableStat.gamesDrawn = 0;
          if (awayTableStat.gamesDrawn - 1 >= 0) awayTableStat.gamesDrawn--;
          if (awayTableStat.gamesDrawn < 0) awayTableStat.gamesDrawn = 0;
          if (homeTableStat.points - 1 >= 0) homeTableStat.points--;
          if (awayTableStat.points - 1 >= 0) awayTableStat.points--;
        } else if (currentFixture?.awayScore > currentFixture?.homeScore) {
          if (awayTableStat.gamesWon - 1 >= 0) awayTableStat.gamesWon--;
          if (homeTableStat.gamesLost - 1 >= 0) homeTableStat.gamesLost--;
          if (awayTableStat.points - 3 >= 0) awayTableStat.points -= 3;
        } else if (currentFixture?.awayScore < currentFixture?.homeScore) {
          if (awayTableStat.gamesLost - 1 >= 0) awayTableStat.gamesLost--;
          if (homeTableStat.gamesWon - 1 >= 0) homeTableStat.gamesWon--;
          if (homeTableStat.points - 3 >= 0) homeTableStat.points -= 3;
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
        const awayGoals = parseInt(teamstatsTracker["away_summary_goals"]);
        const homeGoals = parseInt(teamstatsTracker["home_summary_goals"]);
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

        // console.log("updated tables", {
        //   homeTableStat,
        //   awayTableStat,
        // });
        //update record
        homeTableStat.record[activePage - 1] =
          (homeGoals > awayGoals && "W") ||
          (homeGoals < awayGoals && "L") ||
          "D";
        awayTableStat.record[activePage - 1] =
          (awayGoals > homeGoals && "W") ||
          (awayGoals < homeGoals && "L") ||
          "D";

        setUpdateTeamStats({
          id: currentFixture?.teamStats?.items[0].id,
          teamStatsAway_teamId: currentFixture.awayID,
          teamStatsHome_teamId: currentFixture.homeID,
          fixtureTeamStatsId: currentFixture.id,
          ...teamstatsTracker,
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
        // console.log("to be uploaded", teamstatsTracker);

        setTeamstatsTracker({});
        // console.log(teamstatsTracker);

        // setTeamstatsTracker({ ...teamStats });
        // console.log("after save", teamstatsTracker);
        // console.log(teamStats);

        // setUpdateFixtures(true);

        // setGetTournamentByID(tournament?.id);

        setShowStats(false);
        return;
      }
    } else if (
      currentFixture?.teamStats?.items[0] &&
      currentFixture?.status === "pending"
    ) {
      setUpdateTeamStats({
        id: currentFixture?.teamStats?.items[0].id,
        teamStatsAway_teamId: currentFixture.awayID,
        teamStatsHome_teamId: currentFixture.homeID,
        ...teamstatsTracker,
      });
    } else {
      setCreateTeamStats({
        teamStatsAway_teamId: currentFixture.awayID,
        teamStatsHome_teamId: currentFixture.homeID,
        fixtureTeamStatsId: currentFixture.id,

        ...teamstatsTracker,
      });

      //create table standings
    }
    if (homeTS) {
      //update standings for homeTeam
      //currentFixture?.teamStats?.items[0]["away_summary_goals"]===0?1:0 ,

      tablestatHome = {
        id: homeTS.id,
        cleanSheats:
          parseInt(homeTS.cleanSheats) + (parseInt(awayGoals) === 0 ? 1 : 0),
        gamesDrawn:
          parseInt(homeTS.gamesDrawn) + (homeGoals === awayGoals ? 1 : 0),
        gamesLost: parseInt(homeTS.gamesLost + (homeGoals < awayGoals ? 1 : 0)),
        gamesPlayed: parseInt(homeTS.gamesPlayed) + 1,
        gamesWon: parseInt(homeTS.gamesWon) + (homeGoals > awayGoals ? 1 : 0),
        goalDifference:
          parseInt(homeTS.goalDifference) +
          (parseInt(homeGoals) - parseInt(awayGoals)),
        goalsAgainst: parseInt(homeTS.goalsAgainst) + parseInt(awayGoals),
        goalsFor: parseInt(homeTS.goalsFor) + parseInt(homeGoals),
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
          parseInt(awayTS.cleanSheats) + (parseInt(homeGoals) === 0 ? 1 : 0),
        gamesDrawn:
          parseInt(awayTS.gamesDrawn) + (homeGoals === awayGoals ? 1 : 0),
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
        goalsAgainst: parseInt(awayTS.goalsAgainst) + parseInt(homeGoals),
        goalsFor: parseInt(awayTS.goalsFor) + parseInt(awayGoals),
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
    if (!homeTS && !awayTS) {
      setCreateTableStat({
        home: tablestatHome,
        away: tablestatAway,
        fixture: updateFixture,
      });
    } else if (!homeTS && awayTS) {
      //update awayTS and create Home
      setCreateTableStat2({
        home: tablestatHome,
      });
      setUpdateFixture({
        id: currentFixture?.id,
        homeScore: parseInt(homeGoals),
        awayScore: parseInt(awayGoals),
        status: "verified",
      });
      setUpdateTableStat2({
        away: tablestatAway,
      });
    } else if (homeTS && !awayTS) {
      //create awayTS and update Home
      setCreateTableStat2({
        away: tablestatAway,
      });
      setUpdateTableStat2({
        home: tablestatHome,
      });
      setUpdateFixture({
        id: currentFixture?.id,
        homeScore: parseInt(homeGoals),
        awayScore: parseInt(awayGoals),
        status: "verified",
      });
      console.log("not implemented yet V2");
    } else if (homeTS && awayTS) {
      // update home and away
      setUpdateTableStat({
        home: tablestatHome,
        away: tablestatAway,
        fixture: updateFixture,
      });
    }
    console.log("to be uploaded", teamstatsTracker);

    setTeamstatsTracker({});
    console.log(teamstatsTracker);
  };
  return (
    <>
      {/* <Button
        onClick={() => {
          setDeleteAllFixtureStats(!deleteAllFixtureStats);
        }}
      >
        reset
              {loading && <Loading size={"30px"} />}

      </Button> */}
      {error && <Error error={error} setError={setError} />}
      {showConfirmModal && (
        <Confirmation
          setConfirm={setConfirm}
          action={showConfirmModal.action}
          type={showConfirmModal.type}
          setOpen={setShowConfirmModal}
        />
      )}
      <div style={{ display: "flex" }}>
        {!showStats && (
          <Panel header={`Fixtures round ${activePage}`} style={{ flex: 2 }}>
            {fixturesByTournamentAndRound?.items?.length === 0 && (
              <Button
                onClick={() => {
                  // console.log(":gen fixtures");
                  const inp = {
                    teams: tournament?.team?.items?.map((team) => {
                      return { id: team.team.id, mods: team.team.moderators };
                    }),
                    tournamentID: tournament?.id,
                  };

                  // setCreateFixtures(inp);
                  setShowConfirmModal({ type: "fixtures", action: "create" });
                  setCreateFixturesTrigger(inp);
                }}
              >
                generate fixtures
              </Button>
            )}
            <List hover style={{ width: 500 }}>
              {fixturesByTournamentAndRound?.items?.map((fixture) => {
                return (
                  <Fixture
                    fixture={fixture}
                    setShowStats={setShowStats}
                    setTypeDataTeamState={setTypeDataTeamState}
                    typeDataTeam={typeDataTeam}
                    setCurrentFixture={setCurrentFixture}
                  />
                );
              })}
            </List>
            {fixturesByTournamentAndRound?.items?.[0] && (
              <Pagination
                total={
                  tournament?.team?.items?.length *
                  (tournament?.team?.items?.length - 1)
                }
                limit={Math.floor(tournament?.team?.items?.length / 2)}
                activePage={activePage}
                onChangePage={setActivePage}
              />
            )}
          </Panel>
        )}

        {/* Stats */}
        {showStats && (
          <Panel
            header="Stats"
            style={{
              flex: 2,
              minHeight: "70vh",
              width: "100%",
              overflowY: "scroll",
            }}
          >
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

            <Panel header={`Home: ${currentFixture?.homeTeam?.name}`}>
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

            <Panel header={`Away: ${currentFixture?.awayTeam?.name}`}>
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
                    // console.log("save rex");
                    // console.log("huge test right here", teamstatsTracker);

                    // const temp = {};
                    // console.log("temp obj", temp);

                    // typeDataTeam.map((type) =>
                    //   teamstatsTracker.stats.home[type].map((stat) => {
                    //     if (stat.val) {
                    //       temp[
                    //         `home_${type}_${stat.attr.replaceAll(" ", "_")}`
                    //       ] = parseInt(stat.val);
                    //     }
                    //   })
                    // );
                    // typeDataTeam.map((type) =>
                    //   teamstatsTracker.stats.away[type].map((stat) => {
                    //     if (stat.val) {
                    //       temp[
                    //         `away_${type}_${stat.attr.replaceAll(" ", "_")}`
                    //       ] = parseInt(stat.val);
                    //     }
                    //   })
                    // );

                    // setTeamstatsTracker({ ...teamStats });
                    // console.log("after save", teamstatsTracker);
                    // console.log(teamStats);

                    // setUpdateFixtures(true);

                    // setGetTournamentByID(tournament?.id);

                    setShowConfirmModal({
                      type: "stats",
                      action: "save/update",
                    });
                    setCreateTeamStatsTrigger(true);
                    setShowStats(false);
                  }}
                >
                  Save
                </Button>
              </FlexboxGrid.Item>
              <FlexboxGrid.Item>
                <Button
                  onClick={() => {
                    setTeamstatsTracker({});
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
