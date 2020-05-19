"use strict";

// Put JS logic (if any) here.
// ESNext to ES5 transpiling is completed via Babel's "env" preset.
// console.log('load')
// let burgerMenu = document.querySelector(".nav__burger")
// let expandedMobileMenu = document.querySelector(".nav__list ul")
// burgerMenu.addEventListener('click', function() {
// console.log('click')
//     if(expandedMobileMenu.style.display === "block"){
//         expandedMobileMenu.style.display = "none"
//     } else {
//         expandedMobileMenu.style.display = "block"
//     }
// })
var desktop = document.getElementById("desktopOnly");
var mobile = document.getElementById("mobileOnly");
var desktopMobile = document.getElementById("desktopMobile");
var background = document.getElementById("background");
var eyebrow = document.querySelectorAll(".eyebrow");
var eyebrowForm = document.getElementById("eyebrowForm"); // eyebrowToggle()
// eyebrow.forEach((el, i) => {
//     eyebrow[i].addEventListener('click', function () {
// })
// })

function myFunction() {
  var components = document.querySelectorAll('.banner__container'); // console.log(components)

  components.forEach(function (el, i) {
    components[i].style.backgroundImage = "url('https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg')"; // components[i].style.backgroundSize = "60px 120px"
  });
}

function bottomEl() {
  var bottomEls = document.querySelectorAll('.cards__mobile');
  bottomEls.forEach(function (el, i) {
    var x = document.querySelectorAll('.cards');
    x.forEach(function (xyz, j) {
      x[0].style.display = 'flex';
      x[1].style.display = 'block';
    });
  });
}
//# sourceMappingURL=main.js.map