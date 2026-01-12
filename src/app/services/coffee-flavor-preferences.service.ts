import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CoffeeFlavorProfilesType } from '../models/coffee-flavor-preferences/coffee-flavor-profiles-type';
import { CoffeeFlavorPreferences } from '../static-data/coffee-flavor-preferences';

@Injectable({
  providedIn: 'root'
})
export class CoffeeFlavorPreferencesService {
  public getCoffeeFlavorProfiles(): Observable<CoffeeFlavorProfilesType[]> {
    return of(CoffeeFlavorPreferences['CoffeeFlavorProfilesType']);
  }
}
