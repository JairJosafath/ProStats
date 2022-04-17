const oldStats = currentFixture;
//rollback changes of past stats on standings
const homeTS = tournament?.table?.items.filter(
  (tableStat) => tableStat.team.id === currentFixture.homeID
)[0];
const awayTS = tournament?.table?.items.filter(
  (tableStat) => tableStat.team.id === currentFixture.awayID
)[0];

let awayGoals = parseInt(
  teamstatsTracker.away.summary.filter((stat) => stat.attr === "goals")[0].val
);
let homeGoals = parseInt(
  teamstatsTracker.home.summary.filter((stat) => stat.attr === "goals")[0].val
);
const result =
  (homeGoals > awayGoals && "W") ||
  (homeGoals === awayGoals && "D") ||
  (homeGoals < awayGoals && "L");

const oldResult =
  (oldStats.homeScore > oldStats.awayScore && "W") ||
  (oldStats.homeScore === oldStats.awayScore && "D") ||
  (oldStats.homeScore < oldStats.awayScore && "L");

const homeUpdate = () => {
  // if awaygoalsOld ===0 && awaygoalsNew === 0, do not change.
  // if awaygoalsOld >0 && awaygoalsNew >0, do not change
  //if awaygoalsOld ===0 and new !=0 , do -1
  //if awaygoaldOld !=0 and new ===0 , do +1
  const cleanSheatsHome = () => {
    if (
      (parseInt(awayGoals) === 0 && oldStats.awayScore === 0) ||
      (parseInt(awayGoals) !== 0 && oldStats.awayScore !== 0)
    )
      return 0;
    else if (parseInt(awayGoals) !== 0 && oldStats.awayScore === 0) return -1;
    else if (parseInt(awayGoals) === 0 && oldStats.awayScore !== 0) return 1;
  };

  //if oldresult and new result are the same do not change
  //otherwise if old was D, -1
  const gamesDrawnHome = () => {
    if (result === oldResult) return 0;
    else if (result === "D") return -1;
    return 0;
  };
  const gamesLostHome = () => {
    if (result === oldResult) return 0;
    else if (result === "L") return -1;
    return 0;
  };
  const gamesWonHome = () => {
    if (result === oldResult) return 0;
    else if (result === "W") return -1;
    return 0;
  };
  const goalDifferenceHome = () => {
    const oldDiff = parseInt(homeGoals) - parseInt(awayGoals);
    const newDiff = oldStats.homeScore - oldStats.awayScore;
    return newDiff - oldDiff;
  };

  const goalForHome = () => {
    const oldfor = homeGoals;
    const newFor = oldStats.homeScore;
    return newFor - oldfor;
  };
  const goalAgainstHome = () => {
    const oldAgainst = awayGoals;
    const newAgainst = oldStats.awayScore;
    return newAgainst - oldAgainst;
  };
  const pointsHome = () => {
    if (result === oldResult) return 0;
    if (oldResult === "W" && result === "D") return -2;
    if (oldResult === "W" && result === "L") return -3;

    if (oldResult === "D" && result === "W") return 2;
    if (oldResult === "D" && result === "L") return -1;

    if (oldResult === "L" && result === "D") return 1;
    if (oldResult === "L" && result === "W") return 3;
  };
  const recordHome = () => {
    let arr = homeTS.record;
    arr[parseInt(currentFixture.round) - 1] = result;
    return arr;
  };

  return {
    id: homeTS.id,
    cleanSheats: homeTS.cleanSheats + cleanSheatsHome(),
    gamesDrawn:
      homeTS.gamesDrawn + gamesDrawnHome() < 0
        ? 0
        : homeTS.gamesDrawn + gamesDrawnHome(),
    gamesLost:
      homeTS.gamesLost + gamesLostHome() < 0
        ? 0
        : homeTS.gamesLost + gamesLostHome(),
    gamesWon:
      homeTS.gamesWon + gamesWonHome() < 0
        ? 0
        : homeTS.gamesWon + gamesWonHome(),
    goalDifference:
      homeTS.goalDifference + goalDifferenceHome() < 0
        ? 0
        : homeTS.goalDifference + goalDifferenceHome(),
    goalsAgainst:
      homeTS.goalsAgainst + goalAgainstHome() < 0
        ? 0
        : homeTS.goalsAgainst + goalAgainstHome(),
    goalsFor:
      homeTS.goalsFor + goalForHome() < 0 ? 0 : homeTS.goalsFor + goalForHome(),
    points: homeTS.points + pointsHome() < 0 ? 0 : homeTS.points + pointsHome(),
    record: recordHome(),
  };
};
const awayUpdate = () => {
  const result2 =
    (homeGoals > awayGoals && "L") ||
    (homeGoals === awayGoals && "D") ||
    (homeGoals < awayGoals && "W");
  // if awaygoalsOld ===0 && awaygoalsNew === 0, do not change.
  // if awaygoalsOld >0 && awaygoalsNew >0, do not change
  //if awaygoalsOld ===0 and new !=0 , do -1
  //if awaygoaldOld !=0 and new ===0 , do +1
  const cleanSheatsAway = () => {
    if (
      (parseInt(homeGoals) === 0 && oldStats.homeScore === 0) ||
      (parseInt(homeGoals) !== 0 && oldStats.homeScore !== 0)
    )
      return 0;
    else if (parseInt(homeGoals) !== 0 && oldStats.homeScore === 0) return -1;
    else if (parseInt(homeGoals) === 0 && oldStats.homeScore !== 0) return 1;
  };

  //if oldresult and new result are the same do not change
  //otherwise if old was D, -1
  const gamesDrawnAway = () => {
    if (result === oldResult) return 0;
    else if (result === "D") return -1;
    return 0;
  };
  const gamesLostAway = () => {
    if (result === oldResult) return 0;
    else if (result === "W") return -1;
    return 0;
  };
  const gamesWonAway = () => {
    if (result === oldResult) return 0;
    else if (result === "L") return -1;
    return 0;
  };
  const goalDifferenceAway = () => {
    const oldDiff = awayGoals - homeGoals;
    const newDiff = oldStats.awayScore - oldStats.homeScore;
    return newDiff - oldDiff;
  };

  const goalForAway = () => {
    const oldfor = awayGoals;
    const newFor = oldStats.awayScore;
    return newFor - oldfor;
  };
  const goalAgainstAway = () => {
    const oldAgainst = homeGoals;
    const newAgainst = oldStats.homeScore;
    return newAgainst - oldAgainst;
  };
  const pointsAway = () => {
    console.log(`result: ${result}\noldresult: ${oldResult}`);
    if (result2 === oldResult) return 0;
    if (oldResult === "W" && result2 === "D") return -2;
    if (oldResult === "W" && result2 === "L") return -3;

    if (oldResult === "D" && result2 === "W") return 2;
    if (oldResult === "D" && result2 === "L") return -1;

    if (oldResult === "L" && result2 === "D") return 1;
    if (oldResult === "L" && result2 === "W") return 3;
  };
  const recordAway = () => {
    let arr = awayTS.record;
    arr[parseInt(currentFixture.round) - 1] = result2;
    return arr;
  };

  return {
    id: awayTS.id,
    cleanSheats: awayTS.cleanSheats + cleanSheatsAway(),
    gamesDrawn:
      awayTS.gamesDrawn + gamesDrawnAway() < 0
        ? 0
        : awayTS.gamesDrawn + gamesDrawnAway(),
    gamesLost:
      awayTS.gamesLost + gamesLostAway() < 0
        ? 0
        : awayTS.gamesLost + gamesLostAway(),
    gamesWon:
      awayTS.gamesWon + gamesWonAway() < 0
        ? 0
        : awayTS.gamesWon + gamesWonAway(),
    goalDifference:
      awayTS.goalDifference + goalDifferenceAway() < 0
        ? 0
        : awayTS.goalDifference + goalDifferenceAway(),
    goalsAgainst:
      awayTS.goalsAgainst + goalAgainstAway() < 0
        ? 0
        : awayTS.goalsAgainst + goalAgainstAway(),
    goalsFor:
      awayTS.goalsFor + goalForAway() < 0 ? 0 : awayTS.goalsFor + goalForAway(),
    points: awayTS.points + pointsAway() < 0 ? 0 : awayTS.points + pointsAway(),
    record: recordAway(),
  };
};

const updateFixture = {
  id: currentFixture?.id,
  homeScore: parseInt(homeGoals),
  awayScore: parseInt(awayGoals),
};

console.log("update onbject", {
  id: currentFixture?.teamStats?.items[0].id,
  teamStatsAway_teamId: currentFixture.awayID,
  teamStatsHome_teamId: currentFixture.homeID,
  fixtureTeamStatsId: currentFixture.id,
  ...temp,
});
console.log("awayTS", awayTS);
console.log("homeTS", homeTS);
setUpdateTeamStats({
  id: currentFixture?.teamStats?.items[0].id,
  teamStatsAway_teamId: currentFixture.awayID,
  teamStatsHome_teamId: currentFixture.homeID,
  fixtureTeamStatsId: currentFixture.id,
  ...temp,
});

setUpdateFixtures(true);
console.log("update object", {
  home: homeUpdate(),
  away: awayUpdate(),
  fixture: updateFixture,
});
setUpdateTableStat({
  home: homeUpdate(),
  away: awayUpdate(),
  fixture: updateFixture,
});
