const gridContainer = document.querySelector(".grid-container");
const resizeButton = document.querySelector("#resize-btn");
const resetButton = document.querySelector("#reset-btn");

let width = 10;

for (let i = 0; i < width * width; i++) {
  gridContainer.style.gridTemplateColumns = `repeat(${width}, 1fr)`;

  const square = document.createElement("div");
  square.classList.add("square");

  gridContainer.appendChild(square);
}

gridContainer.childNodes[0].remove();

gridContainer.childNodes.forEach(function (element) {
  element.addEventListener("mouseover", (event) => {
    element.classList.add("shaded");
  });
});

resizeButton.addEventListener("click", function (e) {
  let newGridWidthPrompt = prompt(
    "What is the width of the new grid? (Enter a whole number between 1 and 100): "
  );

  let newGridWidth = parseInt(newGridWidthPrompt);

  if (Number.isInteger(newGridWidth) === false) {
    alert(
      "Follow the instructions please :) I'm setting the grid width to 10 until you do :)"
    );
    newGridWidth = 10;
  }
  if (newGridWidth > 100) {
    alert(
      "Oops, number too high! I'll just go ahead and set grid width to 100."
    );
    newGridWidth = 100;
  }
  if (newGridWidth < 1) {
    alert("Oops, number too low! I'll just go ahead and set grid width to 1.");
    newGridWidth = 1;
  }

  let gridToRemove = gridContainer.childNodes.length;
  console.log(gridToRemove);

  for (let i = 0; i < gridToRemove; i++) {
    gridContainer.childNodes[0].remove();
  }

  for (let i = 0; i < newGridWidth * newGridWidth; i++) {
    gridContainer.style.gridTemplateColumns = `repeat(${newGridWidth}, 1fr)`;

    const square = document.createElement("div");
    square.classList.add("square");

    gridContainer.appendChild(square);
  }

  gridContainer.childNodes.forEach(function (element) {
    element.addEventListener("mouseover", (event) => {
      element.classList.add("shaded");
    });
  });
});

// RESET THE BLOODY GRID!!
resetButton.addEventListener("click", function (e) {
  let gridToRemove = gridContainer.childNodes.length;

  let resetGridSize = gridContainer.childNodes.length;

  for (let i = 0; i < gridToRemove; i++) {
    gridContainer.childNodes[0].remove();
  }

  for (let i = 0; i < resetGridSize; i++) {
    gridContainer.style.gridTemplateColumns = `repeat(${Math.sqrt(
      resetGridSize
    )}, 1fr)`;

    const square = document.createElement("div");
    square.classList.add("square");

    gridContainer.appendChild(square);
  }

  gridContainer.childNodes.forEach(function (element) {
    element.addEventListener("mouseover", (event) => {
      element.classList.add("shaded");
    });
  });
});
