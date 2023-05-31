import Player from "../Player";
import Gameboard from "../Gameboard";

beforeAll(() => {});
test("hits enemy", () => {
  const player1 = Player("one");
  const player2 = Player("two");
  player1.setBoard(Gameboard());
  player2.setBoard(Gameboard());
  player1.setEnemyPlayer(player2);
  player2.setEnemyPlayer(player1);
  player1.hitEnemy(0);
  expect(player2.getBoard().getBoard()).toStrictEqual(
    [-1000].concat(Array(99).fill(0))
  );
});
