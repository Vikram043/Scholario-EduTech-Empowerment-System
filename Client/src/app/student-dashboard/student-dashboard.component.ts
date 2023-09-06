import { Component } from '@angular/core';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent {
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
