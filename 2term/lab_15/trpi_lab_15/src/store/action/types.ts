import Point from "../../types/Point";

export type NEW_GAME_ACTION = "NEW_GAME";
export type GET_HINT_ACTION = "GET_HINT";
export type FILL_CELL_ACTION = "FILL_CELL";

interface NewGameAction {
    type: NEW_GAME_ACTION
}

interface GetHintAction {
    type: GET_HINT_ACTION
}

interface FillCellAction {
    type: FILL_CELL_ACTION,
    coords: Point,
    value: string
}

export type ActionTypes = NewGameAction | GetHintAction | FillCellAction;