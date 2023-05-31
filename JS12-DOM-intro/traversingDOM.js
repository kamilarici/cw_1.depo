const addItem = document.querySelector(".add-item");
console.log(addItem);

console.log(addItem.parentElement);
console.log(addItem.parentNode);

const list = document.querySelector(".list");
console.log(list.textContent);
console.log(list.closest("section"));

console.log(list.closest("body").querySelector("header h1").innerText);

console.log(addItem.children);
console.log(addItem.children[2]);
console.log(addItem.firstChild);
console.log(addItem.lastElementChild);
console.log(addItem.firstElementChild);

console.log(document.querySelector("body").firstElementChild);

const ul = document.querySelector("ul");
console.log(ul);
const lists = ul.children;

const js = lists[2];
console.log(js.innerHTML);
console.log(js.previousElementSibling.previousElementSibling.innerHTML);
console.log(js.nextElementSibling.nextElementSibling.innerHTML);
