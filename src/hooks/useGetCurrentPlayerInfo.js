import { useEffect, useState } from "react";
import { API } from "aws-amplify";

const getPlayerQuery = /* GraphQL */ `
  query getPlayer($id: ID = "") {
    getPlayer(id: $id) {
      name
      image
      slogan
      admins {
        items {
          name
          id
          status
        }
      }
      captains {
        items {
          id
          team {
            name
            id
            status
          }
        }
      }
      teams {
        items {
          id
          team {
            name
            status
          }
        }
      }
      moderates {
        items {
          id
          league {
            id
            name
            status
          }
        }
      }
      manages {
        items {
          name
          id
          status
        }
      }
    }
  }
`;
const useGetCurrentPlayerInfo = (playerID) => {
  const [playerInfo, setPlayerInfo] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    console.log("fetching playerInfo");
    const { data } = await API.graphql({
      query: getPlayerQuery,
      variables: {
        id: playerID,
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    }).catch((err) => {
      console.log(err);
      setError(true);
    });
    console.log("playerInfo Updated", data.getPlayer);
    setPlayerInfo(data.getPlayer);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [playerID]);

  return [playerInfo, loading, error];
};

export default useGetCurrentPlayerInfo;
