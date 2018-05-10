import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { LinearGradient } from 'expo';

import { AnimalPicker } from './AnimalPicker.js';
import { AgePicker } from './AgePicker.js';

export default class FiltersScreen extends Component {

	static navigationOptions = {
		headerTransparent: true,
		title: 'Search Filters',
		headerTintColor: '#fff',
		headerStyle: {
			borderBottomWidth: 1,
			borderColor: '#fff',
			elevation: 0
		}
	}

	constructor(props) {
		super(props);
		this.state = {
			animal: 'Dog',
			animalIndex: 0,
			ageIndex: 0,
		};
	}

	updateAnimal = (index, animal) => {
		this.setState({ animalIndex: index, animal });
	}

	updateAge = (index, age) => {
		this.setState({ageIndex: index, age})
	}

	render() {

		const { navigation } = this.props;

		return (
			<LinearGradient
        start={[1, 0]}
        end={[0, 1]}
        colors={['#568AEB', '#56C3EB', '#23d69d', '#1DDB85']}
        style={{width: '100%', height: '100%'}}
      >
				<View style={styles.container}>
					<AnimalPicker 
						selected={this.state.animalIndex} 
						update={this.updateAnimal} 
					/>
					<AgePicker 
						selected={this.state.ageIndex} 
						update={this.updateAge} 
					/>
				</View>
			</LinearGradient>
		)
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		marginTop: 100, 
		padding: 6, 
		justifyContent: 'center'
	}
})