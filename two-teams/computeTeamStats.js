  let team1Stats = {
    totalScore: 0,
    throwers: 0,
    runners: 0
  };

  let team2Stats = {
    totalScore: 0,
    throwers: 0,
    runners: 0
  };

  for (const player of team1Table.data) {
      team1Stats.totalScore += parseInt(player.Score);
      if (player.Thrower) {
        team1Stats.throwers++;
      }
      if (player.Runner) {
        team1Stats.runners++;
      }
  }

  for (const player of team2Table.data) {
    console.log(player);
    console.log(player.Runner);
    console.log(player.Score);
    console.log(player["Score"]);
      team2Stats.totalScore += parseInt(player.Score);
      if (player.Thrower) {
        team2Stats.throwers++;
      }
      if (player.Runner) {
        team2Stats.runners++;
      }
  }

  return {
    team1: team1Stats,
    team2: team2Stats
  };
