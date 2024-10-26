const input = document.querySelector('input');
const btnGenLeft = document.getElementById('gen-left');
const btnGenRight = document.getElementById('gen-right');
const divLeft = document.getElementById('left');
const divRight = document.getElementById('right');

let paragrafoCount = 0;

const gerarParagrafo = {

    left: () => {

        let numParagrafos = parseInt(input.value);

        for(let i = 0; i < numParagrafos; i++){

            const divParagrafo = document.createElement('div');
            const checkbox = document.createElement('input');
            const paragrafo = document.createElement('p');

            divParagrafo.classList.add('paragrafo');
            divParagrafo.setAttribute('id', `paragrafo-${paragrafoCount++}`);
            divParagrafo.setAttribute('draggable', true);
            divParagrafo.addEventListener('dragstart', dragStart);
            divParagrafo.addEventListener('dragend', dragEnd);

            checkbox.type = 'checkbox';
            paragrafo.textContent = `Parágrafo ${i + 1}: Este é o texto de exemplo do parágrafo  ${i + 1}.`;

            divParagrafo.append(checkbox);
            divParagrafo.append(paragrafo);
            divLeft.append(divParagrafo);

        }
    },

    right: () => {

        const checkedChecks = divLeft.querySelectorAll('input[type="checkbox"]:checked');

        checkedChecks.forEach(checkbox => {
            const divPaiCheck = checkbox.parentElement;
            divRight.append(divPaiCheck);

        })
    }
};

const dragStart = (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
    setTimeout(() => {
        event.target.classList.add('hide');
    }, 0);
};

const dragEnd = (event) => {
    event.target.classList.remove('hide');
};

btnGenLeft.addEventListener('click', gerarParagrafo.left);
btnGenRight.addEventListener('click', gerarParagrafo.right);

divRight.addEventListener('dragover', (event) => {
    event.preventDefault();
});

divRight.addEventListener('drop', (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    divRight.appendChild(draggableElement);
});