import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  moduleId: 'module.id',
  selector: 'app-admin-footer',
  templateUrl: './admin-footer.component.html',
  styleUrls: ['./admin-footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminFooterComponent {
}
