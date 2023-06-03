import Gameboard from "./Gameboard";
import ComputerPlayer from "./ComputerPlayer";
import HumanPLayer from "./HumanPlayer";
import { Grid, GridThatListens } from "./UI/Grids";
import gameLoop from "./gameLoop";
import "./style.css";

async function game() {
  const container = document.querySelector(".container");

  const human = HumanPLayer("Humanity");
  const computer = ComputerPlayer("Computer");

  human.setBoard(Gameboard());
  computer.setBoard(Gameboard());
  // Todo: convert to real board picking
  human.getBoard().placeShip(0, "h", 5);
  computer.getBoard().placeShip(0, "h", 5);

  human.setEnemyPlayer(computer);
  computer.setEnemyPlayer(human);

  const humanGrid = GridThatListens(computer.getBoard().getBoard());
  const computerGrid = Grid(computer.getBoard().getBoard());

  human.setEnemyGrid(humanGrid);
  computer.setEnemyGrid(computerGrid);
  container.appendChild(humanGrid.grid);
  container.appendChild(computerGrid.grid);

  await human.startPicking();

  gameLoop([human, computer]);
}

game();
