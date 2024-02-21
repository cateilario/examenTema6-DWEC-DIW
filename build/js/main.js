import { getYear } from "./getYear.js";
import { navFixed } from "./navFixed.js";
import { createGallery } from "./createGallery.js";

document.addEventListener("DOMContentLoaded", () => {
  getYear();
  navFixed();
  createGallery();
});
