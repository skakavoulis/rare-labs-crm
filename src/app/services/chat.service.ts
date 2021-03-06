import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment } from 'src/environments/environment';

import { LocalStoragePersist } from '../decorators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket$?: WebSocketSubject<ChatMessage> = undefined;
  private subscription = new Subscription();

  @LocalStoragePersist()
  messages?: ChatMessage[];
  messages$ = new Subject<ChatMessage>();

  connect(): void {
    if (!this.socket$ || this.socket$.closed) {
      this.socket$ = this.getNewWebSocket();
      this.socket$
        .subscribe(msg => {
          const msgs = this.messages || [];
          this.messages = [...msgs, msg];
          this.messages$.next(msg);
        })
        .add(this.subscription);
    }
  }


  sendMessage(msg: ChatMessage) {
    this.socket$?.next(msg);
  }

  close() {
    this.subscription.unsubscribe();
    this.socket$?.complete();
  }

  private getNewWebSocket(): WebSocketSubject<ChatMessage> {
    return webSocket(environment.wsUrl);
  }
}

export interface ChatMessage {
  sender: string;
  text: string;
  timestamp: Date
}