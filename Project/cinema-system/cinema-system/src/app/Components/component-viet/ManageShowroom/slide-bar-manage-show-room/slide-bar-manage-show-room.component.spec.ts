import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideBarManageShowRoomComponent } from './slide-bar-manage-show-room.component';

describe('SlideBarManageShowRoomComponent', () => {
  let component: SlideBarManageShowRoomComponent;
  let fixture: ComponentFixture<SlideBarManageShowRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideBarManageShowRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideBarManageShowRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
