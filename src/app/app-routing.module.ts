import { MainMenuComponent } from './main-view/main-menu/main-menu.component';
import { UserListComponent } from './main-view/user-list/user-list.component';
import { MainViewComponent } from './main-view/main-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainMenuComponent, },
  { path: 'users', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
