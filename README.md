# Frisbee Team Generator

The Frisbee Team Generator is a simple Node.js application that helps you generate two balanced teams from a list of players. Each player has three attributes: Thrower, Runner, and Score, and the generator seeks to balance these attributes across the two teams.

## Data Structure

Each player is represented as an object with the following structure:

```json
{
  "Name": "String",
  "Thrower": "Number",
  "Runner": "Number",
  "Score": "Number",
  "Present": "Boolean"
}
```

**Name:** The name of the player.

**Thrower:** A numeric score representing the player's throwing skill.

**Runner:** A numeric score representing the player's running skill.

**Score:** A numeric score representing the player's overall skill.

**Present:** A boolean indicating whether the player is present and should be considered for team generation.

The input data should be an array of such player objects.

## Getting Started
Clone the repository:

```
git clone https://github.com/davidawad/frisbee-team-generator.git
```
```
cd frisbee-team-generator
```
```
yarn install
```
```
yarn test
```



