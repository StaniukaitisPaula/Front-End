'use strict'

const adicionar = document.getElementById('add')

// const adicionarCard = () => {
//     const container = document.getElementById('container')
//     container.innerHTML += '<div class="items"></div>'

// }
const adicionarCard = (aluno, media) => {
    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')

    if (isNaN(media)) {
        alert('PERMITIDO APENAS NÚMEROS')
        return false
    }

    novaDiv.classList.add('aluno')
    novaDiv.classList.add('media')
    novaDiv.innerHTML = `<h2 class="aluno__title">${aluno}</h2>
                         <h3 class="media__title">${media}</h2>  `

    container.appendChild(novaDiv)

    if (media >= 5) {
        novaDiv.classList.remove('notaVermelha')
        novaDiv.classList.add('notaAzul')


    } else {
        novaDiv.classList.add('notaVermelha')

    }

}
const handleClick = () => {
    const nomeAluno = prompt('Digite um nome para o card')
    const media = prompt('Digite sua média')
    adicionarCard(nomeAluno, media)




}
adicionar.addEventListener('click', handleClick)




//SOLID - responsividade unica
//funçoes puras