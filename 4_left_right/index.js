const input = document.querySelector('input');
const btnGenLeft = document.getElementById('gen-left');
const btnGenRight = document.getElementById('gen-right');
const divLeft = document.getElementById('left');
const divRight = document.getElementById('right');

btnGenLeft.addEventListener('click', () => gerarParagrafo(0));
btnGenRight.addEventListener('click', () => gerarParagrafo(1));

const gerarParagrafo = (lado) => {

    let numParagrafos = parseInt(input.value);

    switch (lado){
        case 0:

            for(let i = 0; i < numParagrafos; i++){

                const divParagrafo = document.createElement('div');
                const checkbox = document.createElement('input');
                const paragrafo = document.createElement('p');

                divParagrafo.classList.add('paragrafo');
                checkbox.type = 'checkbox';
                paragrafo.textContent = `Parágrafo ${i + 1}: (left) Este é o texto de exemplo do parágrafo  ${i + 1}.`;

                divParagrafo.append(checkbox);
                divParagrafo.append(paragrafo);
                divLeft.append(divParagrafo);

            }

            break;
        case 1:

            for(let i = 0; i < numParagrafos; i++){
                    
                const divParagrafo = document.createElement('div');
                const checkbox = document.createElement('input');
                const paragrafo = document.createElement('p');

                divParagrafo.classList.add('paragrafo');
                checkbox.type = 'checkbox';
                paragrafo.textContent = `Parágrafo ${i + 1}: (left) Este é o texto de exemplo do parágrafo  ${i + 1}.`;

                divParagrafo.append(checkbox);
                divParagrafo.append(paragrafo);
                divRight.append(divParagrafo);

            }

            break;
    }
}