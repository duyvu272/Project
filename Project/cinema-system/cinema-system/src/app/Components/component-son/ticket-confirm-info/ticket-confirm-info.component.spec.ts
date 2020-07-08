import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketConfirmInfoComponent } from './ticket-confirm-info.component';

describe('TicketConfirmInfoComponent', () => {
  let component: TicketConfirmInfoComponent;
  let fixture: ComponentFixture<TicketConfirmInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketConfirmInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketConfirmInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
