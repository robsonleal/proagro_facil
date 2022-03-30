import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CroplossListComponent } from './croploss-list.component';

describe('CroplossListComponent', () => {
  let component: CroplossListComponent;
  let fixture: ComponentFixture<CroplossListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CroplossListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CroplossListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
