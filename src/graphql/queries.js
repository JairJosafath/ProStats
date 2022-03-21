/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLeague = /* GraphQL */ `
  query GetLeague($id: ID!) {
    getLeague(id: $id) {
      id
      name
      admin {
        id
        username
        name
        image
        slogan
        status
        leaguemembership1
        leaguemembership2
        leaguemembership3
        teammembership2
        teammembership1
        teammembership3
        leagueadmin1
        leagueadmin2
        leagueadmin3
        leaguemod1
        leaguemod2
        leaguemod3
        teamcaptain1
        teamcaptain2
        teamcaptain3
        teammanager2
        teammanager1
        teammanager3
        createdAt
        updatedAt
        newsPlayerTagsId
        playerLevelPlayersId
        playerTournamentPlayersId
        playerTournamentStandingLeaderboardId
        playerPlayerLevelId
        playerPlayerSubscriptionId
        owner
      }
      status
      logo
      description
      header
      moderators {
        nextToken
      }
      teams {
        nextToken
      }
      tournaments {
        nextToken
      }
      news {
        nextToken
      }
      transfers {
        nextToken
      }
      requestsfromTeam {
        nextToken
      }
      requeststoTeam {
        nextToken
      }
      leagueLevel {
        id
        name
        description
        color
        card
        rank
        createdAt
        updatedAt
        owner
      }
      leagueSubscription {
        id
        name
        description
        features
        createdAt
        updatedAt
        owner
      }
      tournamentModerators
      newsModerators
      requestModerators
      transferModerator
      leagueAdmin
      createdAt
      updatedAt
      playerAdminsId
      leagueLevelLeaguesId
      leagueLeagueLevelId
      leagueLeagueSubscriptionId
      owner
    }
  }
`;
export const listLeagues = /* GraphQL */ `
  query ListLeagues(
    $filter: ModelLeagueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLeagues(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        status
        logo
        description
        header
        tournamentModerators
        newsModerators
        requestModerators
        transferModerator
        leagueAdmin
        createdAt
        updatedAt
        playerAdminsId
        leagueLevelLeaguesId
        leagueLeagueLevelId
        leagueLeagueSubscriptionId
        owner
      }
      nextToken
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
      id
      username
      name
      image
      slogan
      status
      admins {
        nextToken
      }
      moderates {
        nextToken
      }
      teams {
        nextToken
      }
      manages {
        nextToken
      }
      captains {
        nextToken
      }
      playerTournaments {
        nextToken
      }
      hostplayerTournaments {
        nextToken
      }
      trophies {
        nextToken
      }
      playerLevel {
        id
        name
        description
        color
        card
        rank
        createdAt
        updatedAt
        owner
      }
      leaguemembership1
      leaguemembership2
      leaguemembership3
      teammembership2
      teammembership1
      teammembership3
      leagueadmin1
      leagueadmin2
      leagueadmin3
      leaguemod1
      leaguemod2
      leaguemod3
      teamcaptain1
      teamcaptain2
      teamcaptain3
      teammanager2
      teammanager1
      teammanager3
      requestsfromTeam {
        nextToken
      }
      requeststoTeam {
        nextToken
      }
      fixturesPlayedIn {
        nextToken
      }
      playerStats {
        nextToken
      }
      playerSubscription {
        id
        name
        description
        features
        createdAt
        updatedAt
        owner
      }
      news {
        nextToken
      }
      createdAt
      updatedAt
      newsPlayerTagsId
      playerLevelPlayersId
      playerTournamentPlayersId
      playerTournamentStandingLeaderboardId
      playerPlayerLevelId
      playerPlayerSubscriptionId
      owner
    }
  }
`;
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        name
        image
        slogan
        status
        leaguemembership1
        leaguemembership2
        leaguemembership3
        teammembership2
        teammembership1
        teammembership3
        leagueadmin1
        leagueadmin2
        leagueadmin3
        leaguemod1
        leaguemod2
        leaguemod3
        teamcaptain1
        teamcaptain2
        teamcaptain3
        teammanager2
        teammanager1
        teammanager3
        createdAt
        updatedAt
        newsPlayerTagsId
        playerLevelPlayersId
        playerTournamentPlayersId
        playerTournamentStandingLeaderboardId
        playerPlayerLevelId
        playerPlayerSubscriptionId
        owner
      }
      nextToken
    }
  }
`;
export const getTeam = /* GraphQL */ `
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
        logo
        description
        header
        tournamentModerators
        newsModerators
        requestModerators
        transferModerator
        leagueAdmin
        createdAt
        updatedAt
        playerAdminsId
        leagueLevelLeaguesId
        leagueLeagueLevelId
        leagueLeagueSubscriptionId
        owner
      }
      manager {
        id
        username
        name
        image
        slogan
        status
        leaguemembership1
        leaguemembership2
        leaguemembership3
        teammembership2
        teammembership1
        teammembership3
        leagueadmin1
        leagueadmin2
        leagueadmin3
        leaguemod1
        leaguemod2
        leaguemod3
        teamcaptain1
        teamcaptain2
        teamcaptain3
        teammanager2
        teammanager1
        teammanager3
        createdAt
        updatedAt
        newsPlayerTagsId
        playerLevelPlayersId
        playerTournamentPlayersId
        playerTournamentStandingLeaderboardId
        playerPlayerLevelId
        playerPlayerSubscriptionId
        owner
      }
      status
      captains {
        nextToken
      }
      member {
        nextToken
      }
      tournaments {
        nextToken
      }
      trophies {
        nextToken
      }
      requestsfromLeague {
        nextToken
      }
      requeststoLeague {
        nextToken
      }
      requestsfromPlayer {
        nextToken
      }
      requeststoPlayer {
        nextToken
      }
      teamStats {
        nextToken
      }
      teamSubscription {
        id
        name
        description
        features
        createdAt
        updatedAt
        owner
      }
      homefixtures {
        nextToken
      }
      awayfixtures {
        nextToken
      }
      teamManager
      teamCaptain
      createdAt
      updatedAt
      leagueTeamsId
      playerManagesId
      newsTeamTagsId
      teamLevelTeamId
      teamTeamSubscriptionId
      owner
    }
  }
`;
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        logo
        slogan
        status
        teamManager
        teamCaptain
        createdAt
        updatedAt
        leagueTeamsId
        playerManagesId
        newsTeamTagsId
        teamLevelTeamId
        teamTeamSubscriptionId
        owner
      }
      nextToken
    }
  }
`;
export const getTournament = /* GraphQL */ `
  query GetTournament($id: ID!) {
    getTournament(id: $id) {
      id
      name
      season
      logo
      slogan
      team {
        nextToken
      }
      table {
        nextToken
      }
      playerTable {
        nextToken
      }
      league {
        id
        name
        status
        logo
        description
        header
        tournamentModerators
        newsModerators
        requestModerators
        transferModerator
        leagueAdmin
        createdAt
        updatedAt
        playerAdminsId
        leagueLevelLeaguesId
        leagueLeagueLevelId
        leagueLeagueSubscriptionId
        owner
      }
      fixtures {
        nextToken
      }
      status
      trophies {
        nextToken
      }
      tournamentmod
      createdAt
      updatedAt
      leagueTournamentsId
      newsTournamentTagsId
      owner
    }
  }
`;
export const listTournaments = /* GraphQL */ `
  query ListTournaments(
    $filter: ModelTournamentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTournaments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        season
        logo
        slogan
        status
        tournamentmod
        createdAt
        updatedAt
        leagueTournamentsId
        newsTournamentTagsId
        owner
      }
      nextToken
    }
  }
`;
export const getFixture = /* GraphQL */ `
  query GetFixture($id: ID!) {
    getFixture(id: $id) {
      id
      name
      season
      round
      homeID
      awayID
      homeTeam {
        id
        name
        logo
        slogan
        status
        teamManager
        teamCaptain
        createdAt
        updatedAt
        leagueTeamsId
        playerManagesId
        newsTeamTagsId
        teamLevelTeamId
        teamTeamSubscriptionId
        owner
      }
      awayTeam {
        id
        name
        logo
        slogan
        status
        teamManager
        teamCaptain
        createdAt
        updatedAt
        leagueTeamsId
        playerManagesId
        newsTeamTagsId
        teamLevelTeamId
        teamTeamSubscriptionId
        owner
      }
      homeScore
      awayScore
      homeResult
      awayResult
      teamStats {
        nextToken
      }
      playerStats {
        nextToken
      }
      tournamentMod
      playersPlayed {
        nextToken
      }
      createdAt
      updatedAt
      teamHomefixturesId
      teamAwayfixturesId
      tournamentFixturesId
      playerTournamentFixturesId
      owner
    }
  }
`;
export const listFixtures = /* GraphQL */ `
  query ListFixtures(
    $filter: ModelFixtureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFixtures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        season
        round
        homeID
        awayID
        homeScore
        awayScore
        homeResult
        awayResult
        tournamentMod
        createdAt
        updatedAt
        teamHomefixturesId
        teamAwayfixturesId
        tournamentFixturesId
        playerTournamentFixturesId
        owner
      }
      nextToken
    }
  }
`;
export const getPlayerStats = /* GraphQL */ `
  query GetPlayerStats($id: ID!) {
    getPlayerStats(id: $id) {
      id
      matchRating
      OVR
      position
      name
      version
      player {
        id
        username
        name
        image
        slogan
        status
        leaguemembership1
        leaguemembership2
        leaguemembership3
        teammembership2
        teammembership1
        teammembership3
        leagueadmin1
        leagueadmin2
        leagueadmin3
        leaguemod1
        leaguemod2
        leaguemod3
        teamcaptain1
        teamcaptain2
        teamcaptain3
        teammanager2
        teammanager1
        teammanager3
        createdAt
        updatedAt
        newsPlayerTagsId
        playerLevelPlayersId
        playerTournamentPlayersId
        playerTournamentStandingLeaderboardId
        playerPlayerLevelId
        playerPlayerSubscriptionId
        owner
      }
      fixture {
        id
        name
        season
        round
        homeID
        awayID
        homeScore
        awayScore
        homeResult
        awayResult
        tournamentMod
        createdAt
        updatedAt
        teamHomefixturesId
        teamAwayfixturesId
        tournamentFixturesId
        playerTournamentFixturesId
        owner
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
      createdAt
      updatedAt
      playerPlayerStatsId
      fixturePlayerStatsId
      owner
    }
  }
`;
export const listPlayerStats = /* GraphQL */ `
  query ListPlayerStats(
    $filter: ModelPlayerStatsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayerStats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        matchRating
        OVR
        position
        name
        version
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
        createdAt
        updatedAt
        playerPlayerStatsId
        fixturePlayerStatsId
        owner
      }
      nextToken
    }
  }
`;
export const getTeamStats = /* GraphQL */ `
  query GetTeamStats($id: ID!) {
    getTeamStats(id: $id) {
      id
      version
      verified
      fixture {
        id
        name
        season
        round
        homeID
        awayID
        homeScore
        awayScore
        homeResult
        awayResult
        tournamentMod
        createdAt
        updatedAt
        teamHomefixturesId
        teamAwayfixturesId
        tournamentFixturesId
        playerTournamentFixturesId
        owner
      }
      home_name
      away_name
      home_team {
        id
        name
        logo
        slogan
        status
        teamManager
        teamCaptain
        createdAt
        updatedAt
        leagueTeamsId
        playerManagesId
        newsTeamTagsId
        teamLevelTeamId
        teamTeamSubscriptionId
        owner
      }
      away_team {
        id
        name
        logo
        slogan
        status
        teamManager
        teamCaptain
        createdAt
        updatedAt
        leagueTeamsId
        playerManagesId
        newsTeamTagsId
        teamLevelTeamId
        teamTeamSubscriptionId
        owner
      }
      home_summary_goals
      home_summary_possession_percentage
      home_summary_shots
      home_summary_expected_goals
      home_summary_spasses
      home_summary_tackles
      home_summary_tackles_won
      home_summary_interceptions
      home_summary_saves
      home_summary_fouls_committed
      home_summary_offsides
      home_summary_corners
      home_summary_free_kicks
      home_summary_penalty_kicks
      home_summary_yellow_cards
      home_summary_red_cards
      home_possession_minute_15
      home_possession_minute_30
      home_possession_minute_45
      home_possession_minute_60
      home_possession_minute_75
      home_possession_minute_90
      home_shooting_total_shots
      home_shooting_on_target
      home_shooting_off_target
      home_shooting_blocked
      home_shooting_normal
      home_shooting_finesse
      home_shooting_header
      home_shooting_low
      home_shooting_volley
      home_shooting_chip
      home_shooting_set_pieces
      home_shooting_inside_the_box
      home_shooting_outside_the_box
      home_shooting_near_side
      home_shooting_far_side
      home_passing_total_passes
      home_passing_completed
      home_passing_intercepted
      home_passing_offside
      home_passing_other
      home_passing_ground
      home_passing_lob
      home_passing_through
      home_passing_lofted_through
      home_passing_cross
      home_passing_set_pieces
      home_passing_key_pass
      home_passing_first_time
      home_passing_pass_and_go
      home_passing_down_wing
      home_passing_breakaway
      home_defending_standing_tackles
      home_defending_standing_tackles_won
      home_defending_average_standing_tackles_distance
      home_defending_sliding_tackles
      home_defending_sliding_tackles_won
      home_defending_average_sliding_tackles_distance
      home_defending_interceptions
      home_defending_blocks
      home_defending_saves
      home_defending_clearances
      home_defending_air_duels_won
      home_defending_beaten_by_opponent
      home_defending_fouls_committed
      home_defending_penalties_committed
      home_defending_yellow_cards
      home_defending_red_cards
      away_summary_goals
      away_summary_possession_percentage
      away_summary_shots
      away_summary_expected_goals
      away_summary_spasses
      away_summary_tackles
      away_summary_tackles_won
      away_summary_interceptions
      away_summary_saves
      away_summary_fouls_committed
      away_summary_offsides
      away_summary_corners
      away_summary_free_kicks
      away_summary_penalty_kicks
      away_summary_yellow_cards
      away_summary_red_cards
      away_possession_minute_15
      away_possession_minute_30
      away_possession_minute_45
      away_possession_minute_60
      away_possession_minute_75
      away_possession_minute_90
      away_shooting_total_shots
      away_shooting_on_target
      away_shooting_off_target
      away_shooting_blocked
      away_shooting_normal
      away_shooting_finesse
      away_shooting_header
      away_shooting_low
      away_shooting_volley
      away_shooting_chip
      away_shooting_set_pieces
      away_shooting_inside_the_box
      away_shooting_outside_the_box
      away_shooting_near_side
      away_shooting_far_side
      away_passing_total_passes
      away_passing_completed
      away_passing_intercepted
      away_passing_offside
      away_passing_other
      away_passing_ground
      away_passing_lob
      away_passing_through
      away_passing_lofted_through
      away_passing_cross
      away_passing_set_pieces
      away_passing_key_pass
      away_passing_first_time
      away_passing_pass_and_go
      away_passing_down_wing
      away_passing_breakaway
      away_defending_standing_tackles
      away_defending_standing_tackles_won
      away_defending_average_standing_tackles_distance
      away_defending_sliding_tackles
      away_defending_sliding_tackles_won
      away_defending_average_sliding_tackles_distance
      away_defending_interceptions
      away_defending_blocks
      away_defending_saves
      away_defending_clearances
      away_defending_air_duels_won
      away_defending_beaten_by_opponent
      away_defending_fouls_committed
      away_defending_penalties_committed
      away_defending_yellow_cards
      away_defending_red_cards
      createdAt
      updatedAt
      teamTeamStatsId
      fixtureTeamStatsId
      teamStatsHome_teamId
      teamStatsAway_teamId
      owner
    }
  }
`;
export const listTeamStats = /* GraphQL */ `
  query ListTeamStats(
    $filter: ModelTeamStatsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeamStats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        version
        verified
        home_name
        away_name
        home_summary_goals
        home_summary_possession_percentage
        home_summary_shots
        home_summary_expected_goals
        home_summary_spasses
        home_summary_tackles
        home_summary_tackles_won
        home_summary_interceptions
        home_summary_saves
        home_summary_fouls_committed
        home_summary_offsides
        home_summary_corners
        home_summary_free_kicks
        home_summary_penalty_kicks
        home_summary_yellow_cards
        home_summary_red_cards
        home_possession_minute_15
        home_possession_minute_30
        home_possession_minute_45
        home_possession_minute_60
        home_possession_minute_75
        home_possession_minute_90
        home_shooting_total_shots
        home_shooting_on_target
        home_shooting_off_target
        home_shooting_blocked
        home_shooting_normal
        home_shooting_finesse
        home_shooting_header
        home_shooting_low
        home_shooting_volley
        home_shooting_chip
        home_shooting_set_pieces
        home_shooting_inside_the_box
        home_shooting_outside_the_box
        home_shooting_near_side
        home_shooting_far_side
        home_passing_total_passes
        home_passing_completed
        home_passing_intercepted
        home_passing_offside
        home_passing_other
        home_passing_ground
        home_passing_lob
        home_passing_through
        home_passing_lofted_through
        home_passing_cross
        home_passing_set_pieces
        home_passing_key_pass
        home_passing_first_time
        home_passing_pass_and_go
        home_passing_down_wing
        home_passing_breakaway
        home_defending_standing_tackles
        home_defending_standing_tackles_won
        home_defending_average_standing_tackles_distance
        home_defending_sliding_tackles
        home_defending_sliding_tackles_won
        home_defending_average_sliding_tackles_distance
        home_defending_interceptions
        home_defending_blocks
        home_defending_saves
        home_defending_clearances
        home_defending_air_duels_won
        home_defending_beaten_by_opponent
        home_defending_fouls_committed
        home_defending_penalties_committed
        home_defending_yellow_cards
        home_defending_red_cards
        away_summary_goals
        away_summary_possession_percentage
        away_summary_shots
        away_summary_expected_goals
        away_summary_spasses
        away_summary_tackles
        away_summary_tackles_won
        away_summary_interceptions
        away_summary_saves
        away_summary_fouls_committed
        away_summary_offsides
        away_summary_corners
        away_summary_free_kicks
        away_summary_penalty_kicks
        away_summary_yellow_cards
        away_summary_red_cards
        away_possession_minute_15
        away_possession_minute_30
        away_possession_minute_45
        away_possession_minute_60
        away_possession_minute_75
        away_possession_minute_90
        away_shooting_total_shots
        away_shooting_on_target
        away_shooting_off_target
        away_shooting_blocked
        away_shooting_normal
        away_shooting_finesse
        away_shooting_header
        away_shooting_low
        away_shooting_volley
        away_shooting_chip
        away_shooting_set_pieces
        away_shooting_inside_the_box
        away_shooting_outside_the_box
        away_shooting_near_side
        away_shooting_far_side
        away_passing_total_passes
        away_passing_completed
        away_passing_intercepted
        away_passing_offside
        away_passing_other
        away_passing_ground
        away_passing_lob
        away_passing_through
        away_passing_lofted_through
        away_passing_cross
        away_passing_set_pieces
        away_passing_key_pass
        away_passing_first_time
        away_passing_pass_and_go
        away_passing_down_wing
        away_passing_breakaway
        away_defending_standing_tackles
        away_defending_standing_tackles_won
        away_defending_average_standing_tackles_distance
        away_defending_sliding_tackles
        away_defending_sliding_tackles_won
        away_defending_average_sliding_tackles_distance
        away_defending_interceptions
        away_defending_blocks
        away_defending_saves
        away_defending_clearances
        away_defending_air_duels_won
        away_defending_beaten_by_opponent
        away_defending_fouls_committed
        away_defending_penalties_committed
        away_defending_yellow_cards
        away_defending_red_cards
        createdAt
        updatedAt
        teamTeamStatsId
        fixtureTeamStatsId
        teamStatsHome_teamId
        teamStatsAway_teamId
        owner
      }
      nextToken
    }
  }
`;
export const getNews = /* GraphQL */ `
  query GetNews($id: ID!) {
    getNews(id: $id) {
      id
      title
      subTitle
      headerImage
      content
      playerTags {
        nextToken
      }
      teamTags {
        nextToken
      }
      tournamentTags {
        nextToken
      }
      status
      author {
        id
        username
        name
        image
        slogan
        status
        leaguemembership1
        leaguemembership2
        leaguemembership3
        teammembership2
        teammembership1
        teammembership3
        leagueadmin1
        leagueadmin2
        leagueadmin3
        leaguemod1
        leaguemod2
        leaguemod3
        teamcaptain1
        teamcaptain2
        teamcaptain3
        teammanager2
        teammanager1
        teammanager3
        createdAt
        updatedAt
        newsPlayerTagsId
        playerLevelPlayersId
        playerTournamentPlayersId
        playerTournamentStandingLeaderboardId
        playerPlayerLevelId
        playerPlayerSubscriptionId
        owner
      }
      createdAt
      updatedAt
      leagueNewsId
      playerNewsId
      owner
    }
  }
`;
export const listNews = /* GraphQL */ `
  query ListNews(
    $filter: ModelNewsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        subTitle
        headerImage
        content
        status
        createdAt
        updatedAt
        leagueNewsId
        playerNewsId
        owner
      }
      nextToken
    }
  }
`;
export const getTransfer = /* GraphQL */ `
  query GetTransfer($id: ID!) {
    getTransfer(id: $id) {
      id
      player {
        id
        username
        name
        image
        slogan
        status
        leaguemembership1
        leaguemembership2
        leaguemembership3
        teammembership2
        teammembership1
        teammembership3
        leagueadmin1
        leagueadmin2
        leagueadmin3
        leaguemod1
        leaguemod2
        leaguemod3
        teamcaptain1
        teamcaptain2
        teamcaptain3
        teammanager2
        teammanager1
        teammanager3
        createdAt
        updatedAt
        newsPlayerTagsId
        playerLevelPlayersId
        playerTournamentPlayersId
        playerTournamentStandingLeaderboardId
        playerPlayerLevelId
        playerPlayerSubscriptionId
        owner
      }
      fromID
      toID
      from {
        id
        name
        logo
        slogan
        status
        teamManager
        teamCaptain
        createdAt
        updatedAt
        leagueTeamsId
        playerManagesId
        newsTeamTagsId
        teamLevelTeamId
        teamTeamSubscriptionId
        owner
      }
      to {
        id
        name
        logo
        slogan
        status
        teamManager
        teamCaptain
        createdAt
        updatedAt
        leagueTeamsId
        playerManagesId
        newsTeamTagsId
        teamLevelTeamId
        teamTeamSubscriptionId
        owner
      }
      type
      league {
        id
        name
        status
        logo
        description
        header
        tournamentModerators
        newsModerators
        requestModerators
        transferModerator
        leagueAdmin
        createdAt
        updatedAt
        playerAdminsId
        leagueLevelLeaguesId
        leagueLeagueLevelId
        leagueLeagueSubscriptionId
        owner
      }
      createdAt
      updatedAt
      leagueTransfersId
      transferPlayerId
      owner
    }
  }
`;
export const listTransfers = /* GraphQL */ `
  query ListTransfers(
    $filter: ModelTransferFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransfers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fromID
        toID
        type
        createdAt
        updatedAt
        leagueTransfersId
        transferPlayerId
        owner
      }
      nextToken
    }
  }
`;
export const getLeagueLevel = /* GraphQL */ `
  query GetLeagueLevel($id: ID!) {
    getLeagueLevel(id: $id) {
      id
      name
      description
      color
      card
      rank
      leagues {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listLeagueLevels = /* GraphQL */ `
  query ListLeagueLevels(
    $filter: ModelLeagueLevelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLeagueLevels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        color
        card
        rank
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPlayerLevel = /* GraphQL */ `
  query GetPlayerLevel($id: ID!) {
    getPlayerLevel(id: $id) {
      id
      name
      description
      color
      card
      rank
      players {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPlayerLevels = /* GraphQL */ `
  query ListPlayerLevels(
    $filter: ModelPlayerLevelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayerLevels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        color
        card
        rank
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTeamLevel = /* GraphQL */ `
  query GetTeamLevel($id: ID!) {
    getTeamLevel(id: $id) {
      id
      name
      description
      color
      card
      rank
      team {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTeamLevels = /* GraphQL */ `
  query ListTeamLevels(
    $filter: ModelTeamLevelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeamLevels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        color
        card
        rank
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUserRole = /* GraphQL */ `
  query GetUserRole($id: ID!) {
    getUserRole(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUserRoles = /* GraphQL */ `
  query ListUserRoles(
    $filter: ModelUserRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getRequestLeague2Team = /* GraphQL */ `
  query GetRequestLeague2Team($id: ID!) {
    getRequestLeague2Team(id: $id) {
      id
      from {
        id
        name
        status
        logo
        description
        header
        tournamentModerators
        newsModerators
        requestModerators
        transferModerator
        leagueAdmin
        createdAt
        updatedAt
        playerAdminsId
        leagueLevelLeaguesId
        leagueLeagueLevelId
        leagueLeagueSubscriptionId
        owner
      }
      to {
        id
        name
        logo
        slogan
        status
        teamManager
        teamCaptain
        createdAt
        updatedAt
        leagueTeamsId
        playerManagesId
        newsTeamTagsId
        teamLevelTeamId
        teamTeamSubscriptionId
        owner
      }
      status
      createdAt
      updatedAt
      leagueRequeststoTeamId
      teamRequestsfromLeagueId
      requestLeague2TeamFromId
      requestLeague2TeamToId
      owner
    }
  }
`;
export const listRequestLeague2Teams = /* GraphQL */ `
  query ListRequestLeague2Teams(
    $filter: ModelRequestLeague2TeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequestLeague2Teams(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        createdAt
        updatedAt
        leagueRequeststoTeamId
        teamRequestsfromLeagueId
        requestLeague2TeamFromId
        requestLeague2TeamToId
        owner
      }
      nextToken
    }
  }
`;
export const getRequestTeam2League = /* GraphQL */ `
  query GetRequestTeam2League($id: ID!) {
    getRequestTeam2League(id: $id) {
      id
      from {
        id
        name
        logo
        slogan
        status
        teamManager
        teamCaptain
        createdAt
        updatedAt
        leagueTeamsId
        playerManagesId
        newsTeamTagsId
        teamLevelTeamId
        teamTeamSubscriptionId
        owner
      }
      to {
        id
        name
        status
        logo
        description
        header
        tournamentModerators
        newsModerators
        requestModerators
        transferModerator
        leagueAdmin
        createdAt
        updatedAt
        playerAdminsId
        leagueLevelLeaguesId
        leagueLeagueLevelId
        leagueLeagueSubscriptionId
        owner
      }
      status
      createdAt
      updatedAt
      leagueRequestsfromTeamId
      teamRequeststoLeagueId
      requestTeam2LeagueFromId
      requestTeam2LeagueToId
      owner
    }
  }
`;
export const listRequestTeam2Leagues = /* GraphQL */ `
  query ListRequestTeam2Leagues(
    $filter: ModelRequestTeam2LeagueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequestTeam2Leagues(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        createdAt
        updatedAt
        leagueRequestsfromTeamId
        teamRequeststoLeagueId
        requestTeam2LeagueFromId
        requestTeam2LeagueToId
        owner
      }
      nextToken
    }
  }
`;
export const getRequestTeam2Player = /* GraphQL */ `
  query GetRequestTeam2Player($id: ID!) {
    getRequestTeam2Player(id: $id) {
      id
      from {
        id
        name
        logo
        slogan
        status
        teamManager
        teamCaptain
        createdAt
        updatedAt
        leagueTeamsId
        playerManagesId
        newsTeamTagsId
        teamLevelTeamId
        teamTeamSubscriptionId
        owner
      }
      to {
        id
        username
        name
        image
        slogan
        status
        leaguemembership1
        leaguemembership2
        leaguemembership3
        teammembership2
        teammembership1
        teammembership3
        leagueadmin1
        leagueadmin2
        leagueadmin3
        leaguemod1
        leaguemod2
        leaguemod3
        teamcaptain1
        teamcaptain2
        teamcaptain3
        teammanager2
        teammanager1
        teammanager3
        createdAt
        updatedAt
        newsPlayerTagsId
        playerLevelPlayersId
        playerTournamentPlayersId
        playerTournamentStandingLeaderboardId
        playerPlayerLevelId
        playerPlayerSubscriptionId
        owner
      }
      status
      createdAt
      updatedAt
      playerRequestsfromTeamId
      teamRequeststoPlayerId
      requestTeam2PlayerFromId
      requestTeam2PlayerToId
      owner
    }
  }
`;
export const listRequestTeam2Players = /* GraphQL */ `
  query ListRequestTeam2Players(
    $filter: ModelRequestTeam2PlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequestTeam2Players(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        createdAt
        updatedAt
        playerRequestsfromTeamId
        teamRequeststoPlayerId
        requestTeam2PlayerFromId
        requestTeam2PlayerToId
        owner
      }
      nextToken
    }
  }
`;
export const getRequestPlayer2Team = /* GraphQL */ `
  query GetRequestPlayer2Team($id: ID!) {
    getRequestPlayer2Team(id: $id) {
      id
      from {
        id
        username
        name
        image
        slogan
        status
        leaguemembership1
        leaguemembership2
        leaguemembership3
        teammembership2
        teammembership1
        teammembership3
        leagueadmin1
        leagueadmin2
        leagueadmin3
        leaguemod1
        leaguemod2
        leaguemod3
        teamcaptain1
        teamcaptain2
        teamcaptain3
        teammanager2
        teammanager1
        teammanager3
        createdAt
        updatedAt
        newsPlayerTagsId
        playerLevelPlayersId
        playerTournamentPlayersId
        playerTournamentStandingLeaderboardId
        playerPlayerLevelId
        playerPlayerSubscriptionId
        owner
      }
      to {
        id
        name
        logo
        slogan
        status
        teamManager
        teamCaptain
        createdAt
        updatedAt
        leagueTeamsId
        playerManagesId
        newsTeamTagsId
        teamLevelTeamId
        teamTeamSubscriptionId
        owner
      }
      status
      createdAt
      updatedAt
      playerRequeststoTeamId
      teamRequestsfromPlayerId
      requestPlayer2TeamFromId
      requestPlayer2TeamToId
      owner
    }
  }
`;
export const listRequestPlayer2Teams = /* GraphQL */ `
  query ListRequestPlayer2Teams(
    $filter: ModelRequestPlayer2TeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequestPlayer2Teams(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        createdAt
        updatedAt
        playerRequeststoTeamId
        teamRequestsfromPlayerId
        requestPlayer2TeamFromId
        requestPlayer2TeamToId
        owner
      }
      nextToken
    }
  }
`;
export const getLeagueSubscription = /* GraphQL */ `
  query GetLeagueSubscription($id: ID!) {
    getLeagueSubscription(id: $id) {
      id
      name
      description
      features
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listLeagueSubscriptions = /* GraphQL */ `
  query ListLeagueSubscriptions(
    $filter: ModelLeagueSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLeagueSubscriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        features
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTeamSubscription = /* GraphQL */ `
  query GetTeamSubscription($id: ID!) {
    getTeamSubscription(id: $id) {
      id
      name
      description
      features
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTeamSubscriptions = /* GraphQL */ `
  query ListTeamSubscriptions(
    $filter: ModelTeamSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeamSubscriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        features
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPlayerSubscription = /* GraphQL */ `
  query GetPlayerSubscription($id: ID!) {
    getPlayerSubscription(id: $id) {
      id
      name
      description
      features
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPlayerSubscriptions = /* GraphQL */ `
  query ListPlayerSubscriptions(
    $filter: ModelPlayerSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayerSubscriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        features
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTrophy = /* GraphQL */ `
  query GetTrophy($id: ID!) {
    getTrophy(id: $id) {
      id
      name
      description
      tournament {
        id
        name
        season
        logo
        slogan
        status
        tournamentmod
        createdAt
        updatedAt
        leagueTournamentsId
        newsTournamentTagsId
        owner
      }
      image
      createdAt
      updatedAt
      playerTrophiesId
      teamTrophiesId
      tournamentTrophiesId
      owner
    }
  }
`;
export const listTrophies = /* GraphQL */ `
  query ListTrophies(
    $filter: ModelTrophyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrophies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
        playerTrophiesId
        teamTrophiesId
        tournamentTrophiesId
        owner
      }
      nextToken
    }
  }
`;
export const getPlayerTournament = /* GraphQL */ `
  query GetPlayerTournament($id: ID!) {
    getPlayerTournament(id: $id) {
      id
      name
      season
      host {
        id
        username
        name
        image
        slogan
        status
        leaguemembership1
        leaguemembership2
        leaguemembership3
        teammembership2
        teammembership1
        teammembership3
        leagueadmin1
        leagueadmin2
        leagueadmin3
        leaguemod1
        leaguemod2
        leaguemod3
        teamcaptain1
        teamcaptain2
        teamcaptain3
        teammanager2
        teammanager1
        teammanager3
        createdAt
        updatedAt
        newsPlayerTagsId
        playerLevelPlayersId
        playerTournamentPlayersId
        playerTournamentStandingLeaderboardId
        playerPlayerLevelId
        playerPlayerSubscriptionId
        owner
      }
      logo
      slogan
      players {
        nextToken
      }
      standings {
        id
        createdAt
        updatedAt
        playerTournamentStandingChampionId
        owner
      }
      fixtures {
        nextToken
      }
      status
      createdAt
      updatedAt
      playerPlayerTournamentsId
      playerHostplayerTournamentsId
      playerTournamentStandingsId
      owner
    }
  }
`;
export const listPlayerTournaments = /* GraphQL */ `
  query ListPlayerTournaments(
    $filter: ModelPlayerTournamentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayerTournaments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        season
        logo
        slogan
        status
        createdAt
        updatedAt
        playerPlayerTournamentsId
        playerHostplayerTournamentsId
        playerTournamentStandingsId
        owner
      }
      nextToken
    }
  }
`;
export const getPlayerTournamentStanding = /* GraphQL */ `
  query GetPlayerTournamentStanding($id: ID!) {
    getPlayerTournamentStanding(id: $id) {
      id
      leaderboard {
        nextToken
      }
      champion {
        id
        username
        name
        image
        slogan
        status
        leaguemembership1
        leaguemembership2
        leaguemembership3
        teammembership2
        teammembership1
        teammembership3
        leagueadmin1
        leagueadmin2
        leagueadmin3
        leaguemod1
        leaguemod2
        leaguemod3
        teamcaptain1
        teamcaptain2
        teamcaptain3
        teammanager2
        teammanager1
        teammanager3
        createdAt
        updatedAt
        newsPlayerTagsId
        playerLevelPlayersId
        playerTournamentPlayersId
        playerTournamentStandingLeaderboardId
        playerPlayerLevelId
        playerPlayerSubscriptionId
        owner
      }
      createdAt
      updatedAt
      playerTournamentStandingChampionId
      owner
    }
  }
`;
export const listPlayerTournamentStandings = /* GraphQL */ `
  query ListPlayerTournamentStandings(
    $filter: ModelPlayerTournamentStandingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayerTournamentStandings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        updatedAt
        playerTournamentStandingChampionId
        owner
      }
      nextToken
    }
  }
`;
export const getTableStat = /* GraphQL */ `
  query GetTableStat($id: ID!) {
    getTableStat(id: $id) {
      id
      tournament {
        id
        name
        season
        logo
        slogan
        status
        tournamentmod
        createdAt
        updatedAt
        leagueTournamentsId
        newsTournamentTagsId
        owner
      }
      team {
        id
        name
        logo
        slogan
        status
        teamManager
        teamCaptain
        createdAt
        updatedAt
        leagueTeamsId
        playerManagesId
        newsTeamTagsId
        teamLevelTeamId
        teamTeamSubscriptionId
        owner
      }
      points
      gamesPlayed
      gamesWon
      gamesDrawn
      gamesLost
      goalsFor
      goalsAgainst
      goalDifference
      cleanSheats
      record
      createdAt
      updatedAt
      tournamentTableId
      tableStatTeamId
      owner
    }
  }
`;
export const listTableStats = /* GraphQL */ `
  query ListTableStats(
    $filter: ModelTableStatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTableStats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        points
        gamesPlayed
        gamesWon
        gamesDrawn
        gamesLost
        goalsFor
        goalsAgainst
        goalDifference
        cleanSheats
        record
        createdAt
        updatedAt
        tournamentTableId
        tableStatTeamId
        owner
      }
      nextToken
    }
  }
`;
export const getPlayerTableStat = /* GraphQL */ `
  query GetPlayerTableStat($id: ID!) {
    getPlayerTableStat(id: $id) {
      id
      tournament {
        id
        name
        season
        logo
        slogan
        status
        tournamentmod
        createdAt
        updatedAt
        leagueTournamentsId
        newsTournamentTagsId
        owner
      }
      player {
        id
        username
        name
        image
        slogan
        status
        leaguemembership1
        leaguemembership2
        leaguemembership3
        teammembership2
        teammembership1
        teammembership3
        leagueadmin1
        leagueadmin2
        leagueadmin3
        leaguemod1
        leaguemod2
        leaguemod3
        teamcaptain1
        teamcaptain2
        teamcaptain3
        teammanager2
        teammanager1
        teammanager3
        createdAt
        updatedAt
        newsPlayerTagsId
        playerLevelPlayersId
        playerTournamentPlayersId
        playerTournamentStandingLeaderboardId
        playerPlayerLevelId
        playerPlayerSubscriptionId
        owner
      }
      goals
      assists
      beat
      skillmoveBeat
      nutmeg
      matchRating
      playerOfTheMatch
      expectedAssists
      interceptions
      tacklesWon
      blocks
      saves
      createdAt
      updatedAt
      tournamentPlayerTableId
      playerTableStatPlayerId
      owner
    }
  }
`;
export const listPlayerTableStats = /* GraphQL */ `
  query ListPlayerTableStats(
    $filter: ModelPlayerTableStatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayerTableStats(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        goals
        assists
        beat
        skillmoveBeat
        nutmeg
        matchRating
        playerOfTheMatch
        expectedAssists
        interceptions
        tacklesWon
        blocks
        saves
        createdAt
        updatedAt
        tournamentPlayerTableId
        playerTableStatPlayerId
        owner
      }
      nextToken
    }
  }
`;
export const getLeagueModerators = /* GraphQL */ `
  query GetLeagueModerators($id: ID!) {
    getLeagueModerators(id: $id) {
      id
      leagueID
      playerID
      league {
        id
        name
        status
        logo
        description
        header
        tournamentModerators
        newsModerators
        requestModerators
        transferModerator
        leagueAdmin
        createdAt
        updatedAt
        playerAdminsId
        leagueLevelLeaguesId
        leagueLeagueLevelId
        leagueLeagueSubscriptionId
        owner
      }
      player {
        id
        username
        name
        image
        slogan
        status
        leaguemembership1
        leaguemembership2
        leaguemembership3
        teammembership2
        teammembership1
        teammembership3
        leagueadmin1
        leagueadmin2
        leagueadmin3
        leaguemod1
        leaguemod2
        leaguemod3
        teamcaptain1
        teamcaptain2
        teamcaptain3
        teammanager2
        teammanager1
        teammanager3
        createdAt
        updatedAt
        newsPlayerTagsId
        playerLevelPlayersId
        playerTournamentPlayersId
        playerTournamentStandingLeaderboardId
        playerPlayerLevelId
        playerPlayerSubscriptionId
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listLeagueModerators = /* GraphQL */ `
  query ListLeagueModerators(
    $filter: ModelLeagueModeratorsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLeagueModerators(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        leagueID
        playerID
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTeamMembers = /* GraphQL */ `
  query GetTeamMembers($id: ID!) {
    getTeamMembers(id: $id) {
      id
      playerID
      teamID
      player {
        id
        username
        name
        image
        slogan
        status
        leaguemembership1
        leaguemembership2
        leaguemembership3
        teammembership2
        teammembership1
        teammembership3
        leagueadmin1
        leagueadmin2
        leagueadmin3
        leaguemod1
        leaguemod2
        leaguemod3
        teamcaptain1
        teamcaptain2
        teamcaptain3
        teammanager2
        teammanager1
        teammanager3
        createdAt
        updatedAt
        newsPlayerTagsId
        playerLevelPlayersId
        playerTournamentPlayersId
        playerTournamentStandingLeaderboardId
        playerPlayerLevelId
        playerPlayerSubscriptionId
        owner
      }
      team {
        id
        name
        logo
        slogan
        status
        teamManager
        teamCaptain
        createdAt
        updatedAt
        leagueTeamsId
        playerManagesId
        newsTeamTagsId
        teamLevelTeamId
        teamTeamSubscriptionId
        owner
      }
      createdAt
      updatedAt
      owner
      teamManager
    }
  }
`;
export const listTeamMembers = /* GraphQL */ `
  query ListTeamMembers(
    $filter: ModelTeamMembersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeamMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        playerID
        teamID
        createdAt
        updatedAt
        owner
        teamManager
      }
      nextToken
    }
  }
`;
export const getTeamCaptains = /* GraphQL */ `
  query GetTeamCaptains($id: ID!) {
    getTeamCaptains(id: $id) {
      id
      playerID
      teamID
      player {
        id
        username
        name
        image
        slogan
        status
        leaguemembership1
        leaguemembership2
        leaguemembership3
        teammembership2
        teammembership1
        teammembership3
        leagueadmin1
        leagueadmin2
        leagueadmin3
        leaguemod1
        leaguemod2
        leaguemod3
        teamcaptain1
        teamcaptain2
        teamcaptain3
        teammanager2
        teammanager1
        teammanager3
        createdAt
        updatedAt
        newsPlayerTagsId
        playerLevelPlayersId
        playerTournamentPlayersId
        playerTournamentStandingLeaderboardId
        playerPlayerLevelId
        playerPlayerSubscriptionId
        owner
      }
      team {
        id
        name
        logo
        slogan
        status
        teamManager
        teamCaptain
        createdAt
        updatedAt
        leagueTeamsId
        playerManagesId
        newsTeamTagsId
        teamLevelTeamId
        teamTeamSubscriptionId
        owner
      }
      createdAt
      updatedAt
      owner
      teamManager
    }
  }
`;
export const listTeamCaptains = /* GraphQL */ `
  query ListTeamCaptains(
    $filter: ModelTeamCaptainsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeamCaptains(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        playerID
        teamID
        createdAt
        updatedAt
        owner
        teamManager
      }
      nextToken
    }
  }
`;
export const getPlayersAndFixtures = /* GraphQL */ `
  query GetPlayersAndFixtures($id: ID!) {
    getPlayersAndFixtures(id: $id) {
      id
      playerID
      fixtureID
      player {
        id
        username
        name
        image
        slogan
        status
        leaguemembership1
        leaguemembership2
        leaguemembership3
        teammembership2
        teammembership1
        teammembership3
        leagueadmin1
        leagueadmin2
        leagueadmin3
        leaguemod1
        leaguemod2
        leaguemod3
        teamcaptain1
        teamcaptain2
        teamcaptain3
        teammanager2
        teammanager1
        teammanager3
        createdAt
        updatedAt
        newsPlayerTagsId
        playerLevelPlayersId
        playerTournamentPlayersId
        playerTournamentStandingLeaderboardId
        playerPlayerLevelId
        playerPlayerSubscriptionId
        owner
      }
      fixture {
        id
        name
        season
        round
        homeID
        awayID
        homeScore
        awayScore
        homeResult
        awayResult
        tournamentMod
        createdAt
        updatedAt
        teamHomefixturesId
        teamAwayfixturesId
        tournamentFixturesId
        playerTournamentFixturesId
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPlayersAndFixtures = /* GraphQL */ `
  query ListPlayersAndFixtures(
    $filter: ModelPlayersAndFixturesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayersAndFixtures(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        playerID
        fixtureID
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTeamTournaments = /* GraphQL */ `
  query GetTeamTournaments($id: ID!) {
    getTeamTournaments(id: $id) {
      id
      teamID
      tournamentID
      team {
        id
        name
        logo
        slogan
        status
        teamManager
        teamCaptain
        createdAt
        updatedAt
        leagueTeamsId
        playerManagesId
        newsTeamTagsId
        teamLevelTeamId
        teamTeamSubscriptionId
        owner
      }
      tournament {
        id
        name
        season
        logo
        slogan
        status
        tournamentmod
        createdAt
        updatedAt
        leagueTournamentsId
        newsTournamentTagsId
        owner
      }
      createdAt
      updatedAt
      owner
      teamManager
    }
  }
`;
export const listTeamTournaments = /* GraphQL */ `
  query ListTeamTournaments(
    $filter: ModelTeamTournamentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeamTournaments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        teamID
        tournamentID
        createdAt
        updatedAt
        owner
        teamManager
      }
      nextToken
    }
  }
`;
