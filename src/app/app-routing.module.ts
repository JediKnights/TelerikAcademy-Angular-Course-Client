import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Eagerly load Public routing module - Uncomment after the pull request (https://github.com/angular/angular/pull/13676) is merged, 
// and set the function getPublicRoutingModule on the empty path ('') loadChildren property
// import { PublicRoutingModule } from './public/public-routing.module';
// export function getPublicRoutingModule() {
//   return PublicRoutingModule;
// }

// import { publicRouting } from './public/public-routing.module';

import { publicRoutes } from './public/public-routing.module';

export const appRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule'
  },
  {
    path: '',
    children: [...publicRoutes]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {}
