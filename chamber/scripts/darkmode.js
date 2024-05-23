// const modeButton = document.querySelector("#mode");
// const body = document.querySelector("body");
// const main = document.querySelector("main");

// modeButton.addEventListener("click", () => {
// 	body.classList.toggle('dark-mode');
// 	main.classList.toggle('dark-mode');
// });

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', ()=>{
    body.classList.toggle('dark-mode');
});