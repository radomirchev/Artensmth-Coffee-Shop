import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IGX_NAVBAR_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-landing-page',
  imports: [IGX_NAVBAR_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent, IgxButtonDirective, RouterOutlet, RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {}
