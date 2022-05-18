import { useState, useEffect } from "react";
import { apiSettings, apiSettingsTD } from "../API/API";

const useNews = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [news, setNews] = useState(false);

  return {
    loading,
    error,
    setError,
  };
};
export default useNews;
