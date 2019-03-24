import thunk from 'redux-thunk'
import reducer from '../reducers'
import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'

const reactNavigationAddListnerMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navState,
);

const localStorageMiddleware = ({ getState }) => next => (action) => {
  const result = next(action)
  return result
};

const networkErrorMiddleware = store => next => (action) => {
  if (action.payload && action.payload.code === 9999) {
    store.dispatch({ type: 'NETWORK_ERROR' });
  }
  return next(action)
};

export default function configureStore(initialState = {}) {
  const middleware = [thunk,localStorageMiddleware,networkErrorMiddleware,reactNavigationAddListnerMiddleware];
  const composeEnhancers =
    global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(applyMiddleware(...middleware));
  const store = createStore(reducer, initialState, enhancer);
  return store;
}
