import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const MainStack = createStackNavigator();

import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';
import Home from './Screens/Home';

export const useRoute = isAuth => {
  return (
    <MainStack.Navigator>
      {!isAuth ? (
        <>
          <MainStack.Screen
            options={{
              headerShown: false,
            }}
            name="Login"
            component={LoginScreen}
          />
          <MainStack.Screen
            options={{
              headerShown: false,
            }}
            name="Registration"
            component={RegistrationScreen}
          />
        </>
      ) : (
        <MainStack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
      )}
    </MainStack.Navigator>
  );
};
