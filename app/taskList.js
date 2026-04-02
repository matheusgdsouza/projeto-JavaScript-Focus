const btnNovaTarefa = document.querySelector('.app__task-list__butuon__new-task');
const containerNovaTarefa = document.querySelector('.app__task-list__container__new-task');
const formNovaTarefa = document.querySelector('.app__task-lis__form-new-task');
const textAreaNovaTarefa = document.querySelector('.app__task-list__form-new-task__textarea');
const listaTarefas = document.querySelector('.app__task-list__list');

// Lendo se já existem tarefas no localStorage, caso exista, transformando a string em array, caso não exista, criando um array vazio
const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

// Exibindo formulario ao clicar no botão de nova tarefa
btnNovaTarefa.addEventListener('click', () => {
    containerNovaTarefa.style.display = 'flex';
})


// Criando nova tarefa e adicionando a lista de tarefas
function criarNovaTarefa(tarefa) {
    listaTarefas.innerHTML += `
        <li class="app__task-list__list__item">
            <div class="app__task-list__list__item__container">
                <img src="./imagens/check.png" alt="Icone de tarefa concluida" class="app__task-list__list__item__container__img-check">
                <p class="app__task-list__list__item__container__text">${tarefa.descricao}</p>
            </div>
            <button class="app__task-list__list__item__button">
                <img src="./imagens/Edit.png" alt="Icone de editar" class="app__task-list__list__item__img-edit">
            </button>
        </li>
    `;
}

// Criando nova tarefa e adicionando ao localSorage
formNovaTarefa.addEventListener('submit', (event) => {
    event.preventDefault();

    const tarefa = {
        descricao: textAreaNovaTarefa.value
    }

    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));

    criarNovaTarefa(tarefa);

    containerNovaTarefa.style.display = 'none';
    textAreaNovaTarefa.value = '';


})

// Exibindo as tarefas salvas no localStorage
tarefas.forEach(tarefa => {
    const novaTarefaCriada = criarNovaTarefa(tarefa);
    listaTarefas.innerHTML += novaTarefaCriada;
})

