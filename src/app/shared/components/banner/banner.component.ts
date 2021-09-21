import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  title = '';
  rutas = {
    '/servicios': 'Servicios',
    '/nosotros': 'Nosotros',
    '/capacitaciones': 'Capacitaciones',
    '/contacto': 'Contacto',
  };

  constructor() {}

  ngOnInit(): void {
    this.title = this.rutas[location.pathname];
  }
}
