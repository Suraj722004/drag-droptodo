let inputs = document.querySelector("#inp");
let text = document.querySelector(".list1");
let text1 = document.querySelector(".list22");

function add() {
  if (inputs.value.trim() === "") {
    alert("Please enter the task");
  } else {
    let newElement = createListItem(inputs.value.trim());
    text.appendChild(newElement);
    inputs.value = "";
  }
}

function add1() {
  if (inputs.value.trim() === "") {
    alert("Please enter the task");
  } else {
    let newElement1 = createListItem(inputs.value.trim());
    text1.appendChild(newElement1);
    inputs.value = "";
  }
}

function createListItem(task) {
  let listItem = document.createElement("li");
  listItem.innerHTML = `${task} <i class="fas fa-trash"></i>`;
  listItem.setAttribute("draggable", "true");


  listItem.addEventListener("dragstart", dragStart);
  listItem.addEventListener("dragend", dragEnd);

  
  listItem.querySelector("i").addEventListener("click", () => {
    listItem.remove();
  });

  return listItem;
}


let draggedItem = null;

function dragStart(e) {
  draggedItem = this; 
  setTimeout(() => {
    this.style.display = "none"; 
  }, 0);
}

function dragEnd() {
  setTimeout(() => {
    this.style.display = "block"; 
    draggedItem = null; 
  }, 0);
}

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  if (draggedItem) {
    this.appendChild(draggedItem); 
  }
}


[text, text1].forEach((list) => {
  list.addEventListener("dragover", dragOver);
  list.addEventListener("drop", drop);
});
