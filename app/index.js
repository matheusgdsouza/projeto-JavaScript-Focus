const html = document.querySelector('html');
const btnFoco = document.querySelector('.app__card-button--foco');
const btnCurto = document.querySelector('.app__card-button--curto');
const btnLongo = document.querySelector('.app__card-button--longo');
const titulo = document.querySelector('.app__title');
const imgPrincipal = document.querySelector('.app__image');

function alteraVisualDaPagina(atributoHtml){
    html.setAttribute('data-contexto', atributoHtml);
    switch(atributoHtml){
        case 'foco':
            titulo.innerHTML = 'Otimize sua produtividade,<br><strong class="app__title-strong">mergulhe no que importa.</strong>';
            imgPrincipal.src = '/imagens/foco.png';
            btnFoco.classList.add('active');
            btnCurto.classList.remove('active');
            btnLongo.classList.remove('active');
            break;
        case 'descanso-curto':
            titulo.innerHTML = 'Que tal dar uma respirada?<br><strong class="app__title-strong">Faça uma pausa curta!</strong>';
            imgPrincipal.src = '/imagens/descanso-curto.png';
            btnCurto.classList.add('active');
            btnFoco.classList.remove('active');
            btnLongo.classList.remove('active');
            break;
        case 'descanso-longo':
            titulo.innerHTML = 'Hora de voltar à superficie.<br><strong class="app__title-strong">Faça uma pausa longa.</strong>';
            imgPrincipal.src = '/imagens/descanso-longo.png';
            btnLongo.classList.add('active');
            btnFoco.classList.remove('active');
            btnCurto.classList.remove('active');
            break;
        default:
            break;
    }
}

btnFoco.addEventListener('click', () => {
    alteraVisualDaPagina('foco');
});

btnCurto.addEventListener('click', () => {
    alteraVisualDaPagina('descanso-curto');
});

btnLongo.addEventListener('click', () => {
    alteraVisualDaPagina('descanso-longo');
});

const inputMusica = document.querySelector('#alternar-musica');
const musica = new Audio('/sons/luna-rise-part-one.mp3');
musica.loop = true;

inputMusica.addEventListener('change', () => {
    if(musica.paused){
        musica.play();
    } else {
        musica.pause();
    }
});
