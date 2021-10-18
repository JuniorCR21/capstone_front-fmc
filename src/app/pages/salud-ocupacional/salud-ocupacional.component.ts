import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salud-ocupacional',
  templateUrl: './salud-ocupacional.component.html',
  styleUrls: ['./salud-ocupacional.component.css']
})
export class SaludOcupacionalComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goContacto(){
    this.router.navigateByUrl("/contacto")
  }

}
