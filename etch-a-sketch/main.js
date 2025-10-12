const reset = document.getElementById('reset-btn')
let gridSize = 12;    
    function createNewGrid(size) {
    const gridContainer = document.getElementById('grid-container');
    if (!gridContainer) {
        console.error('No element with id "grid-container" found.');
        return;
    }

    // Remove any old squares
    gridContainer.innerHTML = '';

    // Each square will fit inside a 500 px container
    const squareSize = 500 / size;          // px
    const totalSquares = size * size;       // total divs to create

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');

        // Fixed dimensions so the grid stays uniform
        square.style.width  = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.border = '1px solid #ddd';

        gridContainer.appendChild(square);

    }
            attachPersistingHover();}


    function attachPersistingHover() {
    
    const squares = document.querySelectorAll('.grid-square');

    if (squares.length === 0) {
        console.warn('No elements with class "grid-square" were found.');
        return;
    }

    squares.forEach(square => {

        square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
        });

    });
    }


    function resetGridColors() {
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach(sq => sq.style.backgroundColor = '');
    }

    function setNewGrid(){
    const  newGridSize = document.getElementById('set-amount').value
    createNewGrid(newGridSize)
}


createNewGrid(gridSize);

document.getElementById('reset-btn').onclick = function() {resetGridColors()}
document.getElementById('set-grid-btn').onclick = function() {setNewGrid()}