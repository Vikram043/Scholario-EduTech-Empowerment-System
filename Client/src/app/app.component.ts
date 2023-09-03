import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'client';
  showNavbar: boolean =true

  constructor(private router: Router) {
   
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.url;
        if (currentRoute === '/admin/dashboard') {
          this.showNavbar = false;
        } else {
          this.showNavbar = true;
        }
      }
    });
  }
  ngOnInit(): void {
    initFlowbite();
  }
}
