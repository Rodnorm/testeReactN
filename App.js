import React from 'react';
import Main from './components/main';
import Login from './components/login';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const Root = createStackNavigator({
  Login: Login,
  Main: Main,
});

const MainContainer = createAppContainer(Root);

export default class App extends React.Component {
  
  render() {
    return (
        <MainContainer />
    );
  }
}