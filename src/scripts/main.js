// Put JS logic (if any) here.
// ESNext to ES5 transpiling is completed via Babel's "env" preset.

console.log('load')
let burgerMenu = document.querySelector(".nav__burger")
let expandedMobileMenu = document.querySelector(".nav__list ul")

burgerMenu.addEventListener('click', function() {
console.log('click')
    if(expandedMobileMenu.style.display === "block"){
        expandedMobileMenu.style.display = "none"
    } else {
        expandedMobileMenu.style.display = "block"

    }
})