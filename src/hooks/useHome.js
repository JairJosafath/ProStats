import { Auth } from "aws-amplify";
import { useState, useEffect } from "react";
import { apiSettings, apiSettingsTD, apiSettingsPublic } from "../API/API";

const useHome = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [featured, setFeatured] = useState(false);
  const [leagues, setLeagues] = useState(false);
  const [league, setLeague] = useState(false);
  const [getLeague, setGetLeague] = useState(false);
  const [getFixturesByTournamentandRound, setGetFixturesByTournamentandRound] =
    useState(false);
  const [fixturesByTournamentAndRound, setFixturesByTournamentAndRound] =
    useState();

  const getFeaturedLeaguesAndTeams = async () => {
    setLoading(true);

    const data1 = await apiSettingsPublic
      .getFeaturedLeagues()

      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
    // const data2 = await apiSettingsPublic
    //   .getFeaturedTeams()

    //   .catch((err) => {
    //     console.log(err);
    //     setError(true);
    //     setLoading(false);
    //   });

    if (!error) {
      setLeagues(data1?.items);
      setFeatured([
        ...(data1 ? data1?.items : []),
        // ...(data2 ? data2?.items : []),
      ]);
      // console.log("id", leagues[0].id);
      // setGetLeague(leagues[0]?.id);
    }

    // console.log(featured);
    setLoading(false);
  };
  const getLeagueFunct = async () => {
    setLoading(true);

    if (getLeague) {
      const data = await apiSettingsPublic
        .getLeague(getLeague)

        .catch((err) => {
          console.log(err);
          setError(true);
          setLoading(false);
        });

      if (!error) {
        setLeague(data);
      }

      console.log(featured);
    }

    setLoading(false);
    setGetLeague(false);
  };
  const getFixturesByTournamentandRoundFunct = async () => {
    if (getFixturesByTournamentandRound) {
      setLoading(true);
      const result = await apiSettingsPublic
        .getFixtureByRoundandTournament(getFixturesByTournamentandRound)
        .catch((err) => {
          console.log("errOr", err);
          setError(true);
          setLoading(false);
        });
      setFixturesByTournamentAndRound(result);
      setGetFixturesByTournamentandRound(false);
      setLoading(false);
    }
  };

  useEffect(() => getFeaturedLeaguesAndTeams(), []);
  useEffect(() => getLeagueFunct(), [getLeague]);
  useEffect(
    () => getFixturesByTournamentandRoundFunct(),
    [getFixturesByTournamentandRound]
  );
  return {
    featured,
    leagues,
    league,
    setGetLeague,
    setGetFixturesByTournamentandRound,
    fixturesByTournamentAndRound,
    loading,
    setError,
  };
};

export default useHome;
