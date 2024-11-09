const botaoNovaAtividade = document.getElementById('botao-adicionar');
const inputNovaAtividade = document.getElementById('input-atividade');
const selectImportancia = document.getElementById('importancia');

const quadro1 = document.getElementById("quadro1");
const quadro2 = document.getElementById("quadro2");
const quadro3 = document.getElementById("quadro3");
const quadro4 = document.getElementById("quadro4");

const drop = () => {
    const id = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    quadro1.appendChild(draggableElement);
}

quadro1.addEventListener('dragover', (event) => {
    event.preventDefault();
});

quadro1.addEventListener('drop', (event) => {
    event.preventDefault();
    drop();
});

const dragStart = (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
    setTimeout(() => {
        event.target.classList.add('hide');
    }, 0);
};

const dragEnd = (event) => {
    event.target.classList.remove('hide');
};

var contadorAtividades = 0;

botaoNovaAtividade.addEventListener('click', () => {adicionaAtividade()});

const adicionaAtividade = (event) => {

    if(inputNovaAtividade.value != ""){

        let textoInput = inputNovaAtividade.value;
        let importancia = parseInt(selectImportancia.value);
        console.log("textoInput",textoInput);
        console.log("importancia",importancia);

        let h3Atividade = document.createElement('h3');

        h3Atividade.setAttribute('id', `atividade-${contadorAtividades++}`);

        h3Atividade.textContent = textoInput;

        h3Atividade.setAttribute('draggable', true);
        h3Atividade.addEventListener('dragstart', dragStart);
        h3Atividade.addEventListener('dragend', dragEnd);

        console.log("h3Atividade.textContent ",h3Atividade.textContent);

        switch(importancia){
            
            case 1:

                quadro1.appendChild(h3Atividade);

                break;
            case 2:

                quadro2.appendChild(h3Atividade);

                break;
            case 3:

                quadro3.appendChild(h3Atividade);

                break;
            case 4:

                quadro4.appendChild(h3Atividade);

                break;
        }

        // contadorAtividades++;

        inputNovaAtividade.value = "";
    }

    else {
        alert('Informe o nome da atividade.');
    }

}