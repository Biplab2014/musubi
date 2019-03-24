import {
  POP_ROUTE,
  GOTO_MODE,
  POP_TO_ROUTE,
  REPLACE_ROUTE,
  PUSH_NEW_ROUTE,
  SET_NAVIGATION_PARAMS,
  REPLACE_CURRENT_ROUTE,
  PUSH_OR_POP_OR_REPLACE_ROUTE,
  POP_TO_ROUTE_OR_PUSH_NEW_ROUTE,
} from '../constants';

export function setNavigationParams(params, key) {
  return {
    type: SET_NAVIGATION_PARAMS,
    params,
    key,
  };
}

export function gotoMode(mode) {
  return {
    type: GOTO_MODE,
    mode,
  };
}

export function replaceCurrentRoute(route: string, params: any): Action {
  return {
    type: REPLACE_CURRENT_ROUTE,
    route,
    params,
  };
}

export function replaceRoute(route: string, params: any): Action {
  console.log("came===>")
  return {
    type: REPLACE_ROUTE,
    route,
    params,
  };
}

export function pushNewRoute(
  route: string,
  params: any,
  subActionRouteToPush: any,
): Action {
  return {
    type: PUSH_NEW_ROUTE,
    route,
    params,
    subActionRouteToPush,
  };
}

export function popRoute(): Action {
  return {
    type: POP_ROUTE,
  };
}

export function popToRoute(route: string): Action {
  return {
    type: POP_TO_ROUTE,
    route,
  };
}

export function popToRouteOrPushNewRoute(
  route: string,
  params: any,
  navigator: any,
): Action {
  return {
    type: POP_TO_ROUTE_OR_PUSH_NEW_ROUTE,
    route,
    params,
    navigator,
  };
}

export function pushOrPopOrReplaceRoute(
  route: string,
  params: any,
  subRouteName: any, // SubRoute name will be used for pushing only.
): Action {
  return {
    type: PUSH_OR_POP_OR_REPLACE_ROUTE,
    route,
    params,
    subRouteName,
  };
}
