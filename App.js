import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './components/screens/home/Home.js';
import PetListScreen from './components/screens/petlist/PetList.js';

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    PetList: {
      screen: PetListScreen,
    },
  }, 
  {
      initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
