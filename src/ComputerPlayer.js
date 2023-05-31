// Mixin
export default function ComputerPlayer(player) {
  const getRandomSquare = () => Math.floor(Math.random() * 100);

  function hitEnemy() {
    let hitSquare = getRandomSquare();
    let isHit = player.getEnemyPlayer().getBoard().takeHit(hitSquare);
    while (isHit === null) {
      hitSquare += 1;
      isHit = this.getEnemyPlayer().getBoard().takeHit(hitSquare);
    }
  }

  return {
    ...player,
    hitEnemy,
  };
}
