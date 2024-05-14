let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.querySelector("#icone-x")

function abrirFecharMenu() {
    if (menu.classList.contains("menu-fechado")) {
        menu.classList.remove("menu-fechado")
        iconeX.style.display = "inline"
        iconeBarras.style.display = "none"
    } else {
        menu.classList.add("menu-fechado")
        iconeX.style.display = "none"
        iconeBarras.style.display = "inline"
    }
}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"
    iconeBarras.style.display = "none"
}

// Carrossel

let slides = [
    'primeiro-banner',
    'segundo-banner',
    'terceiro-banner'
]

let slideAtual = 0

let banner = document.querySelector(".banner")

banner.classList.add(slides[slideAtual])

const proximoSlide = () => {
    banner.classList.remove(slides[slideAtual])

    if (slideAtual == 2) {
        slideAtual = 0
    } else {
        slideAtual++
    }

    banner.classList.add(slides[slideAtual])
}

const anteriorSlide = () => {
    banner.classList.remove(slides[slideAtual])

    if (slideAtual == 0) {
        slideAtual = 2
    } else {
        slideAtual--
    }

    banner.classList.add(slides[slideAtual])
}