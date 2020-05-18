"use strict";

// Put JS logic (if any) here.
// ESNext to ES5 transpiling is completed via Babel's "env" preset.
var burgerMenu = document.querySelector(".nav__burger");
var expandedMobileMenu = document.querySelector(".nav__list");
burgerMenu.addEventListener('click', function () {
  if (expandedMobileMenu.style.display === "block") {
    expandedMobileMenu.style.display = "none";
  } else {
    expandedMobileMenu.style.display = "block";
  }
});
//# sourceMappingURL=main.js.map