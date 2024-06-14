// Test for last visit date 
const visitDate = Number(Date.now());
const lastVisit = document.querySelector('#lastvisit');

let lastVisitTime = Number(window.localStorage.getItem("lastvisittime-ls")) || 0;

if(lastVisitTime == 0){
    lastVisit.textContent = "Welcome! Let us know if you have any questions.";
}
else if(visitDate - lastVisitTime < 86400000){
    lastVisit.textContent = "Back so soon! Awesome!";
}
else{
    let daysSinceLastVisit = Math.floor((visitDate-lastVisitTime)/86400000);
    lastVisit.textContent = `You last visited ${daysSinceLastVisit} days ago.`
}

localStorage.setItem("lastvisittime-ls", visitDate);
