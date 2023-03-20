'use strict'

export const getEstados = async(estado) => {
    const url = `http://localhost:8080/v1/senai/cidades?uf=${estado}`

    const response = await fetch(url)
    const data = await response.json()

    return {

        estado: data.uf,
        capital: data.capital,
        regiao: data.regiao,
        cidades: data.cidades

    }
}