import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationConfirmComponent } from './information-confirm.component';

describe('InformationConfirmComponent', () => {
  let component: InformationConfirmComponent;
  let fixture: ComponentFixture<InformationConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
