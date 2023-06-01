import ComputerPlayer from "../ComputerPlayer";
import Gameboard from "../Gameboard";
import Player from "../Player";

test("hits enemy", () => {
  const computer = ComputerPlayer("computer");
  const player2 = Player("two");
  computer.setBoard(Gameboard());
  player2.setBoard(Gameboard());
  computer.setEnemyPlayer(player2);
  player2.setEnemyPlayer(computer);
  computer.hitEnemy();
  expect(player2.getBoard().getBoard()).toContain(-1000);
});

test("hits all squares in 100 tries", () => {
  const computer = ComputerPlayer(Player("computer"));
  const player2 = Player("two");
  computer.setBoard(Gameboard());
  player2.setBoard(Gameboard());
  computer.setEnemyPlayer(player2);
  player2.setEnemyPlayer(computer);
  for (let i = 0; i <= 99; i += 1) computer.hitEnemy();

  expect(player2.getBoard().getBoard()).toStrictEqual(Array(100).fill(-1000));
});
