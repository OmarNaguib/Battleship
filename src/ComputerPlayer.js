// Mixin
import pipe from "lodash/fp/flow";
import Player from "./Player";

function addComputerHit(player) {
  const getRandomSquare = () => Math.floor(Math.random() * 100);

  function hitEnemy() {
    let hitSquare = getRandomSquare();
    let isHit = player.deliverHit(hitSquare);
    while (isHit === null) {
      hitSquare = (hitSquare + 1) % 100;
      isHit = player.deliverHit(hitSquare);
    }
    return { hitSquare, isHit };
  }

  return {
    ...player,
    hitEnemy,
  };
}

function addComputerPicking(player) {
  function startPicking() {
    player.getBoard().placeShip(1, "h", 5);
    player.getBoard().placeShip(35, "v", 4);
    player.getBoard().placeShip(70, "v", 3);
    player.getBoard().placeShip(29, "v", 3);
    player.getBoard().placeShip(21, "v", 2);
  }

  return {
    ...player,
    startPicking,
  };
}
const ComputerPlayer = pipe(Player, addComputerHit, addComputerPicking);
export default ComputerPlayer;
