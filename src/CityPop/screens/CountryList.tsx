import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationType } from '../misc/navigationProps';
import CountrySearchResult from '../components/CountrySearchResult';
import { colorPalette } from '../misc/colors';


type Props = NativeStackScreenProps<NavigationType, 'CountryList'>;

export default function CountryList({ route, navigation }: Props) {
  
  return (
    <View style={styles.container}>
      <View style={styles.textArea}>
        <Text style={styles.title}>Cities in</Text>
        <Text style={styles.title}>{ route.params.country }</Text>
      </View>
      <View style={styles.countryList}>
        <FlatList data={route.params.cities} renderItem={({ item }) => (
            <CountrySearchResult city={item.name} onPress={() => navigation.navigate('PopulationScreen', { city: item.name, population: item.population})}/>
        )}/>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colorPalette.white,
        flex: 1,
    },
    countryList: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flex: 0.6,
        height: '95%',
    },
    title: {
        fontSize:  40,
        fontWeight: 'bold',
        margin: 10
    },
    textArea: {
      flex: 0.4,
      justifyContent: 'center',
      alignItems: 'center',
    }
    
})