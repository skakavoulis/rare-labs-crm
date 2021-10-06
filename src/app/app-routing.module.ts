import { ChatComponent } from './main-view/chat/chat.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainMenuComponent } from './main-view/main-menu/main-menu.component';
import { UserCardComponent } from './main-view/user-card/user-card.component';
import { UserListComponent } from './main-view/user-list/user-list.component';
import { UserUpdateComponent } from './main-view/user-update/user-update.component';

const routes: Routes = [
  { path: '', component: MainMenuComponent, },
  { path: 'users', component: UserListComponent },
  // { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: UserCardComponent },
  { path: 'user/update/:id', component: UserUpdateComponent },
  { path: 'chat', component: ChatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
