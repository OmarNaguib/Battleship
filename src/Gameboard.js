import sliceWithStep from "./utils/sliceWithStep";

export default function Gameboard() {
  const board = Array(100).fill(0);

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
    if (orientaion === "h") slice = getSliceH(index);
    if (orientaion === "v") slice = getSliceV(index);
    return slice.length >= length && slice.every(isZero);
  };
  return { board, getRow, getColumn, validPlacement };
}

const aBoard = Gameboard();
console.log(aBoard.getColumn(59));
console.log(aBoard.validPlacement(5, "h", 0));
console.log(aBoard.validPlacement(5, "h", 6));
