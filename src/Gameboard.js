import sliceWithStep from "./utils/sliceWithStep";

export default function Gameboard() {
  let board = Array(100).fill(0);
  const getBoard = () => board;
  const setBoard = (value) => {
    board = value;
  };
  // placment helpers
  const rowOf = (index) => Math.floor(index / 10);
  const columnOf = (index) => index % 10;

  const getRow = (index, array = board) => {
    const rowStart = rowOf(index) * 10;
    return array.slice(rowStart, rowStart + 10);
  };
  const getColumn = (index, array = board) => {
    const columnStart = index % 10;
    return sliceWithStep(array, columnStart, array.length, 10);
  };

  const getSliceH = (index, length) => {
    const row = getRow(index);
    const sliceStart = columnOf(index);
    return row.slice(sliceStart, sliceStart + length);
  };

  const getSliceV = (index, length) => {
    const column = getColumn(index);
    const sliceStart = rowOf(index);
    return column.slice(sliceStart, sliceStart + length);
  };
  const isZero = (item) => item === 0;
  const validPlacement = (index, orientaion, length) => {
    let slice;
    if (orientaion === "h") slice = getSliceH(index, length);
    if (orientaion === "v") slice = getSliceV(index, length);
    return slice.length >= length && slice.every(isZero);
  };

  const placeShipH = (index, length, value, array = board) => {
    const newArray = [...array];
    for (let i = 0; i < length; i += 1) newArray[index + i] = value;
    return newArray;
  };
  const placeShipV = (index, length, value, array = board) => {
    const newArray = [...array];
    for (let i = 0; i < length; i += 1) newArray[index + i * 10] = value;
    return newArray;
  };
  // value parameter is added to provide capability of ship identification
  const placeShip = (index, orientaion, length, value = 1) => {
    if (validPlacement(index, orientaion, length)) {
      if (orientaion === "h") setBoard(placeShipH(index, length, value));
      if (orientaion === "v") setBoard(placeShipV(index, length, value));
    }
  };

  const takeHit = (index) => {
    if (board[index] === -1000) return null;
    if (board[index] === 0) {
      board[index] = -1000;
      return false;
    }

    if (board[index] > 0) {
      board[index] *= -1;
      return true;
    }
    return null;
  };

  const allSunk = () => board.every((value) => value <= 0);
  return {
    getBoard,
    setBoard,
    getRow,
    getColumn,
    validPlacement,
    placeShip,
    takeHit,
    allSunk,
  };
}
