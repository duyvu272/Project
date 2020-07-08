import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketBookingInformationComponent } from './ticket-booking-information.component';

describe('TicketBookingInformationComponent', () => {
  let component: TicketBookingInformationComponent;
  let fixture: ComponentFixture<TicketBookingInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketBookingInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketBookingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
