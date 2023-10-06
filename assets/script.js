
// Function to display the calendar for the given month and year
function displayCalendar(year, month) {
    var selectedDateCell = null; // Keeps track of the selected date cell
    var daysInMonth = new Date(year, month + 1, 0).getDate();
    var firstDay = new Date(year, month, 1).getDay();
    var table = document.getElementById("calendarBody");
    table.innerHTML = "";

    document.getElementById("currentMonthYear").innerHTML =new Date(year, month).toLocaleString("default", { month: "long" }) +" " +year;

    var date = 1;
    var rowCount = Math.ceil((daysInMonth + firstDay) / 7); // Calculate the number of rows needed
    for (var i = 0; i < rowCount; i++) {
        var row = table.insertRow();
        for (var j = 0; j < 7; j++) {
            var cell = row.insertCell();
            if (i === 0 && j < firstDay) {
                cell.innerHTML = "";
            } else if (date > daysInMonth) {
                break; // Exit the loop when the last day of the month is reached
            } else {
                cell.innerHTML = date;
                cell.addEventListener("click", function () {
                    // Remove the "selected" class from the previously selected date
                    if (selectedDateCell) {
                        selectedDateCell.classList.remove("selected");
                    }

                    // Toggle the "selected" class to highlight the clicked date
                    this.classList.add("selected");
                    selectedDateCell = this; // Update the selected date cell
                });
                date++;

                // Check if the date is today's date
                var currentDate = new Date();
                if (
                    year === currentDate.getFullYear() &&
                    month === currentDate.getMonth() &&
                    date - 1 === currentDate.getDate()
                ) {
                    cell.classList.add("today"); // Add the "today" class to highlight today's date
                }
            }
        }
    }
}


// Initial display
var currentDate = new Date();
displayCalendar(currentDate.getFullYear(), currentDate.getMonth());

// Event listeners for previous and next buttons
document.getElementById("prevMonth").addEventListener("click", function () {
        currentDate.setMonth(currentDate.getMonth() - 1);
        displayCalendar(currentDate.getFullYear(), currentDate.getMonth());
});

document.getElementById("nextMonth").addEventListener("click", function () {
        currentDate.setMonth(currentDate.getMonth() + 1);
        displayCalendar(currentDate.getFullYear(), currentDate.getMonth());
});

document.getElementById("prevYear").addEventListener("click", function () {
        currentDate.setFullYear(currentDate.getFullYear() - 1);
        displayCalendar(currentDate.getFullYear(), currentDate.getMonth());
});

document.getElementById("nextYear").addEventListener("click", function () {
        currentDate.setFullYear(currentDate.getFullYear() + 1);
        displayCalendar(currentDate.getFullYear(), currentDate.getMonth());
});