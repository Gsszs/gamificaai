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

let listaCases = []

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

const carregarCases = () => {
    fetch("http://localhost:3000/cases")
    .then( (resposta) => resposta.json() )
    .then( (dados) => {
        listaCases = dados
        renderizarCases()
    })
    .catch( erro => console.error(erro))
}


const solicitarOrcamento = (event) => {
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-descricao").value

    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }

    fetch("http://127.0.0.1:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
    .then(resposta => {
        console.log(resposta)
        document.querySelector("#contato form").reset()

        alert("Solicitação cadastrada")
    })
    .catch(erro => {
        console.error(erro)
        alert("Erro na requisição")
    })

    event.preventDefault()
}