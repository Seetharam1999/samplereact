import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './components/MainComponent';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <Main />
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1
  }
});
