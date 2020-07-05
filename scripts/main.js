const grid = document.querySelector(".etch__screen");
const gridSize = document.getElementById("size");
const resetButton = document.querySelector(".etch__btn--reset");
const blackButton = document.querySelector(".etch__btn--black");
const colorButton = document.querySelector(".etch__btn--color");

let squares, //global grid squares selector
  color = "black"; //default pen color

function createGrid() {
  grid.innerHTML = "";
  grid.style.setProperty(
    "grid-template-columns",
    `repeat(${gridSize.value}, 2fr)`
  );
  grid.style.setProperty(
    "grid-template-rows",
    `repeat(${gridSize.value}, 2fr)`
  );
  for (let i = 0; i < gridSize.value * gridSize.value; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
  squares = document.querySelectorAll(".square");
  squares.forEach((square) =>
    square.addEventListener("mouseover", function () {
      square.style.backgroundColor = color;
    })
  );
}

createGrid(color); // create initial grid with selected color

gridSize.addEventListener("change", createGrid); // if new size is chosen, create a new grid

blackButton.addEventListener("click", () => (color = "black")); //blackButton Functionality

colorButton.addEventListener(
  "click",
  () =>
    (color =
      "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)) //random color functionality
);

//reset button functionality
resetButton.addEventListener("click", function () {
  squares.forEach((square) => [
    (square.style.backgroundColor = "rgb(240, 240, 240)"),
  ]);
});
