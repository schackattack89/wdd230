// JavaScript to handle the popup functionality
// Template code generated by ChatGPT modified to accomodate my desired effects

// Get the popup and overlay elements
var popup = document.getElementById('popup');
var overlay = document.getElementById('overlay');

// Get the anchor link and close button
var popupLink = document.getElementById('popup-link');
var closePopup = document.getElementById('close-popup');

// Function to open the popup
popupLink.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    popup.style.display = 'block'; // Display the popup
    overlay.style.display = 'block'; // Display the overlay
});

// Function to close the popup
closePopup.addEventListener('click', function() {
    popup.style.display = 'none'; // Hide the popup
    overlay.style.display = 'none'; // Hide the overlay
});

// Close the popup if the user clicks outside of it
overlay.addEventListener('click', function() {
    popup.style.display = 'none'; // Hide the popup
    overlay.style.display = 'none'; // Hide the overlay
});