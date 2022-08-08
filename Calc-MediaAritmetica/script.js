// Selecionando IDs e tags do CSS

let aviso = document.querySelector('#aviso')
let aviso2 = document.querySelector('#aviso2')
let formulario = document.querySelector('form')

let btnCalcular = document.querySelector('#btnCalcular')
let btnLimpar = document.querySelector('#btnLimpar')

// Selecionando caixas de texto por id

let cxN1 = document.querySelector('#n1')
let cxN2 = document.querySelector('#n2')
let cxN3 = document.querySelector('#n3')
let cxMedia = document.querySelector('#media')
let cxSituacao = document.querySelector('#situacao')

// Calculando media

function calcularMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3
}

// Regex do formulario

function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /^[0-9.]+$/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
 }

// Definindo a situação final 

function situacaoFinal(mediaFinal) {
    let situacaoFinal = ''
    
    if (mediaFinal >= 6) {
        situacaoFinal = 'Apto(a)'
    } else if (mediaFinal <= 3) {
        situacaoFinal = 'Inapto(a)'
    } else {
        situacaoFinal = 'Recuperação'
    }
    return situacaoFinal
}

// Formatando a caixa de situação final

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

// Gerando a flash message

function validarNumero(numero) {
    let num1 = cxN1.value
    let num2 = cxN2.value
    let num3 = cxN3.value
    if(num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10 || num3 < 0 || num3 > 10) {

// Limpando o formulario

        formulario.reset() 
        aviso.textContent = 'Digite uma nota entre 0.0 e 10.0'
        aviso.classList.add('alerta')
        setTimeout(function(){
            aviso.textContent = ''
            aviso.classList.remove('alerta')
        }, 5000);
    }
}

// Gerando um alerta de erro caso haja um campo vazio 

function calcular() {

    document.getElementById("n1").style.borderColor = "#5552ff";
    document.getElementById("n2").style.borderColor = "#5552ff";
    document.getElementById("n3").style.borderColor = "#5552ff";

        if(document.getElementById("n1").value == "") {
                document.getElementById("n1").style.borderColor = "red";
                document.getElementById("n1").focus();
                    aviso2.textContent = "Preencha os campos corretamente"
                    aviso2.classList.add('alerta')
                        setTimeout(function(){
                    aviso2.textContent = ''
                    aviso2.classList.remove('alerta')
                }, 5000);
            return false;
        }

        if(document.getElementById("n2").value == "") {           
                document.getElementById("n2").style.borderColor = "red";
                document.getElementById("n2").focus();
                    aviso2.textContent = "Preencha os campos corretamente"
                    aviso2.classList.add('alerta')
                        setTimeout(function(){
                    aviso2.textContent = ''
                    aviso2.classList.remove('alerta')
                }, 5000);
            return false;
            }

        if(document.getElementById("n3").value == "") {   
                document.getElementById("n3").style.borderColor = "red";
                document.getElementById("n3").focus();
                    aviso2.textContent = "Preencha os campos corretamente"
                    aviso2.classList.add('alerta')
                        setTimeout(function(){
                    aviso2.textContent = ''
                    aviso2.classList.remove('alerta')
                }, 5000);
            return false;
            }
    }

// Calculando a media apos o click 

btnCalcular.addEventListener('click', function(e) {
    console.log('Calcular Média')

// pegando o valor que esta dentro das caixas
// Passando os valores para float

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

// Apos limpar o formulario remover o alerta

btnLimpar.addEventListener('click', function() {
    cxSituacao.classList.remove('aprovado')
    cxSituacao.classList.remove('reprovado')
    cxSituacao.classList.remove('recuperacao')
})
