import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export const SearchOrFilter = (props) => {
  return (
    <View style={styles.columnContainerBorder}>
      <Button
        icon={{name: 'settings'}}
        buttonStyle={{
          width: 100,
          backgroundColor: 'transparent'
        }}
        title="FILTERS"
        onPress={props.filters}
      />
      <Button
        iconRight={{name: 'search', color: '#23d69d'}}
        textStyle={{
          color: '#23d69d',
          fontWeight: "500"
        }}
        buttonStyle={{
          width: 125,
          backgroundColor: '#fff',
          borderRadius: 5,
        }}
        title="SEARCH"
        onPress={props.search}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  columnContainerBorder: {
    borderTopWidth: 1,
    borderColor: '#fff',
    paddingTop: 24,
    marginTop: 24,
    display: 'flex', 
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between', 
  }
})