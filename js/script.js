console.log("JS OK");

//# PRELIMINARI
//* Recupero gli elementi dal DOM
const playBtn = document.getElementById("play-button");
const gridElement = document.getElementById("grid");
const selectElement = document.getElementById("level");
const scoreElement = document.getElementById("score");

//# Variabili
let numberOfCells;
let levelClass;

//# Funzioni
//* Funzione che crea una singola cella
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

  //* Stampo il punteggio iniziale che sicuramente è 0
  let score = 0;
  scoreElement.innerText = score;

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

  //# Ciclo per inserire tutte e 100 le celle
  for (let i = 1; i <= numberOfCells; i++) {
    const cells = createCell(i);
    cells.classList.add(levelClass);
    cells.addEventListener("click", () => {
      if (!cells.classList.contains("clicked")) {
        scoreElement.innerText = ++score;
      }
      cells.classList.add("clicked");

      console.log(i);
    });
    gridElement.appendChild(cells);
  }
});
