function newElement() {
var inputValue = document.getElementById("myInput").value;
if (inputValue === '') {
  alert("Task is empty! Enter Something");
  return;
}
    var li = document.createElement("li");
  
    // checkbox for each task
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.style.marginRight = "10px"; 
    li.appendChild(checkbox);

    var text = document.createTextNode(inputValue);
    li.appendChild(text);

     // delete button for each task
     var deleteButton = document.createElement("button");
      deleteButton.innerHTML = "Delete";
      deleteButton.className = "deleteBtn";
      li.appendChild(deleteButton);

  //  toggle  function to completed class on checkbox click
     checkbox.addEventListener("click", function() {
     if (checkbox.checked) {
      li.classList.add("completed");
    } else {
      li.classList.remove("completed");
    }
  });
  // delete the task on delete button click
  deleteButton.addEventListener("click", function() {
    li.remove();
  });

  // Adding task to the list
  document.getElementById("myUL").appendChild(li);

  // Clearing the input field
  document.getElementById("myInput").value = "";
}

