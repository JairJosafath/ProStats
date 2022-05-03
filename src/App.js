import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

//Styles
import "./App.css";
import "@aws-amplify/ui-react/styles.css";

//Amplify
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Amplify, API, Auth } from "aws-amplify";
import awsExports from "./aws-exports";

//Components
import NavbarCustom from "./components/NavbarCustom";
import UserNav from "./components/UserNav";
import { CustomProvider } from "rsuite";
import banner from "./img/banner.png";

//Containers
import Home from "./containers/Home";
import Standings from "./containers/Standings";
import Transfers from "./containers/Transfers";
import Fixtures from "./containers/Fixtures";
import Dashboard from "./containers/Dashboard";
import UploadPlayerStats from "./containers/UploadPlayerStats";
import UploadTeamStats from "./containers/UploadTeamStats";
import ManagePlayer from "./containers/ManagePlayer";
import ManageTeam from "./containers/ManageTeam";
import PostTransfer from "./containers/Post/PostTransfer";
import PostNews from "./containers/Post/PostNews";
import News from "./containers/News";
import Account from "./containers/Account";
import Preferences from "./containers/Preferences";
import SignInCustom from "./containers/SignInCustom";

//queries
import { createPlayer } from "./graphql/mutations";

//Containers
import LeagueDashboard from "./containers/LeagueDashboard";
import LDashboard from "./containers/LeagueDashboard/Dashboard";
import LTeamStats from "./containers/LeagueDashboard/TeamStats";
import LPlayerStats from "./containers/LeagueDashboard/PlayerStats";
import LTournaments from "./containers/LeagueDashboard/Tournaments";
import LRoles from "./containers/LeagueDashboard/Roles";
import LNews from "./containers/LeagueDashboard/News";
import LTransfer from "./containers/LeagueDashboard/Transfer";
import LRequests from "./containers/LeagueDashboard/Requests";
import LTeams from "./containers/LeagueDashboard/Teams";
import TeamDashboard from "./containers/TeamDashboard";
import TDashboard from "./containers/TeamDashboard/Dashboard";
import TTeamStats from "./containers/TeamDashboard/TeamStats";
import TPlayerStats from "./containers/TeamDashboard/PlayerStats";
import TPlayers from "./containers/TeamDashboard/Players";
// import TTournaments from "./containers/TeamDashboard/Tournaments";
import TRoles from "./containers/TeamDashboard/Roles";
import TLeagues from "./containers/TeamDashboard/Leagues";
import PlayerDashboard from "./containers/PlayerDashboard";
import PDashboard from "./containers/PlayerDashboard/Dashboard";
import PPlayerStats from "./containers/PlayerDashboard/PlayerStats";
import PTeams from "./containers/PlayerDashboard/Teams";
import GlobalStyles from "./GlobalStyles";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Landing from "./components/Landing";

// import TTeams from "./containers/TeamDashboard/Teams";

Amplify.configure(awsExports);

function App(props) {
  const [show, setShow] = useState(false);
  const [league, setLeague] = useState({
    name: null,
    header: null,
    tournaments: {
      items: [
        {
          name: null,
          table: {
            items: [
              {
                cleanSheats: null,
                gamesDrawn: null,
                gamesLost: null,
                gamesPlayed: null,
                gamesWon: null,
                goalDifference: null,
                goalsAgainst: null,
                goalsFor: null,
                points: null,
                record: [null, null],
                team: {
                  logo: null,
                  team: null,
                },
              },
            ],
          },
          playerTable: {
            items: [
              {
                assists: null,
                beat: null,
                blocks: null,
                expectedAssists: null,
                goals: null,
                interceptions: null,
                matchRating: null,
                nutmeg: null,
                player: {
                  name: null,
                },
                playerOfTheMatch: null,
                playerTableStatPlayerId: null,
                saves: null,
                skillmoveBeat: null,
                tacklesWon: null,
                tournamentPlayerTableId: null,
                id: null,
              },
            ],
          },
        },
      ],
    },
  });

  const [tournament, setTournament] = useState(league.tournaments.items[0]);
  const [tournaments, setTournaments] = useState(league.tournaments.items);
  const [indexT, setIndexT] = useState(0);
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const [roles, setRoles] = useState(["player"]);
  const [newUserTrigger, setNewUserTrigger] = useState(true);

  useEffect(() => {
    setTournaments(league.tournaments.items);
    setTournament(tournaments[indexT]);
  }, [league, tournament, tournaments, indexT]);

  // useEffect(() => {
  //   if (newUserTrigger && user) {
  //     const createPlayerInput = {
  //       name: user.username,
  //       username: user.username,
  //     };

  //     const cp = async () => {
  //       if (
  //         user.attributes["custom:player_id"] === "" ||
  //         !user.attributes["custom:player_id"]
  //       ) {
  //         const playerID = await API.graphql({
  //           query: createPlayer,
  //           variables: { input: createPlayerInput },
  //           authMode: "AMAZON_COGNITO_USER_POOLS",
  //         });

  //         Auth.updateUserAttributes(user, {
  //           "custom:player_id": playerID.data.createPlayer.id,
  //         }).then(setNewUserTrigger(false));
  //       }
  //     };

  //     cp();
  //   }
  // }, [user]);

  useEffect(() => {
    if (user) {
      let addingroles = ["player"];

      if (league.leagueAdmin === user.username) {
        //give admin role

        addingroles.push("admin");
      }

      if (league.newsModerators?.includes(user.username)) {
        //give newsModerators role

        addingroles.push("newsMod");
      }

      if (league.requestModerators?.includes(user.username)) {
        //give reqModerators role

        addingroles.push("reqMod");
      }
      if (league.tournamentModerators?.includes(user.username)) {
        addingroles.push("tournMod");
        //give tournamentModerators role
      }

      if (league.transferModerators?.includes(user.username)) {
        //give transferModerators role

        addingroles.push("transferMod");
      }

      setRoles(addingroles);
    }
  }, [league]);

  return (
    <>
      {/* {league.header && (
        <>
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: 300,
              opacity: 0,
              background: "#023e8a",
              width: "100vw",
            }}
          ></div>
          <img
            style={{
              objectFit: "cover",
              height: 300,

              width: "100vw",
            }}
            src={league.header}
            alt="header"
          />
        </>
      )} */}

      <BrowserRouter>
        <NavbarCustom
          league={league}
          setLeague={setLeague}
          loggedIn={user ? true : false}
          user={user ? user : "geust"}
        />
        {user && show && (
          <>
            <UserNav user={user} roles={roles} />
          </>
        )}

        <div style={{ minHeight: "90vh" }}>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="/" element={<Landing />} />
            </Route>
            <Route
              path="/standings"
              element={
                <Standings
                  tournament={tournament}
                  tournaments={tournaments}
                  setTournament={setTournament}
                  setTournaments={setTournaments}
                  league={league}
                  table={tournament ? tournament.table : { items: [] }}
                  indexT={indexT}
                  setIndexT={setIndexT}
                  playerTable={
                    tournament ? tournament.playerTable : { items: [] }
                  }
                />
              }
            />
            <Route path="/transfers" element={<Transfers />} />
            <Route path="/fixtures" element={<Fixtures />} />
            <Route
              path="/dashboard"
              element={user ? <Dashboard /> : <SignInCustom />}
            />
            <Route
              path="/uploadplayerstats/:type"
              element={<UploadPlayerStats />}
            />
            <Route
              path="/uploadteamstats/:type"
              element={user ? <UploadTeamStats /> : <SignInCustom />}
            />
            <Route
              path="/manageplayer"
              element={user ? <ManagePlayer /> : <SignInCustom />}
            />
            <Route
              path="/manageteam"
              element={user ? <ManageTeam /> : <SignInCustom />}
            />
            <Route
              path="/transfer"
              element={user ? <PostTransfer /> : <SignInCustom />}
            />
            <Route
              path="/news"
              element={user ? <PostNews /> : <SignInCustom />}
            />
            <Route
              path="/leaguedashboard/:id"
              element={user ? <LeagueDashboard /> : <SignInCustom />}
            >
              <Route path="dashboard" element={<LDashboard />} />
              <Route path="teamstats" element={<LTeamStats />} />
              <Route path="playerstats" element={<LPlayerStats />} />
              <Route path="tournaments" element={<LTournaments />} />
              <Route path="teams" element={<LTeams />} />
              <Route path="roles" element={<LRoles />} />
              <Route path="news" element={<LNews />} />
              <Route path="transfer" element={<LTransfer />} />
              <Route path="requests" element={<LRequests />} />
              {/* <Route path="dashboard" element={<LDashboard/>}/> */}
            </Route>
            <Route
              path="/teamdashboard/:id"
              element={user ? <TeamDashboard /> : <SignInCustom />}
            >
              <Route path="dashboard" element={<TDashboard />} />
              <Route path="teamstats" element={<TTeamStats />} />
              <Route path="playerstats" element={<TPlayerStats />} />
              {/* <Route path="tournaments" element={<TTournaments />} />
            <Route path="teams" element={<TTeams />} /> */}
              <Route path="roles" element={<TRoles />} />
              <Route path="leagues" element={<TLeagues />} />
              <Route path="players" element={<TPlayers />} />

              {/* <Route path="dashboard" element={<LDashboard/>}/> */}
            </Route>
            <Route
              path="/playerdashboard/:id"
              element={user ? <PlayerDashboard /> : <SignInCustom />}
            >
              <Route path="dashboard" element={<PDashboard />} />

              <Route path="playerstats" element={<PPlayerStats />} />
              <Route path="teams" element={<PTeams />} />

              {/* <Route path="dashboard" element={<LDashboard/>}/> */}
            </Route>
            <Route
              path={`/preferences`}
              element={
                user ? (
                  <Preferences playerID={user.attributes["custom:player_id"]} />
                ) : (
                  <SignInCustom />
                )
              }
            />
            <Route
              path="/account"
              element={user ? <Account /> : <SignInCustom />}
            />
            <Route path="/signIn" element={<SignInCustom />} />
          </Routes>
        </div>
      </BrowserRouter>
      {/* <News league={league} /> */}
      <GlobalStyles />
      <CustomProvider theme="dark">{props.children}</CustomProvider>
    </>
  );
}

export default App;
