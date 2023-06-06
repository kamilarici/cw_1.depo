//! *************selector
const selectionArticle = document.querySelector(".selection");

//? seçilen elemenların taşıyıcıları******
const yourChoiceDiv = document.getElementById("your-choice");
const pcChoiceDiv = document.getElementById("pc-choice");

//! *******veriables
let userSelectImg = document.createElement("img");
let pcSelectImg = document.createElement("img");
//! **************event listeners

selectionArticle.addEventListener("click", (e) => {
  if (e.target.id) {
  }

  userSelectImg.src = src = `./assets/${e.target.id}.png`;
  userSelectImg.alt = `${e.target.id}`;
  yourChoiceDiv.appendChild(userSelectImg);
  createPcSelection();
});

const createPcSelection = () => {
  const pcArr = ["rock", "paper", "scissor"];
  const pcRandom = pcArr[Math.floor(Math.random() * 3)];
  pcSelectImg.src = src = `./assets/${pcRandom}.png`;
  userSelectImg.alt = pcRandom;
  pcChoiceDiv.appendChild(pcSelectImg);
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
