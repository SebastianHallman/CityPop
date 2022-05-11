import { API_NINJA_KEY } from './key';

const axios = require('axios');

export async function searchCity(city: string ): Promise<any> {
    // Searches the API for a city
    var url = 'http://api.geonames.org/searchJSON?name=' + city + '&username=weknowit&maxRows=1&featureClass=P';
    
    try {
        let data = await axios.get(url); 
        
        var cityRes = data['data']['geonames'][0]['name'];
        console.log(cityRes);


        
        return cityRes
    } catch (e) {
        console.log(e);
    }
}

export async function getCityPopulation(city: string ): Promise<any> {
    // Searches the API for the population of the city
    var url = 'http://api.geonames.org/searchJSON?name=' + city + '&username=weknowit&maxRows=1&featureClass=P';
    try {
        let data = await axios.get(url);
        
        var popRes = data['data']['geonames'][0]['population'];
        

        return popRes;
    } catch (e) {
        console.log(e);
    }
    
    
}

export async function getCitiesInCountry(country: string, countryCode: string): Promise<any> {
    // Searches the API for cites in the country and sorts them by population
    var url = 'http://api.geonames.org/searchJSON?q=' + countryCode + '&username=weknowit&featureClass=P&orderby=population&country=' + countryCode;
    try {
        let data = await axios.get(url);
        
        var objects = data['data']['geonames'];

        if (objects.length > 0) {
            return objects;
        } else {
       
        }
    } catch (e) {
        
    }
    
    
}

export async function getCountryCode(country: string): Promise<any> {
    // uses the ninja API to get the country code
    var url = 'https://api.api-ninjas.com/v1/country?name=' + country;
    try {
        
        let res = await axios.get(url, { headers: {'X-Api-Key': API_NINJA_KEY}});
        
        
        var countryCode = res['data'][0]['iso2'];
    
        return countryCode
    } catch (e) {
        
    }
}

