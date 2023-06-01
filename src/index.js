import Gameboard from "./Gameboard";
import ComputerPlayer from "./ComputerPlayer";
import HumanPLayer from "./HumanPlayer";
import { Grid, GridThatListens } from "./UI/Grids";
import gameLoop from "./gameLoop";
import "./style.css";

const container = document.querySelector(".container");

const human = HumanPLayer("Humanity");
const computer = ComputerPlayer("Computer");

human.setBoard(Gameboard());
computer.setBoard(Gameboard());

human.setEnemyPlayer(computer);
computer.setEnemyPlayer(human);

const humanGrid = GridThatListens(computer.getBoard().getBoard());
const computerGrid = Grid(computer.getBoard().getBoard());

human.setEnemyGrid(humanGrid);
computer.setEnemyGrid(computerGrid);

container.appendChild(computerGrid.grid);
container.appendChild(humanGrid.grid);
