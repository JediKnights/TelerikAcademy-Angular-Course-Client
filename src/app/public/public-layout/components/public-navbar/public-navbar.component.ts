import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-public-navbar',
  templateUrl: './public-navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicNavbarComponent {
  title = 'Mission Mars';
}
