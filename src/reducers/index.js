import navState from './navReducer'
import { combineReducers } from 'redux'
import appState from './appStateReducer'
import { CLEAR_APP_STATE } from '../constants'

const appReducer = combineReducers({
  appState,
  navState
});

const rootReducer = (state, action) => {
  if (action.type === CLEAR_APP_STATE) {
    state = undefined;
  }
  return appReducer(state, action)
};

export default rootReducer;
