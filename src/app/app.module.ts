import { OverlayContainer } from '@angular/cdk/overlay';
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
import { NotificationsComponent } from './notifications/notifications.component';
import { ChatNotificationsComponent } from './chat-notifications/chat-notifications.component';

import { TopInfoContentComponent } from './theme/components/top-info-content/top-info-content.component';
import { SidenavComponent } from './theme/components/sidenav/sidenav.component';
import { VerticalMenuComponent } from './theme/components/menu/vertical-menu/vertical-menu.component';
import { HorizontalMenuComponent } from './theme/components/menu/horizontal-menu/horizontal-menu.component';
import { FlagsMenuComponent } from './theme/components/flags-menu/flags-menu.component';
import { FullScreenComponent } from './theme/components/fullscreen/fullscreen.component';
import { ApplicationsComponent } from './theme/components/applications/applications.component';
import { MessagesComponent } from './theme/components/messages/messages.component';
import { UserMenuComponent } from './theme/components/user-menu/user-menu.component';
import { FavoritesComponent } from './theme/components/favorites/favorites.component';
import { AppSettings } from './app.settings';
import { PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { CustomOverlayContainer } from './theme/utils/custom-overlay-container';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
  suppressScrollX: true
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
    InputBarComponent,
    NotificationsComponent,
    ChatNotificationsComponent,
    TopInfoContentComponent,
    SidenavComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent,
    FlagsMenuComponent,
    FullScreenComponent,
    ApplicationsComponent,
    MessagesComponent,
    UserMenuComponent,
    FavoritesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot(maskConfigFunction),
  ],
  providers: [AppSettings,
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
    { provide: OverlayContainer, useClass: CustomOverlayContainer }],
  bootstrap: [AppComponent]
})
export class AppModule { }
