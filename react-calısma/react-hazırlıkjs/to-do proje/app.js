console.log("to-do");
// add butonu dinle
//input değeri al
//yeni todo itemelementi oluştur
// ve git bunu dom içerisine koy

const addTaskBottom = document.querySelector(".addTask");
const todoInput = document.querySelector(".todoInput");
const todosConteiner = document.querySelector(".todos");

const toggleComplete = (event) => {
  event.currentTarget.parentElement.classList.toggle("completed");
};

const removeItem = (event) => {
  todosConteiner.removeChild(event.currentTarget.parentElement);
};
const renderTodoItem = (todoText) => {
  const todoItemElement = document.createElement("li");
  todoItemElement.classList.add("todoItem");

  const completeButton = document.createElement("button");
  completeButton.classList.add("completeButton");
  todoItemElement.appendChild(completeButton);
  completeButton.addEventListener("click", toggleComplete);
  completeButton.innerText = "complete";

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  todoItemElement.appendChild(deleteButton);
  deleteButton.addEventListener("click", removeItem);
  deleteButton.innerText = "delete";

  const textElement = document.createElement("p");
  textElement.classList.add("todoText");
  textElement.innerText = todoText;
  todoItemElement.appendChild(textElement);

  todosConteiner.appendChild(todoItemElement);
  todoInput.value = "";
  todoInput.focus();
};

const addTask = () => {
  if (todoInput.value === "") {
    alert("input boş olamaz");
  } else {
    //? asıl işlemin gerçekleşeceği yer..bir fonk.çağıralım ve içine inputun valusunu verelim
    renderTodoItem(todoInput.value);
  }
  console.log(todoInput.value);
};

addTaskBottom.addEventListener("click", addTask);
