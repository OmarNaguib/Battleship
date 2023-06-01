import { GridThatListens } from "../UI/Grids";

test("Returns index on click, Removes button from list", () => {
  const myGrid = GridThatListens(Array(100).fill(0));
  const index = myGrid.listen();
  myGrid.buttonList[0].click();
  index.then((result) => {
    expect(result).toBe(0);
    expect(myGrid.buttonList[0]).toBe(undefined);
  });
});
