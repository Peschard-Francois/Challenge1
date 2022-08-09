import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BlockComponentComponent } from './block-component/block-component.component';
import { BlockUsersComponent } from './block-users/block-users.component';
import {FormsModule} from "@angular/forms";
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    BlockComponentComponent,
    BlockUsersComponent,
    MenuComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
