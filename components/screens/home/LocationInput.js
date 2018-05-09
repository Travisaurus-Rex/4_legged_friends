import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export const LocationInput = (props) => {
	return (
		<View style={styles.columnContainer}>
			<TextInput
	      placeholder="ZIP CODE"
	      placeholderTextColor="#fff"
	      underlineColorAndroid="transparent"
	      caretHidden={true}
	      keyboardType="numeric"
	      maxLength={5}
	      style={styles.input}
	      onChangeText={zipCode => props.setzip(zipCode)}
	      onSubmitEditing={props.submit}
	    />
	    <Icon
	      name='my-location'
	      type='MaterialIcons'
	      color='#23d69d'
	      containerStyle={{
	        backgroundColor: '#fff',
	        padding: 8,
	        borderRadius: 25
	      }}
	      onPress={() => alert('Are you sure you want to detect your location?')}
	    />
    </View>
	)
} 

const styles = StyleSheet.create({
	columnContainer: {
    display: 'flex', 
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between', 
  },
  input: {
    width: 150,
    height: 40,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 25,
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    marginRight: 14,
  }
})