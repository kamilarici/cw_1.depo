//! *************selector
const selectionArticle = document.querySelector(".selection");

//? seçilen elemenların taşıyıcıları******
const yourChoiceDiv = document.getElementById("your-choice");
const pcChoiceDiv = document.getElementById("pc-choice");
//? *****message
const messagePar = document.querySelector(".message");

//? ***score****
const scoreCardSection = document.querySelector(".score-card");
const pcScoreSpan = document.getElementById("pc-score");
const yourScoreSpan = document.getElementById("your-score");
const modalCardSectin = document.querySelector(".modal-card");
//! *******veriables
let userSelectImg = document.createElement("img");
let pcSelectImg = document.createElement("img");
const YELLOW = "#ffc538";
const RED = "#fb778b";
const GREEN = "#5ab7ac";
let random;

//! **************event listeners

selectionArticle.addEventListener("click", (e) => {
  if (e.target.id) {
  }

  userSelectImg.src = src = `./assets/${e.target.id}.png`;
  userSelectImg.alt = `${e.target.id}`;
  yourChoiceDiv.appendChild(userSelectImg);
  createPcSelection();
});
//! ******function*******
const createPcSelection = () => {
  const pcArr = ["rock", "paper", "scissor"];
  pcRandom = pcArr[Math.floor(Math.random() * 3)];
  pcSelectImg.src = src = `./assets/${pcRandom}.png`;
  pcSelectImg.alt = pcRandom;
  pcChoiceDiv.appendChild(pcSelectImg);
  calculateResult();
};

const calculateResult = () => {
  if (userSelectImg.alt === pcRandom) {
    draw();
  } else {
    if (userSelectImg.alt === "rock") {
      pcRandom === "paper" ? youLost() : youWin();
    } else if (userSelectImg.alt === "scissor") {
      pcRandom === "rock" ? youLost() : youWin();
    } else if (userSelectImg.alt === "paper") {
      pcRandom === "scissor" ? youLost() : youWin();
    }
  }
  if (pcScoreSpan.textContent === "10" || yourScoreSpan.textContent === "10") {
    openModal();
  }
};

const draw = () => {
  messagePar.textContent = "its a draw";
  scoreCardSection.style.color = YELLOW;
  messagePar.style.backgraundColor = YELLOW;
};

const youLost = () => {
  messagePar.textContent = "you lost";
  scoreCardSection.style.color = RED;
  messagePar.style.backgraundColor = RED;
  pcScoreSpan.textContent++;
};
const youWin = () => {
  messagePar.textContent = "you win";
  scoreCardSection.style.color = GREEN;
  messagePar.style.backgraundColor = GREEN;
  yourScoreSpan.textContent++;
};
const openModal = () => {
  modalCardSectin.classList.add("show");
};

//? *****resimler yakala
// const rockImg = document.getElementById("rock");
// const paperImg = document.getElementById("paper");
// const scissorImg = document.getElementById("scissor");

// rockImg.addEventListener("click", () => {
//   image.src = src = "./assets/rock.png";
//   image.alt = "rock";
//   yourChoiceDiv.appendChild(image);
//   //? ****inner html
//   //   yourChoiceDiv.innerHTML = `<img src="./assets/rock.png"> alt="rock"`;
// });
// paperImg.addEventListener("click", () => {
//   image.src = src = "./assets/paper.png";
//   image.alt = "paper";
//   yourChoiceDiv.appendChild(image);
//   //? ****inner html
//   //   yourChoiceDiv.innerHTML = `<img src="./assets/rock.png"> alt="rock"`;
// });
// scissorImg.addEventListener("click", () => {
//   image.src = src = "./assets/scissor.png";
//   image.alt = "scissor";
//   yourChoiceDiv.appendChild(image);
//? ****inner html
//   yourChoiceDiv.innerHTML = `<img src="./assets/rock.png"> alt="rock"`;
// });
