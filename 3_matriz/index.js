const botaoGerar = document.getElementById('botao-gerar');
const botaoCopiar = document.getElementById('botao-copiar');
const espacoGerar = document.getElementById('gerar');
const espacoCopiar = document.getElementById('copiar');

botaoGerar.addEventListener('click', () => {gerarLista()});
botaoCopiar.addEventListener('click',() => {copiarLista()});

const gerarLista = () => {

    const listaParagrafos = document.createElement('ol');
    
    for(let i = 0; i < 5; i++){

        const paragrafo = document.createElement('p');
        const elementoLista = document.createElement('li');

        paragrafo.textContent = 'paragrafo';

        elementoLista.appendChild(paragrafo);
        listaParagrafos.appendChild(elementoLista);
    }
    
    espacoGerar.appendChild(listaParagrafos);
}

const copiarLista = () => {
    const conteudoGerado = espacoGerar.innerHTML;
    const listaGerada = espacoGerar.querySelectorAll('ol');

    for(let i = 0; i <= listaGerada.length; i++){
        
        espacoCopiar.appendChild(listaGerada[i]);
    }

    // espacoCopiar.appendChild(listaGerada);
    espacoGerar.removeChild(listaGerada);
}