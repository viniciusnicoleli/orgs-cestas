// import { StatusBar } from 'expo-status-bar';
import {StatusBarStyleSheet, Text, View, StatusBar } from 'react-native';
import Cesta from './src/telas/Cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';

import mock from './src/mocks/cesta';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontCarregada] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold,
  });

  if (!fontCarregada) {
    return <View/>
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <View>
      <StatusBar />
      <Cesta {...mock}/>
    </View>
  );
}
