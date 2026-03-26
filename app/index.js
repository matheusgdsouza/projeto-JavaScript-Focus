const btnFoco = document.querySelector('.app__card-button--foco');
const btnCurto = document.querySelector('.app__card-button--curto');
const btnLongo = document.querySelector('.app__card-button--longo');
const html = document.querySelector('html');
const titulo = document.querySelector('.app__title');
const imgPrincipal = document.querySelector('.app__image');

function alteraVisualizacaoDaPagina(parametroHtml, textoParagrafo, srcImg){
    html.setAttribute('data-contexto', parametroHtml);
    titulo.innerHTML = textoParagrafo;
    imgPrincipal.src = srcImg;
}

btnFoco.addEventListener('click', () => {
    alteraVisualizacaoDaPagina('foco', 'Otimize sua produtividade,<br><strong class="app__title-strong">mergulhe no que importa.</strong>', '/imagens/foco.png');
    if(btnFoco.className === 'app__card-button app__card-button--foco'){
        btnFoco.className = 'app__card-button app__card-button--foco active';
        btnCurto.className = 'app__card-button app__card-button--curto';
        btnLongo.className = 'app__card-button app__card-button--longo';
    }
})

btnCurto.addEventListener('click', () => {
    alteraVisualizacaoDaPagina('descanso-curto', 'Que tal dar uma respirada?<br><strong class="app__title-strong">Faça uma pausa curta!</strong>', '/imagens/descanso-curto.png');
    if(btnCurto.className === 'app__card-button app__card-button--curto'){
        btnFoco.className = 'app__card-button app__card-button--foco';
        btnCurto.className = 'app__card-button app__card-button--curto active';
        btnLongo.className = 'app__card-button app__card-button--longo';
    }
})

btnLongo.addEventListener('click', () => {
    alteraVisualizacaoDaPagina('descanso-longo', 'Hora de voltar à superficie.<br><strong class="app__title-strong">Faça uma pausa longa.</strong>', '/imagens/descanso-longo.png');
    if(btnLongo.className === 'app__card-button app__card-button--longo'){
        btnFoco.className = 'app__card-button app__card-button--foco';
        btnCurto.className = 'app__card-button app__card-button--curto';
        btnLongo.className = 'app__card-button app__card-button--longo active';
    }
})

