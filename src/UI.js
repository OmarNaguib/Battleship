const createGrid = (array) => {
  const grid = document.createElement("div");
  grid.classList.add("grid");

  const buttonList = array.map((element, index) => {
    const button = document.createElement("button");
    button.classList.add("square");
    if (element > 0) button.classList.add("ship");
    button.dataset.index = index;
    grid.appendChild(button);
    return button;
  });
  return { grid, buttonList };
};

export default function Grid(array) {
  const { grid, buttonList } = createGrid(array);
  const updateSquare = (index) => {
    buttonList[index].classList.add("hit");
  };
  return {
    grid,
    buttonList,
    updateSquare,
  };
}
