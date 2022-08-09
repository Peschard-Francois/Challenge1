import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BlockUsersComponent } from "./block-users/block-users.component";


const ROUTES: Routes = [
  { path: 'Menu', component: MenuComponent },
  { path: 'SignUp', component: SignUpComponent },
  { path: 'User-Profil', component: BlockUsersComponent}
];
export { ROUTES };
