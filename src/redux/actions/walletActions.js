import {
    DEPOSIT,
    WITHDRAW
} from "../types";

export const deposit = () => ({ type: DEPOSIT, payload: 10 })
export const withdraw = () => ({ type: WITHDRAW, payload: 10 })