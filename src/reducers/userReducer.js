import { types } from "../types/types";

const initialState = {
    userData: [
        {
            document:"",
            lastName: "",
            cellPhone: "",
            nickName: "",
            email: "",
            phone: "",
            name: "",
            cards: [],
            addresses: []

        }
    ],
    active: {}
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.dataUserAdd:
            return {
                ...state,
                userData: [action.payload, ...state.userData]
            }
        case types.dataUserLoad:
            return {
                ...state,
                userData: [...action.payload]
            }
        case types.dataUserUpdate:
            return {
                ...state,
                userData: state.userData.map(
                    data => data.id === action.payload.id
                    ? action.payload.data
                    : data
                )
            }
        default:
            return state
    }
}