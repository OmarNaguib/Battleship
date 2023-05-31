export default function Player(name) {
  let board;
  let enemyPlayer;
  const setBoard = (value) => {
    board = value;
  };
  const getBoard = () => board;
  const setEnemyPlayer = (value) => {
    enemyPlayer = value;
  };
  const getEnemyPlayer = () => enemyPlayer;
  const hitEnemy = (index) => enemyPlayer.getBoard().takeHit(index);
  return {
    name,
    getBoard,
    getEnemyPlayer,
    setBoard,
    setEnemyPlayer,
    hitEnemy,
  };
}
