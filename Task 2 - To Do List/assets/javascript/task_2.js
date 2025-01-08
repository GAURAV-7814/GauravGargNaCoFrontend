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
                let notification = document.getElementById(
                    "notification_upper_main"
                );
                document.getElementById(
                    "content_toaster_upper_main"
                ).textContent = "Item Already Exists.";
                notification.style.backgroundColor = "red";
                notification.style.transform = "translate(0)";
                setTimeout(() => {
                    notification.style.transform = "translate(300px)";
                }, 5000);
                // Prevent duplicate tasks
                count++;
                return;
            }
        });
        complete_array.forEach((item) => {
            if (item == data) {
                let notification = document.getElementById(
                    "notification_upper_main"
                );
                document.getElementById(
                    "content_toaster_upper_main"
                ).textContent = "Item Already Exists.";
                notification.style.backgroundColor = "red";
                notification.style.transform = "translate(0)";
                setTimeout(() => {
                    notification.style.transform = "translate(400px)";
                }, 5000); // Prevent duplicate tasks
                count++;
                return;
            }
        });
        if (count == 0) {
            let notification = document.getElementById(
                "notification_upper_main"
            );
            document.getElementById("content_toaster_upper_main").textContent =
                "Item Is Added.";
            notification.style.backgroundColor = "rgb(0, 255, 0)";
            notification.style.transform = "translate(0)";
            setTimeout(() => {
                notification.style.transform = "translate(400px)";
            }, 5000);
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
    if (to_do_array.length == 0) {
        alert("No task to shift"); // Notify user if "to-do" list is empty
        return;
    }

    let count = 0;
    let i = 0;
    array1.forEach((item) => {
        if (item == 1) {
            count++;
        }
    });
    if (count == 0) {
        alert("Select a Task to shift"); // Notify user if no task is selected
        return;
    }
    array1.forEach((item) => {
        if (item == 1) {
            let notification = document.getElementById(
                "notification_upper_main"
            );
            document.getElementById("content_toaster_upper_main").textContent =
                "Item Is Shifted to Completed  List.";
            notification.style.backgroundColor = "rgb(0, 255, 0)";
            notification.style.transform = "translate(0)";
            setTimeout(() => {
                notification.style.transform = "translate(400px)";
            }, 5000);
            let data = to_do_array.splice(i, 1); // Remove task from "to-do"
            complete_array.push(data); // Add task to "completed"
        } else {
            i = i + 1;
        }
    });
    load_to_do_list(); // Refresh "to-do" list UI
    load_complete_list(); // Refresh "completed" list UI
    addEvents(); // Add event listeners to updated tasks
    save_local_storage(); // Save updated data to local storage
}

// Remove selected tasks from both "to-do" and "completed"
function myfunc2() {
    to_do_deleted_array = [];
    complete_deleted_array = [];
    if (to_do_array.length == 0 && complete_array.length == 0) {
        alert("No tasks available to remove"); // Notify user if lists are empty
        return;
    }
    let count = 0;
    array1.forEach((item) => {
        if (item == 1) {
            count++;
        }
    });
    array2.forEach((item) => {
        if (item == 1) {
            count++;
        }
    });
    if (count == 0) {
        alert("Select a Task to Remove"); // Notify user if no task is selected
        return;
    }
    let i = 0;
    array1.forEach((item) => {
        if (item == 1) {
            let data = to_do_array.splice(i, 1);
            to_do_deleted_array.push(data); // Remove task from "to-do"
        } else {
            i = i + 1;
        }
    });
    i = 0;
    array2.forEach((item) => {
        if (item == 1) {
            let data = complete_array.splice(i, 1); // Remove task from "completed"
            complete_deleted_array.push(data);
        } else {
            i = i + 1;
        }
    });
    document.getElementById("button1_toaster_upper_main").disabled = false;
    document.getElementById("button1_toaster_upper_main").style.cursor = "pointer";
    let notification = document.getElementById("notification_upper_main");
    document.getElementById("content_toaster_upper_main").textContent =
        "Item Is Removed.";
    notification.style.backgroundColor = "red";
    notification.style.transform = "translate(0)";
    setTimeout(() => {
        notification.style.transform = "translate(300px)";
    }, 5000);
    load_to_do_list(); // Refresh "to-do" list UI
    load_complete_list(); // Refresh "completed" list UI
    addEvents(); // Add event listeners to updated tasks
    save_local_storage(); // Save updated data to local storage
}

// Move selected tasks from "completed" back to "to-do"
function myfunc3() {
    if (complete_array.length == 0) {
        alert("No task to shift"); // Notify user if "completed" list is empty
        return;
    }
    let i = 0;
    let count = 0;
    array2.forEach((item) => {
        if (item == 1) {
            count++;
        }
    });
    if (count == 0) {
        alert("Select a Task to shift"); // Notify user if no task is selected
        return;
    }
    array2.forEach((item) => {
        if (item == 1) {
            let notification = document.getElementById(
                "notification_upper_main"
            );
            document.getElementById("content_toaster_upper_main").textContent =
                "Item Is Shifted to To-Do List.";
            notification.style.backgroundColor = "rgb(0, 255, 0)";
            notification.style.transform = "translate(0)";
            setTimeout(() => {
                notification.style.transform = "translate(300px)";
            }, 5000);
            let data = complete_array.splice(i, 1); // Remove task from "completed"
            to_do_array.push(data); // Add task to "to-do"
        } else {
            i = i + 1;
        }
    });
    load_to_do_list(); // Refresh "to-do" list UI
    load_complete_list(); // Refresh "completed" list UI
    addEvents(); // Add event listeners to updated tasks
    save_local_storage(); // Save updated data to local storage
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
    let storedToDo = localStorage.getItem("to_do_array");
    let storedComplete = localStorage.getItem("complete_array");
    if (storedToDo) {
        to_do_array = JSON.parse(storedToDo); // Load "to-do" tasks
    }
    if (storedComplete) {
        complete_array = JSON.parse(storedComplete); // Load "completed" tasks
    }
    load_to_do_list(); // Refresh "to-do" list UI
    load_complete_list(); // Refresh "completed" list UI
    addEvents(); // Add event listeners to tasks
    save_local_storage(); // Save updated data to local storage
}

// Reset all tasks and clear local storage
function reset() {
    let answer = confirm("Do you want to reset?");
    if (answer) {
        localStorage.clear(); // Clear local storage
        to_do_array = []; // Reset "to-do" array
        complete_array = []; // Reset "completed" array
        let notification = document.getElementById("notification_upper_main");
        document.getElementById("content_toaster_upper_main").textContent =
            "Data is Cleared.";
        notification.style.backgroundColor = "red";
        notification.style.transform = "translate(0)";
        setTimeout(() => {
            notification.style.transform = "translate(300px)";
        }, 5000);
        load_to_do_list(); // Refresh "to-do" list UI
        load_complete_list(); // Refresh "completed" list UI
        addEvents(); // Add event listeners to tasks
    }
}

function close_notification() {
    let notification = document.getElementById("notification_upper_main");
    notification.style.transform = "translate(400px)";
}

function undo_change() {
    to_do_deleted_array.forEach((item) => {
        to_do_array.push(item);
        to_do_deleted_array.pop();
    });
    complete_deleted_array.forEach((item) => {
        complete_array.push(item);
        complete_deleted_array.pop();
    });
    load_to_do_list(); // Refresh "to-do" list UI
    load_complete_list(); // Refresh "completed" list UI
    addEvents(); // Add event listeners to tasks
    save_local_storage(); // Save updated data to local storage
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

let button2_toaster_upper_main = document.getElementById(
    "button2_toaster_upper_main"
);
button2_toaster_upper_main.addEventListener("click", close_notification);

let button1_toaster_upper_main = document.getElementById(
    "button1_toaster_upper_main"
);
button1_toaster_upper_main.addEventListener("click", undo_change);

// Load tasks from local storage on page load
load_local_storage();
