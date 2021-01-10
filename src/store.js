import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const initialState = {
    rewards: ['R1', 'R2', 'R3', 'R4', 'R5'],
    categories: ['Cat1', 'Cat2', 'Cat3', 'Cat4', 'Cat5']
};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

);

export default store;