'use strict'

const mapa = document.querySelector('#map')


const getEstado =  async( {target} ) => { 
    const estado = target.id.replace('BR-', '')
    // const nomeEstado = target.getAttribute('title')
    const dadosEstado = await preencherDados(estado)
    const regiaoCapital = await dadosCidades(estado)


    preencherTela(dadosEstado)
    preencherTela(regiaoCapital)
}

const preencherDados = async (sigla) => {

    const url = `http://localhost:8080/v1/senai/cidades?uf=${sigla}`
    const response =  await fetch(url)
    const data = await response.json()

    return data

}
const dadosCidades = async (estado) => {
    const url = `http://localhost:8080/v1/senai/estado/sigla/${estado}`;

    const response = await fetch(url);
    const data = await response.json();

    return {
        capital: data.capital,
        regiao: data.regiao,
      }
    
  }
const preencherTela = async(dadosEstado) => {

    const headerCard = document.createElement('div')
    headerCard.classList.add('card__header')

    const titleH = document.createElement('h1')
    titleH.textContent = dadosEstado.uf
    titleH.classList.add('header__uf')

    const contentHeader = document.createElement('div')
    contentHeader.classList.add('content')

    const titleContent = document.createElement('h2')
    titleContent.classList.add('content__title')
    titleContent.textContent = dadosEstado.descricao

    const descriptionContent = document.createElement('div')
    descriptionContent.classList.add('content__description')

    const capital = document.createElement('div')
    capital.textContent = 'Capital:'
    capital.classList.add('capital')

    const nameCapital = document.createElement('span')
    nameCapital.classList.add('capital__name')
    nameCapital.textContent = dadosEstado.capital

    const regiao = document.createElement('div')
    regiao.textContent = 'Região:'
    regiao.classList.add('regiao')

    const nameRegiao = document.createElement('span')
    nameRegiao.classList.add('regiao__name')
    nameRegiao.textContent = dadosEstado.regiao

    const contentCard = document.createElement('div')
    contentCard.classList.add('card__content')

    const spanCidades = document.createElement('span')
    spanCidades.textContent = 'CIDADES:'
    spanCidades.classList.add('cidContent')

    const contentCidades = document.createElement('div')
    contentCidades.classList.add('cidades-content')

    dadosEstado.cidades.forEach(function(cidade){
        const cidadeContent = document.createElement('span')
        cidadeContent.classList.add('content__cidade')
        cidadeContent.textContent = cidade

        contentCidades.append(cidadeContent)
    })

    contentCard.append(spanCidades, contentCidades)
    regiao.append(nameRegiao)
    capital.append(nameCapital)
    descriptionContent.append(capital, regiao)
    contentHeader.append(titleContent, descriptionContent);
    headerCard.append(titleH, contentHeader)
 

    const card = document.getElementById('card-dados')
    card.replaceChildren(headerCard, contentCard)
    

}

mapa.addEventListener('click', getEstado)
