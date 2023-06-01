import HumanPLayer from "../HumanPlayer";
import Player from "../Player";
import Gameboard from "../Gameboard";
import { Grid, GridThatListens } from "../UI/Grids";

test("hits enemy", async () => {
  const human = HumanPLayer("computer");
  const player2 = Player("two");
  human.setBoard(Gameboard());
  player2.setBoard(Gameboard());
  human.setEnemyPlayer(player2);
  player2.setEnemyPlayer(human);
  const grid = GridThatListens(player2.getBoard().getBoard());
  human.setEnemyGrid(grid);
  human.hitEnemy();

  grid.buttonList[0].click();
  await Promise.resolve(0);
  expect(grid.buttonList[0]).toBe(undefined);
  expect(human.getEnemyPlayer().getBoard().getBoard()).toContain(-1000);
  expect(player2.getBoard().getBoard()).toContain(-1000);
});
