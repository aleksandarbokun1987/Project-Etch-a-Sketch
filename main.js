const container = document.querySelector('.container');


createSquares(100, 100);

function createSquares(columnSquares, rowSquares) {

    for (let i = 0; i < columnSquares; i++) {
        const column = document.createElement('div');
        column.classList.add('square-column');
        container.appendChild(column);
        for (let k = 0; k < rowSquares; k++) {
            const row = document.createElement('div');
            row.classList.add('square-row');
            column.appendChild(row);
        }
    }
}