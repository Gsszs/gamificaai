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

const selecionarSlide = (indiceSlide) => {
    slides.forEach( slide => banner.classList.remove(slide))
    
    banner.classList.add(slides[indiceSlide])
    slideAtual = indiceSlide
}

let listaCases = [
    {
        imagem: "https://unsplash.it/640/425?image=3",
        descricao: "Uma empresa e tecnologia lança um desafio de gamificação onde os funcionarios devem propor e implementar ideias inovadoras."
    },
    {
        imagem: "https://unsplash.it/640/425?image=36",
        descricao: "Uma empresa de consultoria cria uma narrativa interativa de gamificação para seu programa de treinamento."
    },
    {
        imagem: "https://unsplash.it/640/425?image=42",
        descricao: "Uma empresa de vendas implementa sua competição gamificadaentre equipes que competem pelo todo do ranking"
    },
    {
        imagem: "https://unsplash.it/640/425?image=71",
        descricao: "Uma empresa de saúde promove o bem-estar dos funcionários através de um desafio de gamificação de condicionamento físico"
    }
]

const renderizarCases = () => {
    let elementoLista = document.getElementById("lista-cards")

    let template = ""

    listaCases.forEach( cardCase => {
        template += `<div class="card">
                        <img src="${cardCase.imagem}" alt="Case img">
                        <p>${cardCase.descricao}</p>
                        <button>Ver Mais</button>
                    </div>`
    })

    elementoLista.innerHTML = template
}