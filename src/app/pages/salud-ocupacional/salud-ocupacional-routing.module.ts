import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaludOcupacionalComponent } from './salud-ocupacional.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component:SaludOcupacionalComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaludOcupacionalRoutingModule { }
