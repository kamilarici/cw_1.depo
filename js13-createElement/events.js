console.log("events");

const h1 = document.querySelector("header h1");

h1.onmouseover = function () {
  h1.style.color = "aqua";
};
h1.onmouseout = function () {
  h1.style.color = "blue";
};

const phello = () => {
  document.write("hello");
};

phello();

window.addEventListener("load", () => {
  document.getElementById("input").focus();
});

const addbutton = document.querySelector("#btn");
addbutton.addEventListener("click", () => {
  console.log("btn click");
});
