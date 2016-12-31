import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [{
  path: '',
  redirectTo: '/users',
  pathMatch: 'full'
},
{
  path: 'electrical-devices',
  redirectTo: '/electrical-devices',
  pathMatch: 'full'
}];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
