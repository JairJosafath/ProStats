let teams = [
  "Jonas Sinclair",
  "Amiyah Daniels",
  "Henley Crowther",
  "Miguel Reeves",
  "Dean Cote",
  "Donell Cross",
  "Nikita Tang",
  "Ida Person",
  "Yuvaan Barr",
  "Zane Santana",
  "Piper Melton",
  "Willis Moon",
  "Grant Bradley",
  "Hussein Head",
  "Lottie Conley",
  "Nia Downes",
  "Jonathon Meadows",
  "Arwel Allison",
  "Barca",
  "Real",
];

export const roundRobin = (teams) => {
  let schedule = [];
  let league = teams.slice();

  if (league.length % 2) {
    league.push("None");
  }

  let rounds = league.length;

  for (let j = 0; j < (rounds - 1) * 2; j++) {
    schedule[j] = [];
    for (let i = 0; i < rounds / 2; i++) {
      if (league[i] !== "None" && league[rounds - 1 - i] !== "None") {
        if (j % 2 === 1) {
          schedule[j].push({
            round: j + 1,
            home: league[i],
            away: league[rounds - 1 - i],
          });
        } else {
          schedule[j].push({
            round: j + 1,
            home: league[rounds - 1 - i],
            away: league[i],
          });
        }
      }
    }
    league.splice(1, 0, league.pop());
  }
  return schedule;
};
