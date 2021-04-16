//* Declaramos las variables globales

//* Variables para trackear la puntuación
let count = 0;
let score = 0;
var answer;

//* Banderas
var correctAnswer, prevFlag;

//* Elementos del HTML
var choices, question, resultsPara, choicesPara;

//* Buttons
var resetButton, prevButton;

//* Declaracion de variable num
var num;

//* Array que tiene un listado de objetos-pregunta
let questions = [
  {
    number: 0,
    question: "Who lived at 25 Cromwell Street?",
    choices: [
      "Jack the Ripper",
      "Ian Bradley and Myra Hindley",
      "Fred and Rose West",
      "The Yorkshire Ripper",
    ],
    answer: 2,
  },
  {
    number: 1,
    question: "How did Ted Bundy lure his victims in?",
    choices: [
      "Pretending to be an officer",
      "Pretending to be injured",
      "Asking them out on a date",
      "Knocking them out",
    ],
    answer: 1,
  },
  {
    number: 2,
    question: 'What year was the term "serial killer" coined in America?',
    choices: ["1912", "1996", "1960", "1976"],
    answer: 3,
  },
  {
    number: 3,
    question:
      "What cult inspired Timothy McVeigh, the Oklahoma City Bomber, to do what he did?",
    choices: [
      "The Branch Dividians",
      "Children of God",
      "The Manson Family",
      "Aum Shinrikyo",
    ],
    answer: 0,
  },
  {
    number: 4,
    question: "How many people did Ed Gein kill?",
    choices: ["10", "25", "2", "6"],
    answer: 2,
  },
  {
    number: 5,
    question: "How many was Ed Gein convicted for?",
    choices: ["0", "1", "10", "16"],
    answer: 1,
  },
  {
    number: 6,
    question:
      "What was Brenda Spencer's reason for her killing spree at Cleveland Elementary School?",
    choices: [
      "She didn't like Mondays",
      "She was being bullied",
      "She wanted to see what killing was like",
      "She hated kids",
    ],
    answer: 0,
  },
  {
    number: 7,
    question: 'What does Dennis Rader\'s nickname, "BTK", stand for?',
    choices: [
      "Bind, Torture, Kill",
      "Blindfold, Tickle, Kill",
      "Bind, Tickle, Kill",
      "Blindfold, Torture, Kill",
    ],
    answer: 0,
  },
  {
    number: 8,
    question: "What was Sacramento serial killer Richard Chase's nickname?",
    choices: [
      "The Night Stalker",
      "The Vampire of Sacramento",
      "The East Area Rapist",
      "The Zodiac Killer",
    ],
    answer: 1,
  },
  {
    number: 9,
    question: "Which woman was thought to be the first serial killer?",
    choices: [
      "Aileen Wuornos",
      "Belle Gunness",
      "Jane Toppan",
      "Lavinia Fisher",
    ],
    answer: 3,
  },
  {
    number: 10,
    question:
      "What book was the torn page from that was found with the Somerton Man?",
    choices: [
      "The Rudaiyat of Omar Khayyan",
      "The Bible",
      "The Great Gatsby",
      "The Quaran",
    ],
    answer: 0,
  },
  {
    number: 11,
    question: "How many years was Jaycee LeeDugard held against her own will?",
    choices: ["1 year", "8 years", "25 years", "3 years"],
    answer: 1,
  },
  {
    number: 12,
    question: "What disorder did the Eriksson Twins suffer from?",
    choices: ["Bipolar", "Schizophrenia", "Depression", "Folie a deux"],
    answer: 3,
  },
  {
    number: 13,
    question:
      'What country was the infamous "Who put Bella in the wych-elm" body found?',
    choices: ["England", "Ireland", "Scotland", "Poland"],
    answer: 1,
  },
  {
    number: 14,
    question: "What was John Wayne Gacy known as?",
    choices: [
      "The Killer Clown",
      "The Midwest Killer",
      "The Hillside Strangler",
      "The Candyman",
    ],
    answer: 0,
  },
  {
    number: 15,
    question: "Who was Leonard Lake's partner in crime?",
    choices: ["Dean Corll", "Charles Ng", "David Burkowitz", "Ottis Toole"],
    answer: 1,
  },
  {
    number: 16,
    question: "What country did Andrei Chikatilo hail from?",
    choices: ["England", "Japan", "America", "Russia"],
    answer: 3,
  },
  {
    number: 17,
    question: "What state was The Green River Killer active in?",
    choices: ["Ohio", "New York", "California", "Washington"],
    answer: 3,
  },
  {
    number: 18,
    question: "Who was known to be Jack the Ripper's last victim?",
    choices: [
      "Martha Tabram",
      "Catherine Eddowes",
      "Mary Ann Nichols",
      "Mary Kelly",
    ],
    answer: 3,
  },
  {
    number: 19,
    question:
      "What was the movie The Zodiac Killer referred to as the best satirical comedy?",
    choices: ["The Exorcist", "Halloween", "Jaws", "Amityville Horror"],
    answer: 0,
  },
];

// set tracking variables
correctAnswer = false;
prevFlag = false;

// grab html elements
choices = document.querySelectorAll(".choices");
question = document.getElementById("question");
resultsPara = document.getElementById("score");
choicesPara = document.getElementById("choices-para");

resetButton = document.getElementsByClassName("reset")[0];
prevButton = document.getElementsByClassName("prev")[0];
progress = document.getElementsByClassName("progress-bar")[0];

// add the event listeners
window.onload = suffleQuestions();
window.onload = pedirNum();
window.onload = renderQuestion();

prevButton.addEventListener("click", prevQuestion);
resetButton.addEventListener("click", resetQuiz);

for (let i = 0; i < choices.length; i++) {
  choices[i].addEventListener("click", scoring);
}

// functions used
function scoring() {
  //* Guarda la posición de la respuesta correcta en el array de respuestas.
  answer = questions[count].answer;

  // prevButton is visible when a choice is selected
  prevFlag = true;

  //* This es el elemento en el que el usuario ha hecho click
  if (this.innerText === questions[count].choices[answer]) {
    // correctAnswer waves for prevButton use
    correctAnswer = true;
    score++;
  } else {
    correctAnswer = false;
  }

  //* Llama a la siguiente función de render de pregunta
  nextQuestion();
}

//*Función para mezclar las preguntas al inicio de cada quiz

function suffleQuestions() {
  questions.sort(() => 0.5 - Math.random());
}

function pedirNum() {
  do {
    num = parseInt(prompt("Introducir un Numero del 1 al 10"));
    console.log(num);
  } while (num <= 0 || num > 10 || isNaN(num));
}

function showModal() {
  const modal = document.getElementById("dialog");
  modal.removeAttribute("open");
}

function nextQuestion() {
  // count goes up
  count++; //count 3
  if (count !== num) {
    // numbers between 0 and 20 have questions that can be rendered
    renderQuestion();
  }
  if (count === num) {
    // quiz is over when count reaches 20
    renderCompletion();

    // clock stops when completed
    stop();
    var time = document.getElementById("base-timer-label").innerHTML;
    console.log(time);
  }
}

// the prevButton will only be available to go back one question
function prevQuestion() {
  //* Con esto no vuelve a mostrar el boton prev
  prevFlag = false;

  //*Comprueba si el usuario le dio a respuesta correcta y le quita la puntuación
  if (correctAnswer) {
    correctAnswer = false;
    score--;
  }

  //* Decrementa el valor de count, y así renderiza la pregunta anterior
  count--;
  renderQuestion();
}

//* Esta función inserta el contenido de las preguntas en el HTML
function renderQuestion() {
  //* Comprueba si existe una pregunta previa, y en ese caso muestra el boton
  //* prev. Si no existe, oculta el boton prev.
  if (!prevFlag) {
    prevButton.classList.add("hide");
  } else if (prevButton.classList.contains("hide")) {
    prevButton.classList.remove("hide");
  }

  //* Inserta en el h2 la pregunta del objeto en la posición count.
  question.innerText = questions[count].question;

  //* Inserta en los elementos HTML con la clase choices, cada una de las respuestas
  for (let i = 0; i < choices.length; i++) {
    choices[i].innerText = questions[count].choices[i];
  }
}

//* Renderiza la puntuación final
function renderCompletion() {
  //* Calcula el % de acierto
  scorePercentage = `${Math.round(
    (score / num) * 100
  )}% | ${score} aciertos | ${num} preguntas `;

  //* Cambia los textos del html
  question.innerText = "Gracias por completar el Quiz!";
  resultsPara.innerText = "Tu puntuación es: " + scorePercentage;

  //* Añade la clase hide a los elementos que queremos ocultar (respuestas y boton previo) y muestra el boton reset
  choicesPara.classList.add("hide");
  prevButton.classList.add("hide");
  resetButton.classList.remove("hide");
}

function resetQuiz() {
  //* Reset de variables de tracking
  count = 0;
  score = 0;
  correctAnswer = false;
  prevFlag = false;

  //* Vacia el texto parrafo con el resultado
  resultsPara.innerText = "";

  //* Oculta el boton reset y muestra otra vez las preguntas
  choicesPara.classList.remove("hide");
  resetButton.classList.add("hide");

  suffleQuestions();
  pedirNum();
  renderQuestion();
  reset();
  startTimer();
}

/* RELOJ */

const FULL_DASH_ARRAY = 283;
const RESET_DASH_ARRAY = `-57 ${FULL_DASH_ARRAY}`;

//All buttons
let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");

//DOM elements
let timer = document.querySelector("#base-timer-path-remaining");
let timeLabel = document.getElementById("base-timer-label");

//Time related vars
const TIME_LIMIT = 120; //in seconds
let timePassed = -1;
let timeLeft = TIME_LIMIT;
let timerInterval = null;

function reset() {
  clearInterval(timerInterval);
  resetVars();
  startBtn.innerHTML = "Start";
  timer.setAttribute("stroke-dasharray", RESET_DASH_ARRAY);
}

function start(withReset = false) {
  setDisabled(startBtn);
  removeDisabled(stopBtn);
  if (withReset) {
    resetVars();
  }
  startTimer();
}

function stop() {
  setDisabled(stopBtn);
  removeDisabled(startBtn);
  startBtn.innerHTML = "Continue";
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    timeLabel.innerHTML = formatTime(timeLeft);
    setCircleDasharray();

    if (timeLeft === 0) {
      timeIsUp();
    }
  }, 1000);
}

window.addEventListener("load", () => {
  timeLabel.innerHTML = formatTime(TIME_LIMIT);
  //setDisabled(stopBtn);

  //Start the countdown
  startTimer();
});

//---------------------------------------------
//HELPER METHODS
//---------------------------------------------
function setDisabled(button) {
  button.setAttribute("disabled", "disabled");
}

function removeDisabled(button) {
  button.removeAttribute("disabled");
}
function timeIsUp() {
  setDisabled(startBtn);
  removeDisabled(stopBtn);
  clearInterval(timerInterval);
  let confirmReset = confirm(
    "Se acabó el tiempo! Quieres seguir intentándolo?"
  );
  if (confirmReset) {
    reset();
    startTimer();
  } else {
    reset();
  }
}

function resetVars() {
  removeDisabled(startBtn);
  setDisabled(stopBtn);
  timePassed = -1;
  timeLeft = TIME_LIMIT;
  console.log(timePassed, timeLeft);
  timeLabel.innerHTML = formatTime(TIME_LIMIT);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  console.log("setCircleDashArray: ", circleDasharray);
  timer.setAttribute("stroke-dasharray", circleDasharray);
}
