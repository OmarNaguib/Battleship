import Gameboard from "../Gameboard";

test("Makes a board", () => {
  const aBoard = Gameboard();
  expect(aBoard.getBoard()).toStrictEqual(Array(100).fill(0));
});

test("gets row", () => {
  const aBoard = Gameboard();
  expect(aBoard.getRow(50)).toStrictEqual(Array(10).fill(0));
});

test("gets column", () => {
  const aBoard = Gameboard();
  expect(aBoard.getColumn(0)).toStrictEqual(Array(10).fill(0));
});

test("Places a ship", () => {
  const aBoard = Gameboard();
  aBoard.placeShip(0, "h", 5, 1);
  expect(aBoard.getBoard()).toStrictEqual(
    Array(5).fill(1).concat(Array(95).fill(0))
  );
});

test("Dosen't place invalid ship: Out of bounds", () => {
  const aBoard = Gameboard();
  aBoard.placeShip(5, "h", 6, 1);
  expect(aBoard.getBoard()).toStrictEqual(Array(100).fill(0));
});

test("Dosen't place invalid ship: overlap", () => {
  const aBoard = Gameboard();
  aBoard.placeShip(0, "h", 5, 1);
  aBoard.placeShip(4, "h", 5, 1);
  expect(aBoard.getBoard()).toStrictEqual(
    Array(5).fill(1).concat(Array(95).fill(0))
  );
});

test("Places a ship: vertical", () => {
  const aBoard = Gameboard();
  aBoard.placeShip(0, "v", 5, 1);
  expect(aBoard.getBoard()).toStrictEqual([
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
});

test("Dosen't place invalid ship: Out of bounds, vertical", () => {
  const aBoard = Gameboard();
  aBoard.placeShip(91, "v", 6, 1);
  console.log(aBoard.getBoard());
  expect(aBoard.getBoard()).toStrictEqual(Array(100).fill(0));
});

test("Dosen't place invalid ship: overlap", () => {
  const aBoard = Gameboard();
  aBoard.placeShip(0, "v", 5, 1);
  aBoard.placeShip(30, "v", 5, 1);
  expect(aBoard.getBoard()).toStrictEqual([
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
});

/* [
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0
] */
