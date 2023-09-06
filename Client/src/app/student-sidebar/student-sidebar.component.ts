import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-student-sidebar',
  templateUrl: './student-sidebar.component.html',
  styleUrls: ['./student-sidebar.component.css']
})
export class StudentSidebarComponent {
  @Input() sidebarVisible: boolean = true;
}
