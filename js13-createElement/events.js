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
const ul = document.createElement("ul");
document.querySelector(".item-list").before(ul);

const addbutton = document.querySelector("#btn");
addbutton.addEventListener("click", (e) => {
  //   console.log("btn click");
  //   console.log(e.target);
  //   console.log(e.target.value);
  if (!input.value) {
    alert("lütfen değer giriniz");
  } else {
    const input = document.querySelector("#input");
    const li = document.createElement("li");
    ul.appendChild(li);
    const textli = document.createTextNode(input.value);
    li.appendChild(textli);
    input.value = "";
    input.focus();
  }
});
document.querySelector("#input").addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    addbutton.click();
  }
});
