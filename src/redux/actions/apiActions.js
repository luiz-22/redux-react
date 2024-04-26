import axios from "axios";
import {
    GETAPI
} from "../types";

export function getApi() {
    return async function (dispatch) { // Mecanismo Redux
        return await axios.get(`https://rickandmortyapi.com/api/character`)
            .then(response => {
                dispatch({ type: GETAPI, payload: response.data.results })
            })
            .catch(error => {
                console.log(error)
                return []
            })
    }
}