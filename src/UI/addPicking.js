/* eslint-disable no-await-in-loop */
export default function addPicking(player) {
  let orientation = "h";
  const getOrientation = () => orientation;
  const setOrientation = (value) => {
    orientation = value;
  };

  const toggleOrientaion = () => {
    if (getOrientation() === "h") setOrientation("v");
    else if (getOrientation() === "v") setOrientation("h");
  };

  const shipDimensions = (length) => {
    const longEdge = length * 50 - 2 * 4;
    const shortEdge = 42;
    if (getOrientation() === "h")
      return { width: `${longEdge}px`, height: `${shortEdge}px` };
    if (getOrientation() === "v")
      return { width: `${shortEdge}px`, height: `${longEdge}px` };
    return null;
  };

  const reverseElementDimensions = (element) => {
    const newWidth = element.style.height;
    console.log(element.style.height, newWidth);
    const newHeight = element.style.width;
    element.setAttribute("style", `width: ${newWidth}; height: ${newHeight}`);
    console.log(element);
  };
  const orientaionButton = document.querySelector("button.rotate");
  orientaionButton.addEventListener("click", () => {
    toggleOrientaion();
    const shipHolder = document.querySelector(".ship-holder");
    reverseElementDimensions(shipHolder);
  });

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
  const listenForPick = (buttonList) => {
    const pick = new Promise((resolve) => {
      addListeners(buttonList, resolve);
    });
    return pick;
  };

  const addHover = (length, buttonList) => {
    const hoverController = new AbortController();
    const shipHolder = document.createElement("div");
    shipHolder.classList.add("ship-holder");
    const dimensions = shipDimensions(length);
    shipHolder.style.width = dimensions.width;
    shipHolder.style.height = dimensions.height;

    buttonList.forEach((button) => {
      button.addEventListener(
        "mouseover",
        (e) => {
          e.target.appendChild(shipHolder);
        },
        { useCapture: true, signal: hoverController.signal }
      );
      button.addEventListener(
        "mouseleave",
        (e) => {
          if (!e.toElement.classList.contains("square")) return;
          if (e.target.hasChildNodes()) e.target.removeChild(shipHolder);
        },
        { useCapture: true, signal: hoverController.signal }
      );
    });
    buttonList[0].appendChild(shipHolder);
    return { hoverController, shipHolder };
  };

  const startPicking = async () => {
    const myGrid = player.getEnemyPlayer().getEnemyGrid();

    const shipNames = [
      "Carrier",
      "Battleship",
      "Cruiser",
      "Submarine",
      "Destroyer",
    ];
    const shipLengths = [5, 4, 3, 3, 2];
    let currentIndex = 0;
    while (currentIndex < 5) {
      const { hoverController, shipHolder } = addHover(
        shipLengths[currentIndex],
        myGrid.buttonList
      );
      const pick = await listenForPick(myGrid.buttonList);
      const isValid = player
        .getBoard()
        .placeShip(pick, getOrientation(), shipLengths[currentIndex]);
      if (isValid) {
        myGrid.displayShip(pick, getOrientation(), shipLengths[currentIndex]);
        currentIndex += 1;
      }
      hoverController.abort();
      myGrid.buttonList[pick].removeChild(shipHolder);
    }
  };
  return { ...player, startPicking };
}
