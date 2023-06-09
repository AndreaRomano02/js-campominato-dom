console.log("JS OK");
//# -------------------------------------------------------------
//# PRELIMINARI
//# -------------------------------------------------------------
//* Recupero gli elementi dal DOM
const playBtn = document.getElementById("play-button");
const gridElement = document.getElementById("grid");
const selectElement = document.getElementById("level");
const scoreElement = document.getElementById("score");
const clickToShow = document.getElementById("click-to-show");

//# Variabili
let numberOfCells;
let levelClass;
let textOfCells;

//# Funzioni
//* Funzione che crea una singola cella
const createCell = (number) => {
  const cell = document.createElement("div");
  cell.className = "cell";
  cell.innerText = number;
  return cell;
};

//* Funzione per il random
const random = (max) => Math.floor(Math.random() * max) + 1;

//* Funzione per creare l'Array delle bombe
const bomb = (numberOfCells) => {
  const bombs = [];
  let number;
  while (bombs.length < 16) {
    do {
      number = random(numberOfCells);
    } while (bombs.includes(number));
    bombs.push(number);
  }

  return bombs;
};

//? -------------------------------------------------------------
//? LOGICA EFFETTIVA
//? -------------------------------------------------------------
//! Attendo il click del bottone
playBtn.addEventListener("click", () => {
  //! Prima di tutto pulisco la griglia.
  gridElement.innerHTML = "";

  //# Reset variabili
  let gameOver = false;
  let youWin = false;
  let score = 0;
  let message;
  clickToShow.innerHTML = "";

  //# Stampo il punteggio iniziale che sicuramente è 0
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

  //# Dichiaro il numero massimo del punteggiop
  const maxScore = numberOfCells - 16;

  //# BOMB
  const bombList = bomb(numberOfCells);
  //* Stampo in console l'Array di bombe casuali
  console.log(bombList);

  //# Ciclo per inserire tutte e 100 le celle
  for (let i = 1; i <= numberOfCells; i++) {
    const cells = createCell(i);
    cells.classList.add(levelClass);

    //! Attendo il click della singola cella
    cells.addEventListener("click", () => {
      //# Controllo che il punteggio corrente sia inferiore al punteggio massimo
      if (score === maxScore) {
        message = `HAI VINTO!!!!!! Il tuo punteggio è di ${score} punti`;
        clickToShow.innerText += message;
        return;
      } else if (gameOver) {
        //* Mostro tutte le altre caselle
        for (let i = 0; i < cellsElement.length; i++) {
          if (bombList.includes(i + 1))
            cellsElement[i].classList.add("clicked", "bomb");
        }
        return;
      }

      //* Mi salvo il numero della casella cliccata
      textOfCells = parseInt(cells.innerText);
      console.log(textOfCells);

      //* Controllo se il numero della cella cliccata è una bomba
      if (bombList.includes(textOfCells)) {
        //? Aggiungo la classe per mostrare la bomba
        cells.classList.add("bomb");
        //? Determino che il gioco è finito
        gameOver = true;
        message = `HAI PERSO :( ...       Il tuo punteggio è di ${score} punti`;
        clickToShow.innerHTML = `<div class="card bg-danger p-0 m-0">
        <h1>${message}</h1>
        <h2>Clicca sulla griglia per mostrare la posizione delle altre bombe.</h2>
        </div>`;

        //? Fermo il conteggio e lo decremento per non contare la casella della bomba
        --score;
      }

      //* Se non ha la classe 'Clicked' l'aggiungo e incremento il punteggio
      if (!cells.classList.contains("clicked")) {
        //? Aggiugno la classe per far capire che la casella è cliccata
        cells.classList.add("clicked");
        //? Incremento il punteggio
        scoreElement.innerText = ++score;
      }
    });

    //# Inserisco tutti gli elementi nel DOM
    gridElement.appendChild(cells);
  }
  const cellsElement = document.querySelectorAll(".cell");
});
