/* eslint-disable no-await-in-loop */
// disapled because there is no need for the promises to be running in parallel
import GameBoard from "./Gameboard";
import ComputerPlayer from "./ComputerPlayer";

function endGame(winnerIndex) {
  const endMessage = document.querySelector(".end-message");
  const message = document.querySelector(".message");
  if (winnerIndex === 0)
    message.textContent += `Humanity has won!
    Computers' fleet has been destroyed.`;
  if (winnerIndex === 1)
    message.textContent += `Computers have won!
  Humanity's fleet has been destroyed.`;
  endMessage.style.display = "grid";
}

export default async function gameLoop(players) {
  let currentPlayer = 0;
  let gameEnd = false;
  while (!gameEnd) {
    const { hitSquare, isHit } = await players[currentPlayer].hitEnemy();
    players[currentPlayer].getEnemyGrid().updateSquare(hitSquare);
    currentPlayer = (currentPlayer + 1) % 2;
    if (players[currentPlayer].getBoard().allSunk()) gameEnd = true;
  }
  endGame((currentPlayer + 1) % 2);
}
