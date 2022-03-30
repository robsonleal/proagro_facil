import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCroplossComponent } from './add-croploss.component';

describe('AddCroplossComponent', () => {
  let component: AddCroplossComponent;
  let fixture: ComponentFixture<AddCroplossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCroplossComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCroplossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
