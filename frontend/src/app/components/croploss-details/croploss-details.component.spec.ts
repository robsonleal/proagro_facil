import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CroplossDetailsComponent } from './croploss-details.component';

describe('CroplossDetailsComponent', () => {
  let component: CroplossDetailsComponent;
  let fixture: ComponentFixture<CroplossDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CroplossDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CroplossDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
