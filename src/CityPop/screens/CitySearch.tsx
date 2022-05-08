import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { colorPalette } from '../misc/colors'
import Ionicons from '@expo/vector-icons/Ionicons';


export default function CitySearch() {

    // store the city input
    const [city, setCity] = useState("")
  return (
    <View style={styles.container}> 
      <Text style={styles.title}>Search by City</Text>
      <TextInput style={styles.searchInput} onChangeText={(text: string) => setCity(text)} placeholder="Enter city"/>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Search</Text>
          <Ionicons color="white" size={20} name="search" />
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colorPalette.white,
    },
    title: {
        fontSize: 24,
        color: colorPalette.dark,

    }, 
    searchInput: {
        marginTop: 10,
        backgroundColor: 'white',
        width: '80%',
        height: 40,
    },
    button: {
        marginTop: 15,
        height: 40,
        width: 200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colorPalette.blue,
        padding: 10,
        borderRadius: 4,
    },
    buttonText: {
        marginRight: 10,
        color: "white",
    }
})