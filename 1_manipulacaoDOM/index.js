var main = document.getElementsByClassName('main')[0];

var adder = document.getElementById('adder');
var remover = document.getElementById('remover');


const addElement = () => {
    var newDiv = document.createElement('div');
    main.appendChild(newDiv);
}
const removeElement = () => {
    var removedDiv = document.querySelector('div');
    main.removeChild(removedDiv);
}

adder.addEventListener('click', addElement);
remover.addEventListener('click', removeElement);