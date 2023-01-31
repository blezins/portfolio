const header = document.querySelector(".header")
const menu = document.querySelector(".menu > ul")
const menuIcon = document.querySelector(".menu-icon > i")
let links = document.querySelectorAll(".underline")

// Fixed Menu

window.addEventListener("scroll", () => {
    if (window.scrollY > header.offsetHeight) {
        header.classList.add("active")
    } else {
        header.classList.remove("active")
    }
})



// Responsive Menu

menuIcon.addEventListener("click", () => {
    if (menu.style.right != "0px") {
        menu.style.right = "0px"
        menuIcon.style.transform = "rotate(135deg)"
    } else {
        menu.style.right = "-100%"
        menuIcon.style.transform = "rotate(0deg)"
    }
})



// Fechar menu ao clicar em link

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", () => {
        menu.style.right = "-100%"
        menuIcon.style.transform = "rotate(0deg)"
    })
}