export const getYear = () => {
  let yearSpan = document.getElementById("year");

  let currentYear = new Date().getFullYear() - 1;

  yearSpan.textContent = currentYear;
};
