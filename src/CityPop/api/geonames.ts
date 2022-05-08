export async function searchCity(city: string ): Promise<any> {
    // Searches the API for a city
    var url = 'http://api.geonames.org/searchJSON?q=' + city + '&username=weknowit&maxRows=1';
    try {
        let res = await fetch(url);
        let data = await res.json();
        var cityRes = data['geonames'][0]['name']
        return cityRes;
        
        

    } catch (e) {
        
    }
    
    
}

export async function getCityPopulation(city: string ): Promise<any> {
    // Searches the API for a city
    var url = 'http://api.geonames.org/searchJSON?name=' + city + '&username=weknowit&maxRows=1';
    try {
        let res = await fetch(url);
        let data = await res.json();
        var popRes = data['geonames'][0]['population'];
        return popRes

    } catch (e) {
        
    }
    
    
}
