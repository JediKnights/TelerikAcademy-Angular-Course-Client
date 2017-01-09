import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  template: `
    <app-admin-navbar></app-admin-navbar>
    <div class="container col-md-10">
      <router-outlet></router-outlet>
    </div>
    <app-admin-footer></app-admin-footer>
  `
})
export class AdminLayoutComponent {
}
