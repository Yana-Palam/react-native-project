import React from 'react';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import LoginScreen from './src/Screens/LoginScreen';
import RegistrationScreen from './src/Screens/RegistrationScreen';

export default function App() {
  const [loaded] = useFonts({
    'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      {/* <LoginScreen /> */}
      <RegistrationScreen />
    </View>
  );
}
