const currentYear = new Date().getFullYear();
const yearElement = document.querySelector('#year');
yearElement.textContent = `\u00A9${currentYear} - Edward Schack - Scottsburg, IN (USA)`;

let oLastModif = new Date(document.lastModified);
const lastModifiedElement = document.querySelector('#lastModified');
lastModifiedElement.textContent = `Last Modification: ${oLastModif}`;

// function displayCalendar() {
//     var now = new Date();
//     var year = now.getFullYear();
//     var month = now.getMonth();

//     var daysInMonth = new Date(year, month + 1, 0).getDate(); // Number of days in the month
//     var firstDayOfMonth = new Date(year, month, 1).getDay(); // Day of the week of the first day of the month

//     var calendarHtml = '<table><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>';

//     // Add empty cells for days before the first day of the month
//     for (var i = 0; i < firstDayOfMonth; i++) {
//         calendarHtml += '<td></td>';
//     }

//     // Add cells for each day of the month
//     for (var day = 1; day <= daysInMonth; day++) {
//         calendarHtml += '<td>' + day + '</td>';
//         if ((firstDayOfMonth + day) % 7 === 0) { // Start a new row for each week
//             calendarHtml += '</tr><tr>';
//         }
//     }

//     calendarHtml += '</tr></table>';

//     document.getElementById('monthly').innerHTML = calendarHtml;
// }

// // Call the function to display the calendar
// displayCalendar();