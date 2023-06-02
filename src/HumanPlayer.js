import pipe from "lodash/fp/flow";
import Player from "./Player";
import addPicking from "./UI/addPicking";

function addHumanHit(player) {
  const hitEnemy = async () => {
    const hitSquare = await player.getEnemyGrid().listen();
    const isHit = player.deliverHit(hitSquare);
    return { hitSquare, isHit };
  };

  return { ...player, hitEnemy };
}

const HumanPLayer = pipe(Player, addPicking, addHumanHit);

export default HumanPLayer;
