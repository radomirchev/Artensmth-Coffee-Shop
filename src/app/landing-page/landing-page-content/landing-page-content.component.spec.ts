import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonDirective, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IGX_LIST_DIRECTIVES } from '@infragistics/igniteui-angular';
import { LandingPageContentComponent } from './landing-page-content.component';

describe('LandingPageContentComponent', () => {
  let component: LandingPageContentComponent;
  let fixture: ComponentFixture<LandingPageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageContentComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IgxButtonDirective, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IGX_LIST_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
