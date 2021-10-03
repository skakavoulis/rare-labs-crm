import { filter, pipe, subscribeOn, Subscription, tap } from 'rxjs';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { ChatService, ChatMessage } from './../services/chat.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chat-notifications',
  templateUrl: './chat-notifications.component.html',
  styleUrls: ['./chat-notifications.component.scss']
})
export class ChatNotificationsComponent implements OnInit {

  private chatIsActive = false;

  messages: ChatMessage[] = [];

  constructor(private chat: ChatService, private router: Router) {
    router.events
      .pipe(filter(event => event instanceof NavigationStart),
    ).subscribe((event: any) => {
      this.chatIsActive = event.url === '/chat';
    });
  }

  ngOnInit(): void {
    this.chat.messages$.subscribe(msg => {
      if (!this.chatIsActive) {
        this.messages.push(msg);
        this.autoRemove(msg)
      }
    });
    this.chat.connect();
  }

  private autoRemove(msg: ChatMessage) {
    setTimeout(() => {
      const index = this.messages.indexOf(msg);
      if (index > -1) {
        this.messages.splice(index, 1);
      }
    }, environment.notificationsAutoRemoveTicks);
  }

}
