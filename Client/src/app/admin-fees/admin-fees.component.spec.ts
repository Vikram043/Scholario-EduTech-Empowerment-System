import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFeesComponent } from './admin-fees.component';

describe('AdminFeesComponent', () => {
  let component: AdminFeesComponent;
  let fixture: ComponentFixture<AdminFeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminFeesComponent]
    });
    fixture = TestBed.createComponent(AdminFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
