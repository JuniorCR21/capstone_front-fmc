import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  title = '';
  banner = '';
  rutas = {
    '/servicios': 'Servicios',
    '/nosotros': 'Nosotros',
    '/capacitaciones': 'Capacitaciones',
    '/contacto': 'Contacto',
  };
  imgs = {
    '/servicios': 'banner bannerServices',
    '/nosotros': 'banner bannerAbout',
    '/capacitaciones': 'banner bannerTraining',
    '/contacto': 'banner bannerContact',
  }

  constructor() {}

  ngOnInit(): void {
    this.title = this.rutas[location.pathname];
    this.banner = this.imgs[location.pathname];
  }
}
