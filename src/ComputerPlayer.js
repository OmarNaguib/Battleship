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
    return Promise.resolve({ hitSquare, isHit });
  }

  return {
    ...player,
    hitEnemy,
  };
}
const ComputerPlayer = pipe(Player, addComputerHit);
export default ComputerPlayer;
