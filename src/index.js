document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("create-task-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const list = document.getElementById("tasks")
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = "X";
    li.textContent = event.target["new-task-description"].value;
    console.log(li)
    list.append(li);
    li.append(button);
    document.getElementById("create-task-form").reset()
  })
  document.getElementById("tasks").addEventListener("click", (event) => {
    document.querySelector("li").remove();
  })
});

  // add event listener to input, event is "submit" the form 
  // with each new task, create a li element and append it to the ul 
  // list item textContent is the event.target[].value