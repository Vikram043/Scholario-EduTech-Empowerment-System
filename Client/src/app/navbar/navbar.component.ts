// src/app/navbar/navbar.component.ts
import { Component } from '@angular/core';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private navbarService: NavbarService) {}

  isFixedNavbar = true;
  toggleNavbar() {
    this.navbarService.toggleNavbar();
  }

  isNavbarVisible() {
    return this.navbarService.isNavbarVisible();
  }
}
