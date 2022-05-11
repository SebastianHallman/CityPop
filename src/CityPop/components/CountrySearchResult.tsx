import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { colorPalette } from '../misc/colors';

type Props = {
    city: string,
    onPress: any
}

export default function CountrySearchResult(props: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
          <Text style={styles.buttonText}>{props.city}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        
    },
    button: {
        width: '90%',
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 50,
        alignItems: 'center',
        
        backgroundColor: colorPalette.blue,
        margin: 10,
        borderWidth: 2,
        borderColor: colorPalette.dark,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
    }

})