import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { InventoryPageComponent } from './inventory-page/inventory-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'landing-page', loadChildren: () => import('./landing-page/landing-page.routes').then(m => m.routes), data: { text: 'Landing-Page' } },
  { path: 'user-dashboard', component: UserDashboardComponent, data: { text: 'User-Dashboard' } },
  { path: 'inventory-page', component: InventoryPageComponent, data: { text: 'Inventory-Page' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
