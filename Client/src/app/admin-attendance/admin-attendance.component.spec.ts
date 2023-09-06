import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAttendanceComponent } from './admin-attendance.component';

describe('AdminAttendanceComponent', () => {
  let component: AdminAttendanceComponent;
  let fixture: ComponentFixture<AdminAttendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAttendanceComponent]
    });
    fixture = TestBed.createComponent(AdminAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
