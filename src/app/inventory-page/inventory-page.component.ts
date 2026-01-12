import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgcFormsModule, IGX_CARD_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxBadgeComponent, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent } from '@infragistics/igniteui-angular';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-inventory-page',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxIconButtonDirective, IgcFormsModule, IgxBadgeComponent, IgxIconComponent, IgxButtonDirective, FormsModule],
  templateUrl: './inventory-page.component.html',
  styleUrls: ['./inventory-page.component.scss']
})
export class InventoryPageComponent {
  public stockLevelListSelectedItem?: string;
  public categoryListSelectedItem?: string;
  public value = '1';
  public ngModel = 4;
  public ngModel1 = 5;
  public ngModel2 = 4;
  public ngModel3 = 4;
  public ngModel4 = 4;
  public ngModel5 = 5;
}
