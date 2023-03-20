'use strict'



const mapa = document.querySelector('#map')

export const getEstados = ({ target }) => {

    const estado = target.id.replace('BR-', '')

    function preencherDados() {



    }
}

mapa.addEventListener('click', getEstados)