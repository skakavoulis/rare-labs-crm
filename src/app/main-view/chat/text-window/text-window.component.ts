import { Subscription } from 'rxjs';
import { ChatService } from './../../../services/chat.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-text-window',
  templateUrl: './text-window.component.html',
  styleUrls: ['./text-window.component.scss']
})
export class TextWindowComponent implements OnInit, OnDestroy {

  private subscription = new Subscription();
  messages: any[] = [];

  constructor(public chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.messages$
      .subscribe(msg => {
        this.messages.push(msg);
      })
      .add(this.subscription);
    this.chatService.connect();
  }

  ngOnDestroy(): void {
    this.chatService.close();
    this.subscription.unsubscribe();
  }
}