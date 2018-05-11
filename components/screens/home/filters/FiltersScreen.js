import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import { LinearGradient } from 'expo';

import { Logo } from '../../../shared/Logo.js';
import { AnimalPicker } from './AnimalPicker.js';
import { AgePicker } from './AgePicker.js';
import { GenderPicker } from './GenderPicker.js';

export default class FiltersScreen extends Component {

	static navigationOptions = {
		headerTransparent: true,
		title: 'Search Filters',
		headerTintColor: '#fff',
		headerStyle: {
			borderBottomWidth: 1,
			borderColor: '#fff',
			elevation: 0
		},
		headerRight: (
			<Logo size={{width: 35, height: 35, marginRight: 20}} />
		)
	}

	constructor(props) {
		super(props);
		this.state = {
			animal: 'Any',
			animalIndex: 0,
			age: 'Any',
			ageIndex: 0,
			gender: 'none'
		};
	}

	updateAnimal = (index, animal) => {
		this.setState({ animalIndex: index, animal })
	}

	updateAge = (index, age) => {
		this.setState({ageIndex: index, age})
	}

	updateGender = (gender) => {
		this.setState({ gender })
	}

	search = () => {
		if (this.props.zipCode) {
			this.props.navigation.navigate('PetList', {
				zipCode: this.props.zipCode,
				animal: this.state.animal,
				age: this.state.age,
				gender: this.state.gender
			})
		}
	}

	render() {

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
					<GenderPicker
						gender={this.state.gender}
						select={this.updateGender}
					/>
				<View style={styles.buttonContainer}>
					<Button
					  rounded
					  buttonStyle={styles.cancelButton}
						title="Cancel"
						onPress={this.search}
					/>
					<Button
					  rounded
						titleStyle={{color: "#23d69d"}}
					  buttonStyle={styles.searchButton}
						title="Search"
						onPress={this.search}
					/>
					</View>
				</View>
			</LinearGradient>
		)
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		marginTop: 100, 
		justifyContent: 'center',
		width: '100%'
	},
	buttonContainer: { 
		flexDirection: 'row',
		justifyContent: 'space-around', 
	},
	cancelButton: {
		width: 190,
		borderWidth: 1,
		borderColor: '#fff',
		backgroundColor: 'transparent',
	},
	searchButton: {
		width: 190,
		backgroundColor: '#fff',
	},
})