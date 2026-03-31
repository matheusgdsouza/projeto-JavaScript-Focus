// const html = document.querySelector('html');
// const btnFoco = document.querySelector('.app__card-button--foco');
// const btnCurto = document.querySelector('.app__card-button--curto');
// const btnLongo = document.querySelector('.app__card-button--longo');
// const textoPrincipal = document.querySelector('.app__title');
// const imgPrincipal = document.querySelector('.app__image');
// const inputMusica = document.querySelector('#alternar-musica');
// const musica = new Audio('/sons/luna-rise-part-one.mp3');
// musica.loop = true;

// inputMusica.addEventListener('change', () => {
//     if(musica.paused) {
//         musica.play();
//     } else {
//         musica.pause();
//     }
// })

// // Variáveis para controle do timer

// const inputTempo = document.querySelector('#start-pause');
// const displayTimer = document.querySelector('.app__card-timer')
// let tempoDecorridoEmSegundos = 0;
// let tempoDecorridoEmMinutos = 25;
// let intervalo = null;
// const musicaIniciar = new Audio('/sons/play.wav');
// const musicaPausar = new Audio('/sons/pause.mp3');

// let diminuiTempo = () => {
//     if(tempoDecorridoEmSegundos <= 0){
//         tempoDecorridoEmMinutos -= 1;
//         tempoDecorridoEmSegundos = 60;
//     }
//     if(tempoDecorridoEmMinutos < 0) {
//         clearInterval(intervalo);
//         alert('Tempo esgotado!');
//         return;
//     }
//     tempoDecorridoEmSegundos -= 1;
//     displayTimer.innerHTML = `${tempoDecorridoEmMinutos < 10 ? '0' : ''}${tempoDecorridoEmMinutos}:${tempoDecorridoEmSegundos < 10 ? '0' : ''}${tempoDecorridoEmSegundos}`;
// }

// function iniciarContagemRegressiva() {
//     let altBtnIniciar = inputTempo.setAttribute('alt', 'Botão iniciar');
//     if(altBtnIniciar == 'Botão iniciar'){
//         musicaIniciar.play();
//         inputTempo.setAttribute('alt', 'Botão pausar');
//         inputTempo.querySelector('span').innerHTML = 'Pausar';
//         inputTempo.querySelector('img').setAttribute('src', '/imagens/pause.png');
//     } else {
//         musicaPausar.play();
//         inputTempo.setAttribute('alt', 'Botão iniciar');
//         inputTempo.querySelector('span').innerHTML = 'Começar';
//         inputTempo.querySelector('img').setAttribute('src', '/imagens/play_arrow.png');
//         clearInterval(intervalo);
//         return;
//     }
//     intervalo = setInterval(diminuiTempo, 1000);
// }

// // Função para alterar a apresentação da página de acordo com o tipo de sessão selecionada

// function alteraApresentacaoDaPagina(atributoHtml) {
//     html.setAttribute('data-contexto', atributoHtml);
//     switch(atributoHtml) {
//         case 'foco':
//             textoPrincipal.innerHTML = 'Otimize sua produtividade,<br><strong class="app__title-strong">mergulhe no que importa.</strong>';
//             imgPrincipal.setAttribute('src', '/imagens/foco.png');
//             btnFoco.classList.add('active');
//             btnCurto.classList.remove('active');
//             btnLongo.classList.remove('active');
//             clearInterval(intervalo);
//             tempoDecorridoEmMinutos = 25;
//             displayTimer.innerHTML = `${tempoDecorridoEmMinutos < 10 ? '0' : ''}${tempoDecorridoEmMinutos}:${tempoDecorridoEmSegundos < 10 ? '0' : ''}${tempoDecorridoEmSegundos}`;
//             break;
//         case 'descanso-curto':
//             textoPrincipal.innerHTML = 'Que tal dar uma respirada?<br><strong class="app__title-strong">faça uma pausa curta!</strong>';
//             imgPrincipal.setAttribute('src', '/imagens/descanso-curto.png');
//             btnFoco.classList.remove('active');
//             btnCurto.classList.add('active');
//             btnLongo.classList.remove('active');
//             clearInterval(intervalo);
//             tempoDecorridoEmMinutos = 5;
//             displayTimer.innerHTML = `${tempoDecorridoEmMinutos < 10 ? '0' : ''}${tempoDecorridoEmMinutos}:${tempoDecorridoEmSegundos < 10 ? '0' : ''}${tempoDecorridoEmSegundos}`;
//             break;
//         case 'descanso-longo':
//             textoPrincipal.innerHTML = 'Hora de voltar à superficie.<br><strong class="app__title-strong">Faça uma pausa longa.</strong>';
//             imgPrincipal.setAttribute('src', '/imagens/descanso-longo.png');
//             btnFoco.classList.remove('active');
//             btnCurto.classList.remove('active');
//             btnLongo.classList.add('active');
//             clearInterval(intervalo);
//             tempoDecorridoEmMinutos = 15;
//             displayTimer.innerHTML = `${tempoDecorridoEmMinutos < 10 ? '0' : ''}${tempoDecorridoEmMinutos}:${tempoDecorridoEmSegundos < 10 ? '0' : ''}${tempoDecorridoEmSegundos}`;
//             break;
//         default:
//             break;
//     }
// }

// btnFoco.addEventListener('click', () => {
//     alteraApresentacaoDaPagina('foco');
// })

// btnCurto.addEventListener('click', () => {
//     clearInterval(intervalo);
//     alteraApresentacaoDaPagina('descanso-curto');
// })

// btnLongo.addEventListener('click', () => {
//     clearInterval(intervalo);
//     alteraApresentacaoDaPagina('descanso-longo');
// })

// inputTempo.addEventListener('click', iniciarContagemRegressiva);

const html = document.querySelector('html');
const btnFoco = document.querySelector('.app__card-button--foco');
const btnCurto = document.querySelector('.app__card-button--curto');
const btnLongo = document.querySelector('.app__card-button--longo');

const textoPrincipal = document.querySelector('.app__title');
const imgPrincipal = document.querySelector('.app__image');

const inputMusica = document.querySelector('#alternar-musica');
const musica = new Audio('/sons/luna-rise-part-one.mp3');

const displayTimer = document.querySelector('.app__card-timer');
const btnTimer = document.querySelector('#start-pause');
const musicaIniciar = new Audio('/sons/play.wav');
const musicaPausar = new Audio('/sons/pause.mp3');
const musicaTempoEsgotado = new Audio('/sons/beep.mp3');

let tempoDecorridoEmSegundos = null;
let tempoDecorridoEmMinutos = null;
let intervalo = null;

let diminuitempo = () => {
    // iniciarContagemRegrassiva();
    if(tempoDecorridoEmSegundos <= 0){
        tempoDecorridoEmMinutos -= 1;
        tempoDecorridoEmSegundos = 60;
        return;
    }
    if(tempoDecorridoEmMinutos < 0) {
        clearInterval(intervalo);
        musicaTempoEsgotado.play();
        alert('Tempo esgotado!');
        resetaBotaotimer();
        return;
    }
    tempoDecorridoEmSegundos -= 1;
    displayTimer.innerHTML = `${tempoDecorridoEmMinutos < 10 ? '0' : ''}${tempoDecorridoEmMinutos}:${tempoDecorridoEmSegundos < 10 ? '0' : ''}${tempoDecorridoEmSegundos}`;
}

function iniciarContagemRegrassiva() {
    let atributoTimer = btnTimer.querySelector('span').getAttribute('id');
    if(atributoTimer === 'botao-iniciar') {
        btnTimer.querySelector('span').setAttribute('id', 'botao-pausar');
        btnTimer.querySelector('span').innerHTML = 'Pausar';
        btnTimer.querySelector('img').setAttribute('src', '/imagens/pause.png');
        musicaIniciar.play();
        intervalo = setInterval(diminuitempo, 1000);
    } else {
        resetaBotaotimer();
        musicaPausar.play();
        intervalo = clearInterval(intervalo);
        return;
    }

    
}

musica.loop = true;

inputMusica.addEventListener('change', () => {
    if(musica.paused){
        musica.play();
    } else {
        musica.pause();
    }
})

btnFoco.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco');
    alteraApresentacaoDaPagina('foco');
})

btnCurto.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto');
    alteraApresentacaoDaPagina('descanso-curto');
})

btnLongo.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo');
    alteraApresentacaoDaPagina('descanso-longo');
})

btnTimer.addEventListener('click', iniciarContagemRegrassiva);

function resetaBotaotimer() {
    btnTimer.querySelector('span').setAttribute('id', 'botao-iniciar');
    btnTimer.querySelector('span').innerHTML = 'Começar';
    btnTimer.querySelector('img').setAttribute('src', '/imagens/play_arrow.png');
}

function alteraApresentacaoDaPagina(atributoHtml) {
    switch(atributoHtml){
        case 'foco':
            textoPrincipal.innerHTML = 'Otimize sua produtividade,<br><strong class="app__title-strong">mergulhe no que importa.</strong>';
            imgPrincipal.setAttribute('src', '/imagens/foco.png');
            btnFoco.classList.add('active');
            btnCurto.classList.remove('active');
            btnLongo.classList.remove('active');
            resetaBotaotimer();
            clearInterval(intervalo);
            tempoDecorridoEmMinutos = 25;
            tempoDecorridoEmSegundos = 0;
            displayTimer.innerHTML = `${tempoDecorridoEmMinutos < 10 ? '0' : ''}${tempoDecorridoEmMinutos}:${tempoDecorridoEmSegundos < 10 ? '0' : ''}${tempoDecorridoEmSegundos}`;
            break;
        
        case 'descanso-curto':
            textoPrincipal.innerHTML = 'Que tal dar uma respirada?<br><strong class="app__title-strong">faça uma pausa curta!</strong>';
            imgPrincipal.setAttribute('src', '/imagens/descanso-curto.png');
            btnFoco.classList.remove('active');
            btnCurto.classList.add('active');
            btnLongo.classList.remove('active');
            resetaBotaotimer();
            clearInterval(intervalo);
            tempoDecorridoEmMinutos = 5;
            tempoDecorridoEmSegundos = 0;
            displayTimer.innerHTML = `${tempoDecorridoEmMinutos < 10 ? '0' : ''}${tempoDecorridoEmMinutos}:${tempoDecorridoEmSegundos < 10 ? '0' : ''}${tempoDecorridoEmSegundos}`;
            break;

        case 'descanso-longo':
            textoPrincipal.innerHTML = 'Hora de voltar à superficie.<br><strong class="app__title-strong">Faça uma pausa longa.</strong>';
            imgPrincipal.setAttribute('src', '/imagens/descanso-longo.png');
            btnFoco.classList.remove('active');
            btnCurto.classList.remove('active');
            btnLongo.classList.add('active');
            resetaBotaotimer();
            clearInterval(intervalo);
            tempoDecorridoEmMinutos = 15;
            tempoDecorridoEmSegundos = 0;
            displayTimer.innerHTML = `${tempoDecorridoEmMinutos < 10 ? '0' : ''}${tempoDecorridoEmMinutos}:${tempoDecorridoEmSegundos < 10 ? '0' : ''}${tempoDecorridoEmSegundos}`;
            break;

        default:
            break;
    }
}

