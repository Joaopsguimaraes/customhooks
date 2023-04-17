/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import Missions from './src/screens/Missions';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Rockets from './src/screens/Rockets';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

function Apo() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarInactiveTintColor: 'gray',
          tabBarActiveBackgroundColor: 'white',
          tabBarInactiveBackgroundColor: 'white',
          headerShown: false,
        }}>
        <Tab.Screen
          name="Rockets"
          component={Rockets}
          options={{
            tabBarIcon: () => <Text>🚀</Text>,
          }}
        />
        <Tab.Screen
          name="Missions"
          component={Missions}
          options={{
            tabBarIcon: () => <Text>🎯</Text>,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Apo;
