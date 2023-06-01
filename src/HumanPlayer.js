import pipe from "lodash/fp/flow";
import Player from "./Player";

function addHumanHit(player) {
  const hitEnemy = async () => {
    const hitSquare = await player.getGrid().listen();
    console.log("here", hitSquare);

    const isHit = player.deliverHit(hitSquare);
    console.log(player.getEnemyPlayer().getBoard().getBoard()[0]);

    return { hitSquare, isHit };
  };

  return { ...player, hitEnemy };
}
const HumanPLayer = pipe(Player, addHumanHit);

export default HumanPLayer;
