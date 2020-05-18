// Put JS logic (if any) here.
// ESNext to ES5 transpiling is completed via Babel's "env" preset.

let burgerMenu = document.querySelector(".nav__burger")
let expandedMobileMenu = document.querySelector(".nav__list")

burgerMenu.addEventListener('click', function() {

    if(expandedMobileMenu.style.display === "block"){
        expandedMobileMenu.style.display = "none"
    } else {
        expandedMobileMenu.style.display = "block"
    }
})