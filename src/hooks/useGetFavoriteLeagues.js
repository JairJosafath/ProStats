import { useEffect, useState } from "react";
import { API } from "aws-amplify";

const initialLeague = {
  name: null,
  header: null,
  tournaments: {
    items: [
      {
        name: null,
        table: {
          items: [
            {
              cleanSheats: null,
              gamesDrawn: null,
              gamesLost: null,
              gamesPlayed: null,
              gamesWon: null,
              goalDifference: null,
              goalsAgainst: null,
              goalsFor: null,
              points: null,
              record: null,
              team: {
                logo: null,
                team: null,
              },
            },
          ],
        },
        playerTable: {
          items: [
            {
              assists: null,
              beat: null,
              blocks: null,
              expectedAssists: null,
              goals: null,
              interceptions: null,
              matchRating: null,
              nutmeg: null,
              player: {
                name: null,
              },
              playerOfTheMatch: null,
              playerTableStatPlayerId: null,
              saves: null,
              skillmoveBeat: null,
              tacklesWon: null,
              tournamentPlayerTableId: null,
              id: null,
            },
          ],
        },
      },
    ],
  },
};

const getLeagues = `
query MyQuery {
  listLeagues {
    items {
      id
      name
      header
      newsModerators
      requestModerators
      tournamentModerators
      transferModerator
      leagueAdmin
      tournaments {
        items {
          name
          table {
            items {
              cleanSheats
              gamesDrawn
              gamesLost
              gamesWon
              gamesPlayed
              goalDifference
              goalsAgainst
              goalsFor
              points
              record
              team {
                logo
                name
                id
              }
            }
          }
          playerTable {
            items {
              assists
              beat
              blocks
              expectedAssists
              goals
              interceptions
              matchRating
              nutmeg
              player {
                name
              }
              playerOfTheMatch
              playerTableStatPlayerId
              saves
              skillmoveBeat
              tacklesWon
              tournamentPlayerTableId
              id
            }
          }
        }
      }
    }
  }
}
`;
const useGetFavoriteLeague = () => {
  const [loadingLeagues, setLoadingLeagues] = useState(true);
  const [errorLeagues, setErrorLeagues] = useState(false);
  const [leagues, setLeagues] = useState([initialLeague]);

  const fetchData = async () => {
    console.log("fetching leagues");
    const { data } = await API.graphql({
      query: getLeagues,
    }).catch((err) => {
      console.log(err);
      setErrorLeagues(true);
    });

    setLeagues(data.listLeagues.items);
    setLoadingLeagues(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return [leagues, loadingLeagues, errorLeagues];
};

export default useGetFavoriteLeague;
