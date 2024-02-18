function addTodo() {
    var input = document.getElementById("todo-input").value;
    if (input === "") {
        alert("Please enter a task!");
        return;
    }

    var ul = document.getElementById("todo-list");
    var li = document.createElement("li");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");

    var textSpan = document.createElement("span");
    textSpan.textContent = input;

    li.appendChild(checkbox);
    li.appendChild(textSpan);

    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            textSpan.classList.add("completed");
            ul.appendChild(li);
        } else {
            textSpan.classList.remove("completed");
            ul.insertBefore(li, ul.firstChild);
        }
    });

    ul.insertBefore(li, ul.firstChild);
    document.getElementById("todo-input").value = "";
}
