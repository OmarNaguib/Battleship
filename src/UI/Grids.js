import pipe from "lodash/fp/flow";

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

function Grid(array) {
  const { grid, buttonList } = createGrid(array);
  const updateSquare = (index) => {
    buttonList[index].classList.add("hit");
  };

  const deleteButton = (index) => {
    delete buttonList[index];
  };
  return {
    grid,
    buttonList,
    updateSquare,
    deleteButton,
  };
}

function addListening(grid) {
  const listener = new AbortController();
  const addListeners = (buttonList, callback) => {
    buttonList.forEach((button, index) => {
      button.addEventListener(
        "click",
        () => {
          callback(index);
          listener.abort();
          // button will not have listeners in the future
          grid.deleteButton(index);
        },
        { signal: listener.signal }
      );
    });
  };
  const listen = () => {
    const hitIndex = new Promise((resolve) => {
      addListeners(grid.buttonList, resolve);
    });
    return hitIndex;
  };
  return {
    ...grid,
    listen,
  };
}
const GridThatListens = pipe(Grid, addListening);
export { Grid, GridThatListens };