let today = new Date();
let currentMonth = today.getMonth();
let thisYear = today.getFullYear();

// Function to generate calendar
function generateCalendar(month, year) {
    let calendarHTML = '<table>';
    // Create header with month and year
    calendarHTML += '<thead><tr><th colspan="7">' + months[month] + ' ' + year + '</th></tr>';
    // Create weekday header
    calendarHTML += '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr></thead>';
    // Create the days
    let date = new Date(year, month, 1);
    calendarHTML += '<tbody><tr>';
    // Add empty cells for the days before the start of the month
    for (let i = 0; i < date.getDay(); i++) {
        calendarHTML += '<td></td>';
    }
    // Fill in the days of the month
    while (date.getMonth() === month) {
        calendarHTML += '<td>' + date.getDate() + '</td>';
        if (date.getDay() === 6) { // Start a new row every Saturday
            calendarHTML += '</tr><tr>';
        }
        date.setDate(date.getDate() + 1);
    }
    // Add empty cells after the end of the month to complete the table
    if (date.getDay() !== 0) {
        for (let i = date.getDay(); i < 7; i++) {
            calendarHTML += '<td></td>';
        }
    }
    calendarHTML += '</tr></tbody></table>';
    return calendarHTML;
}

// Array of month names
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Generate calendar for the current month and year
document.getElementById('calendar-container').innerHTML = generateCalendar(currentMonth, thisYear);
