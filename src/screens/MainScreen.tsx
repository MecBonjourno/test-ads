import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Settings from './Settings';
import Home from './Home';

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home">
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
        tabBarIcon: () => <Ionicons name="ios-home" color="blue" size={26} />,
      }}
    />
    <Tab.Screen
      name="Settings"
      component={Settings}
      options={{
        tabBarLabel: 'Settings',
        tabBarColor: '#930000',
        tabBarIcon: () => <Ionicons name="ios-home" color="blue" size={26} />,
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen();
