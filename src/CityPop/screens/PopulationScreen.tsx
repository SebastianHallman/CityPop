import { View, Text, StyleSheet } from 'react-native';
import { colorPalette } from '../misc/colors';
import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationType } from '../misc/navigationProps';



type Props = NativeStackScreenProps<NavigationType, 'PopulationScreen'>;

export default function PopulationScreen({ route, navigation }: Props) {
    // Displays the population of a city
  return (
    <View style={styles.container}>
      <Text style={styles.cityText}>{route.params.city}</Text>
      <View style={styles.population}>
        <Text>Population</Text>
        <Text style={styles.populationText}>{route.params.population}</Text>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorPalette.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cityText: {
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 60,
        color: colorPalette.dark,
    },
    populationText: {
        fontSize: 30,
        color: colorPalette.dark,
    },
    population: {
        width: "80%",
        padding: 20,
        backgroundColor: "white",
        borderColor: colorPalette.dark,
        borderWidth: 2,
        alignItems: 'center',
    }
})