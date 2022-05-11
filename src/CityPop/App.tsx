import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CitySearch from './screens/CitySearch';
import PopulationScreen from './screens/PopulationScreen';
import { NavigationType } from './misc/navigationProps';
import CountrySearch from './screens/CountrySearch';
import CountryList from './screens/CountryList';



// create the stack navigator

const Stack = createNativeStackNavigator<NavigationType>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{title: 'CityPop'}}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="CitySearch" component={CitySearch}></Stack.Screen>
        <Stack.Screen name="CountrySearch" component={CountrySearch}></Stack.Screen>
        <Stack.Screen name="PopulationScreen" component={PopulationScreen}></Stack.Screen>
        <Stack.Screen name="CountryList" component={CountryList}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
