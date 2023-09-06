import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-fees',
  templateUrl: './admin-fees.component.html',
  styleUrls: ['./admin-fees.component.css']
})
export class AdminFeesComponent {
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
