import React, { useEffect } from "react";
import styled from "styled-components";
import NavbarCustom from "./components/NavbarCustom";
import UserNav from "./components/UserNav";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Standings from "./containers/Standings";
import Transfers from "./containers/Transfers";
import Fixtures from "./containers/Fixtures";
import { useState } from "react";
import users from "./backend/user/users";
import Dashboard from "./containers/Dashboard";
import UploadPlayerStats from "./containers/UploadPlayerStats";
import UploadTeamStats from "./containers/UploadTeamStats";
import ManagePlayer from "./containers/ManagePlayer";
import ManageTeam from "./containers/ManageTeam";
import Transfer from "./containers/Post/Transfer";
import News from "./containers/Post/News";
import Account from "./containers/Account";
import Preferences from "./containers/Preferences";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import { CustomProvider } from "rsuite";
import banner from "./img/banner.png";

Amplify.configure(awsExports);

function App(props) {
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState("");
  const [brightness, setBrightness] = useState(1);
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
  useEffect(() => {
    if (signedIn === true) setUser(users[0]);
    else setUser("guest");
  }, [signedIn]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        console.log(brightness - window.pageYOffset / 300);
        return setBrightness(brightness - window.pageYOffset / 300);
      });
    }
  }, []);

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
              background: "#023e8a",
              width: "100vw",
            }}
          ></div>
          <img
            style={{
              objectFit: "cover",
              height: 300,
              filter: `brightness(${brightness * 100}%) `,
              opacity: `${brightness}`,
              width: "100vw",
            }}
            src={league.header}
            alt="header"
          />
        </>
      )}
      <BrowserRouter>
        <NavbarCustom
          user={user}
          signedIn={signedIn}
          setSignedIn={setSignedIn}
          league={league}
          setLeague={setLeague}
        />
        {signedIn && user && (
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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/uploadplayerstats/:type"
            element={<UploadPlayerStats />}
          />
          <Route path="/uploadteamstats/:type" element={<UploadTeamStats />} />
          <Route path="/manageplayer" element={<ManagePlayer />} />
          <Route path="/manageteam" element={<ManageTeam />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/news" element={<News />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
      <CustomProvider theme="dark">{props.children}</CustomProvider>
    </>
  );
}

export default App;
