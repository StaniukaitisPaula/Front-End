'use strict'

const nota1 = document.getElementById('nota1')
const nota2 = document.getElementById('nota2')
const calcular = document.getElementById('calcular')
const resultado = document.getElementById('resultado')
const formulario = document.getElementById('formulario')
const situacao = document.getElementById('situacao')

function somar() {
    resultado.value = (parseInt(nota1.value) + Number(nota2.value))

    if (.value >= 5) {
        formulario.classList.add('Aprovado')
    } else {
        formulario.classList.add('Reprovado')
    }
}


calcular.addEventListener('click', somar)