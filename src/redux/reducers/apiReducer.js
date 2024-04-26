import {
    GETAPI
} from "../types";

const initialApi = {
    characters: []
}

export default function apiReducer(state = initialApi, action) {
    switch (action.type) {
        case GETAPI:
            return ({
                ...state,
                characters: [...state.characters, action.payload]
            })

        default:
            return { ...state }
    }
}