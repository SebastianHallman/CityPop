import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { colorPalette } from '../misc/colors'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';


// Declare the navigation types

type NavigationType = {
  Home: undefined,
  CitySearch: undefined,
}

type Props = NativeStackScreenProps<NavigationType, 'CitySearch'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CityPop</Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CitySearch')}>
          <Text style={styles.buttonText}>Search by city</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CountrySearch')}>
          <Text style={styles.buttonText}>Search by country</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorPalette.white,
  },
  
  title: {
    fontSize: 35, 
    fontWeight: 'bold',
  },
  buttonGroup: {
    marginTop: 20,
    alignItems: 'center',
    width: "100%"
  },
  button: {
    padding: 20,
    margin: 15,
    width: "80%",
    backgroundColor: colorPalette.blue,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: colorPalette.white,
    fontSize: 16,
  },
  
})