/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLeague = /* GraphQL */ `
  mutation CreateLeague(
    $input: CreateLeagueInput!
    $condition: ModelLeagueConditionInput
  ) {
    createLeague(input: $input, condition: $condition) {
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
export const updateLeague = /* GraphQL */ `
  mutation UpdateLeague(
    $input: UpdateLeagueInput!
    $condition: ModelLeagueConditionInput
  ) {
    updateLeague(input: $input, condition: $condition) {
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
export const deleteLeague = /* GraphQL */ `
  mutation DeleteLeague(
    $input: DeleteLeagueInput!
    $condition: ModelLeagueConditionInput
  ) {
    deleteLeague(input: $input, condition: $condition) {
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
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
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
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
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
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
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
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
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
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
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
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
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
export const createTournament = /* GraphQL */ `
  mutation CreateTournament(
    $input: CreateTournamentInput!
    $condition: ModelTournamentConditionInput
  ) {
    createTournament(input: $input, condition: $condition) {
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
export const updateTournament = /* GraphQL */ `
  mutation UpdateTournament(
    $input: UpdateTournamentInput!
    $condition: ModelTournamentConditionInput
  ) {
    updateTournament(input: $input, condition: $condition) {
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
export const deleteTournament = /* GraphQL */ `
  mutation DeleteTournament(
    $input: DeleteTournamentInput!
    $condition: ModelTournamentConditionInput
  ) {
    deleteTournament(input: $input, condition: $condition) {
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
export const createFixture = /* GraphQL */ `
  mutation CreateFixture(
    $input: CreateFixtureInput!
    $condition: ModelFixtureConditionInput
  ) {
    createFixture(input: $input, condition: $condition) {
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
      tournamentID
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
      teamHomefixturesId
      teamAwayfixturesId
      tournamentFixturesId
      playerTournamentFixturesId
      owner
    }
  }
`;
export const updateFixture = /* GraphQL */ `
  mutation UpdateFixture(
    $input: UpdateFixtureInput!
    $condition: ModelFixtureConditionInput
  ) {
    updateFixture(input: $input, condition: $condition) {
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
      tournamentID
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
      teamHomefixturesId
      teamAwayfixturesId
      tournamentFixturesId
      playerTournamentFixturesId
      owner
    }
  }
`;
export const deleteFixture = /* GraphQL */ `
  mutation DeleteFixture(
    $input: DeleteFixtureInput!
    $condition: ModelFixtureConditionInput
  ) {
    deleteFixture(input: $input, condition: $condition) {
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
      tournamentID
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
      teamHomefixturesId
      teamAwayfixturesId
      tournamentFixturesId
      playerTournamentFixturesId
      owner
    }
  }
`;
export const createPlayerStats = /* GraphQL */ `
  mutation CreatePlayerStats(
    $input: CreatePlayerStatsInput!
    $condition: ModelPlayerStatsConditionInput
  ) {
    createPlayerStats(input: $input, condition: $condition) {
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
        tournamentID
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
export const updatePlayerStats = /* GraphQL */ `
  mutation UpdatePlayerStats(
    $input: UpdatePlayerStatsInput!
    $condition: ModelPlayerStatsConditionInput
  ) {
    updatePlayerStats(input: $input, condition: $condition) {
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
        tournamentID
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
export const deletePlayerStats = /* GraphQL */ `
  mutation DeletePlayerStats(
    $input: DeletePlayerStatsInput!
    $condition: ModelPlayerStatsConditionInput
  ) {
    deletePlayerStats(input: $input, condition: $condition) {
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
        tournamentID
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
export const createTeamStats = /* GraphQL */ `
  mutation CreateTeamStats(
    $input: CreateTeamStatsInput!
    $condition: ModelTeamStatsConditionInput
  ) {
    createTeamStats(input: $input, condition: $condition) {
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
        tournamentID
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
export const updateTeamStats = /* GraphQL */ `
  mutation UpdateTeamStats(
    $input: UpdateTeamStatsInput!
    $condition: ModelTeamStatsConditionInput
  ) {
    updateTeamStats(input: $input, condition: $condition) {
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
        tournamentID
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
export const deleteTeamStats = /* GraphQL */ `
  mutation DeleteTeamStats(
    $input: DeleteTeamStatsInput!
    $condition: ModelTeamStatsConditionInput
  ) {
    deleteTeamStats(input: $input, condition: $condition) {
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
        tournamentID
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
export const createNews = /* GraphQL */ `
  mutation CreateNews(
    $input: CreateNewsInput!
    $condition: ModelNewsConditionInput
  ) {
    createNews(input: $input, condition: $condition) {
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
export const updateNews = /* GraphQL */ `
  mutation UpdateNews(
    $input: UpdateNewsInput!
    $condition: ModelNewsConditionInput
  ) {
    updateNews(input: $input, condition: $condition) {
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
export const deleteNews = /* GraphQL */ `
  mutation DeleteNews(
    $input: DeleteNewsInput!
    $condition: ModelNewsConditionInput
  ) {
    deleteNews(input: $input, condition: $condition) {
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
export const createTransfer = /* GraphQL */ `
  mutation CreateTransfer(
    $input: CreateTransferInput!
    $condition: ModelTransferConditionInput
  ) {
    createTransfer(input: $input, condition: $condition) {
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
export const updateTransfer = /* GraphQL */ `
  mutation UpdateTransfer(
    $input: UpdateTransferInput!
    $condition: ModelTransferConditionInput
  ) {
    updateTransfer(input: $input, condition: $condition) {
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
export const deleteTransfer = /* GraphQL */ `
  mutation DeleteTransfer(
    $input: DeleteTransferInput!
    $condition: ModelTransferConditionInput
  ) {
    deleteTransfer(input: $input, condition: $condition) {
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
export const createLeagueLevel = /* GraphQL */ `
  mutation CreateLeagueLevel(
    $input: CreateLeagueLevelInput!
    $condition: ModelLeagueLevelConditionInput
  ) {
    createLeagueLevel(input: $input, condition: $condition) {
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
export const updateLeagueLevel = /* GraphQL */ `
  mutation UpdateLeagueLevel(
    $input: UpdateLeagueLevelInput!
    $condition: ModelLeagueLevelConditionInput
  ) {
    updateLeagueLevel(input: $input, condition: $condition) {
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
export const deleteLeagueLevel = /* GraphQL */ `
  mutation DeleteLeagueLevel(
    $input: DeleteLeagueLevelInput!
    $condition: ModelLeagueLevelConditionInput
  ) {
    deleteLeagueLevel(input: $input, condition: $condition) {
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
export const createPlayerLevel = /* GraphQL */ `
  mutation CreatePlayerLevel(
    $input: CreatePlayerLevelInput!
    $condition: ModelPlayerLevelConditionInput
  ) {
    createPlayerLevel(input: $input, condition: $condition) {
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
export const updatePlayerLevel = /* GraphQL */ `
  mutation UpdatePlayerLevel(
    $input: UpdatePlayerLevelInput!
    $condition: ModelPlayerLevelConditionInput
  ) {
    updatePlayerLevel(input: $input, condition: $condition) {
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
export const deletePlayerLevel = /* GraphQL */ `
  mutation DeletePlayerLevel(
    $input: DeletePlayerLevelInput!
    $condition: ModelPlayerLevelConditionInput
  ) {
    deletePlayerLevel(input: $input, condition: $condition) {
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
export const createTeamLevel = /* GraphQL */ `
  mutation CreateTeamLevel(
    $input: CreateTeamLevelInput!
    $condition: ModelTeamLevelConditionInput
  ) {
    createTeamLevel(input: $input, condition: $condition) {
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
export const updateTeamLevel = /* GraphQL */ `
  mutation UpdateTeamLevel(
    $input: UpdateTeamLevelInput!
    $condition: ModelTeamLevelConditionInput
  ) {
    updateTeamLevel(input: $input, condition: $condition) {
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
export const deleteTeamLevel = /* GraphQL */ `
  mutation DeleteTeamLevel(
    $input: DeleteTeamLevelInput!
    $condition: ModelTeamLevelConditionInput
  ) {
    deleteTeamLevel(input: $input, condition: $condition) {
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
export const createUserRole = /* GraphQL */ `
  mutation CreateUserRole(
    $input: CreateUserRoleInput!
    $condition: ModelUserRoleConditionInput
  ) {
    createUserRole(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUserRole = /* GraphQL */ `
  mutation UpdateUserRole(
    $input: UpdateUserRoleInput!
    $condition: ModelUserRoleConditionInput
  ) {
    updateUserRole(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUserRole = /* GraphQL */ `
  mutation DeleteUserRole(
    $input: DeleteUserRoleInput!
    $condition: ModelUserRoleConditionInput
  ) {
    deleteUserRole(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createRequestLeague2Team = /* GraphQL */ `
  mutation CreateRequestLeague2Team(
    $input: CreateRequestLeague2TeamInput!
    $condition: ModelRequestLeague2TeamConditionInput
  ) {
    createRequestLeague2Team(input: $input, condition: $condition) {
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
export const updateRequestLeague2Team = /* GraphQL */ `
  mutation UpdateRequestLeague2Team(
    $input: UpdateRequestLeague2TeamInput!
    $condition: ModelRequestLeague2TeamConditionInput
  ) {
    updateRequestLeague2Team(input: $input, condition: $condition) {
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
export const deleteRequestLeague2Team = /* GraphQL */ `
  mutation DeleteRequestLeague2Team(
    $input: DeleteRequestLeague2TeamInput!
    $condition: ModelRequestLeague2TeamConditionInput
  ) {
    deleteRequestLeague2Team(input: $input, condition: $condition) {
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
export const createRequestTeam2League = /* GraphQL */ `
  mutation CreateRequestTeam2League(
    $input: CreateRequestTeam2LeagueInput!
    $condition: ModelRequestTeam2LeagueConditionInput
  ) {
    createRequestTeam2League(input: $input, condition: $condition) {
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
export const updateRequestTeam2League = /* GraphQL */ `
  mutation UpdateRequestTeam2League(
    $input: UpdateRequestTeam2LeagueInput!
    $condition: ModelRequestTeam2LeagueConditionInput
  ) {
    updateRequestTeam2League(input: $input, condition: $condition) {
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
export const deleteRequestTeam2League = /* GraphQL */ `
  mutation DeleteRequestTeam2League(
    $input: DeleteRequestTeam2LeagueInput!
    $condition: ModelRequestTeam2LeagueConditionInput
  ) {
    deleteRequestTeam2League(input: $input, condition: $condition) {
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
export const createRequestTeam2Player = /* GraphQL */ `
  mutation CreateRequestTeam2Player(
    $input: CreateRequestTeam2PlayerInput!
    $condition: ModelRequestTeam2PlayerConditionInput
  ) {
    createRequestTeam2Player(input: $input, condition: $condition) {
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
export const updateRequestTeam2Player = /* GraphQL */ `
  mutation UpdateRequestTeam2Player(
    $input: UpdateRequestTeam2PlayerInput!
    $condition: ModelRequestTeam2PlayerConditionInput
  ) {
    updateRequestTeam2Player(input: $input, condition: $condition) {
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
export const deleteRequestTeam2Player = /* GraphQL */ `
  mutation DeleteRequestTeam2Player(
    $input: DeleteRequestTeam2PlayerInput!
    $condition: ModelRequestTeam2PlayerConditionInput
  ) {
    deleteRequestTeam2Player(input: $input, condition: $condition) {
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
export const createRequestPlayer2Team = /* GraphQL */ `
  mutation CreateRequestPlayer2Team(
    $input: CreateRequestPlayer2TeamInput!
    $condition: ModelRequestPlayer2TeamConditionInput
  ) {
    createRequestPlayer2Team(input: $input, condition: $condition) {
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
export const updateRequestPlayer2Team = /* GraphQL */ `
  mutation UpdateRequestPlayer2Team(
    $input: UpdateRequestPlayer2TeamInput!
    $condition: ModelRequestPlayer2TeamConditionInput
  ) {
    updateRequestPlayer2Team(input: $input, condition: $condition) {
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
export const deleteRequestPlayer2Team = /* GraphQL */ `
  mutation DeleteRequestPlayer2Team(
    $input: DeleteRequestPlayer2TeamInput!
    $condition: ModelRequestPlayer2TeamConditionInput
  ) {
    deleteRequestPlayer2Team(input: $input, condition: $condition) {
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
export const createLeagueSubscription = /* GraphQL */ `
  mutation CreateLeagueSubscription(
    $input: CreateLeagueSubscriptionInput!
    $condition: ModelLeagueSubscriptionConditionInput
  ) {
    createLeagueSubscription(input: $input, condition: $condition) {
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
export const updateLeagueSubscription = /* GraphQL */ `
  mutation UpdateLeagueSubscription(
    $input: UpdateLeagueSubscriptionInput!
    $condition: ModelLeagueSubscriptionConditionInput
  ) {
    updateLeagueSubscription(input: $input, condition: $condition) {
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
export const deleteLeagueSubscription = /* GraphQL */ `
  mutation DeleteLeagueSubscription(
    $input: DeleteLeagueSubscriptionInput!
    $condition: ModelLeagueSubscriptionConditionInput
  ) {
    deleteLeagueSubscription(input: $input, condition: $condition) {
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
export const createTeamSubscription = /* GraphQL */ `
  mutation CreateTeamSubscription(
    $input: CreateTeamSubscriptionInput!
    $condition: ModelTeamSubscriptionConditionInput
  ) {
    createTeamSubscription(input: $input, condition: $condition) {
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
export const updateTeamSubscription = /* GraphQL */ `
  mutation UpdateTeamSubscription(
    $input: UpdateTeamSubscriptionInput!
    $condition: ModelTeamSubscriptionConditionInput
  ) {
    updateTeamSubscription(input: $input, condition: $condition) {
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
export const deleteTeamSubscription = /* GraphQL */ `
  mutation DeleteTeamSubscription(
    $input: DeleteTeamSubscriptionInput!
    $condition: ModelTeamSubscriptionConditionInput
  ) {
    deleteTeamSubscription(input: $input, condition: $condition) {
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
export const createPlayerSubscription = /* GraphQL */ `
  mutation CreatePlayerSubscription(
    $input: CreatePlayerSubscriptionInput!
    $condition: ModelPlayerSubscriptionConditionInput
  ) {
    createPlayerSubscription(input: $input, condition: $condition) {
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
export const updatePlayerSubscription = /* GraphQL */ `
  mutation UpdatePlayerSubscription(
    $input: UpdatePlayerSubscriptionInput!
    $condition: ModelPlayerSubscriptionConditionInput
  ) {
    updatePlayerSubscription(input: $input, condition: $condition) {
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
export const deletePlayerSubscription = /* GraphQL */ `
  mutation DeletePlayerSubscription(
    $input: DeletePlayerSubscriptionInput!
    $condition: ModelPlayerSubscriptionConditionInput
  ) {
    deletePlayerSubscription(input: $input, condition: $condition) {
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
export const createTrophy = /* GraphQL */ `
  mutation CreateTrophy(
    $input: CreateTrophyInput!
    $condition: ModelTrophyConditionInput
  ) {
    createTrophy(input: $input, condition: $condition) {
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
export const updateTrophy = /* GraphQL */ `
  mutation UpdateTrophy(
    $input: UpdateTrophyInput!
    $condition: ModelTrophyConditionInput
  ) {
    updateTrophy(input: $input, condition: $condition) {
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
export const deleteTrophy = /* GraphQL */ `
  mutation DeleteTrophy(
    $input: DeleteTrophyInput!
    $condition: ModelTrophyConditionInput
  ) {
    deleteTrophy(input: $input, condition: $condition) {
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
export const createPlayerTournament = /* GraphQL */ `
  mutation CreatePlayerTournament(
    $input: CreatePlayerTournamentInput!
    $condition: ModelPlayerTournamentConditionInput
  ) {
    createPlayerTournament(input: $input, condition: $condition) {
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
export const updatePlayerTournament = /* GraphQL */ `
  mutation UpdatePlayerTournament(
    $input: UpdatePlayerTournamentInput!
    $condition: ModelPlayerTournamentConditionInput
  ) {
    updatePlayerTournament(input: $input, condition: $condition) {
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
export const deletePlayerTournament = /* GraphQL */ `
  mutation DeletePlayerTournament(
    $input: DeletePlayerTournamentInput!
    $condition: ModelPlayerTournamentConditionInput
  ) {
    deletePlayerTournament(input: $input, condition: $condition) {
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
export const createPlayerTournamentStanding = /* GraphQL */ `
  mutation CreatePlayerTournamentStanding(
    $input: CreatePlayerTournamentStandingInput!
    $condition: ModelPlayerTournamentStandingConditionInput
  ) {
    createPlayerTournamentStanding(input: $input, condition: $condition) {
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
export const updatePlayerTournamentStanding = /* GraphQL */ `
  mutation UpdatePlayerTournamentStanding(
    $input: UpdatePlayerTournamentStandingInput!
    $condition: ModelPlayerTournamentStandingConditionInput
  ) {
    updatePlayerTournamentStanding(input: $input, condition: $condition) {
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
export const deletePlayerTournamentStanding = /* GraphQL */ `
  mutation DeletePlayerTournamentStanding(
    $input: DeletePlayerTournamentStandingInput!
    $condition: ModelPlayerTournamentStandingConditionInput
  ) {
    deletePlayerTournamentStanding(input: $input, condition: $condition) {
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
export const createTableStat = /* GraphQL */ `
  mutation CreateTableStat(
    $input: CreateTableStatInput!
    $condition: ModelTableStatConditionInput
  ) {
    createTableStat(input: $input, condition: $condition) {
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
export const updateTableStat = /* GraphQL */ `
  mutation UpdateTableStat(
    $input: UpdateTableStatInput!
    $condition: ModelTableStatConditionInput
  ) {
    updateTableStat(input: $input, condition: $condition) {
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
export const deleteTableStat = /* GraphQL */ `
  mutation DeleteTableStat(
    $input: DeleteTableStatInput!
    $condition: ModelTableStatConditionInput
  ) {
    deleteTableStat(input: $input, condition: $condition) {
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
export const createPlayerTableStat = /* GraphQL */ `
  mutation CreatePlayerTableStat(
    $input: CreatePlayerTableStatInput!
    $condition: ModelPlayerTableStatConditionInput
  ) {
    createPlayerTableStat(input: $input, condition: $condition) {
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
export const updatePlayerTableStat = /* GraphQL */ `
  mutation UpdatePlayerTableStat(
    $input: UpdatePlayerTableStatInput!
    $condition: ModelPlayerTableStatConditionInput
  ) {
    updatePlayerTableStat(input: $input, condition: $condition) {
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
export const deletePlayerTableStat = /* GraphQL */ `
  mutation DeletePlayerTableStat(
    $input: DeletePlayerTableStatInput!
    $condition: ModelPlayerTableStatConditionInput
  ) {
    deletePlayerTableStat(input: $input, condition: $condition) {
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
export const createLeagueModerators = /* GraphQL */ `
  mutation CreateLeagueModerators(
    $input: CreateLeagueModeratorsInput!
    $condition: ModelLeagueModeratorsConditionInput
  ) {
    createLeagueModerators(input: $input, condition: $condition) {
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
export const updateLeagueModerators = /* GraphQL */ `
  mutation UpdateLeagueModerators(
    $input: UpdateLeagueModeratorsInput!
    $condition: ModelLeagueModeratorsConditionInput
  ) {
    updateLeagueModerators(input: $input, condition: $condition) {
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
export const deleteLeagueModerators = /* GraphQL */ `
  mutation DeleteLeagueModerators(
    $input: DeleteLeagueModeratorsInput!
    $condition: ModelLeagueModeratorsConditionInput
  ) {
    deleteLeagueModerators(input: $input, condition: $condition) {
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
export const createTeamMembers = /* GraphQL */ `
  mutation CreateTeamMembers(
    $input: CreateTeamMembersInput!
    $condition: ModelTeamMembersConditionInput
  ) {
    createTeamMembers(input: $input, condition: $condition) {
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
export const updateTeamMembers = /* GraphQL */ `
  mutation UpdateTeamMembers(
    $input: UpdateTeamMembersInput!
    $condition: ModelTeamMembersConditionInput
  ) {
    updateTeamMembers(input: $input, condition: $condition) {
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
export const deleteTeamMembers = /* GraphQL */ `
  mutation DeleteTeamMembers(
    $input: DeleteTeamMembersInput!
    $condition: ModelTeamMembersConditionInput
  ) {
    deleteTeamMembers(input: $input, condition: $condition) {
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
export const createTeamCaptains = /* GraphQL */ `
  mutation CreateTeamCaptains(
    $input: CreateTeamCaptainsInput!
    $condition: ModelTeamCaptainsConditionInput
  ) {
    createTeamCaptains(input: $input, condition: $condition) {
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
export const updateTeamCaptains = /* GraphQL */ `
  mutation UpdateTeamCaptains(
    $input: UpdateTeamCaptainsInput!
    $condition: ModelTeamCaptainsConditionInput
  ) {
    updateTeamCaptains(input: $input, condition: $condition) {
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
export const deleteTeamCaptains = /* GraphQL */ `
  mutation DeleteTeamCaptains(
    $input: DeleteTeamCaptainsInput!
    $condition: ModelTeamCaptainsConditionInput
  ) {
    deleteTeamCaptains(input: $input, condition: $condition) {
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
export const createPlayersAndFixtures = /* GraphQL */ `
  mutation CreatePlayersAndFixtures(
    $input: CreatePlayersAndFixturesInput!
    $condition: ModelPlayersAndFixturesConditionInput
  ) {
    createPlayersAndFixtures(input: $input, condition: $condition) {
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
        tournamentID
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
export const updatePlayersAndFixtures = /* GraphQL */ `
  mutation UpdatePlayersAndFixtures(
    $input: UpdatePlayersAndFixturesInput!
    $condition: ModelPlayersAndFixturesConditionInput
  ) {
    updatePlayersAndFixtures(input: $input, condition: $condition) {
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
        tournamentID
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
export const deletePlayersAndFixtures = /* GraphQL */ `
  mutation DeletePlayersAndFixtures(
    $input: DeletePlayersAndFixturesInput!
    $condition: ModelPlayersAndFixturesConditionInput
  ) {
    deletePlayersAndFixtures(input: $input, condition: $condition) {
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
        tournamentID
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
export const createTeamTournaments = /* GraphQL */ `
  mutation CreateTeamTournaments(
    $input: CreateTeamTournamentsInput!
    $condition: ModelTeamTournamentsConditionInput
  ) {
    createTeamTournaments(input: $input, condition: $condition) {
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
export const updateTeamTournaments = /* GraphQL */ `
  mutation UpdateTeamTournaments(
    $input: UpdateTeamTournamentsInput!
    $condition: ModelTeamTournamentsConditionInput
  ) {
    updateTeamTournaments(input: $input, condition: $condition) {
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
export const deleteTeamTournaments = /* GraphQL */ `
  mutation DeleteTeamTournaments(
    $input: DeleteTeamTournamentsInput!
    $condition: ModelTeamTournamentsConditionInput
  ) {
    deleteTeamTournaments(input: $input, condition: $condition) {
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
