import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { authReducer } from "../reducers/authReducer"
import { registro } from '../reducers/uiReducer'
import thunk from 'redux-thunk'
import { userReducer } from "../reducers/userReducer";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducer = combineReducers({
    auth: authReducer,
    ui: registro,
    user: userReducer
})

export const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))    
)