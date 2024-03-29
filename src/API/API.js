import { API, Storage } from "aws-amplify";
import {} from "../graphql/mutations";
import {
  fixtureByTournamentandAwayTeam,
  fixtureByTournamentandHomeTeam,
  fixtureByTournamentandRound,
  getLeague,
  getPlayer,
  getTeam,
  getTournament,
} from "../graphql/queries";
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
  getTournamentQuery,
  createPlayerStatsMutation,
  updatePlayerStatsMutation,
  getLeagueRequestsQuery,
  createRequestLeague2TeamMutation,
  deleteRequestLeague2TeamMutation,
  getTeamForDashboardQuery,
  fixtureByTournamentandHomeTeamQuery,
  fixtureByTournamentandAwayTeamQuery,
  updateFixtureMutation,
  createRequestTeam2PlayerMutation,
  deleteRequestTeam2PlayerMutation,
  updateRequestTeam2PlayerMutation,
  getTeamRequestsQuery,
  getTeamRequestsDashboardQuery,
  getPlayerForDashboardQuery,
  updateRequestLeague2TeamMutation,
  createTeamMembersMutation,
  updateTeamQuery,
  deleteTeamMembersMutation,
  createTableStatMutation,
  updateTableStatMutation,
  createTeamLeagueMutation,
  updateLeagueMutation,
  deleteTeamLeagueMutation,
  deleteTeamMutation,
  getPlayerUsernameQuery,
  getTeamModsQuery,
  getLeagueModsQuery,
  deleteTrophyMutation,
  updateTrophyQuery,
  getLeagueMembership,
  createPlayerQuery,
  getFeaturedLeaguesQuery,
  getFeaturedTeamsQuery,
  getLeaguePublicQuery,
  fixtureByTournamentandRoundPublicQuery,
  createNewsMutation,
  updateNewsMutation,
  deletePostMutation,
} from "./graphqlmuqu";
import { roundRobin } from "../util/makeFixtures";

const defaultAuth = "AMAZON_COGNITO_USER_POOLS";

export const apiSettings = {
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
    console.log("chekckc", data);
    return data.getPlayer;
  },
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
    console.log("chekckc", data);
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
  getLeagueRequests: async (id) => {
    console.log("querying db for league requests");
    const { data } = await API.graphql({
      query: getLeagueRequestsQuery,
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
  getTournament: async (id) => {
    console.log("querying db for tournament");
    const { data } = await API.graphql({
      query: getTournamentQuery,
      variables: {
        id,
      },
      authMode: defaultAuth,
    }).catch((err) => {
      console.log(err);
    });

    return data.getTournament;
  },

  //Update
  updatePlayerStat: async (input) => {
    console.log("mutation: updatePlayerStat");
    const result = await API.graphql({
      query: updatePlayerStatsMutation,
      variables: {
        input,
      },
      authMode: defaultAuth,
    }).catch((error) => console.log(error));
    return result;
  },
  updateLeague: async (input) => {
    console.log("mutation: updateLeague", input);
    const result = await API.graphql({
      query: updateLeagueMutation,
      variables: {
        input,
      },
      authMode: defaultAuth,
    }).catch((error) => console.log(error));
    return result;
  },
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
    mutation UpdateTableStat {
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
        }
      ){
        id
      }
      updateFixture: updateFixture(
        input:{
          id:"${input.fixture.id}"
          homeScore:${input.fixture.homeScore}
          awayScore:${input.fixture.awayScore}
          status:"${input.fixture.status}"
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
  createTableStat2: async (input) => {
    console.log("mutation: createTablestatV2");
    const result = await API.graphql({
      query: createTableStatMutation,
      variables: {
        input,
      },
      authMode: defaultAuth,
    }).catch((error) => console.log(error));
    return result;
  },
  updateTableStat2: async (input) => {
    console.log("mutation: updateTablestatV2");
    const result = await API.graphql({
      query: updateTableStatMutation,
      variables: {
        input,
      },
      authMode: defaultAuth,
    }).catch((error) => console.log(error));
    return result;
  },
  updatePlayerTableStat: async (input) => {
    console.log("mutation: updatePlayerTableStat", input);
    const temp = /* GraphQL */ `
    mutation UpdatePlayerTableStat {
      homeMutation: updatePlayerTableStat(
        input: {
          id:"${input.id}"
          goals:${isNaN(input.goals) ? 0 : input.goals}
          assists:${isNaN(input.assists) ? 0 : input.assists}
          beat:${isNaN(input.beat) ? 0 : input.beat}
          skillmove_beat:${
            isNaN(input.skillmove_beat) ? 0 : input.skillmove_beat
          }
          nutmeg:${isNaN(input.nutmeg) ? 0 : input.nutmeg}
          match_rating:${isNaN(input.match_rating) ? 0 : input.match_rating}
          playerOfTheMatch:${
            isNaN(input.playerOfTheMatch) ? 0 : input.playerOfTheMatch
          }
          expected_assists:${
            isNaN(input.expected_assists) ? 0 : input.expected_assists
          }
          interceptions:${isNaN(input.interceptions) ? 0 : input.interceptions}
          tackles_won:${isNaN(input.tackles_won) ? 0 : input.tackles_won}
          blocks:${isNaN(input.blocks) ? 0 : input.blocks}
          saves:${isNaN(input.saves) ? 0 : input.saves}
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
  updateTeam: async (input) => {
    console.log("mutation: updateTeam");
    console.log("input", input);
    const result = await API.graphql({
      query: updateTeamQuery,
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
  updatePlayerStats: async (input) => {
    console.log("mutation: updatePlayerStats");
    console.log("input", input);
    const result = await API.graphql({
      query: updatePlayerStatsMutation,
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
  createPost: async (input) => {
    console.log("mutation: createPost");
    console.log("input", input);
    const result = await API.graphql({
      query: createNewsMutation,
      variables: {
        input,
      },
      authMode: defaultAuth,
    }).catch((error) => console.log(error));
    return result;
  },
  updatePost: async (input) => {
    console.log("mutation: updatePost");
    console.log("input", input);
    const result = await API.graphql({
      query: updateNewsMutation,
      variables: {
        input,
      },
      authMode: defaultAuth,
    }).catch((error) => console.log(error));
    return result;
  },

  createPlayer: async (input) => {
    console.log("mutation: createPlayer");
    console.log("input", input);
    const { data } = await API.graphql({
      query: createPlayerQuery,
      variables: {
        input,
      },
      authMode: defaultAuth,
    }).catch((error) => console.log(error));
    return data;
  },
  createRequestLeague2Team: async (input) => {
    console.log("mutation: request2Team");
    console.log("input", input);
    const result = await API.graphql({
      query: createRequestLeague2TeamMutation,
      variables: {
        input,
      },
      authMode: defaultAuth,
    }).catch((error) => console.log(error));
    return result;
  },
  updateRequestLeague2Team: async (input) => {
    console.log("mutation: updaterequest2Team");
    console.log("input", input);
    const result = await API.graphql({
      query: updateRequestLeague2TeamMutation,
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
  createTeamMembers: async (input) => {
    console.log("mutation: createTeamMember", input);
    console.log("input", input);
    const result = await API.graphql({
      query: createTeamMembersMutation,
      variables: {
        input,
      },
      authMode: defaultAuth,
    }).catch((error) => console.log(error));
    return result;
  },
  createTeamLeague: async (input) => {
    console.log("mutation: createTeamLeague", input);
    console.log("input", input);
    const result = await API.graphql({
      query: createTeamLeagueMutation,
      variables: {
        input,
      },
      authMode: defaultAuth,
    }).catch((error) => console.log(error));
    return result;
  },
  deleteTeamLeague: async (input) => {
    console.log("mutation: deleteTeamLeague", input);
    console.log("input", input);
    const result = await API.graphql({
      query: deleteTeamLeagueMutation,
      variables: {
        input,
      },
      authMode: defaultAuth,
    }).catch((error) => console.log(error));
    return result;
  },
  deleteTeam: async (input) => {
    console.log("mutation: deleteTeam", input);
    console.log("input", input);
    const result = await API.graphql({
      query: deleteTeamMutation,
      variables: {
        input,
      },
      authMode: defaultAuth,
    }).catch((error) => console.log(error));
    return result;
  },
  deletePost: async (input) => {
    console.log("mutation: deletePost", input);
    console.log("input", input);
    const result = await API.graphql({
      query: deletePostMutation,
      variables: {
        input,
      },
      authMode: defaultAuth,
    }).catch((error) => console.log(error));
    return result;
  },
  deleteTeamMembers: async (input) => {
    console.log("mutation: deleteTeamMember", input);
    console.log("input", input);
    const result = await API.graphql({
      query: deleteTeamMembersMutation,
      variables: {
        input,
      },
      authMode: defaultAuth,
    }).catch((error) => console.log(error));
    return result;
  },
  createPlayerStats: async (input) => {
    console.log("mutation: createPlayerStats");
    console.log("input", input);
    const result = await API.graphql({
      query: createPlayerStatsMutation,
      variables: {
        input,
      },
      authMode: defaultAuth,
    }).catch((error) => console.log(error));
    return result;
  },
  createPlayerTableStat: async (input) => {
    console.log("mutation: createPlayerTableStat");
    const temp = /* GraphQL */ `
    mutation CreatePlayerTableStat {
      homeMutation: createPlayerTableStat(
        input: {
          tournamentPlayerTableId:"${input.tournamentPlayerTableId}"
          playerTableStatPlayerId:"${input.playerTableStatPlayerId}"
          goals:${input.goals}
          assists:${input.assists}
          beat:${input.beat}
          skillmove_beat:${input.skillmove_beat}
          nutmeg:${input.nutmeg}
          match_rating:${input.match_rating}
          playerOfTheMatch:${input.playerOfTheMatch}
          expected_assists:${input.expected_assists}
          interceptions:${input.interceptions}
          tackles_won:${input.tackles_won}
          blocks:${input.blocks}
          saves:${input.saves}
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
      updateFixture: updateFixture(
        input:{
          id:"${input.fixture.id}"
          homeScore:${input.fixture.homeScore}
          awayScore:${input.fixture.awayScore}
          status:"${input.fixture.status}"
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
        round: ${match.round}, name: "${index2}" , members:[${match.members.map(
          (member) => `"${member}"`
        )}]}
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
    console.log("mutation: createTrophy");
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
  updateTrophy: async (input) => {
    console.log("mutation: updateTrophy");
    console.log("input", input);
    const result = await API.graphql({
      query: updateTrophyQuery,
      variables: {
        input,
      },
      authMode: defaultAuth,
    }).catch((error) => console.log(error));
    return result;
  },

  //removeOrdelete

  deleteTrophy: async (input) => {
    console.log("mutation: deleteTrophy");
    console.log("input", input);
    const result = await API.graphql({
      query: deleteTrophyMutation,
      variables: {
        input,
      },
      authMode: defaultAuth,
    }).catch((error) => console.log(error));
    return result;
  },
  deleteLeague2TeamRequest: async (input) => {
    console.log("mutation: delete L2T req");
    console.log("input", input);
    const result = await API.graphql({
      query: deleteRequestLeague2TeamMutation,
      variables: {
        input,
      },
      authMode: defaultAuth,
    }).catch((error) => console.log(error));
    return result;
  },
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
      `players/${username}/${id}/avatars/${file.name}`,
      file.blobFile
    ).catch((err) => console.log(err));

    return result;
  },
  putImageTeam: async (teamname, id, file) => {
    const result = await Storage.put(
      `teams/${teamname}/${id}/avatars/${file.name}`,
      file.blobFile
    ).catch((err) => console.log(err));

    return result;
  },
  putImageTournament: async (
    leagueName,
    leagueId,
    tournamentName,
    id,
    file
  ) => {
    const result = await Storage.put(
      `${leagueName}/${leagueId}/tournaments/${tournamentName}/${id}/avatars/${file.name}`,
      file.blobFile
    ).catch((err) => console.log(err));

    return result;
  },
  putImageLeague: async (leaguename, id, file) => {
    const result = await Storage.put(
      `leagues/${leaguename}/${id}/avatars/${file.name}`,
      file.blobFile
    ).catch((err) => console.log(err));

    return result;
  },
  putImagePost: async (leaguename, id, tournamentname, file) => {
    console.log(tournamentname, "name");
    const result = await Storage.put(
      `leagues/${leaguename}/${id}/${tournamentname}/news/headerImage/${file.name}`,
      file.blobFile
    ).catch((err) => console.log(err));

    return result;
  },
  putHeaderLeague: async (leaguename, id, file) => {
    const result = await Storage.put(
      `leagues/${leaguename}/${id}/headers/${file.name}`,
      file.blobFile
    ).catch((err) => console.log(err));

    return result;
  },
};

export const apiSettingsTD = {
  getTeamForDashboard: async (id) => {
    console.log("querying db for league", id);
    const { data } = await API.graphql({
      query: getTeamForDashboardQuery,
      variables: {
        id,
      },
      authMode: defaultAuth,
    }).catch((err) => {
      console.log(err);
    });

    return data.getTeam;
  },
  getLeagueMembership: async (id) => {
    console.log("querying db for leagueMember", id);
    const { data } = await API.graphql({
      query: getLeagueMembership,
      variables: {
        id,
      },
      authMode: defaultAuth,
    }).catch((err) => {
      console.log(err);
    });

    return data.getLeagueMembership;
  },
  deleteTournament: async ({ id, teams }) => {
    console.log("delete Tournament", id, teams);
    let input = "";
    teams.map((teamTournament, index) => {
      input += /* GraphQL */ `
    deleteMembership${index}:deleteTeamTournaments(input: {id: "${teamTournament.id}"})
    {id}
    `;
    });

    input = /* GraphQL */ `
    mutation DeleteTournamentAndTeamTournaments{
      ${input}

      deleteTournament(input:{id:"${id}"})
      {id}
    }
    `;
    console.log(input, "input");
    const { data } = await API.graphql({
      query: input,

      authMode: defaultAuth,
    }).catch((err) => {
      console.log(err);
    });
    return data.DeleteTournamentAndTeamTournaments;
  },
  getPlayerForDashboard: async (id) => {
    console.log("querying db for player", id);
    const { data } = await API.graphql({
      query: getPlayerForDashboardQuery,
      variables: {
        id,
      },
      authMode: defaultAuth,
    }).catch((err) => {
      console.log(err);
    });

    return data.getPlayer;
  },
  getPlayerUsername: async (id) => {
    console.log("querying db for player username", id);
    const { data } = await API.graphql({
      query: getPlayerUsernameQuery,
      variables: {
        id,
      },
      authMode: defaultAuth,
    }).catch((err) => {
      console.log(err);
    });

    return data.getPlayer;
  },
  getTeamModUsernames: async (id) => {
    console.log("querying db for teammods", id);
    const { data } = await API.graphql({
      query: getTeamModsQuery,
      variables: {
        id,
      },
      authMode: defaultAuth,
    }).catch((err) => {
      console.log(err);
    });

    return data.getTeam;
  },
  getTeamFixturesHome: async (input) => {
    console.log("querying db for teamfixtures", input);
    const { data } = await API.graphql({
      query: fixtureByTournamentandHomeTeamQuery,
      variables: {
        ...input,
      },
      authMode: defaultAuth,
    }).catch((err) => {
      console.log(err);
    });

    return data.fixtureByTournamentandHomeTeam;
  },
  getTeamFixturesAway: async (input) => {
    console.log("querying db for teamfixtures", input);
    const { data } = await API.graphql({
      query: fixtureByTournamentandAwayTeamQuery,
      variables: {
        ...input,
      },
      authMode: defaultAuth,
    }).catch((err) => {
      console.log(err);
    });

    return data.fixtureByTournamentandAwayTeam;
  },
  updateFixture: async (input) => {
    console.log("mutation:update fixtures", input);
    const { data } = await API.graphql({
      query: updateFixtureMutation,
      variables: {
        input,
      },
      authMode: defaultAuth,
    }).catch((err) => {
      console.log(err);
    });

    return data.fixtureByTournamentandAwayTeam;
  },
  createRequestTeam2Player: async (input) => {
    console.log("mutation: teamrequest2player");
    console.log("input", input);
    const result = await API.graphql({
      query: createRequestTeam2PlayerMutation,
      variables: {
        input,
      },
      authMode: defaultAuth,
    }).catch((error) => console.log(error));
    return result;
  },

  deleteTeam2PlayerRequest: async (input) => {
    console.log("mutation: delete T2P req");
    console.log("input", input);
    const result = await API.graphql({
      query: deleteRequestTeam2PlayerMutation,
      variables: {
        input,
      },
      authMode: defaultAuth,
    }).catch((error) => console.log(error));
    return result;
  },
  updateTeam2PlayerRequest: async (input) => {
    console.log("mutation: update L2T req");
    console.log("input", input);
    const result = await API.graphql({
      query: updateRequestTeam2PlayerMutation,
      variables: {
        input,
      },
      authMode: defaultAuth,
    }).catch((error) => console.log(error));
    return result;
  },
  getTeamRequests: async (id) => {
    console.log("querying db for Team requests");
    const { data } = await API.graphql({
      query: getTeamRequestsQuery,
      variables: {
        id,
      },
      authMode: defaultAuth,
    }).catch((err) => {
      console.log(err);
    });

    return data.getTeam;
  },
  getTeamRequestsDashboard: async (id) => {
    console.log("querying db for Team requests", id);
    const { data } = await API.graphql({
      query: getTeamRequestsDashboardQuery,
      variables: {
        id,
      },
      authMode: defaultAuth,
    }).catch((err) => {
      console.log(err);
    });

    return data.getTeam;
  },
  // getTeamMods: async (id) => {
  //   console.log("querying db for Team requests", id);
  //   const { data } = await API.graphql({
  //     query: getTeam,
  //     variables: {
  //       id,
  //     },
  //     authMode: defaultAuth,
  //   }).catch((err) => {
  //     console.log(err);
  //   });

  //   return data.getTeam.moderators;
  // },
  getLeagueModUsernames: async (id) => {
    console.log("querying db for teammods", id);
    const { data } = await API.graphql({
      query: getLeagueModsQuery,
      variables: {
        id,
      },
      authMode: defaultAuth,
    }).catch((err) => {
      console.log(err);
    });

    return data.getLeague;
  },
};

export const apiSettingsPublic = {
  getFeaturedLeagues: async () => {
    console.log("querying db for for featured league");
    const { data } = await API.graphql({
      query: getFeaturedLeaguesQuery,
      variables: {
        limit: 100,
        filter: { name: { notContains: "deleted" } },
      },
      authMode: "API_KEY",
    }).catch((err) => {
      console.log(err);
    });

    return data.listLeagues;
  },
  getLeague: async (id) => {
    console.log("getLeaguePublic", id);
    const { data } = await API.graphql({
      query: getLeaguePublicQuery,
      variables: {
        id: id,
      },
      authMode: "API_KEY",
    }).catch((err) => {
      console.log(err);
    });

    return data.getLeague;
  },
  getFeaturedTeams: async () => {
    console.log("querying db for for featured team");
    const { data } = await API.graphql({
      query: getFeaturedTeamsQuery,
      variables: {
        limit: 100,
        filter: {
          name: { notContains: "deleted" },
          slogan: { notContains: "modTeam" },
        },
      },
      authMode: "API_KEY",
    }).catch((err) => {
      console.log(err);
    });

    return data.listTeams;
  },
  getFixtureByRoundandTournament: async (input) => {
    console.log("querying fixtures by tournament and round Public");
    const { data } = await API.graphql({
      query: fixtureByTournamentandRoundPublicQuery,
      variables: {
        tournamentID: input.tournamentID,
        round: input.condition,
      },
      authMode: "API_KEY",
    }).catch((err) => {
      console.log(err);
    });
    return data.fixtureByTournamentandRound;
  },
};
