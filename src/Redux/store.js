import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './Reducers/index';
import thunk from 'redux-thunk';

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);