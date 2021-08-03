import React from 'react';
import AppHeader from './Components/AppHeader';
import {View} from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoginScreen  from './Screens/LoginScreen';
import MainScreen from './Screens/MainScreen';

export default class App extends React.Component{
  render(){
    return(
      <View>
        <AppHeader/>
        <AppContainer/>
      </View>
    )
  }
}

const switchNavigator = createSwitchNavigator({
  LoginScreen:LoginScreen,
  MainScreen:MainScreen,
});
const AppContainer = createAppContainer(switchNavigator);