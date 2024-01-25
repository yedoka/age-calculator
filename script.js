function ageCalculator() {
  var userDay = parseInt(document.getElementById("day").value, 10);
  var userMonth = parseInt(document.getElementById("month").value, 10);
  var userYear = parseInt(document.getElementById("year").value, 10);

  var now = new Date();
  var currentDay = now.getDate();
  var currentMonth = now.getMonth() + 1;
  var currentYear = now.getFullYear();

  var resYear = currentYear - userYear;
  var resMonth = currentMonth - userMonth;
  var resDay = currentDay - userDay;

  document.querySelector(".error-day").textContent = "";
  document.getElementById("day").style.border = "1px solid #ccc";
  document.getElementById("labelDay").style.color = "#333";
  document.querySelector(".error-month").textContent = "";
  document.getElementById("month").style.border = "1px solid #ccc";
  document.getElementById("labelMonth").style.color = "#333";
  document.querySelector(".error-year").textContent = "";
  document.getElementById("year").style.border = "1px solid #ccc";
  document.getElementById("labelYear").style.color = "#333";

  if (isNaN(userDay) || isNaN(userMonth) || isNaN(userYear)) {
    document.querySelector(".error-day").textContent = "This field is required";
    document.getElementById("day").style.border = "1px solid var(--light-red)";
    document.getElementById("labelDay").style.color = "var(--light-red)";
    document.querySelector(".error-month").textContent =
      "This field is required";
    document.getElementById("month").style.border =
      "1px solid var(--light-red)";
    document.getElementById("labelMonth").style.color = "var(--light-red)";
    document.querySelector(".error-year").textContent =
      "This field is required";
    document.getElementById("year").style.border = "1px solid var(--light-red)";
    document.getElementById("labelYear").style.color = "var(--light-red)";
  } else {
    if (userDay < 1 || userDay > 31) {
      document.querySelector(".error-day").textContent =
        "Please enter a valid day";
      document.getElementById("day").style.border =
        "1px solid var(--light-red)";
      document.getElementById("labelDay").style.color = "var(--light-red)";
    }

    if (userMonth < 1 || userMonth > 12) {
      document.querySelector(".error-month").textContent =
        "Please enter a valid month";
      document.getElementById("month").style.border =
        "1px solid var(--light-red)";
      document.getElementById("labelMonth").style.color = "var(--light-red)";
    }

    if (userYear < 1900 || userYear > currentYear) {
      document.querySelector(".error-year").textContent =
        "Please enter a valid year";
      document.getElementById("year").style.border =
        "1px solid var(--light-red)";
      document.getElementById("labelYear").style.color = "var(--light-red)";
    }

    if (
      document.querySelector(".error-day").textContent === "" &&
      document.querySelector(".error-month").textContent === "" &&
      document.querySelector(".error-year").textContent === ""
    ) {
      if (resMonth < 0 || (resMonth === 0 && resDay < 0)) {
        resYear--;
        resMonth += 12;
      }

      if (resDay < 0) {
        var daysInMonth = new Date(userYear, userMonth, 0).getDate();
        resDay += daysInMonth;
        resMonth--;
      }

      document.querySelector(".number-years").textContent = resYear;
      document.querySelector(".number-months").textContent = resMonth;
      document.querySelector(".number-days").textContent = resDay;
    }
  }
}
