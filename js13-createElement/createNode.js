console.log("merhaba");

const langInput = document.querySelector("#input");

const newP = document.createElement("p");
// const text = document.createTextNode("bu bir yeni p elementidir");
const text = document.createTextNode(langInput.value);
console.log(text);

newP.appendChild(text);

// const main = document.querySelector("main");

// main.appendChild(newP);

const itemlistsection = document.querySelector(".item-list");

itemlistsection.before(newP);

newP.id = "paragraf";
newP.className = "par";

newP.setAttribute("id", "para");

newP.classList.add("bg-danger", "border");

console.log(newP.classList.contains("par"));

if (newP.classList.contains("par")) {
  newP.classList.add("parr");
}

console.log(newP.id);
console.log(newP.getAttribute("id"));

const newDiv = document.createElement("div");
newDiv.id = "my-div";

itemlistsection.after(newDiv);
newDiv.innerHTML = `
<h2>Languages </h2>
<ul>
<li>c++</li>
<li>java</li>
<li>c</li>
<li>go</li>
</ul>`;
