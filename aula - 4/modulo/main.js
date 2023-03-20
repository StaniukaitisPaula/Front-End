'use strict'

// import { pesquisarCep } from "./viacep.js"

import { getEstados } from "./estados.js"
import { getEstados } from "./app.js"


const preencherFormulario = async() => {

    const cepDigitado = document.getElementById('cep').value

    const cep = await getEstado(cepDigitado)

    document.getElementById('sigla').value = cep.logradouro
    document.getElementById('cidade').value = cep.bairro
    document.getElementById('capital').value = cep.municipio
    document.getElementById('regiao').value = cep.estado
    document.getElementById('cidades').value = cep.estado

}

document.getElementById('cep').addEventListener('blur', preencherFormulario)