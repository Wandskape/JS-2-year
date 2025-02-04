import Cell from "./components/Cell";
import React from "react";
import {InvalidData} from "./types/InvalidData";

export function getCells(
    field: string[][],
    completedField: string[][],
    invalidData: InvalidData
    ) {
    let cells = [];
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field.length; j++) {
            cells.push(
                <Cell
                    key={"" + i + j}
                    value={field[i][j]}
                    trueValue={completedField[i][j]}
                    coords={{row: i, column: j, square: getCurrentSquare(i, j)}}
                    invalidData={{...invalidData}}
                />
        );
        }
    }
    return cells;
}

export function getColumns(cells: any[]) {
    let columns = [];
    for (let i = 0; i < 9; i++) {
        columns.push(
            <div key={Math.random()} style={{display:'inline', float:'left'}}>
                {cells.splice(0, 9)}
            </div>
    );
    }
    return columns;
}

export function getCurrentSquare(i: number, j: number) {
    return Math.floor(i / 3) + 3 + (Math.floor(j / 3) - 1) * 3;
}

