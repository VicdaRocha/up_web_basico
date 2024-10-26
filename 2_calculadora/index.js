const inputValorA = document.getElementById('valorA');
const inputValorB = document.getElementById('valorB');
const inputResultado = document.getElementById('resultado');
const botaoAdi = document.getElementById('adi');
const botaoSub = document.getElementById('sub');
const botaoMul = document.getElementById('mul');
const botaoDiv = document.getElementById('div');
const botaoLimpar = document.getElementById('limpar');

botaoAdi.addEventListener('click',() => {inputResultado.value = calcular('+')});
botaoSub.addEventListener('click',() => {inputResultado.value = calcular('-')});
botaoMul.addEventListener('click',() => {inputResultado.value = calcular('*')});
botaoDiv.addEventListener('click',() => {inputResultado.value = calcular('/')});
botaoLimpar.addEventListener('click',() => {limpar()});

const calcular = (operacao) => {
    let valorA = parseInt(inputValorA.value);
    let valorB = parseInt(inputValorB.value);
    let resultado = valorA / valorB;

    if (operacao === '+') return valorA + valorB;
    else if (operacao === '-') return valorA - valorB;
    else if (operacao === '*') return valorA * valorB;
    else if (operacao === '/') return valorB != 0 ? valorA / valorB : 'Divisão por zero não dá né';
};

const limpar = () => {
    inputValorA.value = '';
    inputValorB.value = '';
    inputResultado.value = '';
}