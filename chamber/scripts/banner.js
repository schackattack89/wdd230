const today = new Date().getDay();
const showDays = [1, 2, 4];

if(showDays.includes(today)){
    let banner = document.getElementById("banner");
    banner.style.display = "block";
}

document.getElementById("closeButton").addEventListener("click", function() {
    let banner = document.getElementById("banner");
    banner.style.display = "none";
});