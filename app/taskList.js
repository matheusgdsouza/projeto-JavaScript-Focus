const btnNovaTarefa = document.querySelector('.app__task-list__butuon__new-task');
const containerNovaTarefa = document.querySelector('.app__task-list__container__new-task');
const formNovaTarefa = document.querySelector('.app__task-lis__form-new-task');

btnNovaTarefa.addEventListener('click', () => {
    containerNovaTarefa.style.display = 'flex';
});

// -------------------------------------------------------------------------------------------

const textAreaNovaTarefa = document.querySelector('.app__task-list__form-new-task__textarea');
const elementoListaTarefas = document.querySelector('.app__task-list__list');
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
const tarefaEmAndamento = document.querySelector('.tag-text-task-name');
let tarefaSelecionada = null;
let liTarefaSelecionada = null;

function adicionaNaLocalStore() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function limparFormDeNovaTarefa() {
    containerNovaTarefa.style.display = 'none';
    textAreaNovaTarefa.value = '';
}

formNovaTarefa.addEventListener('submit', (event) => {
    event.preventDefault();

    const tarefa = {
        descricao: textAreaNovaTarefa.value
    }

    tarefas.push(tarefa);
    adicionaNaLocalStore();

    elementoListaTarefas.appendChild(criarNovaTarefa(tarefa));

    limparFormDeNovaTarefa()
})



function criarNovaTarefa(tarefa) {
    const li = document.createElement('li');
    li.classList.add('app__task-list__list__item');

    const divContainer = document.createElement('div');
    divContainer.classList.add('app__task-list__list__item__container');

    const imgCheck = document.createElement('img');
    imgCheck.src = './imagens/check.png';
    imgCheck.alt = 'Icone de tarefa concluida';
    imgCheck.classList.add('app__task-list__list__item__container__img-check');

    const pText = document.createElement('p');
    pText.classList.add('app__task-list__list__item__container__text');
    pText.textContent = tarefa.descricao;

    const buttonEdit = document.createElement('button');
    buttonEdit.classList.add('app__task-list__list__item__button');

    buttonEdit.addEventListener('click', () => {
        const novaDescricao = prompt('Digite a nova descrição da tarefa:', tarefa.descricao);
        if (novaDescricao) {
            tarefa.descricao = novaDescricao.trim();
            pText.textContent = tarefa.descricao;
            adicionaNaLocalStore();
        }
    })

    if(tarefa.completa) {
        li.classList.add('app__task-list__list__item-complete');
        buttonEdit.setAttribute('disabled', 'disabled');
    } else {
        li.addEventListener('click', () => {
            const tarefasCriadas = document.querySelectorAll('.app__task-list__list__item');
            tarefasCriadas.forEach(tarefaCriada => {
                tarefaCriada.classList.remove('app__task-list__list__item-active');
            });
            if(tarefaSelecionada == tarefa) {
                tarefaEmAndamento.textContent = "";
                tarefaSelecionada = null;
                liTarefaSelecionada = null;
                li.classList.remove('app__task-list__list__item-active');
                return
            }
            tarefaSelecionada = tarefa;
            liTarefaSelecionada = li;
            tarefaEmAndamento.textContent = tarefa.descricao;
            
            li.classList.add('app__task-list__list__item-active')
               
        })
    }


    const imgEdit = document.createElement('img');
    imgEdit.src = './imagens/Edit.png';
    imgEdit.alt = 'Icone de editar';
    imgEdit.classList.add('app__task-list__list__item__img-edit');


    divContainer.appendChild(imgCheck);
    divContainer.appendChild(pText);
    buttonEdit.appendChild(imgEdit);
    li.appendChild(divContainer);
    li.appendChild(buttonEdit);

    return li;
}

tarefas.forEach(tarefa => {
    elementoListaTarefas.appendChild(criarNovaTarefa(tarefa));
});

const btnCancelar = document.querySelector('.new-task__containter__buttons__cancel');
btnCancelar.addEventListener('click', () => {
    limparFormDeNovaTarefa();
});

document.addEventListener('FocoFinalizado', () => {
    if(tarefaSelecionada && liTarefaSelecionada) {
        liTarefaSelecionada.classList.remove('app__task-list__list__item-active');
        liTarefaSelecionada.classList.add('app__task-list__list__item-complete');
        liTarefaSelecionada.querySelector('button').setAttribute('disabled', 'disabled'); 
        tarefaSelecionada.completa = true;
        adicionaNaLocalStore();
    }
})


// -----------------------------------------------------------------
const btnOpcoesTarefa = document.querySelector('.app__task-list__container-menu__button');
const menuEdicaoTarefa = document.querySelector('.app__task-list__lista-edicao');
const btnLimparTarefasConcluidas = document.querySelector('#lista-edicao__limpar-concluidas');
const btnLimparTodasAsTarefas = document.querySelector('#lista-edicao__limpar-todas-tarefas');


btnOpcoesTarefa.addEventListener('click', () => {
    menuEdicaoTarefa.style.display = 'flex';
})

const removerTarefas = (somenteCompletas) => {
    const seletor = somenteCompletas ? '.app__task-list__list__item-complete' : '.app__task-list__list__item';
    document.querySelectorAll(seletor).forEach(elemento => {
        elemento.remove();
    })
    tarefas = somenteCompletas ? tarefas.filter(tarefa => !tarefa.completa) : [];
    adicionaNaLocalStore();
    menuEdicaoTarefa.style.display = 'none';
}

btnLimparTarefasConcluidas.addEventListener('click', () => {
    removerTarefas(true);
});

btnLimparTodasAsTarefas.addEventListener('click', () => {
    removerTarefas(false);
})


