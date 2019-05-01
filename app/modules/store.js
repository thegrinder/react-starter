import createSagaMiddleware from 'redux-saga';
import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';
import reducers from './reducers';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const configureStore = () => {
  const store = createStore(combineReducers(reducers), compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ));
  return store;
};

export const runSaga = () => sagaMiddleware.run(rootSaga);
