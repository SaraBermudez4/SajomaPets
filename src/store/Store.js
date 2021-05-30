import { combineReducers, createStore } from "redux";
import { authReducer } from "../reducers/authReducer";

const composeEnhancers = (typeof window !== 'undefined' && window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_) || compose;

const reducer = combineReducers({
    auth: authReducer
})

export const store = createStore(
    reducer,
    composeEnhancers
)