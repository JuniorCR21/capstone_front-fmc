import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }
  

  ngOnInit(): void {
  }

  inicio() {
    this.router.navigate(['/inicio']);
  }

  nosotros() {
    this.router.navigate(['/nosotros']);
  }

  servicios() {
    this.router.navigate(['/servicios']);
  }

  capacitaciones() {
    this.router.navigate(['/capacitaciones']);
  }

  contactanos() {
    this.router.navigate(['/contacto']);
  }
  
}
