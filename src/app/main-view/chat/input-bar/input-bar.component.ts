import { ChatService } from './../../../services/chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-bar',
  templateUrl: './input-bar.component.html',
  styleUrls: ['./input-bar.component.scss']
})
export class InputBarComponent implements OnInit {

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
  }

  sendMessage(sender: string, text: string) {
    this.chatService.sendMessage({
      sender,
      text,
      timestamp: new Date()
    });
  }

}
