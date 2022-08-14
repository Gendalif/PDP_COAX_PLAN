import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import {HomeStackNavigator} from './stacks';

import {navigationRef} from '../services/navigator';
import {GLOBAL_NAVIGATION_STACK_OPTIONS} from './options';

export type RootParams = {
  HomeStack: undefined;
};

const Stack = createNativeStackNavigator<RootParams>();

const RootNavigator = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator screenOptions={GLOBAL_NAVIGATION_STACK_OPTIONS}>
      <Stack.Screen name="HomeStack" component={HomeStackNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
