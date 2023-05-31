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
  expect(aBoard.getBoard()).toStrictEqual(Array(100).fill(0));
});

test("Dosen't place invalid ship: overlap, vertical", () => {
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

test("Takes hit:On ship", () => {
  const aBoard = Gameboard();
  aBoard.placeShip(0, "h", 5, 1);
  aBoard.takeHit(0);
  expect(aBoard.getBoard()).toStrictEqual(
    Array(1)
      .fill(-1)
      .concat(Array(4).fill(1).concat(Array(95).fill(0)))
  );
});

test("Takes hit:On empty square", () => {
  const aBoard = Gameboard();
  aBoard.takeHit(0);
  expect(aBoard.getBoard()).toStrictEqual(
    Array(1).fill(-1000).concat(Array(99).fill(0))
  );
});

test("Return null on rehit", () => {
  const aBoard = Gameboard();
  aBoard.takeHit(0);
  expect(aBoard.takeHit(0)).toStrictEqual(null);
});

test("allSunk: no ships", () => {
  const aBoard = Gameboard();
  expect(aBoard.allSunk()).toBe(true);
});

test("allSunk: with floating ships", () => {
  const aBoard = Gameboard();
  aBoard.placeShip(0, "h", 5, 1);
  expect(aBoard.allSunk()).toBe(false);
});

test("allSunk: with sunk ships", () => {
  const aBoard = Gameboard();
  aBoard.placeShip(0, "h", 2, 1);
  aBoard.takeHit(0);
  aBoard.takeHit(1);
  expect(aBoard.allSunk()).toBe(true);
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
