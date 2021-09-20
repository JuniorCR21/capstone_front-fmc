import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:' ', redirectTo:'', pathMatch:'full'
  },
  {
    path:'', component: HomeComponent
  },
  {
    path:'nosotros',
    loadChildren: () => import('./pages/about/about.module').then(mod => mod.AboutModule)
  },
  {
    path:'contacto',
    loadChildren: () => import('./pages/contact/contact.module').then(mod => mod.ContactModule)
  },
  {
    path:'servicios',
    loadChildren: () => import('./pages/services/services.module').then(mod => mod.ServicesModule)
  },
  {
    path:'capacitaciones',
    loadChildren: () => import('./pages/training/training.module').then(mod => mod.TrainingModule)
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
