import { useState, useEffect } from "react";
import apiSettings from "../API/API";

const useLeagueDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [updateLeague, setUpdateLeague] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false); //only try to read player attr when data has been fecthed

  const [leagueId, setLeagueId] = useState(null);
  const [league, setLeague] = useState(null);
  const [leagueTeamp, setLeagueTemp] = useState(null);

  const [createTournament, setCreateTournament] = useState(false);

  const fetchLeague = async () => {
    setLoading(true);
    if (leagueId) {
      const data = await apiSettings.getLeague(leagueId).catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
      if (!league || !data) setError(true);
      if (league && data) setError(false);

      console.log("err", error);
      if (!error) {
        setLeague(data);
        // setLeagueTemp({
        //   name: league.name,
        //   logo: league.logo,
        //   description: league.description,
        //   id: league.id,
        //   header: league.header,
        // });
        setDataLoaded(true);
        setLoading(false);
      }
    }
  };

  const createTournamentFunct = async () => {
    if (createTournament) {
      setLoading(true);
      apiSettings.createTournament(createTournament).catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
      setCreateTournament(false);
    }
  };

  useEffect(() => {
    fetchLeague();
  }, [leagueId]);

  useEffect(() => {
    createTournamentFunct();
    fetchLeague();
  }, [createTournament]);

  return {
    league,
    setLeague,
    leagueId,
    setLeagueId,
    createTournament,
    setCreateTournament,
  };
};
export default useLeagueDashboard;
