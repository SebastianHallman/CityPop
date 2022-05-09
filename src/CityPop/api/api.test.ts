import { getCountryCode } from './geonames';




test('Get the country code from sweden', () => {
    expect(getCountryCode("Sweden")).toBe("SE")
});