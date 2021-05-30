import { combineReducers, createStore, applyMiddleware } from "redux";
import { authReducer } from "../reducers/authReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducer = combineReducers({
    auth: authReducer
})

export const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware())
    
)