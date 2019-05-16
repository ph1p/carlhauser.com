import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';

const enhancers = compose(
  process.env.NODE_ENV === 'development' && typeof window !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

const createStoreWithMiddleware = applyMiddleware()(createStore);

export default initialState =>
  createStoreWithMiddleware(rootReducer, initialState, enhancers);
