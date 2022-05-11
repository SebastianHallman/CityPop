import * as API from './geonames';


test('Get the country code from sweden', async () => {
    
    const cc = await API.getCountryCode("Sweden");
    
    expect(cc).toBe("SE");
    
    
}, 5000);