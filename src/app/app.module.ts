import { SharedModule } from './shared/shared.module';
import { MenuComponent } from './menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent, MenuComponent
  ],
  imports: [
    //BrowserModule, // this is not required as we have imported Animation module
    BrowserAnimationsModule,
    AppRoutingModule, SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
