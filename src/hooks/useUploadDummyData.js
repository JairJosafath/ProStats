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
};

export default useUploadDummyData;
