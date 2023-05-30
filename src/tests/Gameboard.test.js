import Gameboard from "../Gameboard";

test("Makes a board", () => {
  const aBoard = Gameboard();
  expect(aBoard.board).toStrictEqual(Array(100).fill(0));
});
