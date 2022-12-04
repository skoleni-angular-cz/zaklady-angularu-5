export interface CzechAddressDto {
  houseNumber: string;
  postalCode: string;
  city: string;

  district?: string;
  orientationNumber?: string;
  street?: string;
}

export function formatStreetAndNumber(address: CzechAddressDto | undefined): string {
  if (!address) {
    return '';
  }
  else {
    let out = '';

    if (address.street) {
      out += `${address.street} `;
    }
    else if (address.city) {
      out += `${address.city} `;
    }

    if (address.houseNumber) out += `${address.houseNumber}`;
    if (address.houseNumber && address.orientationNumber) out += '/';
    if (address.orientationNumber) out += address.orientationNumber;

    return out;
  }
}

export function formatZipAndCity(address: CzechAddressDto | undefined) {
  if (!address) {
    return '';
  }
  else {
    let out = `${address.postalCode} ${address.city}`;

    if (address.district) {
      out += ` - ${address.district}`;
    }

    return out;
  }
}

export function formatAddress(address: CzechAddressDto | undefined): string {
  return (
    `${formatStreetAndNumber(address)}, ${formatZipAndCity(address)}`
  );
}
