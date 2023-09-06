import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-notice',
  templateUrl: './admin-notice.component.html',
  styleUrls: ['./admin-notice.component.css']
})
export class AdminNoticeComponent {
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
