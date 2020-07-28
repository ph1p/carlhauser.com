import { createStore, compose } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers';

const enhancers = compose(
  process.env.NODE_ENV === 'development' && typeof window !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);

export const wrapper = createWrapper(() => createStore(rootReducer, {}, enhancers), {
  debug: typeof window !== 'undefined' && process.env.NODE_ENV !== 'production',
});
