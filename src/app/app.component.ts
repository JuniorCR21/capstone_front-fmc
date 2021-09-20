import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  bannerActive = false;
  constructor(private router:Router){
  }


  ngOnInit(): void {
    console.log(location.pathname)
    if(location.pathname != '/'){
      this.bannerActive = true;
    }
  }


}
