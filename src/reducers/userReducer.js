import { types } from "../types/types";

const initialState = {
    userData: [],
    active: {}
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.dataUserLoad:
            return {
                ...state,
                userData: [...action.payload]
            }
        default:
            return state
    }
}