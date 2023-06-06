//! *************selector
const rockImg = document.getElementById("rock");
const paperImg = document.getElementById("paper");
const scissorImg = document.getElementById("scissor");

//? seçilen elemenların taşıyıcıları******
const yourChoiceDiv = document.getElementById("your-choice");

//! *******veriables
let image = document.createElement("img");
//! **************event listeners
rockImg.addEventListener("click", () => {
  image.src = src = "./assets/rock.png";
  image.alt = "rock";
  yourChoiceDiv.appendChild(image);
  //? ****inner html
  //   yourChoiceDiv.innerHTML = `<img src="./assets/rock.png"> alt="rock"`;
});
