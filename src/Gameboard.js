import sliceWithStep from "./utils/sliceWithStep";

export default function Gameboard() {
  const board = Array(100).fill(0);

  const rowOf = (index) => Math.floor(index / 10);
  const columnOf = (index) => index % 10;

  function getRow(index, array = board) {
    const rowStart = rowOf(index) * 10;
    return array.slice(rowStart, rowStart + 10);
  }
  function getSliceH(index, length) {
    const row = getRow(index);
    const sliceStart = columnOf(index);
    return row.slice();
  }
  function getSliceV(index, length) {}
  function getColumn(index, array = board) {
    const columnStart = index % 10;
    return sliceWithStep(array, columnStart, array.length, 10);
  }
  return { board, getRow, getColumn };

  function validPlacement(index, orientaion, length) {
    let slice;
    if (orientaion === "h") slice = getRow(index);
    if (orientaion === "v") slice = getColumn(index);
  }
}

const aBoard = Gameboard();
console.log(aBoard.getColumn(59));
