import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@nx-ng-fme/layout';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    LayoutModule,
    RouterModule.forRoot(
      [
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
      ]
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}
