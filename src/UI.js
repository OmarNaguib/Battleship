const createGrid = (array) => {
  const grid = document.createElement("div");
  grid.classList.add("grid");

  const buttonList = array.map((element, index) => {
    const button = document.createElement("button");
    button.classList.add("square");
    button.dataset.index = index;
    grid.appendChild(button);
    return button;
  });
  return { grid, buttonList };
};

function Grid(array) {
  const { grid, buttonList } = createGrid();
  const updateSquare = (index) => {
    buttonList[index].classList.add("hit");
  };
  return {
    grid,
    buttonList,
    updateSquare,
  };
}
