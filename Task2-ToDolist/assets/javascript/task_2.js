// Arrays to store tasks in the "to-do" and "completed" categories
let to_do_array = [];
let complete_array = [];
let array1 = [];
let array2 = [];
let to_do_deleted_array = [];
let complete_deleted_array = [];

// Add a new task to the "to-do" list
function myfunc() {
    let data = document.getElementById("input_field").value; // Retrieve input field value
    if (data == "" || data == undefined) {
        alert("Please Enter a Task"); // Notify the user if input is empty
        return;
    } else {
        let count = 0;
        to_do_array.forEach((item) => {
            if (item == data) {
                // Prevent duplicate tasks
                showToaster("Item Already Exists.", 3000);
                count++;
                return;
            }
        });
        complete_array.forEach((item) => {
            if (item == data) {
                showToaster("Item Already Exists.", 3000);
                count++;
                return;
            }
        });
        if (count == 0) {
            showToaster("Item is Added.", 3000);
            to_do_array.push(data); // Add task to "to-do" array if no duplicates
        }
        document.getElementById("input_field").value = ""; // Clear input field
    }
    load_to_do_list(); // Refresh the "to-do" list UI
    addEvents(); // Add event listeners to new tasks
    save_local_storage(); // Save updated data to local storage
}

// Move selected tasks from "to-do" to "completed"
function myfunc1() {
    if (to_do_array.length === 0) {
        alert("No tasks available to shift.");
        return;
    }

    let selected = [];
    array1.forEach((item, i) => {
        if (item === 1) selected.push(i);
    });

    if (selected.length === 0) {
        alert("Select a task to shift.");
        return;
    }

    selected.reverse().forEach((index) => {
        let task = to_do_array.splice(index, 1)[0];
        if (task) {
            complete_array.push(task);
        }
    });

    showToaster("item is shifted to Completed.", 3000);

    // Refresh UI and save to local storage
    load_to_do_list();
    load_complete_list();
    addEvents();
    save_local_storage();
}

// Remove selected tasks from both "to-do" and "completed"
function myfunc2() {
    to_do_deleted_array = [];
    complete_deleted_array = [];

    if (to_do_array.length === 0 && complete_array.length === 0) {
        alert("No tasks available to remove.");
        return;
    }

    let selectedToDo = [];
    let selectedComplete = [];
    array1.forEach((item, i) => {
        if (item === 1) selectedToDo.push(i);
    });
    array2.forEach((item, i) => {
        if (item === 1) selectedComplete.push(i);
    });

    if (selectedToDo.length === 0 && selectedComplete.length === 0) {
        alert("Select a task to remove.");
        return;
    }

    // Remove tasks and store them in deleted arrays
    selectedToDo.reverse().forEach((index) => {
        to_do_deleted_array.push(to_do_array.splice(index, 1)[0]);
    });
    selectedComplete.reverse().forEach((index) => {
        complete_deleted_array.push(complete_array.splice(index, 1)[0]);
    });

    showToaster("Task(s) removed. Undo available.", 5000, undo_button);

    // Refresh UI and save to local storage
    load_to_do_list();
    load_complete_list();
    addEvents();
    save_local_storage();
}

// Move selected tasks from "completed" back to "to-do"
function myfunc3() {
    if (complete_array.length === 0) {
        alert("No task to shift back to To-Do.");
        return;
    }

    let selected = [];
    array2.forEach((item, i) => {
        if (item === 1) selected.push(i);
    });

    if (selected.length === 0) {
        alert("Select a task to shift.");
        return;
    }

    selected.reverse().forEach((index) => {
        let task = complete_array.splice(index, 1)[0];
        if (task) {
            to_do_array.push(task);
        }
    });

    showToaster("item is shifted to To-Do list.", 3000);
    load_to_do_list();
    load_complete_list();
    addEvents();
    save_local_storage();
}

// Render the "to-do" list UI
function load_to_do_list() {
    let container = document.getElementById("container1_main");
    container.innerHTML = ""; // Clear existing content
    let i = 0;
    to_do_array.forEach((item) => {
        if (item == "") {
        } else {
            let element = document.createElement("div"); // Create container for each task
            element.id = "check_to_do_list" + i; // Assign unique ID
            i = i + 1;
            element.textContent = item; // Display task text
            element.style.borderBottom = "2px solid black"; // Add styling
            element.style.padding = "10px";
            container.appendChild(element); // Add task to container
        }
    });
}

// Render the "completed" list UI
function load_complete_list() {
    let container = document.getElementById("container2_main");
    container.innerHTML = ""; // Clear existing content
    let i = 0;
    complete_array.forEach((item) => {
        if (item == "") {
        } else {
            let element = document.createElement("div"); // Create container for each task
            element.id = "check_complete_list" + i; // Assign unique ID
            i = i + 1;
            element.textContent = item; // Display task text
            element.style.borderBottom = "2px solid black"; // Add styling
            element.style.padding = "10px";
            container.appendChild(element); // Add task to container
        }
    });
}

// Add event listeners to "to-do" and "completed" tasks
function addEvents() {
    to_do_array.forEach((_, i) => {
        let newelement = document.getElementById("check_to_do_list" + i);
        newelement.addEventListener("click", () => {
            clicked_to_do(i); // Handle click event for "to-do" tasks
        });
        array1[i] = 0; // Initialize selection state
    });
    complete_array.forEach((_, i) => {
        let newelement = document.getElementById("check_complete_list" + i);
        newelement.addEventListener("click", () => {
            clicked_complete(i); // Handle click event for "completed" tasks
        });
        array2[i] = 0; // Initialize selection state
    });
}

// Toggle selection state for "to-do" tasks
function clicked_to_do(i) {
    let element = document.getElementById("check_to_do_list" + i);
    if (array1[i] == 0) {
        element.style.backgroundColor = "yellow"; // Highlight selected task
        array1[i] = 1;
    } else {
        element.style.backgroundColor = "white"; // Remove highlight
        array1[i] = 0;
    }
}

// Toggle selection state for "completed" tasks
function clicked_complete(i) {
    let element = document.getElementById("check_complete_list" + i);
    if (array2[i] == 0) {
        element.style.backgroundColor = "yellow"; // Highlight selected task
        array2[i] = 1;
    } else {
        element.style.backgroundColor = "white"; // Remove highlight
        array2[i] = 0;
    }
}

// Save tasks to local storage
function save_local_storage() {
    localStorage.setItem("to_do_array", JSON.stringify(to_do_array));
    localStorage.setItem("complete_array", JSON.stringify(complete_array));
}

// Load tasks from local storage
function load_local_storage() {
    try {
        let storedToDo = localStorage.getItem("to_do_array");
        let storedComplete = localStorage.getItem("complete_array");

        to_do_array = storedToDo ? JSON.parse(storedToDo) : [];
        complete_array = storedComplete ? JSON.parse(storedComplete) : [];
    } catch (e) {
        console.error("Error loading data from local storage:", e);
        to_do_array = [];
        complete_array = [];
    }
    load_to_do_list();
    load_complete_list();
    addEvents();
    save_local_storage();
}

// Reset all tasks and clear local storage
function reset() {
    let answer = confirm("Do you want to reset?");
    if (answer) {
        localStorage.clear(); // Clear local storage
        to_do_array = []; // Reset "to-do" array
        complete_array = [];
        showToaster("Reset Done", 3000); // Reset "completed" array
        load_to_do_list(); // Refresh "to-do" list UI
        load_complete_list(); // Refresh "completed" list UI
        addEvents(); // Add event listeners to tasks
    }
}
let activeInterval = null; // Track the active interval

function toggleButtons(state) {
    // Get all buttons that should be disabled/enabled
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.disabled = !state; // Disable or enable based on the state
        button.style.cursor = state ? "pointer" : "not-allowed"; // Visual feedback
        button.style.opacity = state ? "1" : "0.6"; // Make disabled buttons appear dimmed
    });
}

function undo_button() {
    // Restore tasks from deleted arrays
    while (to_do_deleted_array.length > 0) {
        const task = to_do_deleted_array.pop(); // Remove last element
        if (task) {
            to_do_array.push(task);
        }
        // Restore to "to-do" list
    }

    while (complete_deleted_array.length > 0) {
        const task = complete_deleted_array.pop(); // Remove last element
        if (task) {
            complete_array.push(task);
        } // Restore to "completed" list
    }

    // Refresh UI and save to local storage
    load_to_do_list();
    load_complete_list();
    addEvents();
    save_local_storage();
}

function showToaster(message, duration = 3000, undoCallback = null) {
    const toaster = document.getElementById("toaster");
    const toasterMessage = document.getElementById("toaster-message");
    const toasterProgress = document.getElementById("toaster-progress");

    toggleButtons(false);

    // Clear any existing progress and reset
    if (activeInterval) {
        clearInterval(activeInterval);
        activeInterval = null;
    }

    toasterProgress.innerHTML = ""; // Clear progress bar
    const progressDiv = document.createElement("div");
    progressDiv.style.width = "0%";
    toasterProgress.appendChild(progressDiv);

    // Set toaster message and display it
    toasterMessage.textContent = message;
    toaster.classList.remove("hidden");

    // Add Undo button if undoCallback is provided
    if (undoCallback) {
        const undoButton = document.createElement("button");
        undoButton.textContent = "UNDO";
        undoButton.style.marginLeft = "10px";

        undoButton.style.backgroundColor = "blueviolet";
        undoButton.style.border = "none";
        undoButton.style.cursor = "pointer";
        undoButton.style.color = "black";
        undoButton.style.borderRadius = "5px";
        undoButton.addEventListener("click", () => {
            undoCallback();
            clearInterval(activeInterval);
            toaster.classList.add("hidden");
            toggleButtons(true); // Re-enable buttons
        });
        toasterMessage.appendChild(undoButton);
    }

    // Start the progress animation
    const startTime = Date.now();
    activeInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min((elapsed / duration) * 100, 100);
        progressDiv.style.width = `${progress}%`;

        if (progress >= 100) {
            clearInterval(activeInterval);
            activeInterval = null;
            toaster.classList.add("hidden");
            toggleButtons(true);
        }
    }, 50);

    // Ensure the toaster hides after the full duration
    setTimeout(() => {
        if (activeInterval) {
            clearInterval(activeInterval);
            activeInterval = null;
            toaster.classList.add("hidden");
            toggleButtons(true);
        }
    }, duration);
}

// Add event listeners to buttons
let button1_upper_main = document.getElementById("button1_upper_main");
button1_upper_main.addEventListener("click", myfunc); // Add task to "to-do"

let button1_lower_main = document.getElementById("button1_lower_main");
button1_lower_main.addEventListener("click", myfunc1); // Move task to "completed"

let button2_lower_main = document.getElementById("button2_lower_main");
button2_lower_main.addEventListener("click", myfunc2); // Remove selected tasks

let button3_lower_main = document.getElementById("button3_lower_main");
button3_lower_main.addEventListener("click", myfunc3); // Move task back to "to-do"

let button_navbar = document.getElementById("button_navbar");
button_navbar.addEventListener("click", reset); // Reset all tasks

// Load tasks from local storage on page load
load_local_storage();
