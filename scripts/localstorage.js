// Page visit counter
const pageVisits = document.querySelector('.page-visits');

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	pageVisits.innerHTML = numVisits;
} else {
	pageVisits.innerHTML = `This is your first visit. Welcome!`;
}
numVisits++;

localStorage.setItem("numVisits-ls", numVisits);