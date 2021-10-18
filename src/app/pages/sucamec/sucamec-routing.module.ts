import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SucamecComponent } from './sucamec.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component:SucamecComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SucamecRoutingModule { }
