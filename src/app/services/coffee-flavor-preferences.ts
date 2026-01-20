import { CoffeeFlavorProfilesType } from '../models/CoffeeFlavorPreferences/coffee-flavor-profiles-type';

export async function getCoffeeFlavorProfiles(): Promise<CoffeeFlavorProfilesType[]> {
  const response = await fetch('../../static-data/coffee-flavor-preferences-coffee-flavor-profiles-type.json');
  if (!response.ok) {
    return Promise.resolve([]);
  }
  return response.json();
}
