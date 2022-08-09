import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockComponentComponent } from './block-component/block-component.component';
import { BlockUsersComponent } from './block-users/block-users.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponentComponent,
    BlockUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
