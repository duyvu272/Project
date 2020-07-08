import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListShowRoomComponent } from './list-show-room.component';

describe('ListShowRoomComponent', () => {
  let component: ListShowRoomComponent;
  let fixture: ComponentFixture<ListShowRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListShowRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListShowRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
