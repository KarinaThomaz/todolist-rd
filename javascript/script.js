let btnAddTarefa = document.querySelector("#adicionar-tarefa");

let tarefas = document.querySelector("#tarefas");

let inputTarefa = document.querySelector("#tarefa-digitada");

btnAddTarefa.onclick = function () {
    let valorDigitado = inputTarefa.value;

    let tarefaNova = ` <div class="col-md-4 [">
    <div class="card-tarefa rounded">
        <div class="texto-tarefa">
            ${valorDigitado}
        </div>
        <div class="botao-tarefa">
            <img src="images/check.png" alt="Botão para finalizar tarefa" title="Botão para finalizar tarefa" width="32" />
        </div>
</div>
</div>`

    tarefas.innerHTML+=tarefaNova;
    inputTarefa.value="";
}
