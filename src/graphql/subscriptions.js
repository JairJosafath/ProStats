/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLeague = /* GraphQL */ `
  subscription OnCreateLeague($owner: String) {
    onCreateLeague(owner: $owner) {
      id
      name
      admin {
        id
        username
        name
        image
        slogan
        status
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
export const onUpdateLeague = /* GraphQL */ `
  subscription OnUpdateLeague($owner: String) {
    onUpdateLeague(owner: $owner) {
      id
      name
      admin {
        id
        username
        name
        image
        slogan
        status
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
export const onDeleteLeague = /* GraphQL */ `
  subscription OnDeleteLeague($owner: String) {
    onDeleteLeague(owner: $owner) {
      id
      name
      admin {
        id
        username
        name
        image
        slogan
        status
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
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer($owner: String) {
    onCreatePlayer(owner: $owner) {
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
      requestsfromTeam {
        nextToken
      }
      requeststoTeam {
        nextToken
      }
      fixtures {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer($owner: String) {
    onUpdatePlayer(owner: $owner) {
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
      requestsfromTeam {
        nextToken
      }
      requeststoTeam {
        nextToken
      }
      fixtures {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer($owner: String) {
    onDeletePlayer(owner: $owner) {
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
      requestsfromTeam {
        nextToken
      }
      requeststoTeam {
        nextToken
      }
      fixtures {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam($owner: String) {
    onCreateTeam(owner: $owner) {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam($owner: String) {
    onUpdateTeam(owner: $owner) {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam($owner: String) {
    onDeleteTeam(owner: $owner) {
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
export const onCreateTournament = /* GraphQL */ `
  subscription OnCreateTournament($owner: String) {
    onCreateTournament(owner: $owner) {
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
export const onUpdateTournament = /* GraphQL */ `
  subscription OnUpdateTournament($owner: String) {
    onUpdateTournament(owner: $owner) {
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
export const onDeleteTournament = /* GraphQL */ `
  subscription OnDeleteTournament($owner: String) {
    onDeleteTournament(owner: $owner) {
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
export const onCreateFixture = /* GraphQL */ `
  subscription OnCreateFixture($owner: String) {
    onCreateFixture(owner: $owner) {
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
      players {
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
export const onUpdateFixture = /* GraphQL */ `
  subscription OnUpdateFixture($owner: String) {
    onUpdateFixture(owner: $owner) {
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
      players {
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
export const onDeleteFixture = /* GraphQL */ `
  subscription OnDeleteFixture($owner: String) {
    onDeleteFixture(owner: $owner) {
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
      players {
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
export const onCreatePlayerStats = /* GraphQL */ `
  subscription OnCreatePlayerStats($owner: String) {
    onCreatePlayerStats(owner: $owner) {
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
export const onUpdatePlayerStats = /* GraphQL */ `
  subscription OnUpdatePlayerStats($owner: String) {
    onUpdatePlayerStats(owner: $owner) {
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
export const onDeletePlayerStats = /* GraphQL */ `
  subscription OnDeletePlayerStats($owner: String) {
    onDeletePlayerStats(owner: $owner) {
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
export const onCreateTeamStats = /* GraphQL */ `
  subscription OnCreateTeamStats($owner: String) {
    onCreateTeamStats(owner: $owner) {
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
export const onUpdateTeamStats = /* GraphQL */ `
  subscription OnUpdateTeamStats($owner: String) {
    onUpdateTeamStats(owner: $owner) {
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
export const onDeleteTeamStats = /* GraphQL */ `
  subscription OnDeleteTeamStats($owner: String) {
    onDeleteTeamStats(owner: $owner) {
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
export const onCreateNews = /* GraphQL */ `
  subscription OnCreateNews($owner: String) {
    onCreateNews(owner: $owner) {
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
export const onUpdateNews = /* GraphQL */ `
  subscription OnUpdateNews($owner: String) {
    onUpdateNews(owner: $owner) {
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
export const onDeleteNews = /* GraphQL */ `
  subscription OnDeleteNews($owner: String) {
    onDeleteNews(owner: $owner) {
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
export const onCreateTransfer = /* GraphQL */ `
  subscription OnCreateTransfer($owner: String) {
    onCreateTransfer(owner: $owner) {
      id
      player {
        id
        username
        name
        image
        slogan
        status
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
      transferFromId
      transferToId
      owner
    }
  }
`;
export const onUpdateTransfer = /* GraphQL */ `
  subscription OnUpdateTransfer($owner: String) {
    onUpdateTransfer(owner: $owner) {
      id
      player {
        id
        username
        name
        image
        slogan
        status
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
      transferFromId
      transferToId
      owner
    }
  }
`;
export const onDeleteTransfer = /* GraphQL */ `
  subscription OnDeleteTransfer($owner: String) {
    onDeleteTransfer(owner: $owner) {
      id
      player {
        id
        username
        name
        image
        slogan
        status
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
      transferFromId
      transferToId
      owner
    }
  }
`;
export const onCreateLeagueLevel = /* GraphQL */ `
  subscription OnCreateLeagueLevel($owner: String) {
    onCreateLeagueLevel(owner: $owner) {
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
export const onUpdateLeagueLevel = /* GraphQL */ `
  subscription OnUpdateLeagueLevel($owner: String) {
    onUpdateLeagueLevel(owner: $owner) {
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
export const onDeleteLeagueLevel = /* GraphQL */ `
  subscription OnDeleteLeagueLevel($owner: String) {
    onDeleteLeagueLevel(owner: $owner) {
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
export const onCreatePlayerLevel = /* GraphQL */ `
  subscription OnCreatePlayerLevel($owner: String) {
    onCreatePlayerLevel(owner: $owner) {
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
export const onUpdatePlayerLevel = /* GraphQL */ `
  subscription OnUpdatePlayerLevel($owner: String) {
    onUpdatePlayerLevel(owner: $owner) {
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
export const onDeletePlayerLevel = /* GraphQL */ `
  subscription OnDeletePlayerLevel($owner: String) {
    onDeletePlayerLevel(owner: $owner) {
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
export const onCreateTeamLevel = /* GraphQL */ `
  subscription OnCreateTeamLevel($owner: String) {
    onCreateTeamLevel(owner: $owner) {
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
export const onUpdateTeamLevel = /* GraphQL */ `
  subscription OnUpdateTeamLevel($owner: String) {
    onUpdateTeamLevel(owner: $owner) {
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
export const onDeleteTeamLevel = /* GraphQL */ `
  subscription OnDeleteTeamLevel($owner: String) {
    onDeleteTeamLevel(owner: $owner) {
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
export const onCreateUserRole = /* GraphQL */ `
  subscription OnCreateUserRole($owner: String) {
    onCreateUserRole(owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUserRole = /* GraphQL */ `
  subscription OnUpdateUserRole($owner: String) {
    onUpdateUserRole(owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUserRole = /* GraphQL */ `
  subscription OnDeleteUserRole($owner: String) {
    onDeleteUserRole(owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateRequestLeague2Team = /* GraphQL */ `
  subscription OnCreateRequestLeague2Team($owner: String) {
    onCreateRequestLeague2Team(owner: $owner) {
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
export const onUpdateRequestLeague2Team = /* GraphQL */ `
  subscription OnUpdateRequestLeague2Team($owner: String) {
    onUpdateRequestLeague2Team(owner: $owner) {
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
export const onDeleteRequestLeague2Team = /* GraphQL */ `
  subscription OnDeleteRequestLeague2Team($owner: String) {
    onDeleteRequestLeague2Team(owner: $owner) {
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
export const onCreateRequestTeam2League = /* GraphQL */ `
  subscription OnCreateRequestTeam2League($owner: String) {
    onCreateRequestTeam2League(owner: $owner) {
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
export const onUpdateRequestTeam2League = /* GraphQL */ `
  subscription OnUpdateRequestTeam2League($owner: String) {
    onUpdateRequestTeam2League(owner: $owner) {
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
export const onDeleteRequestTeam2League = /* GraphQL */ `
  subscription OnDeleteRequestTeam2League($owner: String) {
    onDeleteRequestTeam2League(owner: $owner) {
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
export const onCreateRequestTeam2Player = /* GraphQL */ `
  subscription OnCreateRequestTeam2Player($owner: String) {
    onCreateRequestTeam2Player(owner: $owner) {
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
export const onUpdateRequestTeam2Player = /* GraphQL */ `
  subscription OnUpdateRequestTeam2Player($owner: String) {
    onUpdateRequestTeam2Player(owner: $owner) {
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
export const onDeleteRequestTeam2Player = /* GraphQL */ `
  subscription OnDeleteRequestTeam2Player($owner: String) {
    onDeleteRequestTeam2Player(owner: $owner) {
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
export const onCreateRequestPlayer2Team = /* GraphQL */ `
  subscription OnCreateRequestPlayer2Team($owner: String) {
    onCreateRequestPlayer2Team(owner: $owner) {
      id
      from {
        id
        username
        name
        image
        slogan
        status
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
export const onUpdateRequestPlayer2Team = /* GraphQL */ `
  subscription OnUpdateRequestPlayer2Team($owner: String) {
    onUpdateRequestPlayer2Team(owner: $owner) {
      id
      from {
        id
        username
        name
        image
        slogan
        status
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
export const onDeleteRequestPlayer2Team = /* GraphQL */ `
  subscription OnDeleteRequestPlayer2Team($owner: String) {
    onDeleteRequestPlayer2Team(owner: $owner) {
      id
      from {
        id
        username
        name
        image
        slogan
        status
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
export const onCreateLeagueSubscription = /* GraphQL */ `
  subscription OnCreateLeagueSubscription($owner: String) {
    onCreateLeagueSubscription(owner: $owner) {
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
export const onUpdateLeagueSubscription = /* GraphQL */ `
  subscription OnUpdateLeagueSubscription($owner: String) {
    onUpdateLeagueSubscription(owner: $owner) {
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
export const onDeleteLeagueSubscription = /* GraphQL */ `
  subscription OnDeleteLeagueSubscription($owner: String) {
    onDeleteLeagueSubscription(owner: $owner) {
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
export const onCreateTeamSubscription = /* GraphQL */ `
  subscription OnCreateTeamSubscription($owner: String) {
    onCreateTeamSubscription(owner: $owner) {
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
export const onUpdateTeamSubscription = /* GraphQL */ `
  subscription OnUpdateTeamSubscription($owner: String) {
    onUpdateTeamSubscription(owner: $owner) {
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
export const onDeleteTeamSubscription = /* GraphQL */ `
  subscription OnDeleteTeamSubscription($owner: String) {
    onDeleteTeamSubscription(owner: $owner) {
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
export const onCreatePlayerSubscription = /* GraphQL */ `
  subscription OnCreatePlayerSubscription($owner: String) {
    onCreatePlayerSubscription(owner: $owner) {
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
export const onUpdatePlayerSubscription = /* GraphQL */ `
  subscription OnUpdatePlayerSubscription($owner: String) {
    onUpdatePlayerSubscription(owner: $owner) {
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
export const onDeletePlayerSubscription = /* GraphQL */ `
  subscription OnDeletePlayerSubscription($owner: String) {
    onDeletePlayerSubscription(owner: $owner) {
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
export const onCreateTrophy = /* GraphQL */ `
  subscription OnCreateTrophy($owner: String) {
    onCreateTrophy(owner: $owner) {
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
export const onUpdateTrophy = /* GraphQL */ `
  subscription OnUpdateTrophy($owner: String) {
    onUpdateTrophy(owner: $owner) {
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
export const onDeleteTrophy = /* GraphQL */ `
  subscription OnDeleteTrophy($owner: String) {
    onDeleteTrophy(owner: $owner) {
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
export const onCreatePlayerTournament = /* GraphQL */ `
  subscription OnCreatePlayerTournament($owner: String) {
    onCreatePlayerTournament(owner: $owner) {
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
export const onUpdatePlayerTournament = /* GraphQL */ `
  subscription OnUpdatePlayerTournament($owner: String) {
    onUpdatePlayerTournament(owner: $owner) {
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
export const onDeletePlayerTournament = /* GraphQL */ `
  subscription OnDeletePlayerTournament($owner: String) {
    onDeletePlayerTournament(owner: $owner) {
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
export const onCreatePlayerTournamentStanding = /* GraphQL */ `
  subscription OnCreatePlayerTournamentStanding($owner: String) {
    onCreatePlayerTournamentStanding(owner: $owner) {
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
export const onUpdatePlayerTournamentStanding = /* GraphQL */ `
  subscription OnUpdatePlayerTournamentStanding($owner: String) {
    onUpdatePlayerTournamentStanding(owner: $owner) {
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
export const onDeletePlayerTournamentStanding = /* GraphQL */ `
  subscription OnDeletePlayerTournamentStanding($owner: String) {
    onDeletePlayerTournamentStanding(owner: $owner) {
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
export const onCreateTableStat = /* GraphQL */ `
  subscription OnCreateTableStat($owner: String) {
    onCreateTableStat(owner: $owner) {
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
export const onUpdateTableStat = /* GraphQL */ `
  subscription OnUpdateTableStat($owner: String) {
    onUpdateTableStat(owner: $owner) {
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
export const onDeleteTableStat = /* GraphQL */ `
  subscription OnDeleteTableStat($owner: String) {
    onDeleteTableStat(owner: $owner) {
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
export const onCreatePlayerTableStat = /* GraphQL */ `
  subscription OnCreatePlayerTableStat($owner: String) {
    onCreatePlayerTableStat(owner: $owner) {
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
export const onUpdatePlayerTableStat = /* GraphQL */ `
  subscription OnUpdatePlayerTableStat($owner: String) {
    onUpdatePlayerTableStat(owner: $owner) {
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
export const onDeletePlayerTableStat = /* GraphQL */ `
  subscription OnDeletePlayerTableStat($owner: String) {
    onDeletePlayerTableStat(owner: $owner) {
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
export const onCreateLeagueModerators = /* GraphQL */ `
  subscription OnCreateLeagueModerators($owner: String) {
    onCreateLeagueModerators(owner: $owner) {
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
export const onUpdateLeagueModerators = /* GraphQL */ `
  subscription OnUpdateLeagueModerators($owner: String) {
    onUpdateLeagueModerators(owner: $owner) {
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
export const onDeleteLeagueModerators = /* GraphQL */ `
  subscription OnDeleteLeagueModerators($owner: String) {
    onDeleteLeagueModerators(owner: $owner) {
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
export const onCreateTeamMembers = /* GraphQL */ `
  subscription OnCreateTeamMembers($owner: String) {
    onCreateTeamMembers(owner: $owner) {
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
    }
  }
`;
export const onUpdateTeamMembers = /* GraphQL */ `
  subscription OnUpdateTeamMembers($owner: String) {
    onUpdateTeamMembers(owner: $owner) {
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
    }
  }
`;
export const onDeleteTeamMembers = /* GraphQL */ `
  subscription OnDeleteTeamMembers($owner: String) {
    onDeleteTeamMembers(owner: $owner) {
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
    }
  }
`;
export const onCreateTeamCaptains = /* GraphQL */ `
  subscription OnCreateTeamCaptains($owner: String) {
    onCreateTeamCaptains(owner: $owner) {
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
    }
  }
`;
export const onUpdateTeamCaptains = /* GraphQL */ `
  subscription OnUpdateTeamCaptains($owner: String) {
    onUpdateTeamCaptains(owner: $owner) {
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
    }
  }
`;
export const onDeleteTeamCaptains = /* GraphQL */ `
  subscription OnDeleteTeamCaptains($owner: String) {
    onDeleteTeamCaptains(owner: $owner) {
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
    }
  }
`;
export const onCreatePlayerFixtures = /* GraphQL */ `
  subscription OnCreatePlayerFixtures($owner: String) {
    onCreatePlayerFixtures(owner: $owner) {
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
export const onUpdatePlayerFixtures = /* GraphQL */ `
  subscription OnUpdatePlayerFixtures($owner: String) {
    onUpdatePlayerFixtures(owner: $owner) {
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
export const onDeletePlayerFixtures = /* GraphQL */ `
  subscription OnDeletePlayerFixtures($owner: String) {
    onDeletePlayerFixtures(owner: $owner) {
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
export const onCreateTeamTournaments = /* GraphQL */ `
  subscription OnCreateTeamTournaments($owner: String) {
    onCreateTeamTournaments(owner: $owner) {
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
    }
  }
`;
export const onUpdateTeamTournaments = /* GraphQL */ `
  subscription OnUpdateTeamTournaments($owner: String) {
    onUpdateTeamTournaments(owner: $owner) {
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
    }
  }
`;
export const onDeleteTeamTournaments = /* GraphQL */ `
  subscription OnDeleteTeamTournaments($owner: String) {
    onDeleteTeamTournaments(owner: $owner) {
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
    }
  }
`;
