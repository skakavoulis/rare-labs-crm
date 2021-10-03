import { Subscription } from 'rxjs';
import { ChatService } from './../../../services/chat.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-text-window',
  templateUrl: './text-window.component.html',
  styleUrls: ['./text-window.component.scss']
})
export class TextWindowComponent {

  constructor(public chatService: ChatService) { }

}
