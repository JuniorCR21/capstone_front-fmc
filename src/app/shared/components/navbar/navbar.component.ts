import { Component, Input, OnInit } from '@angular/core';

import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  ruta = '';
  @Input() set path(_path: any){
    this.ruta = _path;
  }

  constructor(private router: Router) { }


  ngOnInit(): void {
  }
}
