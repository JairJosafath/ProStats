import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Loading from "../../../components/Loading";
import Confirmation from "../../../components/Confirmation";
import Error from "../../../components/Error";
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
import { MdVerified, MdPendingActions } from "react-icons/md";
import { Icon } from "@rsuite/icons";

//Util
import teamStats from "../../../backend/db/teamStats";
import { createTableStat } from "../../../graphql/mutations";
import { useTimeout } from "rsuite/esm/utils";
import ControlledInput from "../../../components/ControlledInput";
import StatPanel from "../../../components/StatPanel";
import ListItemCustom from "../../../components/ListCustom";
import Fixture from "../../../components/Fixture";

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
const TTeamStats = () => {
  const {
    team,
    tournament,
    setGetTeamFixtures,
    teamFixtures,
    setUpdateFixture,
    setCreateTeamStats,
    setUpdateTeamStats,
    setError,
    error,
  } = useOutletContext();
  const [showStats, setShowStats] = useState(false); //toggle between stats and fixtures
  const [currentFixture, setCurrentFixture] = useState(); //to access selected fixture data
  const [activePage, setActivePage] = useState(1); //pagination
  const [typeDataTeamState, setTypeDataTeamState] = useState(typeDataTeam[0]); //keep track which datatype is being used
  const [teamstatsTracker, setTeamstatsTracker] = useState({}); //track changes onchange
  const [confirm, setConfirm] = useState(false);
  const [createTeamStatsTrigger, setCreateTeamStatsTrigger] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  //if tournament changes update the fixture component
  useEffect(() => {
    if (tournament && team) {
      setGetTeamFixtures({
        tournamentID: { eq: tournament?.id },
        homeID: team?.id,
      });

      // console.log("us", teamFixtures);
      // console.log(
      //   "s",
      //   teamFixtures?.sort(
      //     (fixture1, fixture2) => fixture2.round - fixture1.round
      //   )
      // );
    }
  }, [team, tournament]);
  useEffect(() => {
    // console.log(confirm, "conf");
    // console.log(createTeamStatsTrigger, "trigger");
    if (confirm && createTeamStatsTrigger) {
      handleSave();
      setConfirm(false);
      setCreateTeamStatsTrigger(false);
    }
  }, [confirm]);
  useEffect(() => {
    //when fixtures are selected update the stats based on the fixture
    setTeamstatsTracker({});
    typeDataTeam.map(
      (type) => setTimeout(() => setTypeDataTeamState(type), 1000) //bug fix for not updating !showing stats
    );
    setTimeout(() => setTypeDataTeamState(typeDataTeam[0]), 1005);
  }, [currentFixture]);

  const handleSave = () => {
    // console.log("in handler");
    if (currentFixture?.teamStats?.items[0]) {
      // const oldTeamStats = currentFixture?.teamStats?.items[0];

      setUpdateTeamStats({
        id: currentFixture.teamStats.items[0].id,
        teamStatsAway_teamId: currentFixture.awayTeam.id,
        teamStatsHome_teamId: currentFixture.homeTeam.id,
        fixtureTeamStatsId: currentFixture.id,
        ...teamstatsTracker,
      });
    } else {
      setCreateTeamStats({
        teamStatsAway_teamId: currentFixture.awayTeam.id,
        teamStatsHome_teamId: currentFixture.homeTeam.id,
        fixtureTeamStatsId: currentFixture.id,
        members: [
          ...(team.moderators ? team.moderators : []),
          ...(tournament.league.moderatornames
            ? tournament.league.moderatornames
            : []),
        ],
        ...teamstatsTracker,
      });
      setTeamstatsTracker({});

      // setUpdateFixtures(true);

      // setGetTournamentByID(tournament?.id);
    }

    // if (
    //   temp[`away_summary_goals`] &&
    //   temp[`home_summary_goals`]
    // ) {
    //   setUpdateFixture({
    //     id: currentFixture?.id,
    //     homeScore: temp[`home_summary_goals`],
    //     awayScore: temp[`away_summary_goals`],
    //   });
    // } else
    if (teamstatsTracker[`away_summary_goals`]) {
      setUpdateFixture({
        id: currentFixture?.id,
        awayScore: teamstatsTracker[`away_summary_goals`],
        status: "pending",
      });
    } else if (teamstatsTracker[`home_summary_goals`]) {
      setUpdateFixture({
        id: currentFixture?.id,
        homeScore: teamstatsTracker[`home_summary_goals`],
        status: "pending",
      });
    }
    setTeamstatsTracker({});
    setShowStats(false);
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
                      setTypeDataTeamState={setTypeDataTeamState}
                      typeDataTeam={typeDataTeam}
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
      {/* Stats */}
      {showStats && (
        <Panel header="Stats" style={{ flex: 2, minHeight: "70vh" }}>
          <IoMdArrowBack
            size={"1.5em"}
            style={{ display: "block", margin: 6 }}
            onClick={() => {
              setTeamstatsTracker({});
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

          {currentFixture?.homeTeam?.id === team?.id && (
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
          )}

          {currentFixture?.awayTeam?.id === team?.id && (
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
          )}

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
                  //   teamstatsTracker.home[type].map((stat) => {
                  //     if (stat.val) {
                  //       temp[`home_${type}_${stat.attr.replaceAll(" ", "_")}`] =
                  //         parseInt(stat.val);
                  //     }
                  //   })
                  // );
                  // typeDataTeam.map((type) =>
                  //   teamstatsTracker.away[type].map((stat) => {
                  //     if (stat.val) {
                  //       temp[`away_${type}_${stat.attr.replaceAll(" ", "_")}`] =
                  //         parseInt(stat.val);
                  //     }
                  //   })
                  // );
                  // console.log(temp, "temp");
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
    </>
  );
};

export default TTeamStats;
