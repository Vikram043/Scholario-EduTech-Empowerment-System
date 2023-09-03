// src/app/navbar.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private showNavbar = true;

  toggleNavbar(): void {
    this.showNavbar = !this.showNavbar;
  }

  isNavbarVisible(): boolean {
    return this.showNavbar;
  }
}
