/* eslint-disable no-await-in-loop */
// disapled because there is no need for the promises to be running in parallel
import GameBoard from "./Gameboard";
import ComputerPlayer from "./ComputerPlayer";

async function gameLoop(players) {
  let currentPlayer = 0;
  let gameEnd = false;
  while (!gameEnd) {
    const { hitSquare, isHit } = await players[currentPlayer].hitEnemy();
    // Todo: update the UI
    currentPlayer = (currentPlayer + 1) % 2;
    if (players[currentPlayer].getBoard().allSunk()) gameEnd = true;
  }
}
