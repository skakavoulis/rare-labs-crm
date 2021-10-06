import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { ChatService } from './../../../services/chat.service';

@Component({
  selector: 'app-text-window',
  templateUrl: './text-window.component.html',
  styleUrls: ['./text-window.component.scss']
})
export class TextWindowComponent implements AfterViewInit {

  @ViewChild('target') private myScrollContainer?: ElementRef;

  constructor(public chatService: ChatService) {
    this.chatService.messages$
      .pipe()
      .subscribe(msg => {
        this.tryToScrollToBottom();
      });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.tryToScrollToBottom()
    }, 300);
  }

  private tryToScrollToBottom() {
    if (!this.myScrollContainer) { return; }
    this.myScrollContainer.nativeElement.scroll({
      top: this.myScrollContainer.nativeElement.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

}
