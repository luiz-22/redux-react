import {
    DEPOSIT,
    WITHDRAW
} from "../types";

const initialWallet = 0

const walletReducer = (state = initialWallet, action) => {
    switch (action.type) {
        case DEPOSIT:
            return state + action.payload;

        case WITHDRAW:
            return state - action.payload;
            
        default:
            return state;
    }
}

export default walletReducer