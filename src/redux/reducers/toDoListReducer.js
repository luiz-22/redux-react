import {
    ADDTHING,
    DONETHING
} from "../types";

const initialToDo = {
        toDo: [],
        done: []
}

const toDoReducer = (state = initialToDo, action) => {

    switch (action.type) {
        case ADDTHING:
            return ({
                ...state,
                toDo: [...state.toDo, action.payload]
            })

        case DONETHING:
            return ({
                ...state,
                toDo: state.toDo.filter((value, index) => index != action.payload),
                done: [...state.done, state.toDo[action.payload]]
            })

        default:
            return { ...state }
    }
}

export default toDoReducer
