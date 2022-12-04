import { CzechAddressDto, formatStreetAndNumber, formatZipAndCity } from "./address-utils";

describe('address utils', () => {

  it('should format fully filled address correctly', () => {
    const address: CzechAddressDto = {
      houseNumber: '1000',
      postalCode: '10000',
      city: 'Praha',

      // nonmandatory
      district: 'Vinohrady',
      orientationNumber: '2',
      street: 'Příčná',
    };

    expect(formatStreetAndNumber(address)).toEqual(
      `${address.street} ${address.houseNumber}/${address.orientationNumber}`
    );
    expect(formatZipAndCity(address)).toEqual(
      `${address.postalCode} ${address.city} - ${address.district}`
    );
  });

  it('should format minimal address correctly', () => {
    const address: CzechAddressDto = {
      houseNumber: '5',
      postalCode: '10000',
      city: 'Kotěhůlky',
    };

    expect(formatStreetAndNumber(address)).toEqual(
      `${address.city} ${address.houseNumber}`
    );
    expect(formatZipAndCity(address)).toEqual(
      `${address.postalCode} ${address.city}`
    );
  });

});
