import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  path = "";
  bannerActive:Boolean=false;
  constructor(private router:Router){
  }

  ngOnInit(): void {
    this.router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        this.path= location.pathname
        if(location.pathname == '/' || location.pathname == '/login'){
          this.bannerActive = false;
        }else{
          this.bannerActive=true;
        }
      }
    });
  }

}
