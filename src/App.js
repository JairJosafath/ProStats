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
Amplify.configure(awsExports);

function App() {
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState("");
  useEffect(() => {
    if (signedIn === true) setUser(users[0]);
    else setUser("guest");
  }, [signedIn]);
  return (
    <>
      <BrowserRouter>
        <NavbarCustom
          user={user}
          signedIn={signedIn}
          setSignedIn={setSignedIn}
        />
        {signedIn && user && (
          <>
            <UserNav user={user} />
          </>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/standings" element={<Standings />} />
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
    </>
  );
}

export default App;
