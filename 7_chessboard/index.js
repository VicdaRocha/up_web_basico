const tiles = document.querySelectorAll('.tile');
const pieces = document.querySelectorAll('.tile > div');

pieces.forEach(piece => {
    piece.addEventListener('dragstart', dragStart);
    piece.addEventListener('dragend', dragEnd);
});

tiles.forEach(tile => {
    tile.addEventListener('dragover', dragOver);
    tile.addEventListener('drop', drop);
});

let draggedPiece = null;

function dragStart(e) {
    draggedPiece = e.target;  // Store the dragged piece reference
    setTimeout(() => {
        e.target.classList.add('invisible');  // Make it invisible while dragging
    }, 0);
}

function dragEnd(e) {
    e.target.classList.remove('invisible');  // Make it visible again after drop
    draggedPiece = null;  // Clear the reference after drop
}

function dragOver(e) {
    e.preventDefault();  // Allow the drop by preventing the default action
}

function drop(e) {
    e.preventDefault();  // Prevent default handling of drop

    // Make sure we are dropping on a tile and not on another piece
    if (e.target.classList.contains('tile') && draggedPiece) {
        e.target.innerHTML = '';  // Clear the target tile
        e.target.appendChild(draggedPiece);  // Append the dragged piece to the tile
    }
}


// const whiteQueen = document.querySelector('.queen.white');
// const whiteKing = document.querySelector('.king.white');
// const blackQueen = document.querySelector('.queen.black');
// const blackKing = document.querySelector('.king.black');
// const whitePonds = document.querySelectorAll('.pond.white');
// const whiteRooks = document.querySelectorAll('.rook.white');
// const whiteKnights = document.querySelectorAll('.knight.white');
// const whiteBishop = document.querySelectorAll('.bishop.white');
// const blackPonds = document.querySelectorAll('.pond.black');
// const blackRooks = document.querySelectorAll('.rook.black');
// const blackKnights = document.querySelectorAll('.knight.black');
// const blackBishop = document.querySelectorAll('.bishop.black');
