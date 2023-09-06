import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-instructor-sidebar',
  templateUrl: './instructor-sidebar.component.html',
  styleUrls: ['./instructor-sidebar.component.css']
})
export class InstructorSidebarComponent {
  @Input() sidebarVisible: boolean = true;
}
