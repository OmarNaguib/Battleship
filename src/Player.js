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
  const hitEnemy = (index) => enemyPlayer.getBoard().takeHit(index);
  return {
    name,
    getBoard,
    enemyPlayer,
    setBoard,
    setEnemyPlayer,
    hitEnemy,
  };
}
