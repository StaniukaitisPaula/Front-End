'use strict'

const calcular = document.getElementById('calcular')

function somar() {

    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)
    const resultado = document.getElementById('resultado')
    const formulario = document.getElementById('form')

    const media = (nota1 + nota2) / 2


    console.log(media)
    if (media >= 5) {
        formulario.classList.remove('notaVermelha')
        formulario.classList.add('notaAzul')
        resultado.value = 'Aprovado'

    } else {
        resultado.value = 'Reprovado'
        formulario.classList.add('notaVermelha')
    }
}

calcular.addEventListener('click', somar)