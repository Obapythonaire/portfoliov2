// const modeToggle = document.getElementById("modeToggle");
// const body = document.body

// modeToggle.addEventListener("click", function () {
//     document.body.classList.toggle("dark-mode");
// });


// 2
// const modeToggle = document.getElementById("bd-theme");
// const body = document.body;

// modeToggle.addEventListener("click", function () {
//     const currentTheme = body.getAttribute("data-bs-theme");
//     switch (currentTheme) {
//         case "light":
//             body.setAttribute("data-bs-theme", "dark");
//             break;
//         case "dark":
//             body.setAttribute("data-bs-theme", "auto");
//             break;
//         case "auto":
//             body.setAttribute("data-bs-theme", "light");
//             break;
//         default:
//             body.setAttribute("data-bs-theme", "auto");
//             break;
//     }
// });

// 3
// const modeToggle = document.querySelector('.bd-mode-toggle');
// const body = document.body;

// modeToggle.addEventListener('click', function () {
//     const currentTheme = body.getAttribute('data-bs-theme');
//     if (currentTheme === 'light') {
//         body.setAttribute('data-bs-theme', 'dark');
//     } else if (currentTheme === 'dark') {
//         body.setAttribute('data-bs-theme', 'auto');
//     } else {
//         body.setAttribute('data-bs-theme', 'light');
//     }
// });

// 4
// console.log("Custom JavaScript loaded.");
// const modeToggle = document.getElementById("modeToggle");
// const body = document.body;

// Function to toggle dark mode
// function toggleDarkMode() {
//     body.classList.toggle("dark-mode");
//     // Save the user's preference in local storage
//     if (body.classList.contains("dark-mode")) {
//         localStorage.setItem("theme", "dark");
//     } else {
//         localStorage.setItem("theme", "light");
//     }
// }

// Event listener for dark mode toggle
// modeToggle.addEventListener("click", toggleDarkMode);

// Check if the user has a theme preference in local storage
// const savedTheme = localStorage.getItem("theme");
// if (savedTheme === "dark") {
//     body.classList.add("dark-mode");
// }


// 5

function myFunction() {
    var element = document.body;
    element.dataset.bsTheme =
        element.dataset.bsTheme == "light" ? "dark" : "light";
}
