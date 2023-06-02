import { GridThatListens } from "../UI/Grids";

test("Returns index on click", () => {
  const myGrid = GridThatListens(Array(100).fill(0));
  const index = myGrid.listen();
  myGrid.buttonList[0].click();
  index.then((result) => {
    expect(result).toBe(0);
  });
});
