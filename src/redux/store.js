import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cotizadorReducer from './reducers/cotizadorReducer';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  cotizador: cotizadorReducer,
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
