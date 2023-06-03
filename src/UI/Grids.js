import pipe from "lodash/fp/flow";

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
  const { grid, buttonList } = createGrid(array);
  const deleteButton = (index) => {
    delete buttonList[index];
  };
  const updateSquare = (index, isHit) => {
    buttonList[index].classList.add("hit");
    if (isHit) buttonList[index].classList.add("ship");
    // button will not have listeners in the future
    deleteButton(index);
  };

  const displayShipH = (index, length) => {
    for (let i = 0; i < length; i += 1)
      buttonList[index + i].classList.add("ship");
  };
  const displayShipV = (index, length) => {
    for (let i = 0; i < length; i += 1) {
      console.log(index + i * 10);
      buttonList[index + i * 10].classList.add("ship");
    }
  };
  const displayShip = (index, orientation, length) => {
    if (orientation === "h") displayShipH(index, length);
    if (orientation === "v") displayShipV(index, length);
  };

  return {
    grid,
    buttonList,
    updateSquare,
    deleteButton,
    displayShip,
  };
}

function addListening(grid) {
  const addListeners = (buttonList, callback) => {
    const controller = new AbortController();
    buttonList.forEach((button, index) => {
      if (button) {
        button.addEventListener(
          "click",
          () => {
            callback(index);
            controller.abort();
          },
          { signal: controller.signal }
        );
      }
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
