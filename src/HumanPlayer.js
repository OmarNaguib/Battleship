import pipe from "lodash/fp/flow";
import Player from "./Player";

function addHumanHit(player) {
  let grid;
  const setGrid = (value) => {
    grid = value;
  };
  const getGrid = () => grid;
  const hitEnemy = async () => {
    const hitSquare = await grid.listen();
    console.log("here", hitSquare);

    const isHit = player.deliverHit(hitSquare);
    console.log(player.getEnemyPlayer().getBoard().getBoard()[0]);

    return { hitSquare, isHit };
  };

  return { ...player, hitEnemy, setGrid, getGrid };
}
const HumanPLayer = pipe(Player, addHumanHit);

export default HumanPLayer;
