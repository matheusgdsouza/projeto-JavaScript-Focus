const btnFoco = document.querySelector('.app__card-button--foco');
const btnCurto = document.querySelector('.app__card-button--curto');
const btnLongo = document.querySelector('.app__card-button--longo');
const html = document.querySelector('html');
const titulo = document.querySelector('.app__title');
const imgPrincipal = document.querySelector('.app__image');

function alteraVisualizacaoDaPagina(parametroHtml, srcImg){
    html.setAttribute('data-contexto', parametroHtml);
    imgPrincipal.src = srcImg;
    switch(parametroHtml){
        case 'foco':
            titulo.innerHTML = 'Otimize sua produtividade,<br><strong class="app__title-strong">mergulhe no que importa.</strong>';
            break;
        
        case 'descanso-curto':
            titulo.innerHTML = 'Que tal dar uma respirada?<br><strong class="app__title-strong">Faça uma pausa curta!</strong>';
            break;

        case 'descanso-longo':
            titulo.innerHTML = 'Hora de voltar à superficie.<br><strong class="app__title-strong">Faça uma pausa longa.</strong>';
            break;

        default:
            break;
    }
}

btnFoco.addEventListener('click', () => {
    alteraVisualizacaoDaPagina('foco', '/imagens/foco.png');
    if(btnFoco.className === 'app__card-button app__card-button--foco'){
        btnFoco.className = 'app__card-button app__card-button--foco active';
        btnCurto.className = 'app__card-button app__card-button--curto';
        btnLongo.className = 'app__card-button app__card-button--longo';
    }
})

btnCurto.addEventListener('click', () => {
    alteraVisualizacaoDaPagina('descanso-curto', '/imagens/descanso-curto.png');
    if(btnCurto.className === 'app__card-button app__card-button--curto'){
        btnFoco.className = 'app__card-button app__card-button--foco';
        btnCurto.className = 'app__card-button app__card-button--curto active';
        btnLongo.className = 'app__card-button app__card-button--longo';
    }
})

btnLongo.addEventListener('click', () => {
    alteraVisualizacaoDaPagina('descanso-longo', '/imagens/descanso-longo.png');
    if(btnLongo.className === 'app__card-button app__card-button--longo'){
        btnFoco.className = 'app__card-button app__card-button--foco';
        btnCurto.className = 'app__card-button app__card-button--curto';
        btnLongo.className = 'app__card-button app__card-button--longo active';
    }
})

