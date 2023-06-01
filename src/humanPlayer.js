import pipe from "lodash/fp/flow";
import Player from "./Player";

function addHumanHit(player) {
  const hitEnemy = () => {};

  return { ...player, hitEnemy };
}
const HumanPLayer = pipe(Player, addHumanHit);
