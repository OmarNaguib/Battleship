/* eslint-disable no-await-in-loop */
export default function addPicking(player) {
  const addListeners = (buttonList, callback) => {
    const controller = new AbortController();
    buttonList.forEach((button, index) => {
      if (button) {
        button.addEventListener(
          "click",
          () => {
            console.log("clicked");
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
    const shipHolder = document.createElement("div");
    shipHolder.classList.add("ship-holder");
    shipHolder.style.width = length * buttonList[0].style.width;
    console.log("hover");

    buttonList.forEach((button) => {
      button.addEventListener("onmouseenter", () => {
        console.log("inside");
        button.appendChild(shipHolder);
      });
    });
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
      const hoverController = addHover(
        shipLengths[currentIndex],
        myGrid.buttonList
      );
      const pick = await listenForPick(myGrid.buttonList);
      const isValid = player
        .getBoard()
        .placeShip(pick, "h", shipLengths[currentIndex]);
      if (isValid) {
        myGrid.displayShip(pick, "h", shipLengths[currentIndex]);
        currentIndex += 1;
        // Todo: update the display
      }
    }
  };
  return { ...player, startPicking };
}
