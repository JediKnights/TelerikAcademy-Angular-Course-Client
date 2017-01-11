import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { AboutComponent } from './components/about/about.component';
import { PagesComponent } from './pages.component';

// import { PagesRoutingModule } from './pages-routing.module';

import { pagesRouting } from './pages.routes';

@NgModule({
  imports: [
    // PagesRoutingModule,
    pagesRouting,
    SharedModule
  ],
  declarations: [
    AboutComponent,
    PagesComponent,
  ]
})
export class PagesModule {
}
