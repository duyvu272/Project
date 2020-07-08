import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryTicketComponent } from './history-ticket.component';

describe('HistoryTicketComponent', () => {
  let component: HistoryTicketComponent;
  let fixture: ComponentFixture<HistoryTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
