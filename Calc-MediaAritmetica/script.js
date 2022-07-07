// Selecionando IDs e tags do CSS

let aviso = document.querySelector('#aviso')
let formulario = document.querySelector('form')

let btnCalcular = document.querySelector('#btnCalcular')
let btnLimpar = document.querySelector('#btnLimpar')

// selecionar caixas de texto por id

let cxN1 = document.querySelector('#n1')
let cxN2 = document.querySelector('#n2')
let cxN3 = document.querySelector('#n3')
let cxMedia = document.querySelector('#media')
let cxSituacao = document.querySelector('#situacao')

// CALCULAR MEDIA

function calcularMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3
}

// DEFINIR SITUACAO FINAL COM BASE NA MEDIA

function situacaoFinal(mediaFinal) {
    let situacaoFinal = ''
    
    if (mediaFinal >= 6) {
        situacaoFinal = 'Aprovado(a)'
    } else if (mediaFinal <= 3) {
        situacaoFinal = 'Reprovado(a)'
    } else {
        situacaoFinal = 'Recuperação'
    }
    return situacaoFinal
}

// FORMATAR A CAIXA DE SITUACAO FINAL

function formatarSituacao(situacaoFinal) {
    console.log('Situação Final ' + situacaoFinal)
    switch(situacaoFinal) {

        case 'Aprovado(a)':
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.add('aprovado')
            console.log('adicionar class aprovado')
        break
        
        case 'Reprovado(a)':
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.add('reprovado')
            console.log('adicionar class reprovado')
        break
        
        case 'Recuperação':
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.add('recuperacao')
            console.log('adicionar class recuperacao')
        break

        default:
            console.log('Situação Indefinida')
    } 
}

// VALIDAR E GERAR FLASH MESSAGE
function validarNumero(numero) {
    let num1 = cxN1.value
    let num2 = cxN2.value
    let num3 = cxN3.value
    if(num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10 || num3 < 0 || num3 > 10) {
        // limpar form
        formulario.reset() 
        aviso.textContent = 'Digite uma nota entre 0.0 e 10.0'
        aviso.classList.add('alerta')
        setTimeout(function(){
            aviso.textContent = ''
            aviso.classList.remove('alerta')
        }, 3000);
    }
}

// CALCULAR A MEDIA APOS O CLICK NO BOTAO

btnCalcular.addEventListener('click', function(e) {
    console.log('Calcular Média')

// pegar o valor que esta dentro das caixas
// usar metodo parseFloat p converter string p float

    let n1 = parseFloat(cxN1.value)
    let n2 = parseFloat(cxN2.value)
    let n3 = parseFloat(cxN3.value)
    let media = calcularMedia(n1, n2, n3)
    
    console.log(n1)
    console.log(n2)
    console.log(n3)
    console.log(media)

    if(isNaN(media) || media < 0) {
        console.log("Não é um número")
        cxSituacao.value = ''
    } else {
        cxMedia.value = parseFloat(media.toFixed(2))
        cxSituacao.value = situacaoFinal(media)
        formatarSituacao(situacaoFinal(media))
    }
    e.preventDefault()
})

// APOS LIMPAR TIRAR AS CLASS DA CX SITUACAO
btnLimpar.addEventListener('click', function() {
    cxSituacao.classList.remove('aprovado')
    cxSituacao.classList.remove('reprovado')
    cxSituacao.classList.remove('recuperacao')
})