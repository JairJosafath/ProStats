import { useState, useEffect } from "react";
import { API } from "aws-amplify";
import {
  Managers,
  Players,
  Leagues,
  Admins,
  Teams,
  Tournaments,
} from "../backend/dataforDemo";
import {
  createPlayer,
  createTeam,
  createTournament,
  createLeague,
  createTableStat,
  createPlayerTableStat,
} from "../graphql/mutations";

const useUploadDummyData = () => {
  const [managers, setManagers] = useState("");
  const [admin, setAdmin] = useState("");
  const [league, setLeague] = useState("");
  const [players, setPlayers] = useState("");
  const [teams, setTeams] = useState("");
  const [tournaments, setTournaments] = useState("");

  // useEffect(() => {
  //   const adminData = async () => {
  //     for (let i = 0; i < Admins.length; i++) {
  //       const createAdminInputs = {
  //         id: Admins[i].id,
  //         name: Admins[i].name,
  //         username: Admins[i].username,
  //       };
  //       try {
  //         let result = await API.graphql({
  //           query: createPlayer,
  //           variables: {
  //             input: createAdminInputs,
  //           },
  //         });
  //         console.log("admin", result);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     }
  //   };
  //   let leagueData = async () => {
  //     for (let i = 0; i < Leagues.length; i++) {
  //       let createLeagueInputs = {
  //         id: Leagues[i].id,
  //         name: Leagues[i].name,
  //         description: Leagues[i].descr,
  //       };
  //       try {
  //         let result = await API.graphql({
  //           query: createLeague,
  //           variables: {
  //             input: createLeagueInputs,
  //           },
  //         });
  //         console.log("league", result);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     }
  //   };
  //   let managerData = async () => {
  //     for (let i = 0; i < Leagues.length; i++) {
  //       let createManagerInputs = {
  //         id: Managers[i].id,
  //         name: Managers[i].name,
  //         username: Managers[i].username,
  //       };
  //       try {
  //         let result = await API.graphql({
  //           query: createPlayer,
  //           variables: {
  //             input: createManagerInputs,
  //           },
  //         });
  //         console.log("manager", result);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     }
  //   };
  //   let playerData = async () => {
  //     for (let i = 0; i < Leagues.length; i++) {
  //       let createPlayerInputs = {
  //         id: Players[i].id,
  //         name: Players[i].name,
  //         username: Players[i].username,
  //       };
  //       try {
  //         let result = await API.graphql({
  //           query: createPlayer,
  //           variables: {
  //             input: createPlayerInputs,
  //           },
  //         });
  //         console.log("player", result);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     }
  //   };
  //   let teamData = async () => {
  //     for (let i = 0; i < teams.length; i++) {
  //       let createTeamInputs = {
  //         id: Teams[i].id,
  //         name: Teams[i].name,
  //         playerManagesId: Teams[i].managerID,
  //         leagueTeamsId: Teams[i].leagueID,
  //       };
  //       try {
  //         let result = await API.graphql({
  //           query: createTeam,
  //           variables: {
  //             input: createTeamInputs,
  //           },
  //         });
  //         console.log("team", result);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     }
  //   };
  //   let tournamentData = async () => {
  //     for (let i = 0; i < tournaments.length; i++) {
  //       const createTournamentInputs = {
  //         id: Tournaments[i].id,
  //         name: Tournaments[i].name,
  //         slogan: Tournaments[i].slogan,
  //         leagueTournamentsId: Tournaments[i].leagueID,
  //       };
  //       try {
  //         let result = await API.graphql({
  //           query: createTournament,
  //           variables: {
  //             input: createTournamentInputs,
  //           },
  //         });
  //         console.log("tournament", result);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     }
  //   };

  //   adminData();
  //   leagueData();
  //   managerData();
  //   playerData();
  //   teamData();
  //   tournamentData();
  // }, []);
};

export default useUploadDummyData;
