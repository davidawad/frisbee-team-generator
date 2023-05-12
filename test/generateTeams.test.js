// import the function you want to test
const generateTeams = require("../two-teams/generateTeams");
const sampleData = require("./sampleData");

describe("Team Generation", () => {
  let result;

  beforeAll(() => {
    result = generateTeams(sampleData);
  });

  test("should split players into two teams", () => {
    const result = generateTeams(sampleData);

    expect(result.team1.length + result.team2.length).toBe(10);
  });

  test("both teams should have a similar number of players", () => {
    expect(
      Math.abs(result.team1.length - result.team2.length)
    ).toBeLessThanOrEqual(2);
  });

  test("should prioritize player score and balance", () => {
    const result = generateTeams(sampleData);
    console.log(result);

    // here you can add assertions to verify that the teams are balanced
    // for example, check if the absolute difference in total scores is within a certain limit
    const team1Score = result.team1.reduce(
      (acc, player) => acc + player.Score,
      0
    );
    const team2Score = result.team2.reduce(
      (acc, player) => acc + player.Score,
      0
    );

    expect(Math.abs(team1Score - team2Score)).toBeLessThanOrEqual(3);
  });

  test("both teams should have similar throwers and runners score", () => {
    const team1Throwers = result.team1.reduce(
      (total, player) => total + player.Thrower,
      0
    );
    const team2Throwers = result.team2.reduce(
      (total, player) => total + player.Thrower,
      0
    );
    const team1Runners = result.team1.reduce(
      (total, player) => total + player.Runner,
      0
    );
    const team2Runners = result.team2.reduce(
      (total, player) => total + player.Runner,
      0
    );

    expect(Math.abs(team1Throwers - team2Throwers)).toBeLessThanOrEqual(5); // adjust the tolerance level as needed
    expect(Math.abs(team1Runners - team2Runners)).toBeLessThanOrEqual(5); // adjust the tolerance level as needed
  });

  test("only uses present players", () => {
    const { team1, team2 } = generateTeams(sampleData);

    // Check if all players in team 1 are present
    const allTeam1PlayersPresent = team1.every(
      (player) => player.Present === true
    );
    expect(allTeam1PlayersPresent).toBe(true);

    // Check if all players in team 2 are present
    const allTeam2PlayersPresent = team2.every(
      (player) => player.Present === true
    );
    expect(allTeam2PlayersPresent).toBe(true);
  });
});
