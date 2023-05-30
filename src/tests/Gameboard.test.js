import Gameboard from "../Gameboard";

test("Makes a board", () => {
  const aBoard = Gameboard();
  expect(aBoard.board).toStrictEqual(Array(100).fill(0));
});

test("Places a ship", () => {
  const aBoard = Gameboard();
  aBoard.placeShip(5, "h", 0);
  expect(aBoard.board).toStrictEqual(
    Array(5).fill(1).concat(Array(95).fill(0))
  );
});

test("Dosen't place invalid ship: Out of bounds", () => {
  const aBoard = Gameboard();
  aBoard.placeShip(5, "h", 6);
  expect(aBoard.board).toStrictEqual(Array(100).fill(0));
});

test("Dosen't place invalid ship: overlap", () => {
  const aBoard = Gameboard();
  aBoard.placeShip(5, "h", 0);
  aBoard.placeShip(5, "h", 4);
  expect(aBoard.board).toStrictEqual(
    Array(5).fill(1).concat(Array(95).fill(0))
  );
});
