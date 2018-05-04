import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

export class DetailsScreen extends React.Component {

  static navigationOptions = {
    headerTitle: 'Details',
  }

  constructor(props) {
    super(props);
    this.state = {input: ''};
  }

  render() {

    const { params } = this.props.navigation.state;
    const name = params ? params.name : '';
    const fallback = 'World';

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Details Page</Text>
        <TextInput
          style={styles.input}
          onChangeText={input => this.setState({input})}
         />
        <Text>Hello, {this.state.input || name || fallback}!</Text>
      </View>
    );
  }
}