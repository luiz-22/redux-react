import {
    ADDTHING,
    DONETHING
} from "../types";

export const addThing = (payload) => ({ type: ADDTHING, payload })
export const doneThing = (payload) => ({ type: DONETHING, payload })
