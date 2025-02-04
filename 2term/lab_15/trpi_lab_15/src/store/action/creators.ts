import Point from "../../types/Point";
import {ActionTypes} from "./types";

export const fillCell = (coords: Point, value: string) : ActionTypes => {
    return {
        type: "FILL_CELL",
        coords: coords,
        value: value
    }
}

export const newGame = () : ActionTypes => {
    return {
        type: "NEW_GAME"
    }
}

export const getHint = () : ActionTypes => {
    return {
        type: "GET_HINT"
    }
}