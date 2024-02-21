import { startApp } from "./startApp.js";

document.addEventListener("DOMContentLoaded", function () {
  startApp();
});

// function scrollNav(){
//   const links = document.querySelectorAll(".main-nav a");

//   links.forEach(link => {
//     link.addEventListener('click', function(e){
//       e.preventDefault();

//       const sectionScroll = e.target.attributes.href.value;

//       const section = document.querySelector(sectionScroll);

//       section.scrollIntoView({ "behavior": smooth})
//     });
//   });
// }
