import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';

import { DetailsScreen } from './components/details.js';

import { url } from './config.js';

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home'
  }

  constructor(props) {
    super(props);
    this.state = { 
      text: '',
      err: ''
    };

    this.getRandomPet = this.getRandomPet.bind(this);
  }

  componentDidMount() {
    this.getRandomPet();
  }

  getRandomPet() {
    fetch(`${url}/random`, {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(pet => pet.json())
      .then(pet => {
        this.setState({
          pet: pet.name || 'No Name Defined', 
          image: pet.images[0] || 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2018-02/vicious_dog_0.png?itok=nsghKOHs',
          err: ''
        });
      })
      .catch(err => this.setState({err: 'there was an error'}));
  }

  render() {
    return(
      <View style={styles.container}>
        { !!this.state.pet &&
          <ImageBackground
            style={{width: '100%', height: '100%'}}
            source={{uri: this.state.image}}
          >
            <Button
              buttonStyle={{
                backgroundColor: "rgba(92, 99,216, 1)",
                maxWidth: 200,
                alignSelf: 'center',
                height: 45,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 25
              }} 
              title="View this Pet" 
            /> 
          </ImageBackground>
        }
        { !!this.state.err &&
          <Text>{this.state.err}</Text>
        }
      </View>
    )
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30
  },
  input: {
    height: 40,
    width: '100%',
    padding: 6,
    borderColor: 'gray',
    borderWidth: 1
  }
});
