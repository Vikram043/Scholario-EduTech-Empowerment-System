import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { InstructorLoginComponent } from './instructor-login/instructor-login.component';
import { InstructorRegistrationComponent } from './instructor-registration/instructor-registration.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'student', component: WelcomeComponent, data: { userType: 'Student' } },
  { path: 'instructor', component: WelcomeComponent, data: { userType: 'Instructor' } },
  { path: 'admin', component: WelcomeComponent, data: { userType: 'Admin' } },
  { path: 'Student/register', component: StudentRegistrationComponent },
  { path: 'Student/login', component: StudentLoginComponent },
  { path: 'Instructor/register', component: InstructorRegistrationComponent },
  { path: 'Instructor/login', component: InstructorLoginComponent },
  { path: 'Admin/register', component: AdminRegistrationComponent },
  { path: 'Admin/login', component: AdminLoginComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent }
  // Add more routes for other pages if needed
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
