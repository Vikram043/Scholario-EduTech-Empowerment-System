import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-teacher',
  templateUrl: './admin-teacher.component.html',
  styleUrls: ['./admin-teacher.component.css']
})
export class AdminTeacherComponent implements OnInit{
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
