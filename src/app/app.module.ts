import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IConfig, NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ChatComponent } from './main-view/chat/chat.component';
import { InputBarComponent } from './main-view/chat/input-bar/input-bar.component';
import { TextWindowComponent } from './main-view/chat/text-window/text-window.component';
import { MainMenuComponent } from './main-view/main-menu/main-menu.component';
import { MainViewComponent } from './main-view/main-view.component';
import { UserCardComponent } from './main-view/user-card/user-card.component';
import { UserListComponent } from './main-view/user-list/user-list.component';
import { UserUpdateComponent } from './main-view/user-update/user-update.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainViewComponent,
    FooterComponent,
    MainMenuComponent,
    UserListComponent,
    UserCardComponent,
    UserUpdateComponent,
    ChatComponent,
    TextWindowComponent,
    InputBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot(maskConfigFunction),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
