import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PublicModule } from './public/public.module';
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';

import { ErrorHandler } from './shared/handlers/error-handler';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    CoreModule,
    SharedModule,
    PublicModule,
    AdminModule
  ],
  providers: [ErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
