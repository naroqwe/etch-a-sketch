const containerDiv = document.querySelector(".container");
const button = document.querySelector(".button");
const sizeOfGrid = document.querySelector(".grid-size");

function createDivs(size) {
  let gridSize = sizeOfGrid.value;

  console.log(gridSize);
  containerDiv.innerHTML = "";
  // let newDiv = document.createElement("div");
  // newDiv.classList.add("sketch-divs");
  // containerDiv.appendChild(newDiv);
  for (let i = 0; i < gridSize * gridSize; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("sketch-divs");
    newDiv.textContent = i + 1;
    containerDiv.appendChild(newDiv);
  }

  containerDiv.style.gridTemplateColumns = `repeat(${gridSize}, 50px)`;
}

function createOnLoad() {
  for (let i = 0; i < 16 * 16; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("sketch-divs");
    newDiv.textContent = i + 1;
    containerDiv.appendChild(newDiv);
  }

  containerDiv.style.gridTemplateColumns = `repeat(${16}, 50px)`;
}
window.addEventListener("load", createOnLoad);
button.addEventListener("click", createDivs);
