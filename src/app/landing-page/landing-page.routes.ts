import { Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page.component';
import { LandingPageContentComponent } from './landing-page-content/landing-page-content.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent, children: [
      { path: '', redirectTo: 'landing-page-content', pathMatch: 'full' },
      { path: 'landing-page-content', component: LandingPageContentComponent, data: { text: 'Landing-Page-Content' } },
      { path: 'register-page', component: RegisterPageComponent, data: { text: 'Register-Page' } },
      { path: 'login-page', component: LoginPageComponent, data: { text: 'Login-Page' } },
    ]
  },
];
