import React from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/Screens/LoginScreen';

import { useRoute } from './src/router';

const routing = useRoute(true);

export default function App() {
  const [loaded] = useFonts({
    'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
  });

  if (!loaded) {
    return null;
  }

  // return <LoginScreen />;
  return <NavigationContainer>{routing}</NavigationContainer>;
}
