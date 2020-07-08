import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketCanceledComponent } from './ticket-canceled.component';

describe('TicketCanceledComponent', () => {
  let component: TicketCanceledComponent;
  let fixture: ComponentFixture<TicketCanceledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketCanceledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketCanceledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
