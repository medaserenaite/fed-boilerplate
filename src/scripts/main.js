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

let desktop = document.getElementById("desktopOnly")
let mobile = document.getElementById("mobileOnly")
let desktopMobile = document.getElementById("desktopMobile")
let background = document.getElementById("background")
let eyebrow = document.querySelectorAll(".eyebrow")
let bottomElement = document.getElementById("bottomElement")


let eyebrowForm = document.getElementById("eyebrowForm")


function myFunction(){
    let components = document.querySelectorAll('.banner__container')

    components.forEach((el, i) => {
        components[i].style.backgroundImage = "url('https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg')";
    })
}

function bottomEl() {
    let bottomEls = document.querySelectorAll('.cards__mobile')
    bottomEls.forEach((el, i) => {
        let x = document.querySelectorAll('.cards')
        x.forEach((xyz, j) => {
            if(bottomElement.checked == false) {
                x[0].style.display = 'none'
                x[1].style.display = 'none'
            } else {
                if(bottomElement.checked ==true) {
                    x[0].style.display = 'flex'
                    x[1].style.display = 'block'
                }
            }
            
            
        })
    })
}