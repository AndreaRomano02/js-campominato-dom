console.log("JS OK");

//# PRELIMINARI
//* Recupero gli elementi dal DOM
const playBtn = document.getElementById("play-button");
const gridElement = document.getElementById("grid");
const selectElement = document.getElementById("level");

let numberOfCells;
let levelClass;

//? Funzioni
/* Funzione che crea una singola cella */
const createCell = (number) => {
  const cell = document.createElement("div");
  cell.className = "cell";
  cell.innerText = number;
  return cell;
};

//! Attendo il click del bottone
playBtn.addEventListener("click", () => {
  //* Prima di tutto pulisco la griglia.
  gridElement.innerHTML = "";

  //# Recupero il valore della select
  const userChoice = selectElement.value;

  //# Faccio il controllo del livello di difficoltà
  if (userChoice === "1") {
    //? EASY
    levelClass = "easy";
    numberOfCells = 100;
  } else if (userChoice === "2") {
    //? MEDIUM
    levelClass = "medium";
    numberOfCells = 81;
  } else if (userChoice === "3") {
    //? HARD
    levelClass = "hard";
    numberOfCells = 49;
  }

  //* Ciclo per inserire tutte e 100 le celle
  for (let i = 1; i <= numberOfCells; i++) {
    const cells = createCell(i);
    cells.classList.add(levelClass);
    cells.addEventListener("click", () => {
      cells.classList.toggle("clicked");
      console.log(i);
    });
    gridElement.appendChild(cells);
  }
});
