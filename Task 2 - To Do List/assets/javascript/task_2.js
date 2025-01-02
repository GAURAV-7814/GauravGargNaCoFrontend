// Arrays to store tasks in the "to-do" and "completed" categories
let to_do_array = [];
let complete_array = [];

// Function to add a new task to the "to-do" list
function myfunc() {
    let data = document.getElementById("input_field").value; // Get input field value
    if (data == "" || data == undefined) {
        // Check if input is empty or undefined
        alert("Please Enter a Task"); // Alert the user
    } else {
        to_do_array.push(data); // Add the task to the "to-do" array
    }
    load_to_do_list(); // Reload the "to-do" list UI
}

// Function to move selected tasks from "to-do" to "completed"
function myfunc1() {
    if (to_do_array.length == 0) {
        // Check if "to-do" list is empty
        alert("No task to shift");
        return;
    }
    let check_list = []; // Array to track which tasks are checked
    let i = 0;
    let count = 0; // Counter for checked tasks

    // Iterate through "to-do" tasks and check their checkbox state
    to_do_array.forEach((item) => {
        let check = document.getElementById("checkbox_to_do_list" + i).checked;
        i = i + 1;
        check_list.push(check);
        if (check == true) {
            // Count the checked items
            count++;
        }
    });

    if (count == 0) {
        // If no tasks are selected
        alert("Select a Task to shift");
        return;
    }

    i = 0;
    // Move selected tasks to the "completed" array
    check_list.forEach((item) => {
        if (item == true) {
            let data = to_do_array.splice(i, 1); // Remove task from "to-do" array
            complete_array.push(data); // Add task to "completed" array
        } else {
            i = i + 1;
        }
    });

    // Reload the "to-do" and "completed" list UIs
    load_to_do_list();
    load_complete_list();
}

// Function to move selected tasks from "completed" back to "to-do"
function myfunc2() {
    if (complete_array.length == 0) {
        // Check if "completed" list is empty
        alert("No task to shift");
        return;
    }
    let check_list = []; // Array to track which tasks are checked
    let i = 0;
    let count = 0; // Counter for checked tasks

    // Iterate through "completed" tasks and check their checkbox state
    complete_array.forEach((item) => {
        let check = document.getElementById(
            "checkbox_complete_list" + i
        ).checked;
        i = i + 1;
        check_list.push(check);
        if (check == true) {
            // Count the checked items
            count++;
        }
    });

    if (count == 0) {
        // If no tasks are selected
        alert("Select a Task to shift");
        return;
    }

    i = 0;
    // Move selected tasks back to the "to-do" array
    check_list.forEach((item) => {
        if (item == true) {
            let data = complete_array.splice(i, 1); // Remove task from "completed" array
            to_do_array.push(data); // Add task to "to-do" array
        } else {
            i = i + 1;
        }
    });

    // Reload the "to-do" and "completed" list UIs
    load_to_do_list();
    load_complete_list();
}

// Function to render the "to-do" list
function load_to_do_list() {
    let container = document.getElementById("container1_main");
    container.innerHTML = ""; // Clear existing content
    let i = 0;

    // Iterate through "to-do" tasks and create UI elements
    to_do_array.forEach((item) => {
        let element = document.createElement("div"); // Container for each task
        let checkbox = document.createElement("INPUT"); // Checkbox for task
        checkbox.setAttribute("type", "checkbox");
        checkbox.id = "checkbox_to_do_list" + i; // Unique ID for each checkbox
        i = i + 1;
        let data = document.createElement("div"); // Div for task text
        data.textContent = item;
        // Styling for task container
        element.style.borderBottom = "2px solid black";
        element.style.padding = "10px";
        element.style.display = "flex";
        element.style.gap = "15px";
        // Append checkbox and task text to the container
        element.appendChild(checkbox);
        element.appendChild(data);
        container.appendChild(element); // Add task container to "to-do" list
    });
}

// Function to render the "completed" list
function load_complete_list() {
    let container = document.getElementById("container2_main");
    container.innerHTML = ""; // Clear existing content
    let i = 0;

    // Iterate through "completed" tasks and create UI elements
    complete_array.forEach((item) => {
        let element = document.createElement("div"); // Container for each task
        let checkbox = document.createElement("INPUT"); // Checkbox for task
        checkbox.setAttribute("type", "checkbox");
        checkbox.id = "checkbox_complete_list" + i; // Unique ID for each checkbox
        i = i + 1;
        let data = document.createElement("div"); // Div for task text
        data.textContent = item;
        // Styling for task container
        element.style.borderBottom = "2px solid black";
        element.style.padding = "10px";
        element.style.display = "flex";
        element.style.gap = "15px";
        // Append checkbox and task text to the container
        element.appendChild(checkbox);
        element.appendChild(data);
        container.appendChild(element); // Add task container to "completed" list
    });
}

// Add event listeners to buttons
let button_upper_main = document.getElementById("button_upper_main");
button_upper_main.addEventListener("click", myfunc); // Add task to "to-do"

let button1_lower_main = document.getElementById("button1_lower_main");
button1_lower_main.addEventListener("click", myfunc1); // Move task to "completed"

let button2_lower_main = document.getElementById("button2_lower_main");
button2_lower_main.addEventListener("click", myfunc2); // Move task back to "to-do"
