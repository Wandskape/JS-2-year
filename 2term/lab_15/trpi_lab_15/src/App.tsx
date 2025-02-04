import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {AppDispatch, RootState} from "./store/store";
import {useHotkeys} from "react-hotkeys-hook";
import {getHint, newGame} from "./store/action/creators";
import {getCells, getColumns} from "./utils";

const App = () => {
    const state = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();

    useHotkeys('N', () => dispatch(newGame()));
    useHotkeys('H', () => dispatch(getHint()));

    let cells = getCells(state.field, state.completedField, state.invalid);
    let columns = getColumns(cells);
    
    const [isFieldCompleted, setIsFieldCompleted] = useState(false);

    useEffect(() => {
        setIsFieldCompleted(checkFieldCompletion(state.field, state.completedField));
    }, [state.field, state.completedField]);

    const checkFieldCompletion = (field: string[][], completedField: string[][]) => {
        for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
            if (field[i][j] !== completedField[i][j]) {
            return false;
            }
        }
        }
        return true;
    };

    return (
        <div className="app">
            <h1>Судоку Redux</h1>
            <div style={{ display: "inline-block", textAlign: "left", background: isFieldCompleted ? "yellow" : "none" }}>
                {columns}
            </div>
        </div>
    );
};




export default App;