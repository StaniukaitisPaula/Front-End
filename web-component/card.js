'use strict'

class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' });
        this.nome = 'Nome Aluno'
        this.foto = null
        this.cor = '#8833ee'
    }

    static get observedAttributes() {
        return ['nome', 'foto', 'cor']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {

        this[nameAttr] = newValue


    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }
    styles() {
        const css = document.createElement('style')
        css.textContent = `
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        .card{
            width: 200px;
            height: 300px;
            display: grid;
            grid-template-rows: 20% 60% 20%;
            place-items: center;
            background-color: ${this.cor};
        }
        .card__text{
            color: #fff;
            font-size: 1.5rem;
            font-weight: 600;

        }
        .card__image{
            height: 100px;
            width: 100px;
            border-radius: 50%;
            background-color: black;
            background-image: url(${this.foto});
            background-size: cover;
  
        }
        `
        return css
    }
    component() {
        const card = document.createElement('div')
        card.classList.add('card')

        const nome = document.createElement('div')
        nome.classList.add('card__text')
        nome.textContent = this.nome

        const imagem = document.createElement('div')
        imagem.classList.add('card__image')

        const turma = document.createElement('div')
        turma.classList.add('card__text')
        turma.textContent = 'DS2M'

        card.append(nome, imagem, turma)
        return card

    }

}

customElements.define('card-leonid', card)