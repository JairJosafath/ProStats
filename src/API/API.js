import { API, Storage } from "aws-amplify";
import awsmobile from "../aws-exports";

const defaultAuth = "AMAZON_COGNITO_USER_POOLS";

const getPlayerQuery = /* GraphQL */ `
  query GetPlayer($id: ID = "") {
    getPlayer(id: $id) {
      id
      name
      image
      slogan
      username

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
const getLeagueQuery = /* GraphQL */ `
  query GetLeague($id: ID = "") {
    getLeague(id: $id) {
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
`;
const getLeagueForDashboardQuery = /* GraphQL */ `
  query GetLeague($id: ID = "") {
    getLeague(id: $id) {
      id
      name
      header
      newsModerators
      requestModerators
      tournamentModerators
      transferModerator
      leagueAdmin
      logo
      newsModerators
      requestModerators
      tournamentModerators
      transferModerator
      status
      tournaments {
        items {
          id
          name
        }
      }
      teams {
        items {
          id
          name
        }
      }
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
`;
const getTeamQuery = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      name
      logo
      slogan
      league {
        id
        name
        status
      }
      status
    }
  }
`;
const updatePlayerQuery = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
    }
  }
`;
const createTeamQuery = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
      id
    }
  }
`;
const updateTeamQuery = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
      id
    }
  }
`;
const createLeagueQuery = /* GraphQL */ `
  mutation CreateLeague(
    $input: CreateLeagueInput!
    $condition: ModelLeagueConditionInput
  ) {
    createLeague(input: $input, condition: $condition) {
      id
    }
  }
`;

export const createTournamentQuery = /* GraphQL */ `
  mutation CreateTournament(
    $input: CreateTournamentInput!
    $condition: ModelTournamentConditionInput
  ) {
    createTournament(input: $input, condition: $condition) {
      id
    }
  }
`;

const apiSettings = {
  //Gets
  getPlayer: async (id) => {
    console.log("querying db for player");
    const { data } = await API.graphql({
      query: getPlayerQuery,
      variables: {
        id,
      },
      authMode: defaultAuth,
    }).catch((err) => {
      console.log(err);
    });
    return data.getPlayer;
  },
  getLeague: async (id) => {
    console.log("querying db for league");
    const { data } = await API.graphql({
      query: getLeagueQuery,
      variables: {
        id,
      },
      authMode: defaultAuth,
    }).catch((err) => {
      console.log(err);
    });

    return data.getLeague;
  },
  getLeagueForDashboard: async (id) => {
    console.log("querying db for league");
    const { data } = await API.graphql({
      query: getLeagueForDashboardQuery,
      variables: {
        id,
      },
      authMode: defaultAuth,
    }).catch((err) => {
      console.log(err);
    });

    return data.getLeague;
  },
  getTeam: async (id) => {
    console.log("querying db for team");
    const { data } = await API.graphql({
      query: getTeamQuery,
      variables: {
        id,
      },
      authMode: defaultAuth,
    }).catch((err) => {
      console.log(err);
    });

    return data.getPlayer;
  },

  //Update
  updatePlayer: async (input) => {
    console.log("mutation: updatePlayer");
    const result = await API.graphql({
      query: updatePlayerQuery,
      variables: {
        input,
      },
      authMode: defaultAuth,
    }).catch((error) => console.log(error));
    return result;
  },

  //Create
  createTeam: async (input) => {
    console.log("mutation: createTeam");
    console.log("input", input);
    const result = await API.graphql({
      query: createTeamQuery,
      variables: {
        input,
      },
      authMode: defaultAuth,
    }).catch((error) => console.log(error));
    return result;
  },
  createTournament: async (input) => {
    console.log("mutation: createTournament");
    console.log("input", input);
    const result = await API.graphql({
      query: createTournamentQuery,
      variables: {
        input,
      },
      authMode: defaultAuth,
    }).catch((error) => console.log(error));
    return result;
  },
  createLeague: async (input) => {
    console.log("mutation: createLeague");
    console.log("input", input);
    const result = await API.graphql({
      query: createLeagueQuery,
      variables: {
        input,
      },
      authMode: defaultAuth,
    }).catch((error) => console.log(error));
    return result;
  },
  //images

  getImage: async (key) => {
    const image = await Storage.get(key).catch((err) => console.log(err));
    return image;
  },

  putImagePlayer: async (username, id, file) => {
    const result = await Storage.put(
      `${username}/${id}/avatars/${file.name}`,
      file.blobFile
    ).catch((err) => console.log(err));

    return result;
  },
  putImageTeam: async (teamname, id, file) => {
    const result = await Storage.put(
      `teams/${teamname}/${id}/avatars/${file.name}`,
      file
    ).catch((err) => console.log(err));

    return result;
  },
  putImageLeague: async (leaguename, id, file) => {
    const result = await Storage.put(
      `leagues/${leaguename}/${id}/avatars/${file.name}`,
      file
    ).catch((err) => console.log(err));

    return result;
  },
  putHeaderLeague: async (leaguename, id, file) => {
    const result = await Storage.put(
      `leagues/${leaguename}/${id}/headers/${file.name}`,
      file
    ).catch((err) => console.log(err));

    return result;
  },
};

export default apiSettings;
