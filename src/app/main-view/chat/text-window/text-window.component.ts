import { Subscription } from 'rxjs';
import { ChatService } from './../../../services/chat.service';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-text-window',
  templateUrl: './text-window.component.html',
  styleUrls: ['./text-window.component.scss']
})
export class TextWindowComponent {

  @ViewChild('target') private myScrollContainer?: ElementRef;

  constructor(public chatService: ChatService) {
    this.chatService.messages$
      .pipe()
      .subscribe(msg => {
        if (!this.myScrollContainer) { return; }
        this.myScrollContainer.nativeElement.scroll({
          top: this.myScrollContainer.nativeElement.scrollHeight,
          left: 0,
          behavior: 'smooth'
        });
      });
  }



}
