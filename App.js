import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './components/screens/home/Home.js';
import PetListScreen from './components/screens/petlist/PetList.js';
import FiltersScreen from './components/screens/home/filters/Filters.js';

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    PetList: {
      screen: PetListScreen,
    },
    Filters: {
      screen: FiltersScreen
    }
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
