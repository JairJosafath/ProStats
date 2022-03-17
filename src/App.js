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
    name: "league",
    header: banner,
    tournaments: {
      items: [
        {
          name: "testingg",
          table: {
            items: [
              {
                cleanSheats: 0,
                gamesDrawn: 0,
                gamesLost: 0,
                gamesPlayed: 0,
                gamesWon: 0,
                goalDifference: 0,
                goalsAgainst: 0,
                goalsFor: 0,
                points: 0,
                record: ["D", "D"],
                team: {
                  logo: "logo",
                  team: "name",
                },
              },
            ],
          },
          playerTable: {
            items: [
              {
                assists: 0,
                beat: 0,
                blocks: 0,
                expectedAssists: 0,
                goals: 0,
                interceptions: 0,
                matchRating: 0,
                nutmeg: 0,
                player: {
                  name: 0,
                },
                playerOfTheMatch: 0,
                playerTableStatPlayerId: 0,
                saves: 0,
                skillmoveBeat: 0,
                tacklesWon: 0,
                tournamentPlayerTableId: 0,
                id: 0,
              },
            ],
          },
        },
      ],
    },
  });
  // console.log("show", league.tournaments.items);
  // console.log("showAll", league.tournaments);
  const [tournament, setTournament] = useState(league.tournaments.items[0]);
  const [tournaments, setTournaments] = useState(league.tournaments.items);
  const [indexT, setIndexT] = useState(0);
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  console.log("usercreds", user);

  useEffect(() => {
    if (user) {
      userCheck(user.attributes);

      const createPlayerInput = {
        name: user.username,
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
          console.log("newly created ID", playerID);
          Auth.updateUserAttributes(user, {
            "custom:player_id": playerID.data.createPlayer.id,
          });
        }
      };

      cp();

      userCheck(user.attributes);
    }
  }, [user]);

  useEffect(() => {
    setTournaments(league.tournaments.items);
    setTournament(tournaments[indexT]);
  }, [league, tournament, tournaments, indexT]);

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
        />
        {user && (
          <>
            <UserNav user={user} />
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
            path="/preferences"
            element={user ? <Preferences /> : <SignInCustom />}
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

const userCheck = (attributes) => {
  console.log("attributes", attributes["custom:player_id"]);
};
export default App;
