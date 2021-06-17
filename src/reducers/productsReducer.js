import { types } from '../types/types';

const initialState = {
    favorite: [],
    active: {}
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
                favorite: [action.payload, ...state.favorite]
            }
        case types.loadFavoriteProduct:
            return {
                ...state,
                favorite: [...action.payload]
            }
        case types.deleteFavoriteProduct:
            return {
                ...state,
                active: null,
                favorite: state.favorite.filter(fav => fav.id !== action.payload)
            }
        default:
            return state;
    }

}
export default productsReducer