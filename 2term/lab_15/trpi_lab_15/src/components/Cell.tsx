import React, {useState, useEffect} from "react";
import Point from "../types/Point";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store/store";
import {fillCell} from "../store/action/creators";
import '../styles.css';
import {InvalidData} from "../types/InvalidData";

const Cell = (props : {
    value: string,
    trueValue: string,
    coords: Point,
    invalidData: InvalidData
}) => {
    const dispatch = useDispatch<AppDispatch>();
    const [currentValue, setCurrentValue] = useState(props.value);

    useEffect(() => {
        setCurrentValue(props.value);
    }, [props.value]);

    const isInvalidCell = props.invalidData.row === props.coords.column
        || props.invalidData.column === props.coords.row
        || props.invalidData.square === props.coords.square;

    const onKeyPressHandler = (event : any) => {
        if (event.key === 'Backspace') {
            dispatch(fillCell(props.coords, ""));
        }
        if (/[1-9]/.test(event.key)) {
            dispatch(fillCell(props.coords, event.key));
        }
    }

    return (
        <div
            className='cell'
            onKeyDown={onKeyPressHandler}
            tabIndex={0}
            style={{
                background: isInvalidCell ? 'red' : undefined,
                borderTopWidth: props.coords.column % 3 === 0 ? 4 : undefined,
                borderBottomWidth: props.coords.column === 8 ? 4 : undefined,
                borderLeftWidth: props.coords.row % 3 === 0 ? 4 : undefined,
                borderRightWidth: props.coords.row === 8 ? 4 : undefined,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {currentValue}
        </div>
    );
}

export default Cell;
