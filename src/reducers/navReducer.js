import ip from 'icepick'
import { NavigationActions } from 'react-navigation'
import AppNavigator from '../navigation/AppNavigator'
import {
  GOTO_MODE,
  POP_ROUTE,
  POP_TO_ROUTE,
  REPLACE_ROUTE,
  PUSH_NEW_ROUTE,
  REPLACE_CURRENT_ROUTE,
  SET_NAVIGATION_PARAMS,
  PUSH_OR_POP_OR_REPLACE_ROUTE,
  POP_TO_ROUTE_OR_PUSH_NEW_ROUTE,
} from '../constants'

this._lastAction = { params: undefined, timestamp: 0 };

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('SplashScreen'),
);


export default function (state = initialState, action) {
  switch (action.type) {
    case SET_NAVIGATION_PARAMS: {
      const { params, key } = action;
      const newState = AppNavigator.router.getStateForAction(
        NavigationActions.setParams({
          params,
          key,
        }),
        state,
      );
      return newState;
    }

    case GOTO_MODE: {
      const key = state.routes[state.index].key;
      let modes =
        state.routes[state.index].params &&
        state.routes[state.index].params.modes;
      if (modes) {
        modes = [...modes, action.mode];
      } else {
        modes = [action.mode];
      }
      return AppNavigator.router.getStateForAction(
        NavigationActions.setParams({
          params: {
            modes,
            currentMode: modes[modes.length - 1],
          },
          key,
        }),
        state,
      );
    }

    case PUSH_NEW_ROUTE: {
      if (
        !_checkLastAction({
          method: 'push',
          passProps: action.params,
          screen: action.route,
        })
      ) {
        return state;
      }
      state = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: action.route,
          params: action.params,
          action: action.subActionRouteToPush
            ? NavigationActions.navigate({
              routeName: action.subActionRouteToPush,
              params: action.params,
            })
            : null,
        }),
        state,
      );
      return state;
    }

    case POP_ROUTE: {
      if (
        !_checkLastAction({
          method: 'pop',
          passProps: action.params,
          screen: action.route,
        })
      ) {
        return state;
      }

      const key = state.routes[state.index].key;
      const modes =
        state.routes[state.index].params &&
        state.routes[state.index].params.modes;
      if (modes && modes.length) {
        modes.pop();
        state = AppNavigator.router.getStateForAction(
          NavigationActions.setParams({
            params: {
              modes,
              currentMode: modes[modes.length - 1],
            },
            key,
          }),
          state,
        );
      } else {
        state = AppNavigator.router.getStateForAction(
          NavigationActions.back(),
          state,
        );
      }
      return state;
    }

    case REPLACE_ROUTE: {
      state = AppNavigator.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: action.route })],
        }),
        state,
      );
      return state;
    }

    case REPLACE_CURRENT_ROUTE: {
      state = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state,
      );
      state = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: action.route,
          params: action.params,
        }),
        state,
      );
      return state;
    }

    case POP_TO_ROUTE: {
      state = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        originalState,
      );
      return state;
    }

    case POP_TO_ROUTE_OR_PUSH_NEW_ROUTE: {
      state = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: action.route,
          params: action.params,
        }),
        state,
      );
      return state;
    }

    case PUSH_OR_POP_OR_REPLACE_ROUTE: {
      state = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: action.route,
          params: action.params,
          action: action.subRouteName
            ? NavigationActions.navigate({
              routeName: action.subRouteName,
              params: action.params,
            })
            : null,
        }),
        state,
      )
      return state;
    }

    case NavigationActions.NAVIGATE: {
      state = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: action.routeName,
          params: action.params,
        }),
        state,
      );
      return state;
    }

    default:
      return AppNavigator.router.getStateForAction(action, state);
  }
}
