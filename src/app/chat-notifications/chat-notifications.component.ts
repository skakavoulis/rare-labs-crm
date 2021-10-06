import { filter, pipe, subscribeOn, Subscription, tap } from 'rxjs';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { ChatService, ChatMessage } from './../services/chat.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-chat-notifications',
  templateUrl: './chat-notifications.component.html',
  styleUrls: ['./chat-notifications.component.scss']
})
export class ChatNotificationsComponent implements OnInit {

  private chatIsActive = false;

  messages: ChatMessage[] = [];

  constructor(
    private chat: ChatService,
    private router: Router,
    private snackbar: MatSnackBar) {
    router.events
      .pipe(filter(event => event instanceof NavigationStart),
    ).subscribe((event: any) => {
      this.chatIsActive = event.url === '/chat';
    });
  }

  ngOnInit(): void {
    this.chat.messages$.subscribe((msg: ChatMessage) => {
      if (!this.chatIsActive) {
        this.snackbar.open(`${msg.sender} has sent you a message`, 'dismiss',
          {
            duration: 10000,
            politeness: 'assertive',
            verticalPosition: 'top',
            horizontalPosition: 'right'
          });
      }
    });
    this.chat.connect();
  }

}
