import { types } from '../types/types';

const initialState = {
    active: {
        id: "",
        title:"",
        imagen: ""
    }
}

const productsReducer = (state = initialState, action) => {
    switch (action.payload) {
        case types.productActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        default:
            return state;
    }

}
export default productsReducer