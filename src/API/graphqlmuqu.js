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
            id
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
          playerTable {
            items {
              id
              assists
              beat
              blocks
              expectedAssists
              goals
              interceptions
              matchRating
              nutmeg
              player {
                id
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
              player {
                id
                name
              }
              goals
              assists
              beat
              skillmove_beat
              nutmeg
              match_rating
              playerOfTheMatch
              expected_assists
              interceptions
              tackles_won
              blocks
              saves
              createdAt
              updatedAt
              tournamentPlayerTableId
              playerTableStatPlayerId
              id
            }
          }
          team {
            items {
              id
              team {
                id
                name
                member {
                  items {
                    id
                    player {
                      name
                      id
                    }
                  }
                }
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
        status
        awayTeam {
          name
          member {
            items {
              id
              player {
                id
                name
              }
            }
          }
        }
        homeTeam {
          name
          member {
            items {
              id
              player {
                id
                name
              }
            }
          }
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

        playerStats {
          items {
            status
            id
            matchRating
            OVR
            position
            name
            version
            player {
              id
              name
            }
            verified
            summary_goals
            summary_assists
            summary_shots
            summary_shot_accuracy
            summary_passes
            summary_pass_accuraccy
            summary_dribbles
            summary_dribble_accuracy
            summary_tackles
            summary_tackle_success_rate
            summary_offsides
            summary_fouls_committed
            summary_possession_won
            summary_possession_lost
            summary_minutes_played_vs_team_average
            summary_distance_covered_vs_team_average
            summary_distance_sprinted_vs_team_average
            possession_possession_percentage
            possession_dribbles
            possession_dribblescompleted
            possession_dribble_success_rate_percentage
            possession_distance_dribbled
            possession_fouls_won
            possession_penalties_won
            possession_regular_dribble_percentage
            possession_shield_dribble_percentage
            possession_strafe_dribble_percentage
            possession_beat
            possession_skillmove_beat
            possession_nutmeg
            possession_knock_ons
            shooting_goals
            shooting_expected_goals
            shooting_shots
            shooting_shots_on_target
            shooting_shots_off_target
            shooting_shots_blocked
            shooting_shot_accuracy_percentage
            shooting_normal
            shooting_finesse
            shooting_header
            shooting_low
            shooting_volley
            shooting_chip
            shooting_set_pieces
            passing_assists
            passing_expected_assists
            passing_passes
            passing_completed
            passing_intercepted
            passing_pass_accuraccy_percentage
            passing_offside_passes
            passing_ground
            passing_lob
            passing_through
            passing_lofted_through
            passing_cross
            passing_set_pieces
            defending_standing_tackles
            defending_standing_tackles_won
            defending_standing_tackles_success_rate_percentage
            defending_sliding_tackles
            defending_sliding_tackles_won
            defending_sliding_tackles_success_rate_percentage
            defending_interceptions
            defending_blocks
            defending_clearances
            defending_air_duels_won
            defending_beaten_by_opponent
            defending_fouls_committed
            defending_penalties_committed
            defending_own_goals
            goalkeeping_shots_against
            goalkeeping_shots_on_target
            goalkeeping_saves
            goalkeeping_goals_conceded
            goalkeeping_save_success_rate_percentage
            goalkeeping_shootout_saves
            goalkeeping_shootout_goals_conceded
            goalkeeping_normal
            goalkeeping_finesse
            goalkeeping_header
            goalkeeping_low
            goalkeeping_volley
            goalkeeping_chip
            goalkeeping_set_pieces
          }
        }
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

export const getTournamentQuery = /* GraphQL */ `
  query GetTournament($id: ID!) {
    getTournament(id: $id) {
      id
      name
      team {
        items {
          id
          team {
            id
            name
          }
        }
      }
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
            id
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
`;
export const createPlayerStatsMutation = /* GraphQL */ `
  mutation CreatePlayerStats(
    $input: CreatePlayerStatsInput!
    $condition: ModelPlayerStatsConditionInput
  ) {
    createPlayerStats(input: $input, condition: $condition) {
      id
    }
  }
`;

export const updatePlayerStatsMutation = /* GraphQL */ `
  mutation UpdatePlayerStats(
    $input: UpdatePlayerStatsInput!
    $condition: ModelPlayerStatsConditionInput
  ) {
    updatePlayerStats(input: $input, condition: $condition) {
      id
    }
  }
`;

export const updatePlayerTableStatMutation = /* GraphQL */ `
  mutation UpdatePlayerTableStat(
    $input: UpdatePlayerTableStatInput!
    $condition: ModelPlayerTableStatConditionInput
  ) {
    updatePlayerTableStat(input: $input, condition: $condition) {
      id
    }
  }
`;

export const createPlayerTableStatMutation = /* GraphQL */ `
  mutation CreatePlayerTableStat(
    $input: CreatePlayerTableStatInput!
    $condition: ModelPlayerTableStatConditionInput
  ) {
    createPlayerTableStat(input: $input, condition: $condition) {
      id
    }
  }
`;

export const getLeagueRequestsQuery = /* GraphQL */ `
  query GetLeague($id: ID = "") {
    getLeague(id: $id) {
      requeststoTeam {
        items {
          id
          status
          to {
            name
            id
            manager {
              id
              name
            }
          }
        }
      }
    }
  }
`;

export const createRequestLeague2TeamMutation = /* GraphQL */ `
  mutation CreateRequestLeague2Team(
    $input: CreateRequestLeague2TeamInput!
    $condition: ModelRequestLeague2TeamConditionInput
  ) {
    createRequestLeague2Team(input: $input, condition: $condition) {
      id
    }
  }
`;

export const deleteRequestLeague2TeamMutation = /* GraphQL */ `
  mutation DeleteRequestLeague2Team(
    $input: DeleteRequestLeague2TeamInput!
    $condition: ModelRequestLeague2TeamConditionInput
  ) {
    deleteRequestLeague2Team(input: $input, condition: $condition) {
      id
    }
  }
`;

export const getTeamForDashboardQuery = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      name
      league {
        id
        name
        status

        tournamentModerators

        requestModerators
        transferModerator
        leagueAdmin

        playerAdminsId
      }

      status

      tournaments {
        items {
          id
          tournament {
            id
            name
          }
        }
      }

      requestsfromLeague {
        nextToken
      }

      requeststoPlayer {
        nextToken
      }
      teamStats {
        nextToken
      }

      teamManager
      teamCaptain

      leagueTeamsId
      member {
        items {
          id
          player {
            name
            id
          }
        }
      }
    }
  }
`;

export const fixtureByTournamentandHomeTeamQuery = /* GraphQL */ `
  query FixtureByTournamentandHomeTeam(
    $homeID: ID!
    $tournamentID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFixtureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    fixtureByTournamentandHomeTeam(
      homeID: $homeID
      tournamentID: $tournamentID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        season
        round
        status
        homeScore
        awayScore
        homeResult
        awayResult
        tournamentMod
        tournamentID
        createdAt
        updatedAt

        tournamentFixturesId
        playerTournamentFixturesId
        owner
        awayTeam {
          name
          id
        }
        homeTeam {
          name
          id
        }

        playerStats {
          items {
            status
            id
            matchRating
            OVR
            position
            name
            version
            player {
              id
              name
            }
            verified
            summary_goals
            summary_assists
            summary_shots
            summary_shot_accuracy
            summary_passes
            summary_pass_accuraccy
            summary_dribbles
            summary_dribble_accuracy
            summary_tackles
            summary_tackle_success_rate
            summary_offsides
            summary_fouls_committed
            summary_possession_won
            summary_possession_lost
            summary_minutes_played_vs_team_average
            summary_distance_covered_vs_team_average
            summary_distance_sprinted_vs_team_average
            possession_possession_percentage
            possession_dribbles
            possession_dribblescompleted
            possession_dribble_success_rate_percentage
            possession_distance_dribbled
            possession_fouls_won
            possession_penalties_won
            possession_regular_dribble_percentage
            possession_shield_dribble_percentage
            possession_strafe_dribble_percentage
            possession_beat
            possession_skillmove_beat
            possession_nutmeg
            possession_knock_ons
            shooting_goals
            shooting_expected_goals
            shooting_shots
            shooting_shots_on_target
            shooting_shots_off_target
            shooting_shots_blocked
            shooting_shot_accuracy_percentage
            shooting_normal
            shooting_finesse
            shooting_header
            shooting_low
            shooting_volley
            shooting_chip
            shooting_set_pieces
            passing_assists
            passing_expected_assists
            passing_passes
            passing_completed
            passing_intercepted
            passing_pass_accuraccy_percentage
            passing_offside_passes
            passing_ground
            passing_lob
            passing_through
            passing_lofted_through
            passing_cross
            passing_set_pieces
            defending_standing_tackles
            defending_standing_tackles_won
            defending_standing_tackles_success_rate_percentage
            defending_sliding_tackles
            defending_sliding_tackles_won
            defending_sliding_tackles_success_rate_percentage
            defending_interceptions
            defending_blocks
            defending_clearances
            defending_air_duels_won
            defending_beaten_by_opponent
            defending_fouls_committed
            defending_penalties_committed
            defending_own_goals
            goalkeeping_shots_against
            goalkeeping_shots_on_target
            goalkeeping_saves
            goalkeeping_goals_conceded
            goalkeeping_save_success_rate_percentage
            goalkeeping_shootout_saves
            goalkeeping_shootout_goals_conceded
            goalkeeping_normal
            goalkeeping_finesse
            goalkeeping_header
            goalkeeping_low
            goalkeeping_volley
            goalkeeping_chip
            goalkeeping_set_pieces
          }
        }
        teamStats {
          items {
            teamTeamStatsId
            fixtureTeamStatsId
            teamStatsHome_teamId
            teamStatsAway_teamId
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
      nextToken
    }
  }
`;

export const fixtureByTournamentandAwayTeamQuery = /* GraphQL */ `
  query FixtureByTournamentandAwayTeam(
    $awayID: ID!
    $tournamentID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFixtureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    fixtureByTournamentandAwayTeam(
      awayID: $awayID
      tournamentID: $tournamentID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        season
        round
        status
        homeScore
        awayScore
        homeResult
        awayResult
        tournamentMod
        tournamentID
        createdAt
        updatedAt

        tournamentFixturesId
        playerTournamentFixturesId
        owner
        awayTeam {
          name
          id
        }
        homeTeam {
          name
          id
        }
        playerStats {
          items {
            status
            id
            matchRating
            OVR
            position
            name
            version
            player {
              id
              name
            }
            verified
            summary_goals
            summary_assists
            summary_shots
            summary_shot_accuracy
            summary_passes
            summary_pass_accuraccy
            summary_dribbles
            summary_dribble_accuracy
            summary_tackles
            summary_tackle_success_rate
            summary_offsides
            summary_fouls_committed
            summary_possession_won
            summary_possession_lost
            summary_minutes_played_vs_team_average
            summary_distance_covered_vs_team_average
            summary_distance_sprinted_vs_team_average
            possession_possession_percentage
            possession_dribbles
            possession_dribblescompleted
            possession_dribble_success_rate_percentage
            possession_distance_dribbled
            possession_fouls_won
            possession_penalties_won
            possession_regular_dribble_percentage
            possession_shield_dribble_percentage
            possession_strafe_dribble_percentage
            possession_beat
            possession_skillmove_beat
            possession_nutmeg
            possession_knock_ons
            shooting_goals
            shooting_expected_goals
            shooting_shots
            shooting_shots_on_target
            shooting_shots_off_target
            shooting_shots_blocked
            shooting_shot_accuracy_percentage
            shooting_normal
            shooting_finesse
            shooting_header
            shooting_low
            shooting_volley
            shooting_chip
            shooting_set_pieces
            passing_assists
            passing_expected_assists
            passing_passes
            passing_completed
            passing_intercepted
            passing_pass_accuraccy_percentage
            passing_offside_passes
            passing_ground
            passing_lob
            passing_through
            passing_lofted_through
            passing_cross
            passing_set_pieces
            defending_standing_tackles
            defending_standing_tackles_won
            defending_standing_tackles_success_rate_percentage
            defending_sliding_tackles
            defending_sliding_tackles_won
            defending_sliding_tackles_success_rate_percentage
            defending_interceptions
            defending_blocks
            defending_clearances
            defending_air_duels_won
            defending_beaten_by_opponent
            defending_fouls_committed
            defending_penalties_committed
            defending_own_goals
            goalkeeping_shots_against
            goalkeeping_shots_on_target
            goalkeeping_saves
            goalkeeping_goals_conceded
            goalkeeping_save_success_rate_percentage
            goalkeeping_shootout_saves
            goalkeeping_shootout_goals_conceded
            goalkeeping_normal
            goalkeeping_finesse
            goalkeeping_header
            goalkeeping_low
            goalkeeping_volley
            goalkeeping_chip
            goalkeeping_set_pieces
          }
        }
        teamStats {
          items {
            teamTeamStatsId
            fixtureTeamStatsId
            teamStatsHome_teamId
            teamStatsAway_teamId
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
      nextToken
    }
  }
`;
export const updateFixtureMutation = /* GraphQL */ `
  mutation UpdateFixture(
    $input: UpdateFixtureInput!
    $condition: ModelFixtureConditionInput
  ) {
    updateFixture(input: $input, condition: $condition) {
      id
    }
  }
`;
export const createRequestTeam2PlayerMutation = /* GraphQL */ `
  mutation CreateRequestTeam2Player(
    $input: CreateRequestTeam2PlayerInput!
    $condition: ModelRequestTeam2PlayerConditionInput
  ) {
    createRequestTeam2Player(input: $input, condition: $condition) {
      id
    }
  }
`;
export const deleteRequestTeam2PlayerMutation = /* GraphQL */ `
  mutation DeleteRequestTeam2Player(
    $input: DeleteRequestTeam2PlayerInput!
    $condition: ModelRequestTeam2PlayerConditionInput
  ) {
    deleteRequestTeam2Player(input: $input, condition: $condition) {
      id
    }
  }
`;

export const updateRequestTeam2PlayerMutation = /* GraphQL */ `
  mutation UpdateRequestTeam2Player(
    $input: UpdateRequestTeam2PlayerInput!
    $condition: ModelRequestTeam2PlayerConditionInput
  ) {
    updateRequestTeam2Player(input: $input, condition: $condition) {
      id
    }
  }
`;

export const getTeamRequestsQuery = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      requeststoPlayer {
        items {
          id
          status
          to {
            id
            name
            username
          }
        }
      }
    }
  }
`;

export const getTeamRequestsDashboardQuery = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      requestsfromLeague {
        items {
          from {
            name
            admin {
              name
            }
          }
        }
      }
    }
  }
`;
export const getPlayerForDashboardQuery = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
      id
      name
    }
  }
`;
