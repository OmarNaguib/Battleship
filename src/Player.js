export default function Player(name) {
  let board;
  let enemyPlayer;
  let enemyGrid;
  const setEnemyGrid = (value) => {
    enemyGrid = value;
  };
  const getEnemyGrid = () => enemyGrid;
  const setBoard = (value) => {
    board = value;
  };
  const getBoard = () => board;
  const setEnemyPlayer = (value) => {
    enemyPlayer = value;
  };
  const getEnemyPlayer = () => enemyPlayer;
  const deliverHit = (index) => enemyPlayer.getBoard().takeHit(index);
  return {
    name,
    getBoard,
    getEnemyPlayer,
    setBoard,
    setEnemyPlayer,
    deliverHit,
    setEnemyGrid,
    getEnemyGrid,
  };
}
