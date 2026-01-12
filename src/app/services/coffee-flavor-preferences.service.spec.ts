import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CoffeeFlavorPreferencesService } from './coffee-flavor-preferences.service';

describe('CoffeeFlavorPreferencesService', () => {
  let service: CoffeeFlavorPreferencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(CoffeeFlavorPreferencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
