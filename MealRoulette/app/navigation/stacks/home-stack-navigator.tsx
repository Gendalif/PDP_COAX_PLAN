import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {AboutMealScreen} from '../../screen/AboutMeal';
import {HomeScreen} from '../../screen/Home';

import {DEFAULT_STACK_OPTIONS} from '../options';

export type HomeStackParams = {
  Home: undefined;
  AboutMeal: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParams>();

export const HomeStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="AboutMeal" component={AboutMealScreen} />
  </Stack.Navigator>
);
