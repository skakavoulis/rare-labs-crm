import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, switchAll, tap, Subscription } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { environment } from 'src/environments/environment';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket$?: WebSocketSubject<ChatMessage> = undefined;
  private subscription = new Subscription();

  public messages$ = new Subject<ChatMessage>();

  public connect(): void {
    if (!this.socket$ || this.socket$.closed) {
      this.socket$ = this.getNewWebSocket();
      this.socket$
        .subscribe(msg => {
          this.messages$.next(msg);
        })
        .add(this.subscription);
    }
  }

  private getNewWebSocket(): WebSocketSubject<ChatMessage> {
    return webSocket(environment.wsUrl);
  }

  sendMessage(msg: ChatMessage) {
    this.socket$?.next(msg);
  }

  close() {
    this.subscription.unsubscribe();
    this.socket$?.complete();
  }
}

export interface ChatMessage {
  sender: string;
  text: string;
  timestamp: Date
}