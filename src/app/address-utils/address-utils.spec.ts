import {CzechAddressDto, formatAddress} from "./address-utils";

describe('address utils', () => {

  it('should format a city address properly', () => {
    const address: CzechAddressDto = {
      street: 'Šikmá',
      houseNumber: '5',
      city: 'Kroměříž',
      postalCode: '10000',
    };

    const formatted = formatAddress(address);

    expect(formatted).toEqual('Šikmá 5, 10000 Kroměříž');
  });

  it('should format a village address properly', () => {
    const address: CzechAddressDto = {
      houseNumber: '5',
      city: 'Špindlerův mlýn',
      postalCode: '10000',
    };

    const formatted = formatAddress(address);

    expect(formatted).toEqual('Špindlerův mlýn 5, 10000 Špindlerův mlýn');
  });

  it('should format a Prague address properly', () => {
    const address: CzechAddressDto = {
      street: 'Dlouhá',
      houseNumber: '5',
      orientationNumber: '1',
      city: 'Praha',
      postalCode: '10000',
      district: 'Staré město'
    };

    const formatted = formatAddress(address);

    expect(formatted).toEqual('Dlouhá 5/1, 10000 Praha - Staré město');
  });

});
