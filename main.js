const containerDiv = document.querySelector(".container");
const button = document.querySelector(".button");
const sizeOfGrid = document.querySelector(".grid-size");
const eraser = document.querySelector(".eraser");
const pen = document.querySelector(".pen");

function createDivs() {
  let gridSize = sizeOfGrid.value;

  containerDiv.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  containerDiv.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  console.log(gridSize);

  for (let i = 0; i < gridSize * gridSize; i++) {
    let newDiv = document.createElement("div");

    newDiv.addEventListener("mousemove", function () {
      if (pen.checked == true) {
        newDiv.style.backgroundColor = "green";
      } else if (eraser.checked == true) {
        newDiv.style.backgroundColor = "grey";
      }
    });
    containerDiv.appendChild(newDiv);
  }
}

function createOnLoad() {
  containerDiv.style.gridTemplateColumns = "repeat(16, 1fr)";
  containerDiv.style.gridTemplateRows = "repeat(16, 1fr)";

  for (let i = 0; i < 16 * 16; i++) {
    let newDiv = document.createElement("div");

    newDiv.addEventListener("mousemove", function () {
      if (pen.checked == true) {
        newDiv.style.backgroundColor = "green";
      } else if (eraser.checked == true) {
        newDiv.style.backgroundColor = "grey";
      }
    });
    containerDiv.appendChild(newDiv);
  }
}

window.addEventListener("load", createOnLoad);
button.addEventListener("click", createDivs);
