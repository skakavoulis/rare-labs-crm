import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  currentChat = {
    image: 'assets/img/users/user.jpg',
    name: 'Emilio Verdines',
    status: 'Online',
    intro: 'Hi, I deleiver value to companies like you, say hi...',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
