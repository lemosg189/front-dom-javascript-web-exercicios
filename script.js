const paragrafo = document.querySelector('.paragraph')

const sublinhado = document.querySelector('.underline')
sublinhado.onclick = () => {
    if (paragrafo.style.textDecoration !== 'underline') {
        paragrafo.style.textDecoration = 'underline'
    } else {
        paragrafo.style.textDecoration = ''
    }
}

const italico = document.querySelector('.italic')
italico.onclick = () => {
    if (paragrafo.style.fontStyle !== 'italic') {
        paragrafo.style.fontStyle = 'italic'
    } else {
        paragrafo.style.fontStyle = 'normal'
    }
}

const negrito = document.querySelector('.bold')
negrito.onclick = () => {
    if (paragrafo.style.fontWeight !== 'bold') {
        paragrafo.style.fontWeight = 'bold'
    } else {
        paragrafo.style.fontWeight = 'normal'
    }
}

const menor = document.querySelector('.less');
const fonte = document.querySelector('.font-size')
menor.onclick = () => {
    if (paragrafo.style.fontSize === '12px') {
        return
    } else {
        fonte.textContent -= 2
        paragrafo.style.fontSize = `${fonte.textContent}px`
    }
}

const maior = document.querySelector('.plus');
maior.onclick = () => {
    fonte.textContent = Number(fonte.textContent) + 2
    paragrafo.style.fontSize = `${fonte.textContent}px`
}

const buttonRed = document.querySelector('.red');
buttonRed.onclick = () => {
    paragrafo.style.color = 'red'
}

const buttonBlue = document.querySelector('.blue');
buttonBlue.onclick = () => {
    paragrafo.style.color = 'blue'
}

const buttonPurple = document.querySelector('.purple');
buttonPurple.onclick = () => {
    paragrafo.style.color = 'purple'
}

const buttonBlack = document.querySelector('.black');
buttonBlack.onclick = () => {
    paragrafo.style.color = 'black'
}





