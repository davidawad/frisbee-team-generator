// note, that playerTable comes from the google sheets api is handled by retool.
function generateTeams(playerTable) {
  const players = playerTable.data.filter((player) => player.Present);

  console.log("picking players from table!");
  console.log("sorting players!");

  // shuffle the list of players
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffle(players);

  // sort players by overall score in descending order
  players.sort((a, b) => b.Score - a.Score);

  // initialize list for teams
  const teams = [[], []];

  // initialize variables to track number of players who can throw and run and aggregate scores
  let throwersScore = [0, 0];
  let runnersScore = [0, 0];
  let scores = [0, 0];

  // add players to teams, prioritizing score and balance
  for (let i = 0; i < players.length; i++) {
    const currentPlayer = players[i];

    // check which team has less throwers and runners
    const throwersDiff = Math.abs(throwersScore[0] - throwersScore[1]);
    const runnersDiff = Math.abs(runnersScore[0] - runnersScore[1]);

    // if both teams have equal throwers and runners, add to team with lower overall score
    if (throwersDiff === 0 && runnersDiff === 0) {
      if (scores[0] <= scores[1]) {
        teams[0].push(currentPlayer);
        scores[0] += currentPlayer.Score;
        throwersScore[0] += currentPlayer.Thrower;
        runnersScore[0] += currentPlayer.Runner;
      } else {
        teams[1].push(currentPlayer);
        scores[1] += currentPlayer.Score;
        throwersScore[1] += currentPlayer.Thrower;
        runnersScore[1] += currentPlayer.Runner;
      }
    } else {
      // add to team with lower count of specific skill
      if (throwersDiff > runnersDiff) {
        if (throwersScore[0] <= throwersScore[1]) {
          teams[0].push(currentPlayer);
          scores[0] += currentPlayer.Score;
          throwersScore[0] += currentPlayer.Thrower;
          runnersScore[0] += currentPlayer.Runner;
        } else {
          teams[1].push(currentPlayer);
          scores[1] += currentPlayer.Score;
          throwersScore[1] += currentPlayer.Thrower;
          runnersScore[1] += currentPlayer.Runner;
        }
      } else {
        if (runnersScore[0] <= runnersScore[1]) {
          teams[0].push(currentPlayer);
          scores[0] += currentPlayer.Score;
          throwersScore[0] += currentPlayer.Thrower;
          runnersScore[0] += currentPlayer.Runner;
        } else {
          teams[1].push(currentPlayer);
          scores[1] += currentPlayer.Score;
          throwersScore[1] += currentPlayer.Thrower;
          runnersScore[1] += currentPlayer.Runner;
        }
      }
    }
  }

  return { team1: teams[0], team2: teams[1], scores: scores };
}

module.exports = generateTeams;
