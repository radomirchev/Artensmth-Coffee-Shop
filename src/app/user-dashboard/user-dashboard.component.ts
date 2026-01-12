import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGX_CALENDAR_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxIconComponent } from '@infragistics/igniteui-angular';
import { IgxPieChartModule } from 'igniteui-angular-charts';
import { Subject, takeUntil } from 'rxjs';
import { CoffeeFlavorProfilesType } from '../models/coffee-flavor-preferences/coffee-flavor-profiles-type';
import { CoffeeFlavorPreferencesService } from '../services/coffee-flavor-preferences.service';

@Component({
  selector: 'app-user-dashboard',
  imports: [IGX_CALENDAR_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxPieChartModule, IgxAvatarComponent, IgxIconComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public recentOrdersListSelectedItem?: string;
  public subscriptionInfoListSelectedItem?: string;
  public date: Date = new Date('10/26/2024 00:00:00');
  public coffeeFlavorPreferencesCoffeeFlavorProfiles: CoffeeFlavorProfilesType[] = [];

  constructor(
    public coffeeFlavorPreferencesService: CoffeeFlavorPreferencesService,
  ) {}


  ngOnInit() {
    this.coffeeFlavorPreferencesService.getCoffeeFlavorProfiles().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.coffeeFlavorPreferencesCoffeeFlavorProfiles = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
