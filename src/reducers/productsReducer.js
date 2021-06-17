import { types } from '../types/types';

const initialState = {
    favorite: [],
    active: {
        id: "",
        title: "",
        imagen: ""
    }
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
        case types.addFavoriteProduct:
            return {
                ...state,
                favorite: [action.payload, ...state.userData]
            }
        default:
            return state;
    }

}
export default productsReducer