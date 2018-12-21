import createSagaMiddleware from 'redux-saga';
import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';
import reducers from '../redux/reducers';
import rootSaga from '../redux/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const configureStore = () => {
  const store = createStore(combineReducers(reducers), compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ));

  if (module.hot) {
    module.hot.accept('../redux/reducers', () => {
      store.replaceReducer(combineReducers(reducers));
    });
  }

  return store;
};

export const runSaga = () => sagaMiddleware.run(rootSaga);
