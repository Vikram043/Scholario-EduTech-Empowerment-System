import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-attendance',
  templateUrl: './admin-attendance.component.html',
  styleUrls: ['./admin-attendance.component.css']
})
export class AdminAttendanceComponent {
  isSidebarVisible: boolean = true;

  ngOnInit(): void {
 
  }
  logout() {
    console.log('hi')
  }
  

  toggleSidebar() {
    // Toggle the sidebar visibility
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
