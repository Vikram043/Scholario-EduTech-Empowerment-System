import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNoticeComponent } from './admin-notice.component';

describe('AdminNoticeComponent', () => {
  let component: AdminNoticeComponent;
  let fixture: ComponentFixture<AdminNoticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminNoticeComponent]
    });
    fixture = TestBed.createComponent(AdminNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
