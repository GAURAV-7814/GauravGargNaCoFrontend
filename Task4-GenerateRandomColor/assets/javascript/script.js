// Elements for RGB and CMY color selection
let select_red = document.getElementById("select_red_box2_main_content");
let select_green = document.getElementById("select_green_box2_main_content");
let select_blue = document.getElementById("select_blue_box2_main_content");
let select_cyan = document.getElementById("select_cyan_box2_main_content");
let select_magenta = document.getElementById(
    "select_magenta_box2_main_content"
);
let select_yellow = document.getElementById("select_yellow_box2_main_content");

// Buttons for random and web-safe color generation
let generate_random_color = document.getElementById("random_color_generator");
let generate_web_safe_color = document.getElementById(
    "web_safe_color_generator"
);

// Elements for displaying contact information
let display_address = document.getElementById("information1_main_content");
let display_phone = document.getElementById("information2_main_content");
let display_email = document.getElementById("information3_main_content");
let display_website = document.getElementById("information4_main_content");

// Event listeners for contact information display
if (display_address && display_email && display_phone && display_website) {
    display_address.addEventListener("click", displayAddress);
    display_email.addEventListener("click", displayEmail);
    display_phone.addEventListener("click", displayPhone);
    display_website.addEventListener("click", displayWebsite);
}

// Event listener for generating web-safe colors
if (generate_web_safe_color) {
    generate_web_safe_color.addEventListener("click", displaySafeColors);
}

// Event listeners for RGB color selection
if (select_red && select_green && select_blue) {
    select_red.addEventListener("change", displayRGBColor);
    select_green.addEventListener("change", displayRGBColor);
    select_blue.addEventListener("change", displayRGBColor);
    generate_random_color.addEventListener("click", generateRandomColor);
}

// Event listeners for CMY color selection
if (select_cyan && select_magenta && select_yellow) {
    select_cyan.addEventListener("change", displayCMYColor);
    select_magenta.addEventListener("change", displayCMYColor);
    select_yellow.addEventListener("change", displayCMYColor);
}

/**
 * Display address information and update background colors
 */
function displayAddress() {
    let data1 = document.getElementById("data1_box_main_content");
    let data2 = document.getElementById("data2_box_main_content");
    let data3 = document.getElementById("data3_box_main_content");
    data1.textContent = "House No. 112";
    data2.textContent = "Vasuedev`s Boys PG";
    data3.textContent = "Kharar, Punjab";

    // Highlight selected section
    document.getElementById("information1_main_content").style.backgroundColor =
        "rgb(179, 179, 254)";
    document.getElementById("information2_main_content").style.backgroundColor =
        "white";
    document.getElementById("information3_main_content").style.backgroundColor =
        "white";
    document.getElementById("information4_main_content").style.backgroundColor =
        "white";
}

/**
 * Display email information and update background colors
 */
function displayEmail() {
    let data1 = document.getElementById("data1_box_main_content");
    let data2 = document.getElementById("data2_box_main_content");
    let data3 = document.getElementById("data3_box_main_content");
    data1.textContent = "";
    data2.textContent = "E-mail : gaurav781460@gmail.com";
    data3.textContent = "";

    // Highlight selected section
    document.getElementById("information1_main_content").style.backgroundColor =
        "white";
    document.getElementById("information2_main_content").style.backgroundColor =
        "white";
    document.getElementById("information3_main_content").style.backgroundColor =
        "rgb(179, 179, 254)";
    document.getElementById("information4_main_content").style.backgroundColor =
        "white";
}

/**
 * Display phone information and update background colors
 */
function displayPhone() {
    let data1 = document.getElementById("data1_box_main_content");
    let data2 = document.getElementById("data2_box_main_content");
    let data3 = document.getElementById("data3_box_main_content");
    data1.textContent = "";
    data2.textContent = "Phone Number : +91 7814605521";
    data3.textContent = "";

    // Highlight selected section
    document.getElementById("information1_main_content").style.backgroundColor =
        "white";
    document.getElementById("information2_main_content").style.backgroundColor =
        "rgb(179, 179, 254)";
    document.getElementById("information3_main_content").style.backgroundColor =
        "white";
    document.getElementById("information4_main_content").style.backgroundColor =
        "white";
}

/**
 * Display website information with a clickable link
 */
function displayWebsite() {
    let data1 = document.getElementById("data1_box_main_content");
    let data2 = document.getElementById("data2_box_main_content");
    let data3 = document.getElementById("data3_box_main_content");
    data1.textContent = "";
    data2.textContent = "";
    data2.style.display = "flex";
    data2.style.gap = "10px";

    // Create link dynamically
    let heading = document.createElement("span");
    heading.textContent = "Website Link : ";
    data2.appendChild(heading);

    let website_link = document.createElement("a");
    website_link.setAttribute("href", "./index.html");
    website_link.textContent = "Visit Color Models";
    website_link.style.color = "blue";
    data2.appendChild(website_link);

    data3.textContent = "";

    // Highlight selected section
    document.getElementById("information1_main_content").style.backgroundColor =
        "white";
    document.getElementById("information2_main_content").style.backgroundColor =
        "white";
    document.getElementById("information3_main_content").style.backgroundColor =
        "white";
    document.getElementById("information4_main_content").style.backgroundColor =
        "rgb(179, 179, 254)";
}

/**
 * Converts RGB values to hexadecimal format
 */
function rgbToHex(r, g, b) {
    return `#${((1 << 24) | (r << 16) | (g << 8) | b)
        .toString(16)
        .slice(1)
        .toUpperCase()}`;
}

/**
 * Display the selected RGB color in float and hex formats
 */
function displayRGBColor() {
    let red_value = select_red.value;
    let green_value = select_green.value;
    let blue_value = select_blue.value;
    let hex_code = rgbToHex(red_value, green_value, blue_value);

    // Update float values
    document.getElementById("cell1_rgb_display_color_box2_main_content").textContent = 
        `(${(red_value / 255).toFixed(2)}, ${(green_value / 255).toFixed(2)}, ${(blue_value / 255).toFixed(2)})`;

    // Update hex code
    document.getElementById("cell2_rgb_display_color_box2_main_content").textContent = hex_code;

    // Update color display box
    document.getElementById("cell3_rgb_display_color_box2_main_content").style.backgroundColor = hex_code;
}

/**
 * Display the selected CMY color in float and hex formats
 */
function displayCMYColor() {
    let cyan_value = 255 - select_cyan.value;
    let magenta_value = 255 - select_magenta.value;
    let yellow_value = 255 - select_yellow.value;
    let hex_code = rgbToHex(cyan_value, magenta_value, yellow_value);

    // Update float values
    document.getElementById("cell1_cmy_display_color_box2_main_content").textContent = 
        `(${(cyan_value / 255).toFixed(2)}, ${(magenta_value / 255).toFixed(2)}, ${(yellow_value / 255).toFixed(2)})`;

    // Update hex code
    document.getElementById("cell2_cmy_display_color_box2_main_content").textContent = hex_code;

    // Update color display box
    document.getElementById("cell3_cmy_display_color_box2_main_content").style.backgroundColor = hex_code;
}

/**
 * Generate and display a list of random RGB colors
 */
function generateRandomColor() {
    let main = document.querySelector("main");
    let existingOuter = document.getElementById("outer_display_color");

    // Remove existing color display if present
    if (existingOuter) {
        existingOuter.remove();
    }

    let main_new_element = document.createElement("div");
    main_new_element.setAttribute("id", "outer_display_color");

    let outer_main_new_element = document.createElement("div");
    outer_main_new_element.setAttribute("id", "display_color");

    // Add column headings
    let inner_main_new_element = document.createElement("div");
    ["RGB Float Values", "RGB Hexadecimal Values", "Display"].forEach((heading) => {
        let cell = document.createElement("div");
        cell.textContent = heading;
        cell.style.fontSize = "larger";
        cell.style.fontWeight = "bold";
        cell.setAttribute("id", "data_inner_display_color");
        inner_main_new_element.appendChild(cell);
    });
    inner_main_new_element.setAttribute("id", "inner_display_color");
    outer_main_new_element.appendChild(inner_main_new_element);

    // Generate 10 random colors
    for (let i = 0; i < 10; i++) {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let hex_code = rgbToHex(red, green, blue);

        let inner_new_element = document.createElement("div");

        // Add float values
        let cell1 = document.createElement("div");
        cell1.textContent = `(${(red / 255).toFixed(2)}, ${(green / 255).toFixed(2)}, ${(blue / 255).toFixed(2)})`;
        cell1.setAttribute("id", "data_inner_display_color");
        inner_new_element.appendChild(cell1);

        // Add hex code
        let cell2 = document.createElement("div");
        cell2.textContent = hex_code;
        cell2.setAttribute("id", "data_inner_display_color");
        inner_new_element.appendChild(cell2);

        // Add color display
        let cell3 = document.createElement("div");
        cell3.style.backgroundColor = hex_code;
        cell3.setAttribute("id", "data_inner_display_color");
        inner_new_element.appendChild(cell3);

        inner_new_element.setAttribute("id", "inner_display_color");
        outer_main_new_element.appendChild(inner_new_element);
    }

    main_new_element.appendChild(outer_main_new_element);
    main.appendChild(main_new_element);
}

/**
 * Display all web-safe colors as a grid
 */
function displaySafeColors() {
    const increments = [0, 51, 102, 153, 204, 255]; // Web-safe color increments
    const colors = [];

    // Generate all web-safe colors
    for (let r of increments) {
        for (let g of increments) {
            for (let b of increments) {
                colors.push(`rgb(${r}, ${g}, ${b})`);
            }
        }
    }

    let display = document.getElementById("button_main");
    display.style.flexDirection = "row-reverse";

    let existingOuter = document.getElementById("display_web_safe_color");
    if (existingOuter) {
        existingOuter.remove();
    }

    let colorGrid = document.createElement("div");
    colorGrid.setAttribute("id", "display_web_safe_color");

    // Create color boxes
    colors.forEach((color) => {
        const [r, g, b] = color.match(/\d+/g).map(Number);
        const div = document.createElement("div");
        div.className = "box_display_web_safe_color";
        div.style.backgroundColor = color;
        div.textContent = rgbToHex(r, g, b);
        div.style.color = "rgb(216, 197, 197)";
        colorGrid.appendChild(div);
    });

    display.appendChild(colorGrid);
}

/**
 * Populate RGB and CMY dropdowns with values from 0 to 255
 */
function setValues() {
    for (let i = 0; i <= 255; i++) {
        let red_element = document.createElement("option");
        red_element.textContent = i;

        let green_element = document.createElement("option");
        green_element.textContent = i;

        let blue_element = document.createElement("option");
        blue_element.textContent = i;

        let cyan_element = document.createElement("option");
        cyan_element.textContent = i;

        let magenta_element = document.createElement("option");
        magenta_element.textContent = i;

        let yellow_element = document.createElement("option");
        yellow_element.textContent = i;

        if (select_red && select_green && select_blue) {
            select_red.appendChild(red_element);
            select_green.appendChild(green_element);
            select_blue.appendChild(blue_element);
        }

        if (select_cyan && select_magenta && select_yellow) {
            select_cyan.appendChild(cyan_element);
            select_magenta.appendChild(magenta_element);
            select_yellow.appendChild(yellow_element);
        }
    }
}

/**
 * Style all elements with the class "red_color" as red
 */
function rgb() {
    let red_color = document.querySelectorAll(".red_color");
    red_color.forEach((element) => {
        element.style.color = "red";
    });

    let green_color = document.querySelectorAll(".green_color");
    green_color.forEach((element) => {
        element.style.color = "green";
    });

    let blue_color = document.querySelectorAll(".blue_color");
    blue_color.forEach((element) => {
        element.style.color = "blue";
    });
}

/**
 * Style all elements with CMY classes with their respective colors
 */
function cmy() {
    let cyan_color = document.querySelectorAll(".cyan_color");
    cyan_color.forEach((element) => {
        element.style.color = "cyan";
    });

    let magenta_color = document.querySelectorAll(".magenta_color");
    magenta_color.forEach((element) => {
        element.style.color = "magenta";
    });

    let yellow_color = document.querySelectorAll(".yellow_color");
    yellow_color.forEach((element) => {
        element.style.color = "yellow";
    });
}

// Initialize dropdown values and styles
setValues();
rgb();
cmy();
