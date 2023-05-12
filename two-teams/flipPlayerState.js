console.log("flipping player state.")
const players = playerTable.data;
const player = playerTable.selectedRow.data;

console.log("BEFORE:")
console.log(player);
player.Present = !playerTable.selectedRow.data.Present;

console.log("AFTER:")
console.log(player);
