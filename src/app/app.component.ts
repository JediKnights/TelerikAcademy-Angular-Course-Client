import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-dark bg-inverse">
    <a class="navbar-brand" href="#">{{title}}</a>
  </nav>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Angular 2 Client';
  subtitle = 'Users List';
}
