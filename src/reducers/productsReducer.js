import { types } from '../types/types';

const initialState = {
    active: {
        id: "",
        title: "",
        imagen: ""
    },
    search: []
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.productActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.searchProduct:
            return {
                ...state,
                search: [...action.payload]
            }
        case types.cleanSearch:
            return {
                ...state,
                search: []
            }
        default:
            return state;
    }

}
export default productsReducer