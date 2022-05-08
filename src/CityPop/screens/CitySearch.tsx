import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { colorPalette } from '../misc/colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationType } from '../misc/navigationProps';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { searchCity, getCityPopulation } from '../api/geonames'

type Props = NativeStackScreenProps<NavigationType, 'CitySearch'>;

export default function CitySearch({ navigation } : Props) {

    // store the city input
    const [city, setCity] = useState("");  
    const [loading, setLoading] = useState(false); 

    
    async function search() {
        setLoading(true);
        var cityRes = await searchCity(city);
        var popRes = await getCityPopulation(cityRes);
        setLoading(false);
        navigation.navigate("PopulationScreen", {city: cityRes, population: popRes});
    }

  return (
    <View style={styles.container}> 
      <Text style={styles.title}>Search by City</Text>
      <TextInput style={styles.searchInput} onChangeText={(text: string) => setCity(text)} placeholder="Enter city"/>
      
      {loading ? <ActivityIndicator style={styles.loading} size="large"/> : 
    <TouchableOpacity style={styles.button} onPress={search}>
        <Text style={styles.buttonText}>Search</Text>
        <Ionicons color="white" size={20} name="search" />
    </TouchableOpacity>
      }

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
    },
    loading: {
        marginTop: 10,
    }

})