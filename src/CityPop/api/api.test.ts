import * as API from './geonames';


test('Get the country code from sweden', async () => {
    
    const cc = await API.getCountryCode("Sweden");
    
    expect(cc).toBe("SE");
    
    
});

test('If the country is not fully written out, it should get the closest country alphabetically. This case: Afg -> afghanistan (AF)', async () => {

    
    const cc = await API.getCountryCode("Afg");
    
    expect(cc).toBe("AF");
    
    
});