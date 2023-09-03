import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { InstructorRegistrationComponent } from './instructor-registration/instructor-registration.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { InstructorLoginComponent } from './instructor-login/instructor-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NavbarService } from './navbar/navbar.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    WelcomeComponent,
    StudentRegistrationComponent,
    AdminRegistrationComponent,
    InstructorRegistrationComponent,
    StudentLoginComponent,
    InstructorLoginComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
