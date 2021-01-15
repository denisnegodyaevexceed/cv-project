import { createStore, compose, applyMiddleware } from "redux";

import rootReducer from "../reducers/rootReducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = () => {
    return createStore(rootReducer,
        composeEnhancer(applyMiddleware()),)
    
};
