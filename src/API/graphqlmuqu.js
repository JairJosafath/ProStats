export const getPlayerQuery = /* GraphQL */ `
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
export const getLeagueQuery = /* GraphQL */ `
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
export const getLeagueForDashboardQuery = /* GraphQL */ `
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
      teams {
        items {
          id
          name
        }
      }
      tournaments {
        items {
          id
          name
          table {
            items {
              id
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
          trophies {
            items {
              id
              description
              image
              name
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
          team {
            items {
              id
              team {
                id
                name
              }
            }
          }
          # fixtures(limit: 400) {
          #   items {
          #     awayTeam {
          #       name
          #     }
          #     homeTeam {
          #       name
          #     }
          #     awayID
          #     awayResult
          #     awayScore
          #     homeID
          #     homeResult
          #     homeScore
          #     round
          #     season
          #     teamAwayfixturesId
          #     teamHomefixturesId
          #     id
          #   }
          # }
        }
      }
    }
  }
`;
export const getTeamQuery = /* GraphQL */ `
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
export const updatePlayerQuery = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
    }
  }
`;
export const createTeamQuery = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
      id
    }
  }
`;
export const updateTeamQuery = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
      id
    }
  }
`;
export const createLeagueQuery = /* GraphQL */ `
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

export const updateTournamentQuery = /* GraphQL */ `
  mutation UpdateTournament(
    $input: UpdateTournamentInput!
    $condition: ModelTournamentConditionInput
  ) {
    updateTournament(input: $input, condition: $condition) {
      id
    }
  }
`;

export const createTeamTournamentsQuery = /* GraphQL */ `
  mutation CreateTeamTournaments(
    $input: CreateTeamTournamentsInput!
    $condition: ModelTeamTournamentsConditionInput
  ) {
    createTeamTournaments(input: $input, condition: $condition) {
      id
    }
  }
`;

export const deleteTeamTournamentsQuery = /* GraphQL */ `
  mutation DeleteTeamTournaments(
    $input: DeleteTeamTournamentsInput!
    $condition: ModelTeamTournamentsConditionInput
  ) {
    deleteTeamTournaments(input: $input, condition: $condition) {
      id
    }
  }
`;
export const createTrophyQuery = /* GraphQL */ `
  mutation CreateTrophy(
    $input: CreateTrophyInput!
    $condition: ModelTrophyConditionInput
  ) {
    createTrophy(input: $input, condition: $condition) {
      id
    }
  }
`;
export const createFixtureQuery = /* GraphQL */ `
  mutation CreateFixture(
    $input: CreateFixtureInput!
    $condition: ModelFixtureConditionInput
  ) {
    createFixture(input: $input, condition: $condition) {
      id
    }
  }
`;
export const fixtureByTournamentandRoundQuery = /* GraphQL */ `
  query FixtureByTournamentandRound(
    $tournamentID: ID!
    $round: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFixtureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    fixtureByTournamentandRound(
      tournamentID: $tournamentID
      round: $round
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        awayTeam {
          name
        }
        homeTeam {
          name
        }
        awayID
        awayResult
        awayScore
        homeID
        homeResult
        homeScore
        round
        season
        teamAwayfixturesId
        teamHomefixturesId
        id
        teamStats {
          items {
            away_defending_air_duels_won
            away_defending_average_sliding_tackles_distance
            away_defending_average_standing_tackles_distance
            away_defending_beaten_by_opponent
            away_defending_blocks
            away_defending_clearances
            away_defending_fouls_committed
            away_defending_interceptions
            away_defending_penalties_committed
            away_defending_red_cards
            away_defending_saves
            away_defending_sliding_tackles
            away_defending_sliding_tackles_won
            away_defending_standing_tackles
            away_defending_standing_tackles_won
            away_defending_yellow_cards
            away_name
            away_passing_breakaway
            away_passing_completed
            away_passing_cross
            away_passing_down_wing
            away_passing_first_time
            away_passing_ground
            away_passing_intercepted
            away_passing_key_pass
            away_passing_lob
            away_passing_lofted_through
            away_passing_other
            away_passing_offside
            away_passing_pass_and_go
            away_passing_set_pieces
            away_passing_through
            away_passing_total_passes
            away_possession_minute_15
            away_possession_minute_30
            away_possession_minute_45
            away_possession_minute_60
            away_possession_minute_75
            away_possession_minute_90
            away_shooting_blocked
            away_shooting_chip
            away_shooting_far_side
            away_shooting_finesse
            away_shooting_header
            away_shooting_inside_the_box
            away_shooting_low
            away_shooting_near_side
            away_shooting_normal
            away_shooting_off_target
            away_shooting_on_target
            away_shooting_outside_the_box
            away_shooting_set_pieces
            away_shooting_total_shots
            away_shooting_volley
            away_summary_corners
            away_summary_expected_goals
            away_summary_fouls_committed
            away_summary_free_kicks
            away_summary_goals
            away_summary_interceptions
            away_summary_offsides
            away_summary_penalty_kicks
            away_summary_possession_percentage
            away_summary_red_cards
            away_summary_saves
            away_summary_shots
            away_summary_spasses
            away_summary_tackles
            away_summary_tackles_won
            away_summary_yellow_cards
            home_defending_air_duels_won
            home_defending_average_sliding_tackles_distance
            home_defending_average_standing_tackles_distance
            home_defending_beaten_by_opponent
            home_defending_blocks
            home_defending_clearances
            home_defending_fouls_committed
            home_defending_interceptions
            home_defending_penalties_committed
            home_defending_red_cards
            home_defending_saves
            home_defending_sliding_tackles
            home_defending_sliding_tackles_won
            home_defending_standing_tackles
            home_defending_yellow_cards
            home_defending_standing_tackles_won
            home_name
            home_passing_breakaway
            home_passing_completed
            home_passing_cross
            home_passing_down_wing
            home_passing_first_time
            home_passing_ground
            home_passing_intercepted
            home_passing_key_pass
            home_passing_lob
            home_passing_lofted_through
            home_passing_offside
            home_passing_other
            home_passing_pass_and_go
            home_passing_set_pieces
            home_passing_through
            home_passing_total_passes
            home_possession_minute_15
            home_possession_minute_30
            home_possession_minute_45
            home_possession_minute_60
            home_possession_minute_75
            home_possession_minute_90
            home_shooting_blocked
            home_shooting_chip
            home_shooting_far_side
            home_shooting_finesse
            home_shooting_header
            home_shooting_inside_the_box
            home_shooting_low
            home_shooting_near_side
            home_shooting_normal
            home_shooting_on_target
            home_shooting_off_target
            home_shooting_outside_the_box
            home_shooting_set_pieces
            home_shooting_total_shots
            home_shooting_volley
            home_summary_corners
            home_summary_expected_goals
            home_summary_fouls_committed
            home_summary_free_kicks
            home_summary_goals
            home_summary_interceptions
            home_summary_offsides
            home_summary_penalty_kicks
            home_summary_possession_percentage
            home_summary_red_cards
            home_summary_saves
            home_summary_shots
            home_summary_spasses
            home_summary_tackles
            home_summary_tackles_won
            home_summary_yellow_cards
            verified
            id
          }
        }
      }
    }
  }
`;
export const updateTeamStatsQuery = /* GraphQL */ `
  mutation UpdateTeamStats(
    $input: UpdateTeamStatsInput!
    $condition: ModelTeamStatsConditionInput
  ) {
    updateTeamStats(input: $input, condition: $condition) {
      id
    }
  }
`;
export const createTeamStatsQuery = /* GraphQL */ `
  mutation CreateTeamStats(
    $input: CreateTeamStatsInput!
    $condition: ModelTeamStatsConditionInput
  ) {
    createTeamStats(input: $input, condition: $condition) {
      id
    }
  }
`;
export const createTableStatQuery = /* GraphQL */ `
  mutation CreateTableStat(
    $input: CreateTableStatInput!
    $condition: ModelTableStatConditionInput
  ) {
    createTableStat(input: $input, condition: $condition) {
      id
    }
  }
`;
export const updateTableStatQuery = /* GraphQL */ `
  mutation UpdateTableStat(
    $input: UpdateTableStatInput!
    $condition: ModelTableStatConditionInput
  ) {
    updateTableStat(input: $input, condition: $condition) {
      id
    }
  }
`;
