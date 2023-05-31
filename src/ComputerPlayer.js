// Mixin
export default function ComputerPlayer(player) {
  const getRandomSquare = () => Math.floor(Math.random() * 100);

  function hitEnemy() {
    let hitSquare = getRandomSquare();
    let isHit = player.getEnemyPlayer().getBoard().takeHit(hitSquare);
    while (isHit === null) {
      hitSquare = (hitSquare + 1) % 100;
      isHit = player.getEnemyPlayer().getBoard().takeHit(hitSquare);
    }
    return { hitSquare, isHit };
  }

  return {
    ...player,
    hitEnemy,
  };
}
