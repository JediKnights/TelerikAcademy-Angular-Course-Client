import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { UsersModule } from './users/users.module';

import { ElectricalDevicesModule } from './electrical-devices/electrical-devices.module'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    UsersModule,
    AppRoutingModule,
    ElectricalDevicesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
