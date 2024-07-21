import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasteleriaCakesComponent } from './pasteleria-cakes/pasteleria-cakes.component';
import { PasteleriaAboutComponent } from './pasteleria-about/pasteleria-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cakes',
    pathMatch: 'full'
  },
  {
    path: 'cakes',
    component: PasteleriaCakesComponent
  },
  {
    path: 'about',
    component: PasteleriaAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
