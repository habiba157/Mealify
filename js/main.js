

let checkbox = document.getElementById("toggle_checkbox");
let navbar = document.getElementById("navbar");
let home = document.getElementById("home");
let gallery = document.getElementById("gallery");
let bars = document.getElementById("menu-button");



if (sessionStorage.getItem("mode") == "dark") {
    darkmode(); //if dark mode was on, run this funtion
} else {
    nodark(); //else run this funtion
}

//if the checkbox state is changed, run a funtion
checkbox.addEventListener("change", function () {
    //check if the checkbox is checked or not
    if (checkbox.checked) {
        darkmode(); //if the checkbox is checked, run this funtion
    } else {
        nodark(); //else run this funtion
    }
});

//function for checkbox when checkbox is checked
function darkmode() {
    document.body.classList.add("dark-mode"); //add a class to the body tag

    navbar.classList.add("dark-mode");
    home.classList.add("dark-mode");
    gallery.classList.add("dark-mode");
    // bars.style.backgroundColor='white';
    bars.style.setProperty('--backColor','white');


    checkbox.checked = true; //set checkbox to be checked state
    sessionStorage.setItem("mode", "dark"); //store a name & value to know that dark mode is on
}

//function for checkbox when checkbox is not checked
function nodark() {
    document.body.classList.remove("dark-mode"); //remove added class from body tag
    navbar.classList.remove("dark-mode");
    home.classList.remove("dark-mode");
    gallery.classList.remove("dark-mode");
    bars.style.setProperty('--backColor','black');
    

    checkbox.checked = false; //set checkbox to be unchecked state
    sessionStorage.setItem("mode", "light"); //store a name & value to know that dark mode is off or light mode is on
}
