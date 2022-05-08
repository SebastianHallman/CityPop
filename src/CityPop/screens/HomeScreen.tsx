import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { colorPalette } from '../misc/colors'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CityPop</Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Search by city</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
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
    backgroundColor: "F3E8EE",
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