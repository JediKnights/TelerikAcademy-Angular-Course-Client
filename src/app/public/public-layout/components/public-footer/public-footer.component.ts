import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  moduleId: 'module.id',
  selector: 'app-public-footer',
  templateUrl: './public-footer.component.html',
  styleUrls: ['./public-footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicFooterComponent {
}
