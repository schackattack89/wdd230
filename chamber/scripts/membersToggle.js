function toggleMembers() {
    var element1 = document.getElementById("directoryTable");
    var element2 = document.getElementById("memberCards");

    if (element1.style.display === "block") {
        element1.style.display = "none";
        element2.style.display = "block";
    } else {
        element1.style.display = "block";
        element2.style.display = "none";
    }
}