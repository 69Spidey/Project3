const todoInput = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");

function addTodo() {
  if (todoInput.value === "") {
    alert("Please enter a task");
  } else {
    const li = document.createElement("li");
    li.innerHTML = todoInput.value;
    todoList.appendChild(li);
    todoInput.value = "";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });
  }
}
addBtn.addEventListener("click", addTodo);
