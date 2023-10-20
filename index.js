let calenderBody = document.getElementById("days");
let prevMonthButton = document.getElementById("prev");
let nextMonthButton = document.getElementById("next");
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
prevMonthButton.addEventListener("click", prevMonthHandler);
nextMonthButton.addEventListener("click", nextMonthHandler);

let today = new Date();
let dayInt = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();

function renderCalender() {
  let firstDay = new Date(year, month).getDay();
  let numberOfDaysInSelectedMonth = getNumberOfDaysInMonth(month, year);
  calenderBody.innerHTML = "";
  addBlankDates(firstDay);
  for (let day = 1; day <= numberOfDaysInSelectedMonth; day++) {
    let cellElement = document.createElement("div");
    cellElement.textContent = day;
    cellElement.className = "day";
    if (isToday(day)) {
      cellElement.classList.add("today");
    }
    calenderBody.appendChild(cellElement);
  }
  document.getElementById("monthYear").innerHTML = MONTHS[month] + " " + year;
}

function prevMonthHandler() {
  year = month === 0 ? year - 1 : year;
  month = (month + 11) % 12;
  renderCalender();
}

function nextMonthHandler() {
  year = month === 11 ? year + 1 : year;
  month = (month + 1) % 12;
  renderCalender();
}

function addBlankDates(count) {
  for (let i = 0; i < count; i++) {
    let cellElement = document.createElement("div");
    cellElement.className = "blank_date";
    calenderBody.appendChild(cellElement);
  }
}

function getNumberOfDaysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

function isToday(day) {
  return (
    day === dayInt && month === today.getMonth() && year === today.getFullYear()
  );
}

renderCalender();
