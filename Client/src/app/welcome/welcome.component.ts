import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  userType: string = ''; 
  userTypeIcon: string = '';
  
  constructor(private route: ActivatedRoute) { }


    
  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.userType = data['userType'] || '';
      // Set the userTypeIcon based on userType
      if (this.userType === 'Student') {
        this.userTypeIcon = 'fas fa-user-graduate'; // FontAwesome icon for Student
      } else if (this.userType === 'Admin') {
        this.userTypeIcon = 'fas fa-user-cog'; // FontAwesome icon for Admin
      } else if (this.userType === 'Instructor') {
        this.userTypeIcon = 'fas fa-chalkboard-teacher'; // FontAwesome icon for Instructor
      }
    });
  }
}
