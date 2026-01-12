import { Component } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconComponent } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-landing-page-content',
  imports: [IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxButtonDirective, IgxAvatarComponent, IgxIconComponent],
  templateUrl: './landing-page-content.component.html',
  styleUrls: ['./landing-page-content.component.scss']
})
export class LandingPageContentComponent {
  public starterPlanBenefitsSelectedItem?: string;
  public enthusiastPlanBenefitsSelectedItem?: string;
  public connoisseurPlanBenefitsSelectedItem?: string;
}
