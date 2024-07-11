var slideIndex = 0;
showIslandSlides();

function showIslandSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showIslandSlides, 3500);
}

var facilitySlideIndex = 0;
showFacilitySlides();

function showFacilitySlides() {
    var i;
    var slides = document.getElementsByClassName("facility-slide");
    var dots = document.getElementsByClassName("facility-dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    facilitySlideIndex++;
    if (facilitySlideIndex > slides.length) {facilitySlideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[facilitySlideIndex-1].style.display = "block";  
    dots[facilitySlideIndex-1].className += " active";
    setTimeout(showFacilitySlides, 6500);
}