import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('@nx-ng-fme/home').then((m) => m.HomeComponent),
  },
  {
    path: 'products',
    loadComponent: () => import('@nx-ng-fme/products').then((m) => m.ProductsComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('@nx-ng-fme/login').then((m) => m.LoginComponent),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
