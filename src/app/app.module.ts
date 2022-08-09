import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockComponentComponent } from './block-component/block-component.component';
import { BlockUsersComponent } from './block-users/block-users.component';
import {FormsModule} from "@angular/forms";

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    BlockComponentComponent,
    BlockUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
