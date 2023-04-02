let listSection = document.getElementById("list-container");
let btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", () => {
    addTask();
});

function addTask() {
    let inputName = document.getElementById("task-name").value;
    let inputDescription = document.getElementById("description").value;
    if (inputName.length < 5 || inputDescription.length < 10) {
        alert("Task name must be above 5 characters and description must be above 10 characters!")
    } else {
        // create div class row
        let row = document.createElement("div");
        row.classList.add("row");
        let disabledInput = true;

        // create input de chua name
        let name = document.createElement("input");
        name.type = "text";
        name.value = inputName;
        name.disabled = disabledInput;

        // create description 
        let description = document.createElement("input");
        description.type = "text";
        description.value = inputDescription;
        description.disabled = disabledInput;

        // create delete button
        let delDiv = document.createElement("div")
        let btnDel = document.createElement("button");
        btnDel.innerHTML = "del";
        delDiv.appendChild(btnDel);

        let editDiv = document.createElement("div");
        let btnEdit = document.createElement("button");
        btnEdit.innerHTML = "edit";
        editDiv.appendChild(btnEdit);


        // add to row
        row.appendChild(name);
        row.appendChild(description);
        row.appendChild(delDiv);
        row.appendChild(editDiv);

        listSection.appendChild(row);

        // add listener cho nut delete
        btnDel.addEventListener("click", () => {
            listSection.removeChild(row);
        });

        btnEdit.addEventListener("click", () => {
            name.disabled = !disabledInput;
            description.disabled = !disabledInput;
            btnEdit.innerHTML = disabledInput ? "Update" : "Edit";
            disabledInput = !disabledInput;


        });
    }
}