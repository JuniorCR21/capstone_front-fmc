import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  @Input() set path(_path: any){
    this.title = this.rutas[_path];
    this.banner = this.imgs[_path];
  }
  title = '';
  banner = '';
  rutas = {
    '/servicios': 'Servicios',
    '/nosotros': 'Nosotros',
    '/capacitaciones': 'Capacitaciones',
    '/contacto': 'Contacto',
    '/salud-ocupacional': 'Salud Ocupacional',
  };
  imgs = {
    '/servicios': 'banner bannerServices',
    '/nosotros': 'banner bannerAbout',
    '/capacitaciones': 'banner bannerTraining',
    '/contacto': 'banner bannerContact',
    '/salud-ocupacional': 'banner bannerOcupacional',
  }

  constructor(private router:Router) {}
  ngOnInit(): void {

  }
}
