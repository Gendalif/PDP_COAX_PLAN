import React from 'react';

import {NavigationContainerRef, StackActions} from '@react-navigation/native';
import {Action} from 'redux';

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

export class StaticNavigator {
  static dispatch(action: Action) {
    if (navigationRef?.current) {
      navigationRef.current.dispatch(action);
    }
  }

  static replace(routeName: string, params?: any) {
    if (navigationRef?.current) {
      const replaceAction = StackActions.replace(routeName, params);
      navigationRef.current.dispatch(replaceAction);
    }
  }

  static navigateTo(routeName: string, params?: any) {
    if (navigationRef?.current) {
      navigationRef.current.navigate(routeName, params);
    }
  }

  static push(routeName: string, params?: any) {
    if (navigationRef?.current) {
      const pushAction = StackActions.push(routeName, params);
      navigationRef.current.dispatch(pushAction);
    }
  }

  static getCurretRoute() {
    if (navigationRef?.current) {
      return navigationRef.current.getCurrentRoute();
    }
  }
}
