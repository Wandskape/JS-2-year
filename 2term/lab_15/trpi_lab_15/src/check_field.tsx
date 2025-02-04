import {COLUMNS, ROWS} from "./constants";

export function getInvalidColumn(field : string[][]) : number {
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLUMNS; col++) {
            for (let nextColumn = col + 1; nextColumn < COLUMNS; nextColumn++) {
                if (field[row][col] === field[row][nextColumn] && field[row][col] !== '') {
                    return row;
                }
            }
        }
    }
    return -1;
}

export function getInvalidRow(field : string[][]) : number {
    for (let col = 0; col < COLUMNS; col++) {
        for (let row = 0; row < ROWS; row++) {
            for (let nextRow = row + 1; nextRow < ROWS; nextRow++) {
                if (field[row][col] === field[nextRow][col] && field[row][col] !== '') {
                    return col;
                }
            }
        }
    }
    return -1;
}

export function getInvalidSquare(field : string[][]) : number {

    let cells: string[] = [];
    for(let i = 0; i < field.length; i++)
    {
        cells = cells.concat(field[i]);
    }

    let currentCells : string[] = []

    for (let rowStart = 0; rowStart < ROWS; rowStart += 3) {
        for (let columnStart = rowStart; columnStart < ROWS * COLUMNS; columnStart += 9) {
            let col = cells.slice(columnStart, columnStart + 3);
            currentCells = currentCells.concat(col);
        }
    }

    for (let i = 0; i < ROWS * COLUMNS;) {
        if (isInvalidSquare(currentCells.slice(i, i += 9))) {
            return getCurrentSquare(i);
        }
    }

    return -1;
}

function isInvalidSquare(square : string[]) : boolean {
    for (let i = 0; i < square.length; i++) {
        for (let j = i + 1; j < square.length; j++) {
            if (square[i] === square[j] && square[i] !== '') {
                return true;
            }
        }
    }
    return false;
}

function getCurrentSquare(i: number) {
    return i / 9 - 1;
}