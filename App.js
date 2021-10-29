import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import  Tutorial from './screens/Tutorial';
import HomeScreen from './screens/HomeScreen';
import CameraScreen from './screens/CameraScreen'
import EditScreen from './screens/EditScreen';
import PropsDebug from './screens/HybridTouch';

const AppSwitchNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  Tutorial: Tutorial,
  CameraScreen:CameraScreen,
  EditScreen:EditScreen,

});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default class App extends React.Component{
  render(){
  return <AppNavigator />
  }
}
