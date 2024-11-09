const botaoNovaAtividade = document.getElementById('botao-adicionar');
const inputNovaAtividade = document.getElementById('input-atividade');
const selectImportancia = document.getElementById('importancia');

const quadro1 = document.getElementById("quadro1");
const quadro2 = document.getElementById("quadro2");
const quadro3 = document.getElementById("quadro3");
const quadro4 = document.getElementById("quadro4");

let contadorAtividades = 0;

// Função para definir o quadro correto com base na importância
const obterQuadroPorImportancia = (importancia) => {
    switch (importancia) {
        case 1: return quadro1;
        case 2: return quadro2;
        case 3: return quadro3;
        case 4: return quadro4;
        default: return quadro1; // Valor padrão se não estiver entre 1 e 4
    }
};

// Função para manipular o início do arraste
const dragStart = (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
    setTimeout(() => {
        event.target.classList.add('hide');
    }, 0);
};

// Função para manipular o fim do arraste
const dragEnd = (event) => {
    event.target.classList.remove('hide');
};

// Função para manipular a ação de soltar
const drop = (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    event.target.appendChild(draggableElement);
};

// Adiciona os ouvintes de arraste e soltar para cada quadro
[quadro1, quadro2, quadro3, quadro4].forEach((quadro) => {
    quadro.addEventListener('dragover', (event) => {
        event.preventDefault();
    });
    quadro.addEventListener('drop', drop);
});

// Função para adicionar uma nova atividade
const adicionaAtividade = () => {
    if (inputNovaAtividade.value !== "") {
        const textoInput = inputNovaAtividade.value;
        const importancia = parseInt(selectImportancia.value);
        
        const h3Atividade = document.createElement('h3');
        h3Atividade.setAttribute('id', `atividade-${contadorAtividades++}`);
        h3Atividade.textContent = textoInput;
        h3Atividade.setAttribute('draggable', true);
        h3Atividade.addEventListener('dragstart', dragStart);
        h3Atividade.addEventListener('dragend', dragEnd);

        // Obtém o quadro com base na importância e adiciona o h3Atividade nele
        const quadroSelecionado = obterQuadroPorImportancia(importancia);
        quadroSelecionado.appendChild(h3Atividade);

        // Limpa o input
        inputNovaAtividade.value = "";
    } else {
        alert('Informe o nome da atividade.');
    }
};

// Ouvinte para o botão de adicionar nova atividade
botaoNovaAtividade.addEventListener('click', adicionaAtividade);
