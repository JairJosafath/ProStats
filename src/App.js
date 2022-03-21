import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

Amplify.configure(awsExports);

function App(props) {
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

  useEffect(() => {
    setTournaments(league.tournaments.items);
    setTournament(tournaments[indexT]);
  }, [league, tournament, tournaments, indexT]);

  useEffect(() => {
    if (user) {
      const createPlayerInput = {
        name: user.username,
        username: user.username,
      };

      const cp = async () => {
        if (
          user.attributes["custom:player_id"] === "" ||
          !user.attributes["custom:player_id"]
        ) {
          const playerID = await API.graphql({
            query: createPlayer,
            variables: { input: createPlayerInput },
            authMode: "AMAZON_COGNITO_USER_POOLS",
          });

          Auth.updateUserAttributes(user, {
            "custom:player_id": playerID.data.createPlayer.id,
          });
        }
      };

      cp();
    }
  }, [user, league]);

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
      {league.header && (
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
      )}

      <BrowserRouter>
        <NavbarCustom
          league={league}
          setLeague={setLeague}
          loggedIn={user ? true : false}
          user={user ? user : "geust"}
        />
        {user && (
          <>
            <UserNav user={user} roles={roles} />
          </>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
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
      </BrowserRouter>
      <News league={league} />
      <CustomProvider theme="dark">{props.children}</CustomProvider>
    </>
  );
}

export default App;