import { useCallback, useEffect, useState } from 'react';
import { CoffeeFlavorProfilesType } from '../models/CoffeeFlavorPreferences/coffee-flavor-profiles-type';
import { getCoffeeFlavorProfiles } from '../services/coffee-flavor-preferences';

export const useGetCoffeeFlavorProfiles = () => {
  const [coffeeFlavorProfiles, setCoffeeFlavorProfiles] = useState<CoffeeFlavorProfilesType[]>([]);

  const requestCoffeeFlavorProfiles = useCallback(() => {
    let ignore = false;
    getCoffeeFlavorProfiles()
      .then((data) => {
        if (!ignore) {
          setCoffeeFlavorProfiles(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestCoffeeFlavorProfiles();
  }, [requestCoffeeFlavorProfiles]);

  return { requestCoffeeFlavorPreferencesCoffeeFlavorProfiles: requestCoffeeFlavorProfiles, coffeeFlavorPreferencesCoffeeFlavorProfiles: coffeeFlavorProfiles, setCoffeeFlavorPreferencesCoffeeFlavorProfiles: setCoffeeFlavorProfiles };
}
