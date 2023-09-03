import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegistrationComponent } from './admin-registration.component';

describe('AdminRegistrationComponent', () => {
  let component: AdminRegistrationComponent;
  let fixture: ComponentFixture<AdminRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRegistrationComponent]
    });
    fixture = TestBed.createComponent(AdminRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
