export const getYear = () => {
  let yearSpan = document.getElementById("year");

  let currentYear = new Date().getFullYear();

  yearSpan.textContent = currentYear;
};
