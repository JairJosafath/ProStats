import { Auth } from "aws-amplify";
import { useState, useEffect } from "react";
import { apiSettings, apiSettingsTD, apiSettingsPublic } from "../API/API";

const useHome = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [featured, setFeatured] = useState(false);

  const getFeaturedLeaguesAndTeams = async () => {
    setLoading(true);

    const data1 = await apiSettingsPublic.getFeaturedLeagues().catch((err) => {
      console.log(err);
      setError(true);
      setLoading(false);
    });
    const data2 = await apiSettingsPublic.getFeaturedTeams().catch((err) => {
      console.log(err);
      setError(true);
      setLoading(false);
    });

    if (!error) {
      setFeatured([
        ...(data1 ? data1?.items : []),
        ...(data2 ? data2?.items : []),
      ]);
    }

    console.log(featured);
    setLoading(false);
  };

  useEffect(() => getFeaturedLeaguesAndTeams(), []);

  return {
    featured,
  };
};

export default useHome;
