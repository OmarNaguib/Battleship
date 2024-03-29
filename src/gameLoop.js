/* eslint-disable no-await-in-loop */
// disapled because there is no need for the promises to be running in parallel

function endGame(winnerIndex) {
  const endMessage = document.querySelector(".end-message");
  const message = document.querySelector(".message");
  if (winnerIndex === 0)
    message.innerHTML += `Humanity has won!<br />
    Computers' fleet has been destroyed.`;
  if (winnerIndex === 1)
    message.innerHTML += `Computers have won!<br />
  Humanity's fleet has been destroyed.`;
  endMessage.style.display = "grid";
}

export default async function gameLoop(players) {
  let currentPlayer = 0;
  let gameEnd = false;
  while (!gameEnd) {
    const { hitSquare, isHit } = await players[currentPlayer].hitEnemy();
    players[currentPlayer].getEnemyGrid().updateSquare(hitSquare, isHit);
    currentPlayer = (currentPlayer + 1) % 2;
    if (players[currentPlayer].getBoard().allSunk()) gameEnd = true;
  }
  endGame((currentPlayer + 1) % 2);
}
