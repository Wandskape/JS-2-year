import SudokuGenerator from "../sudoku/SudokuGenerator";
import {ActionTypes} from "./action/types";
import {InvalidData} from "../types/InvalidData";
import {getInvalidColumn, getInvalidRow, getInvalidSquare} from "../check_field";
import {MISSED_CELLS_COUNT, ROWS} from "../constants";

const initialState: StateType = {
    field: Array.from({
        length: ROWS
    }, () => Array.from({
        length: ROWS
    }, () => '')),
    completedField: Array.from({
        length: ROWS
    }, () => Array.from({
        length: ROWS
    }, () => '')),
    invalid: {
        row: -1,
        column: -1,
        square: -1
    }
};

interface StateType {
    field: string[][],
    completedField: string[][],
    invalid: InvalidData
}

const RootReducer = (state = initialState, action: ActionTypes): StateType => {
    switch (action.type) {
        case "FILL_CELL": {
            let newState: StateType = {
                field: [...state.field],
                completedField: [...state.completedField],
                invalid: {
                    row: getInvalidRow(state.field),
                    column: getInvalidColumn(state.field),
                    square: getInvalidSquare(state.field)
                }
            };

            newState.field[action.coords.row][action.coords.column] = action.value;

            newState.invalid = {
                row: getInvalidRow(state.field),
                column: getInvalidColumn(state.field),
                square: getInvalidSquare(state.field)
            };

            return newState;
        }
        case "GET_HINT": {
            let newState: StateType = {
                field: [...state.field],
                completedField: [...state.completedField],
                invalid: {...state.invalid}
            };

            let rowIndex = -1;
            let columnIndex = -1;

            for (let i = 0; i < newState.field.length; i++) {
                for (let j = 0; j < newState.field[i].length; j++) {
                    if (newState.field[i][j] === "") {
                        rowIndex = i;
                        columnIndex = j;
                        break;
                    }
                }
                if (rowIndex !== -1) {
                    break;
                }
            }

            if (rowIndex === -1) {
                return state;
            }

            newState.field[rowIndex][columnIndex] = newState.completedField[rowIndex][columnIndex];

            return newState;
        }

        case "NEW_GAME":
            const newSudokuGenerator = new SudokuGenerator(ROWS, MISSED_CELLS_COUNT);
            newSudokuGenerator.fillValues();
            return {
                field: [...newSudokuGenerator.getField()],
                completedField: [...newSudokuGenerator.getCompletedField()],
                invalid: {
                    row: -1,
                    column: -1,
                    square: -1
                }
            };
        default:
            return state;
    }
};

export default RootReducer;