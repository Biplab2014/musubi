import { CLEAR_APP_STATE } from '../constants'

export function clearAppState() {
  return {
    type: CLEAR_APP_STATE,
  };
}