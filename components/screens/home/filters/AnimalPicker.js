import React from 'react';
import { Picker, StyleSheet } from 'react-native';

export const AnimalPicker = (props) => {
	return (
		<Picker
			style={styles.picker}
			selectedValue={props.selected}
			onValueChange={animal => props.update(animal)}
		>
			<Picker.Item style={styles.item} label="Dog" value="dog" />
			<Picker.Item style={styles.item}  label="Cat" value="cat" />
			<Picker.Item style={styles.item}  label="Rabbit" value="rabbit" />
			<Picker.Item style={styles.item}  label="Horse" value="horse" />
		</Picker>
	)
}

const styles = StyleSheet.create({
	picker: {
		height: 50,
		width: '100%',
		color: '#fff',
		borderWidth: 1,
		borderColor: '#fff',
	},
	item: {
		padding: 5,
		color: '#fff'
	}
})