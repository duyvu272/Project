import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShowroomComponent } from './add-showroom.component';

describe('AddShowroomComponent', () => {
  let component: AddShowroomComponent;
  let fixture: ComponentFixture<AddShowroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShowroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShowroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
