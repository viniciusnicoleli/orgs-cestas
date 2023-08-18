// import { StatusBar } from 'expo-status-bar';
import {StatusBarStyleSheet, Text, View, StatusBar } from 'react-native';
import Cesta from './src/telas/cesta'

export default function App() {
  return (
    <View>
      <StatusBar />
      <Cesta />
    </View>
  );
}
