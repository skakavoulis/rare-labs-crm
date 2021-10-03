import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainViewComponent } from './main-view/main-view.component';
import { FooterComponent } from './footer/footer.component';
import { MainMenuComponent } from './main-view/main-menu/main-menu.component';
import { UserListComponent } from './main-view/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserCardComponent } from './main-view/user-card/user-card.component';
import { UserUpdateComponent } from './main-view/user-update/user-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainViewComponent,
    FooterComponent,
    MainMenuComponent,
    UserListComponent,
    UserCardComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
