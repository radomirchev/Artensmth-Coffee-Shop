import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_LIST_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_CARD_DIRECTIVES, IgcFormsModule, IgxBadgeComponent, IgxIconButtonDirective, IgxIconComponent, IgxButtonDirective } from '@infragistics/igniteui-angular';
import { InventoryPageComponent } from './inventory-page.component';

describe('InventoryPageComponent', () => {
  let component: InventoryPageComponent;
  let fixture: ComponentFixture<InventoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryPageComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_LIST_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_CARD_DIRECTIVES, IgcFormsModule, IgxBadgeComponent, IgxIconButtonDirective, IgxIconComponent, IgxButtonDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
