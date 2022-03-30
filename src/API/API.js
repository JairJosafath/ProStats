import { API, Storage } from "aws-amplify";
import {
  getPlayerQuery,
  fixtureByTournamentandRoundQuery,
  getLeagueQuery,
  getLeagueForDashboardQuery,
  getTeamQuery,
  updatePlayerQuery,
  updateTournamentQuery,
  updateTeamStatsQuery,
  createTeamTournamentsQuery,
  createTeamQuery,
  createTeamStatsQuery,
  createFixtureQuery,
  createTournamentQuery,
  createLeagueQuery,
  createTrophyQuery,
  deleteTeamTournamentsQuery,
  createTableStatQuery,
  updateTableStatQuery,
} from "./graphqlmuqu";
import { roundRobin } from "../util/makeFixtures";

const defaultAuth = "AMAZON_COGNITO_USER_POOLS";

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
  getFixtureByRoundandTournament: async (input) => {
    console.log("querying fixtures by tournament and round");
    const { data } = await API.graphql({
      query: fixtureByTournamentandRoundQuery,
      variables: {
        tournamentID: input.tournamentID,
        round: input.condition,
      },
      authMode: defaultAuth,
    }).catch((err) => {
      console.log(err);
    });
    return data.fixtureByTournamentandRound;
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
  updateTableStat: async (input) => {
    console.log("mutation: updateTableStat");
    const temp = /* GraphQL */ `
    mutation CreateTableStat {
      homeMutation: updateTableStat(
        input: {
          id: "${input.home.id}"
          cleanSheats: ${input.home.cleanSheats}
          gamesDrawn: ${input.home.gamesDrawn}
          gamesLost: ${input.home.gamesLost}
          gamesPlayed: ${input.home.gamesPlayed}
          gamesWon: ${input.home.gamesWon}
          goalDifference: ${input.home.goalDifference}
          goalsAgainst: ${input.home.goalsAgainst}
          goalsFor: ${input.home.goalsFor}
          points: ${input.home.points}
          record: [${input.home.record.map((record) => `"${record}"`)}]
          tableStatTeamId: "${input.home.tableStatTeamId}"
          tournamentTableId: "${input.home.tournamentTableId}"
        }
      ){
        id
      }
      awayMutation: updateTableStat(
        input: {
          id: "${input.away.id}"
          cleanSheats: ${input.away.cleanSheats}
          gamesDrawn: ${input.away.gamesDrawn}
          gamesLost: ${input.away.gamesLost}
          gamesPlayed: ${input.away.gamesPlayed}
          gamesWon: ${input.away.gamesWon}
          goalDifference: ${input.away.goalDifference}
          goalsAgainst: ${input.away.goalsAgainst}
          goalsFor: ${input.away.goalsFor}
          points: ${input.away.points}
          record: [${input.away.record.map((record) => `"${record}"`)}]
          tableStatTeamId: "${input.away.tableStatTeamId}"
          tournamentTableId: "${input.away.tournamentTableId}"
        }
      ){
        id
      }
      updateFixture: updateFixture(
        input:{
          id:"${input.fixture.id}"
          homeScore:${input.fixture.homeScore}
          awayScore:${input.fixture.awayScore}

        }
      ){
        id
      }
    }
  `;
    console.log("inputQuery", temp);
    const result = await API.graphql({
      query: temp,
      authMode: defaultAuth,
    }).catch((error) => console.log(error));
    return result;
  },
  updateTournament: async (input) => {
    console.log("mutation: updateTournament");
    console.log("input", input);
    const result = await API.graphql({
      query: updateTournamentQuery,
      variables: {
        input,
      },
      authMode: defaultAuth,
    }).catch((error) => console.log(error));
    return result;
  },
  updateTeamStats: async (input) => {
    console.log("mutation: updateTeamStats");
    console.log("input", input);
    const result = await API.graphql({
      query: updateTeamStatsQuery,
      variables: {
        input,
      },
      authMode: defaultAuth,
    }).catch((error) => console.log(error));
    return result;
  },
  updateTournamentAddTeam: async (input) => {
    console.log("mutation: updateTournament, addTeam");
    console.log("input", input);
    const result = await API.graphql({
      query: createTeamTournamentsQuery,
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
  createTeamStats: async (input) => {
    console.log("mutation: createTeamStats");
    console.log("input", input);
    const result = await API.graphql({
      query: createTeamStatsQuery,
      variables: {
        input,
      },
      authMode: defaultAuth,
    }).catch((error) => console.log(error));
    return result;
  },
  createTableStat: async (input) => {
    console.log("mutation: createTableStat");
    console.log("input", input);
    const temp = /* GraphQL */ `
    mutation CreateTableStat {
      homeMutation: createTableStat(
        input: {
          cleanSheats: ${input.home.cleanSheats}
          gamesDrawn: ${input.home.gamesDrawn}
          gamesLost: ${input.home.gamesLost}
          gamesPlayed: ${input.home.gamesPlayed}
          gamesWon: ${input.home.gamesWon}
          goalDifference: ${input.home.goalDifference}
          goalsAgainst: ${input.home.goalsAgainst}
          goalsFor: ${input.home.goalsFor}
          points: ${input.home.points}
          record: ["${input.home.record[0]}"]
          tableStatTeamId: "${input.home.tableStatTeamId}"
          tournamentTableId: "${input.home.tournamentTableId}"
        }
      ){
        id
      }
      awayMutation: createTableStat(
        input: {
          cleanSheats: ${input.away.cleanSheats}
          gamesDrawn: ${input.away.gamesDrawn}
          gamesLost: ${input.away.gamesLost}
          gamesPlayed: ${input.away.gamesPlayed}
          gamesWon: ${input.away.gamesWon}
          goalDifference: ${input.away.goalDifference}
          goalsAgainst: ${input.away.goalsAgainst}
          goalsFor: ${input.away.goalsFor}
          points: ${input.away.points}
          record: ["${input.away.record[0]}"]
          tableStatTeamId: "${input.away.tableStatTeamId}"
          tournamentTableId: "${input.away.tournamentTableId}"
        }
      ){
        id
      }
    }
  `;
    console.log("inputQuery", temp);
    const result = await API.graphql({
      query: temp,
      authMode: defaultAuth,
    }).catch((error) => console.log(error));
    return result;
  },
  createFixture: async (input) => {
    console.log("mutation: createFixture");
    console.log("input", input);
    const result = await API.graphql({
      query: createFixtureQuery,
      variables: {
        input,
      },
      authMode: defaultAuth,
    }).catch((error) => console.log(error));
    return result;
  },
  createFixtures: async (teams, tournamentID) => {
    console.log("mutation: createFixtures");
    console.log("input", teams);
    const schedule = roundRobin(teams);

    let temp = " ";
    schedule.map((round, index) => {
      round.map((match, index2) => {
        const mutation = /* GraphQL */ `
  mutationRound${Math.floor(
    Math.random() * 10000
  )}${index}${index2}: createFixture(
    input: {awayID: "${match.away}", homeID: "${
          match.home
        }", teamAwayfixturesId: "${match.away}", teamHomefixturesId: "${
          match.home
        }", tournamentFixturesId: "${tournamentID}",
        tournamentID: "${tournamentID}"
        ,
        round: ${match.round}, name: "${index2}"}
  ) {
    id
  }
  `;
        temp += mutation;
      });
    });
    const input = /* GraphQL */ `
    mutation InputFixttures{
      ${temp}
      }
      `;
    console.log("fixturesQuery", input);

    const result = await API.graphql({
      query: input,
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
  createTrophy: async (input) => {
    console.log("mutation: createLeague");
    console.log("input", input);
    const result = await API.graphql({
      query: createTrophyQuery,
      variables: {
        input,
      },
      authMode: defaultAuth,
    }).catch((error) => console.log(error));
    return result;
  },

  //removeOrdelete
  removeTeamfromTournament: async (input) => {
    console.log("mutation: updateTournament, removeTeam");
    console.log("input", input);
    const result = await API.graphql({
      query: deleteTeamTournamentsQuery,
      variables: {
        input,
      },
      authMode: defaultAuth,
    }).catch((error) => console.log(error));
    return result;
  },
  removeAllFixtures: async (fixtures) => {
    console.log("mutation: delete All Fixtures");
    console.log("input", fixtures);
    //const schedule = roundRobin(fixtures);

    let temp = " ";
    fixtures.map((id, index) => {
      const mutation = /* GraphQL */ `
  mutationRound${Math.floor(Math.random() * 10000)}${index}: deleteFixture(
    input: {id: "${id}"}
  ) {
    id
  }
  `;
      temp += mutation;
    });

    const input = /* GraphQL */ `
    mutation InputFixttures{
      ${temp}
      }
      `;
    console.log("fixturesQuery", input);

    const result = await API.graphql({
      query: input,
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
