const container = document.getElementById('container');
const resetbtn = document.getElementById('reset');
const rgbbtn = document.getElementById('rgb');


function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
        draw(cell);
        reset(cell);
        rgbbtn.addEventListener('click', () => {
            drawRgb(cell)
        });
    };
};

function draw(element) {
    element.addEventListener('mouseover', () => {
        element.classList.add('draw') //darkens the div
    });
};

function reset(element) {
    resetbtn.addEventListener('click', () => {
        element.remove('draw') //clears the board
        element.style.style = 'white'
    });
}

function userGrid() {
    let gridRows = prompt("Choose a row size:", '16');
    let gridCols = prompt("Choose a column size:", '16');
    makeGrid(gridRows, gridCols) //user can decide what the grid size is 
}

function randomRgb(element) {
    const setBg = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        element.style.background = '#' + randomColor;
    }
    return setBg()//picks a random color
}

function drawRgb(element) {
    element.addEventListener('mouseover', () => {
        element.style.color = randomRgb(element)
    }); //draws colors on divs
}

makeGrid(16, 16); //default grid size








  


